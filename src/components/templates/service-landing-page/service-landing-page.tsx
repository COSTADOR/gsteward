import React from "react"
import type { IGatsbyImageData } from "gatsby-plugin-image"
import Layout from "../../common/layout/layout"
import Breadcrumbs from "../../common/breadcrumbs/breadcrumbs"
import Seo from "../../common/seo/seo"
import StructuredData from "../../common/structured-data/structured-data"
import ServiceHero from "../../sections/service-hero/service-hero"
import ServiceOverview from "../../sections/service-overview/service-overview"
import Features from "../../sections/features/features"
import RelatedServices from "../../sections/related-services/related-services"
import CallToAction from "../../sections/call-to-action/call-to-action"
import type { ServicePageConfig } from "../../../types/service-page.types"
import { ROUTES } from "../../../constants/routes.const"
import { SERVICE_AREAS } from "../../../constants/service-areas.const"
import {
  createBreadcrumbSchema,
  createServiceSchema,
} from "../../../utils/service-schema"

const CTA_TITLE = "Not sure what service you need?"
const CTA_DESCRIPTION =
  "Let us help you find the perfect cleaning solution for your business. Get in touch today<br/> to schedule a consultation or request a free quote."

interface ServiceLandingPageProps {
  config: ServicePageConfig
  image: IGatsbyImageData
}

const getBreadcrumbs = (config: ServicePageConfig) => [
  { label: "Home", path: ROUTES.home },
  { label: "Janitorial", path: ROUTES.janitorial },
  { label: config.breadcrumbLabel },
]

const getSchemas = (config: ServicePageConfig) => {
  const breadcrumbs = getBreadcrumbs(config)

  return [
    createBreadcrumbSchema(breadcrumbs, config.pathname),
    createServiceSchema({
      name: config.h1,
      pathname: config.pathname,
      serviceType: config.serviceType,
      areaServed: SERVICE_AREAS.sanDiego,
    }),
  ]
}

export const ServiceLandingPage: React.FC<ServiceLandingPageProps> = ({
  config,
  image,
}) => (
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
    <Features />
    <RelatedServices services={config.relatedServices} />
    <CallToAction title={CTA_TITLE} description={CTA_DESCRIPTION} />
  </Layout>
)

export const ServiceLandingHead: React.FC<{
  config: ServicePageConfig
}> = ({ config }) => (
  <>
    <Seo
      title={config.seoTitle}
      description={config.seoDescription}
      pathname={config.pathname}
    />
    {getSchemas(config).map(schema => (
      <StructuredData data={schema} key={schema["@type"]} />
    ))}
  </>
)
