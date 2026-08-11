import type { BreadcrumbItem } from "../components/common/breadcrumbs/breadcrumbs"
import { LOCAL_BUSINESS_ID, SITE_URL } from "../constants/seo.const"
import type { ServiceArea } from "../types/location.types"

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
    "@id": LOCAL_BUSINESS_ID,
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
