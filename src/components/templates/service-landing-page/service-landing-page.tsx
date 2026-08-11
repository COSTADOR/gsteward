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

const SITE_URL = "https://www.gsteward.com"

const CTA_TITLE = "Not sure what service you need?"
const CTA_DESCRIPTION =
  "Let us help you find the perfect cleaning solution for your business. Get in touch today<br/> to schedule a consultation or request a free quote."

interface ServiceLandingPageProps {
  config: ServicePageConfig
  image: IGatsbyImageData
}

const getBreadcrumbs = (config: ServicePageConfig) => [
  { label: "Home", path: "/" },
  { label: "Janitorial", path: "/janitorial/" },
  { label: config.breadcrumbLabel },
]

const getSchemas = (config: ServicePageConfig) => {
  const breadcrumbs = getBreadcrumbs(config)
  const pageUrl = `${SITE_URL}${config.pathname}/`

  return [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.label,
        item:
          index === breadcrumbs.length - 1
            ? pageUrl
            : `${SITE_URL}${item.path}`,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: config.h1,
      serviceType: config.serviceType,
      url: pageUrl,
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
    },
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
