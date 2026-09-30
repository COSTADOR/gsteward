import React, { FormEvent, useRef, useState } from "react"
import { Link } from "gatsby"
import HCaptcha from "@hcaptcha/react-hcaptcha"
import { CONTACT_INFO } from "../../../constants/contacts.const"
import {
  QUOTE_LOCATIONS,
  QUOTE_SERVICES,
  QuoteRequestPayload,
} from "../../../constants/request-quote.const"
import {
  QuoteFieldErrors,
  validateQuoteRequest,
} from "../../../utils/request-quote-validation"
import "./request-quote.scss"

const initialValues: QuoteRequestPayload = {
  fullName: "",
  email: "",
  phone: "",
  service: "",
  location: "",
  message: "",
  privacyAccepted: false,
  website: "",
  hcaptchaToken: "",
}

type SubmissionState = "idle" | "submitting" | "success" | "error"

interface RequestQuoteProps {
  className?: string
}

const RequestQuote: React.FC<RequestQuoteProps> = ({ className = "" }) => {
  const [values, setValues] = useState<QuoteRequestPayload>(initialValues)
  const [errors, setErrors] = useState<QuoteFieldErrors>({})
  const [submissionState, setSubmissionState] =
    useState<SubmissionState>("idle")
  const [serverMessage, setServerMessage] = useState("")
  const captchaRef = useRef<HCaptcha>(null)
  const siteKey = process.env.GATSBY_HCAPTCHA_SITE_KEY || ""

  const updateValue = <K extends keyof QuoteRequestPayload>(
    field: K,
    value: QuoteRequestPayload[K]
  ) => {
    setValues(current => ({ ...current, [field]: value }))
    setErrors(current => ({ ...current, [field]: undefined }))
    if (submissionState !== "idle") {
      setSubmissionState("idle")
      setServerMessage("")
    }
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const validationErrors = validateQuoteRequest(values, {
      requireCaptcha: true,
    })

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setSubmissionState("error")
      setServerMessage("Please review the highlighted fields and try again.")
      return
    }

    setSubmissionState("submitting")
    setServerMessage("")

    try {
      const response = await fetch("/api/request-quote/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })
      const result = (await response.json()) as {
        ok?: boolean
        message?: string
        fieldErrors?: QuoteFieldErrors
      }

      if (!response.ok || !result.ok) {
        setErrors(result.fieldErrors || {})
        throw new Error(result.message || "Unable to send your request.")
      }

      setValues(initialValues)
      setErrors({})
      setSubmissionState("success")
      setServerMessage(
        result.message ||
          "Thank you! Your request has been sent. Our team will contact you shortly."
      )
      captchaRef.current?.resetCaptcha()
    } catch (error) {
      setSubmissionState("error")
      setServerMessage(
        error instanceof Error
          ? error.message
          : "We couldn’t send your request. Please try again or call us."
      )
      captchaRef.current?.resetCaptcha()
      setValues(current => ({ ...current, hcaptchaToken: "" }))
    }
  }

  const errorFor = (field: keyof QuoteRequestPayload) =>
    errors[field] ? `${field}-error` : undefined

  return (
    <section
      id="request-quote"
      className={`request-quote ${className}`.trim()}
      aria-labelledby="request-quote-title"
    >
      <div className="request-quote__container container">
        <div className="request-quote__intro">
          <div className="request-quote__eyebrow">Request a Free Quote</div>
          <h2
            id="request-quote-title"
            className="request-quote__title title-lg"
          >
            Tell us about <em>your cleaning needs</em>
          </h2>
          <p className="request-quote__description">
            Share a few details about your facility and the service you need.
            Our team will follow up to discuss the right cleaning plan for your
            business.
          </p>
          <p className="request-quote__fallback">
            Prefer to talk? Call us at{" "}
            <a href={CONTACT_INFO.phoneHref}>{CONTACT_INFO.phoneLocal}</a>.
          </p>
        </div>

        <form
          className="request-quote__form"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="request-quote__fields">
            <div className="request-quote__field">
              <label htmlFor="quote-full-name">Full Name *</label>
              <input
                id="quote-full-name"
                name="fullName"
                type="text"
                autoComplete="name"
                value={values.fullName}
                onChange={event => updateValue("fullName", event.target.value)}
                aria-invalid={Boolean(errors.fullName)}
                aria-describedby={errorFor("fullName")}
                maxLength={100}
                required
              />
              {errors.fullName && (
                <span id="fullName-error" className="request-quote__error">
                  {errors.fullName}
                </span>
              )}
            </div>

            <div className="request-quote__field">
              <label htmlFor="quote-email">Email *</label>
              <input
                id="quote-email"
                name="email"
                type="email"
                autoComplete="email"
                inputMode="email"
                value={values.email}
                onChange={event => updateValue("email", event.target.value)}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errorFor("email")}
                maxLength={254}
                required
              />
              {errors.email && (
                <span id="email-error" className="request-quote__error">
                  {errors.email}
                </span>
              )}
            </div>

            <div className="request-quote__field">
              <label htmlFor="quote-phone">Phone *</label>
              <input
                id="quote-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                placeholder="(858) 379-7770"
                value={values.phone}
                onChange={event => updateValue("phone", event.target.value)}
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errorFor("phone")}
                maxLength={30}
                required
              />
              {errors.phone && (
                <span id="phone-error" className="request-quote__error">
                  {errors.phone}
                </span>
              )}
            </div>

            <div className="request-quote__field">
              <label htmlFor="quote-service">Service needed *</label>
              <select
                id="quote-service"
                name="service"
                value={values.service}
                onChange={event =>
                  updateValue(
                    "service",
                    event.target.value as QuoteRequestPayload["service"]
                  )
                }
                aria-invalid={Boolean(errors.service)}
                aria-describedby={errorFor("service")}
                required
              >
                <option value="">Select a service</option>
                {QUOTE_SERVICES.map(service => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
              {errors.service && (
                <span id="service-error" className="request-quote__error">
                  {errors.service}
                </span>
              )}
            </div>

            <fieldset
              className="request-quote__field request-quote__field--full"
              aria-describedby={errorFor("location")}
            >
              <legend>Location *</legend>
              <div className="request-quote__locations">
                {QUOTE_LOCATIONS.map(location => (
                  <label key={location} className="request-quote__radio">
                    <input
                      type="radio"
                      name="location"
                      value={location}
                      checked={values.location === location}
                      onChange={() => updateValue("location", location)}
                      required
                    />
                    <span>{location}</span>
                  </label>
                ))}
              </div>
              {errors.location && (
                <span id="location-error" className="request-quote__error">
                  {errors.location}
                </span>
              )}
            </fieldset>

            <div className="request-quote__field request-quote__field--full">
              <label htmlFor="quote-message">Message</label>
              <textarea
                id="quote-message"
                name="message"
                rows={5}
                placeholder="Tell us about your facility, preferred schedule, or any specific cleaning needs."
                value={values.message}
                onChange={event => updateValue("message", event.target.value)}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errorFor("message")}
                maxLength={2000}
              />
              {errors.message && (
                <span id="message-error" className="request-quote__error">
                  {errors.message}
                </span>
              )}
            </div>
          </div>

          <div className="request-quote__honeypot" aria-hidden="true">
            <label htmlFor="quote-website">Website</label>
            <input
              id="quote-website"
              name="website"
              type="text"
              autoComplete="off"
              tabIndex={-1}
              value={values.website}
              onChange={event => updateValue("website", event.target.value)}
            />
          </div>

          <label className="request-quote__consent">
            <input
              type="checkbox"
              name="privacyAccepted"
              checked={values.privacyAccepted}
              onChange={event =>
                updateValue("privacyAccepted", event.target.checked)
              }
              aria-invalid={Boolean(errors.privacyAccepted)}
              aria-describedby={errorFor("privacyAccepted")}
              required
            />
            <span>
              I agree to the processing of my information according to the{" "}
              <Link to="/privacy-policy/">Privacy Policy</Link>. *
            </span>
          </label>
          {errors.privacyAccepted && (
            <span
              id="privacyAccepted-error"
              className="request-quote__error request-quote__error--standalone"
            >
              {errors.privacyAccepted}
            </span>
          )}

          <div className="request-quote__captcha">
            {siteKey ? (
              <HCaptcha
                ref={captchaRef}
                sitekey={siteKey}
                onVerify={token => updateValue("hcaptchaToken", token)}
                onExpire={() => updateValue("hcaptchaToken", "")}
                onError={() => {
                  updateValue("hcaptchaToken", "")
                  setErrors(current => ({
                    ...current,
                    hcaptchaToken:
                      "Spam protection could not load. Please try again.",
                  }))
                }}
              />
            ) : (
              <div className="request-quote__captcha-placeholder">
                Spam protection requires configuration.
              </div>
            )}
            {errors.hcaptchaToken && (
              <span
                id="hcaptchaToken-error"
                className="request-quote__error request-quote__error--standalone"
              >
                {errors.hcaptchaToken}
              </span>
            )}
          </div>

          <p className="request-quote__captcha-notice">
            This site is protected by hCaptcha and its{" "}
            <a
              href="https://www.hcaptcha.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>{" "}
            and{" "}
            <a
              href="https://www.hcaptcha.com/terms"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of Service
            </a>{" "}
            apply.
          </p>

          <div className="request-quote__actions">
            <button
              type="submit"
              className="button button--primary with-icon"
              disabled={submissionState === "submitting" || !siteKey}
            >
              {submissionState === "submitting"
                ? "Sending…"
                : "Request a Free Quote"}
            </button>
          </div>

          {serverMessage && (
            <div
              className={`request-quote__status request-quote__status--${submissionState}`}
              role={submissionState === "error" ? "alert" : "status"}
              aria-live="polite"
            >
              <p>{serverMessage}</p>
              {submissionState === "error" && (
                <p>
                  Please call us at{" "}
                  <a href={CONTACT_INFO.phoneHref}>{CONTACT_INFO.phoneLocal}</a>
                  .
                </p>
              )}
            </div>
          )}
        </form>
      </div>
    </section>
  )
}

export default RequestQuote
