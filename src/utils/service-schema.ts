import type { BreadcrumbItem } from "../components/common/breadcrumbs/breadcrumbs"
import type { ServiceArea } from "../types/location.types"

const SITE_URL = "https://www.gsteward.com"

interface ServiceSchemaOptions {
  name: string
  pathname: string
  serviceType: string
  areaServed: ServiceArea
}

const toAbsoluteUrl = (pathname: string) =>
  `${SITE_URL}${pathname.endsWith("/") ? pathname : `${pathname}/`}`

export const createBreadcrumbSchema = (
  items: BreadcrumbItem[],
  pathname: string
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.label,
    item: item.path ? toAbsoluteUrl(item.path) : toAbsoluteUrl(pathname),
  })),
})

export const createServiceSchema = ({
  name,
  pathname,
  serviceType,
  areaServed,
}: ServiceSchemaOptions) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  serviceType,
  url: toAbsoluteUrl(pathname),
  provider: {
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: "Good Steward Cleaning",
    url: `${SITE_URL}/`,
    telephone: "+18583797770",
    address: {
      "@type": "PostalAddress",
      ...areaServed.officeAddress,
    },
  },
  areaServed: {
    "@type": "City",
    name: areaServed.city,
    containedInPlace: {
      "@type": "State",
      name: areaServed.stateName,
    },
  },
})
