const PHONE_E164 = "+18583797770"
const EMAIL = "gsteward7770@gmail.com"

export const CONTACT_INFO = {
  email: EMAIL,
  emailHref: `mailto:${EMAIL}`,
  phone: "+1 (858)-379-7770",
  phoneE164: PHONE_E164,
  phoneHref: `tel:${PHONE_E164}`,
  availability: "Available Monday to Friday, 9 AM - 6 PM PST",
  openingHours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
} as const
