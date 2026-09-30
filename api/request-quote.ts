import nodemailer from "nodemailer"
import type {
  QuoteRequestPayload,
  QuoteService,
  QuoteLocation,
} from "../src/constants/request-quote.const"
import { validateQuoteRequest } from "../src/utils/request-quote-validation"

// Vercel injects secrets in deployed environments. Locally, `vercel dev`
// does not always forward a manually created .env.local to API functions.
if (process.env.NODE_ENV !== "production" && !process.env.HCAPTCHA_SECRET_KEY) {
  try {
    const loadEnvFile = (
      process as NodeJS.Process & { loadEnvFile?: (path: string) => void }
    ).loadEnvFile
    loadEnvFile?.(".env.local")
  } catch (error) {
    const code = (error as NodeJS.ErrnoException).code
    if (code !== "ENOENT") {
      console.warn("Could not load local environment variables.")
    }
  }
}

interface ApiRequest {
  method?: string
  body?: unknown
  headers: Record<string, string | string[] | undefined>
  socket?: { remoteAddress?: string }
}

interface ApiResponse {
  status: (statusCode: number) => ApiResponse
  json: (body: unknown) => void
  setHeader: (name: string, value: string | string[]) => void
}

interface HCaptchaResponse {
  success: boolean
  hostname?: string
  "error-codes"?: string[]
}

const parseBody = (body: unknown): Record<string, unknown> | null => {
  if (typeof body === "string") {
    try {
      const parsed = JSON.parse(body)
      return parsed && typeof parsed === "object" ? parsed : null
    } catch {
      return null
    }
  }

  return body && typeof body === "object"
    ? (body as Record<string, unknown>)
    : null
}

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")

const getClientIp = (request: ApiRequest) => {
  const forwardedFor = request.headers["x-forwarded-for"]
  if (Array.isArray(forwardedFor)) return forwardedFor[0]
  if (typeof forwardedFor === "string") return forwardedFor.split(",")[0].trim()
  return request.socket?.remoteAddress
}

const verifyCaptcha = async (token: string, remoteIp?: string) => {
  const secret = process.env.HCAPTCHA_SECRET_KEY
  if (!secret) throw new Error("HCAPTCHA_SECRET_KEY is not configured")

  const body = new URLSearchParams({ secret, response: token })
  if (remoteIp) body.set("remoteip", remoteIp)

  const response = await fetch("https://api.hcaptcha.com/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  })

  if (!response.ok) return false
  const result = (await response.json()) as HCaptchaResponse
  return result.success
}

const buildEmail = (payload: QuoteRequestPayload) => {
  const message = payload.message || "Not provided"
  const rows = [
    ["Full Name", payload.fullName],
    ["Email", payload.email],
    ["Phone", payload.phone],
    ["Service", payload.service],
    ["Location", payload.location],
    ["Message", message],
  ]

  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n")
  const html = `
    <h1>New Request a Quote submission</h1>
    <table cellpadding="8" cellspacing="0" style="border-collapse:collapse">
      ${rows
        .map(
          ([label, value]) => `
            <tr>
              <th align="left" valign="top" style="border-bottom:1px solid #ddd">${escapeHtml(
                label
              )}</th>
              <td style="border-bottom:1px solid #ddd;white-space:pre-wrap">${escapeHtml(
                value
              )}</td>
            </tr>`
        )
        .join("")}
    </table>
  `

  return { text, html }
}

const handler = async (request: ApiRequest, response: ApiResponse) => {
  response.setHeader("Cache-Control", "no-store")

  if (request.method !== "POST") {
    response.setHeader("Allow", "POST")
    return response
      .status(405)
      .json({ ok: false, message: "Method not allowed." })
  }

  const data = parseBody(request.body)
  if (!data) {
    return response.status(400).json({
      ok: false,
      message:
        "We couldn’t process your request. Please check the form and try again.",
    })
  }

  if (typeof data.website === "string" && data.website.trim()) {
    return response.status(200).json({
      ok: true,
      message: "Thank you! Your request has been sent.",
    })
  }

  const fieldErrors = validateQuoteRequest(data, { requireCaptcha: true })
  if (Object.keys(fieldErrors).length > 0) {
    return response.status(422).json({
      ok: false,
      message: "Please review the highlighted fields and try again.",
      fieldErrors,
    })
  }

  try {
    const captchaIsValid = await verifyCaptcha(
      data.hcaptchaToken as string,
      getClientIp(request)
    )

    if (!captchaIsValid) {
      return response.status(400).json({
        ok: false,
        message:
          "Spam protection could not verify your request. Please try again.",
        fieldErrors: {
          hcaptchaToken: "Please complete the spam protection check again.",
        },
      })
    }

    const smtpUser = process.env.SMTP_USER
    const smtpPassword = process.env.SMTP_APP_PASSWORD
    const recipient = process.env.QUOTE_RECIPIENT_EMAIL

    if (!smtpUser || !smtpPassword || !recipient) {
      throw new Error("Email environment variables are not configured")
    }

    const payload: QuoteRequestPayload = {
      fullName: (data.fullName as string).trim(),
      email: (data.email as string).trim(),
      phone: (data.phone as string).trim(),
      service: data.service as QuoteService,
      location: data.location as QuoteLocation,
      message: typeof data.message === "string" ? data.message.trim() : "",
      privacyAccepted: true,
      website: "",
      hcaptchaToken: data.hcaptchaToken as string,
    }
    const email = buildEmail(payload)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: smtpUser,
        pass: smtpPassword.replace(/\s/g, ""),
      },
    })

    await transporter.sendMail({
      from: `"Good Steward Website" <${smtpUser}>`,
      to: recipient,
      replyTo: payload.email,
      subject: `Quote Request — ${payload.service} — ${payload.location}`,
      text: email.text,
      html: email.html,
    })

    return response.status(200).json({
      ok: true,
      message:
        "Thank you! Your request has been sent. Our team will contact you shortly.",
    })
  } catch (error) {
    console.error("Request quote submission failed", error)
    return response.status(500).json({
      ok: false,
      message: "We couldn’t send your request. Please try again or call us.",
    })
  }
}

export default handler
