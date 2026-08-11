import React from "react"
import type { IGatsbyImageData } from "gatsby-plugin-image"
import Layout from "../../common/layout/layout"
import Breadcrumbs from "../../common/breadcrumbs/breadcrumbs"
import Seo from "../../common/seo/seo"
import StructuredData from "../../common/structured-data/structured-data"
import ServiceHero from "../../sections/service-hero/service-hero"
import ServiceOverview from "../../sections/service-overview/service-overview"
import ServiceList from "../../sections/service-list/service-list"
import Features from "../../sections/features/features"
import RelatedServices from "../../sections/related-services/related-services"
import CallToAction from "../../sections/call-to-action/call-to-action"
import { ROUTES } from "../../../constants/routes.const"
import type {
  GeoDetailPageConfig,
  GeoHubPageConfig,
  GeoPageConfig,
} from "../../../types/geo-page.types"
import type { Service } from "../../../types/service.types"
import {
  createBreadcrumbSchema,
  createServiceSchema,
} from "../../../utils/service-schema"

const CTA_TITLE = "Not sure what service you need?"
const CTA_DESCRIPTION =
  "Let us help you find the perfect cleaning solution for your business. Get in touch today<br/> to schedule a consultation or request a free quote."

const getBreadcrumbs = (config: GeoPageConfig) => [
  { label: "Home", path: ROUTES.home },
  { label: config.breadcrumbLabel },
]

interface GeoDetailLandingPageProps {
  config: GeoDetailPageConfig
  image: IGatsbyImageData
  children?: React.ReactNode
}

export const GeoDetailLandingPage: React.FC<
  GeoDetailLandingPageProps
> = ({ config, image, children }) => (
  <Layout>
    <ServiceHero
      breadcrumbs={<Breadcrumbs items={getBreadcrumbs(config)} />}
      subtitle={config.eyebrow}
      title={config.h1}
      description={config.introduction}
    />
    <ServiceOverview
      title="What’s Included"
      tags={config.included}
      image={image}
      imageAlt={config.imageAlt}
    />
    {children}
    <Features />
    <RelatedServices services={config.relatedServices} />
    <CallToAction title={CTA_TITLE} description={CTA_DESCRIPTION} />
  </Layout>
)

interface GeoHubLandingPageProps {
  config: GeoHubPageConfig
  services: Service[]
  children?: React.ReactNode
}

export const GeoHubLandingPage: React.FC<GeoHubLandingPageProps> = ({
  config,
  services,
  children,
}) => (
  <Layout>
    <ServiceHero
      breadcrumbs={<Breadcrumbs items={getBreadcrumbs(config)} />}
      subtitle={config.eyebrow}
      title={config.h1}
      description={config.introduction}
    />
    <ServiceList services={services} />
    {children}
    <Features />
    <CallToAction title={CTA_TITLE} description={CTA_DESCRIPTION} />
  </Layout>
)

export const GeoLandingHead: React.FC<{ config: GeoPageConfig }> = ({
  config,
}) => {
  const schemas = [
    createBreadcrumbSchema(getBreadcrumbs(config), config.pathname),
    createServiceSchema({
      name: config.h1,
      pathname: config.pathname,
      serviceType: config.serviceType,
      areaServed: config.areaServed,
    }),
  ]

  return (
    <>
      <Seo
        title={config.seoTitle}
        description={config.seoDescription}
        pathname={config.pathname}
      />
      {schemas.map(schema => (
        <StructuredData data={schema} key={schema["@type"]} />
      ))}
    </>
  )
}
