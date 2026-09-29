const PHONE_E164 = "+18583797770"
const PHONE_LOCAL = "(858) 379-7770"
const EMAIL = "gsteward7770@gmail.com"
const PRIVACY_EMAIL = "admin@gsteward.com"
const LEGAL_HOURS = "Monday–Friday, 9:00 AM – 6:00 PM PT"

export const CONTACT_INFO = {
  email: EMAIL,
  emailHref: `mailto:${EMAIL}`,
  privacyEmail: PRIVACY_EMAIL,
  privacyEmailHref: `mailto:${PRIVACY_EMAIL}`,
  phone: "+1 (858)-379-7770",
  phoneLocal: PHONE_LOCAL,
  phoneE164: PHONE_E164,
  phoneHref: `tel:${PHONE_E164}`,
  availability: "Available Monday to Friday, 9 AM - 6 PM PST",
  legalHours: LEGAL_HOURS,
  openingHours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
} as const
