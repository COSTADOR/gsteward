export interface RelatedServiceLink {
  title: string
  path: string
}

export interface ServicePageConfig {
  pathname: string
  seoTitle: string
  seoDescription: string
  h1: string
  eyebrow: string
  breadcrumbLabel: string
  serviceType: string
  introduction: string
  included: string[]
  imageAlt: string
  relatedServices: RelatedServiceLink[]
}
