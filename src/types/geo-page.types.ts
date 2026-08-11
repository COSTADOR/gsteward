import type { ServiceArea } from "./location.types"
import type { RelatedServiceLink } from "./service-page.types"

interface BaseGeoPageConfig {
  pathname: string
  seoTitle: string
  seoDescription: string
  h1: string
  eyebrow: string
  breadcrumbLabel: string
  menuLabel: string
  serviceType: string
  areaServed: ServiceArea
  introduction: string
  imageAlt: string
}

export interface GeoHubPageConfig extends BaseGeoPageConfig {
  variant: "hub"
  serviceCards: RelatedServiceLink[]
  specialtyServices: RelatedServiceLink[]
  supportServices: RelatedServiceLink[]
}

export interface GeoDetailPageConfig extends BaseGeoPageConfig {
  variant: "detail" | "location"
  included: string[]
  relatedServices: RelatedServiceLink[]
  officeLabel?: string
}

export type GeoPageConfig = GeoHubPageConfig | GeoDetailPageConfig
