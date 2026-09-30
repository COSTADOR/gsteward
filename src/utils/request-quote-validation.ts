import {
  QUOTE_LOCATIONS,
  QUOTE_SERVICES,
  QuoteRequestPayload,
} from "../constants/request-quote.const"

export type QuoteFieldErrors = Partial<
  Record<keyof QuoteRequestPayload, string>
>

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const isValidUsPhone = (phone: string) => {
  const digits = phone.replace(/\D/g, "")
  return digits.length === 10 || (digits.length === 11 && digits[0] === "1")
}

export const validateQuoteRequest = (
  values: Partial<Record<keyof QuoteRequestPayload, unknown>>,
  options: { requireCaptcha?: boolean } = {}
) => {
  const errors: QuoteFieldErrors = {}
  const fullName =
    typeof values.fullName === "string" ? values.fullName.trim() : ""
  const email = typeof values.email === "string" ? values.email.trim() : ""
  const phone = typeof values.phone === "string" ? values.phone.trim() : ""
  const service = typeof values.service === "string" ? values.service : ""
  const location = typeof values.location === "string" ? values.location : ""
  const message =
    typeof values.message === "string" ? values.message.trim() : ""

  if (fullName.length < 2) {
    errors.fullName = "Please enter your full name."
  } else if (fullName.length > 100) {
    errors.fullName = "Please keep your name under 100 characters."
  }

  if (!EMAIL_PATTERN.test(email) || email.length > 254) {
    errors.email = "Please enter a valid email address."
  }

  if (!isValidUsPhone(phone)) {
    errors.phone = "Please enter a valid US phone number."
  }

  if (!QUOTE_SERVICES.includes(service as (typeof QUOTE_SERVICES)[number])) {
    errors.service = "Please select a service."
  }

  if (!QUOTE_LOCATIONS.includes(location as (typeof QUOTE_LOCATIONS)[number])) {
    errors.location = "Please select a location."
  }

  if (message.length > 2000) {
    errors.message = "Please keep your message under 2,000 characters."
  }

  if (values.privacyAccepted !== true) {
    errors.privacyAccepted = "Please accept the Privacy Policy."
  }

  if (options.requireCaptcha && !values.hcaptchaToken) {
    errors.hcaptchaToken = "Please complete the spam protection check."
  }

  return errors
}
