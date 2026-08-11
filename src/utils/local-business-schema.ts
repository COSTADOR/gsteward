import { CONTACT_INFO } from "../constants/contacts.const"
import { SERVICE_AREA_LIST } from "../constants/service-areas.const"
import { LOCAL_BUSINESS_ID, SITE_URL } from "../constants/seo.const"
import type { ServiceArea } from "../types/location.types"

const toPostalAddress = (serviceArea: ServiceArea) => ({
  "@type": "PostalAddress",
  ...serviceArea.officeAddress,
})

const toAreaServed = (serviceArea: ServiceArea) => ({
  "@type": "City",
  name: serviceArea.city,
  containedInPlace: {
    "@type": "State",
    name: serviceArea.stateName,
  },
})

export const createLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": LOCAL_BUSINESS_ID,
  name: "Good Steward Cleaning",
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/images/logo.svg`,
  image: `${SITE_URL}/images/og-image.png`,
  telephone: CONTACT_INFO.phoneE164,
  email: CONTACT_INFO.email,
  address: SERVICE_AREA_LIST.map(toPostalAddress),
  areaServed: SERVICE_AREA_LIST.map(toAreaServed),
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: CONTACT_INFO.openingHours.days,
    opens: CONTACT_INFO.openingHours.opens,
    closes: CONTACT_INFO.openingHours.closes,
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: CONTACT_INFO.phoneE164,
    contactType: "customer service",
    areaServed: "US-CA",
    availableLanguage: "English",
  },
})
