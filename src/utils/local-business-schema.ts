import { CONTACT_INFO } from "../constants/contacts.const"
import { SERVICE_AREAS } from "../constants/service-areas.const"
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
  telephone: "+18583797770",
  email: CONTACT_INFO.email,
  address: [
    toPostalAddress(SERVICE_AREAS.sanDiego),
    toPostalAddress(SERVICE_AREAS.oceanside),
  ],
  areaServed: [
    toAreaServed(SERVICE_AREAS.sanDiego),
    toAreaServed(SERVICE_AREAS.oceanside),
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+18583797770",
    contactType: "customer service",
    areaServed: "US-CA",
    availableLanguage: "English",
  },
})
