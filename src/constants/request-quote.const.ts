export const QUOTE_SERVICES = [
  "General Janitorial",
  "Deep Cleaning",
  "Sanitation Cleaning",
  "Day Porter",
  "Strip & Wax",
  "Carpet & Floor Cleaning",
  "Spot Cleaning",
  "Window Cleaning",
  "Green Cleaning",
  "Ozone Cleaning",
  "Maintenance",
  "Other",
] as const

export const QUOTE_LOCATIONS = ["San Diego", "Oceanside"] as const

export type QuoteService = (typeof QUOTE_SERVICES)[number]
export type QuoteLocation = (typeof QUOTE_LOCATIONS)[number]

export interface QuoteRequestPayload {
  fullName: string
  email: string
  phone: string
  service: QuoteService | ""
  location: QuoteLocation | ""
  message: string
  privacyAccepted: boolean
  website: string
  hcaptchaToken: string
}
