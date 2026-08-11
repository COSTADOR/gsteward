import type { BreadcrumbItem } from "../components/common/breadcrumbs/breadcrumbs"

const SITE_URL = "https://www.gsteward.com"

interface ServiceSchemaOptions {
  name: string
  pathname: string
  serviceType: string
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

export const createSanDiegoServiceSchema = ({
  name,
  pathname,
  serviceType,
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
      streetAddress: "11440 W. Bernardo Court #300",
      addressLocality: "San Diego",
      addressRegion: "CA",
      postalCode: "92127",
      addressCountry: "US",
    },
  },
  areaServed: {
    "@type": "City",
    name: "San Diego",
    containedInPlace: {
      "@type": "State",
      name: "California",
    },
  },
})
