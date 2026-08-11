import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import Layout from "../components/common/layout/layout"
import Breadcrumbs from "../components/common/breadcrumbs/breadcrumbs"
import Seo from "../components/common/seo/seo"
import StructuredData from "../components/common/structured-data/structured-data"
import ServiceHero from "../components/sections/service-hero/service-hero"
import ServiceOverview from "../components/sections/service-overview/service-overview"
import Features from "../components/sections/features/features"
import RelatedServices from "../components/sections/related-services/related-services"
import CallToAction from "../components/sections/call-to-action/call-to-action"

const SITE_URL = "https://www.gsteward.com"

const seo = {
  title: "Deep Cleaning Services San Diego | Good Steward",
  description:
    "Thorough commercial deep cleaning in San Diego — high-touch sanitization, detailing & hard-to-reach area cleaning by our in-house team. Free quote.",
  pathname: "/deep-cleaning",
}

const breadcrumbs = [
  { label: "Home", path: "/" },
  { label: "Janitorial", path: "/janitorial/" },
  { label: "Deep Cleaning" },
]

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: breadcrumbs.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.label,
    item:
      index === breadcrumbs.length - 1
        ? `${SITE_URL}/deep-cleaning/`
        : `${SITE_URL}${item.path}`,
  })),
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Deep Cleaning Services in San Diego",
  serviceType: "Commercial Deep Cleaning",
  url: `${SITE_URL}/deep-cleaning/`,
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
}

const DeepCleaning = () => {
  const data = useStaticQuery(graphql`
    query {
      serviceImage: file(relativePath: { eq: "janitorial/service2.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 900, formats: [AUTO, WEBP, AVIF], placeholder: BLURRED, quality: 90)
        }
      }
    }
  `)

  return (
    <Layout>
      <ServiceHero
        breadcrumbs={<Breadcrumbs items={breadcrumbs} />}
        subtitle="Professional Deep Cleaning Services"
        title="Deep Cleaning Services in San Diego"
        description="When your space requires more than surface-level care, our deep cleaning services tackle every nook and cranny, leaving your San Diego facility refreshed and immaculate."
      />
      <ServiceOverview
        title="What’s Included in Our Deep Cleaning Service"
        description="A detailed, top-to-bottom clean designed for the areas routine service does not always reach."
        tags={[
          "High-touch surface sanitization",
          "Furniture and floor detailing",
          "Baseboard, vent, and hard-to-reach area cleaning",
        ]}
        image={getImage(data.serviceImage)!}
        imageAlt="Commercial deep cleaning services in San Diego"
      />
      <Features />
      <RelatedServices
        services={[
          { title: "Sanitation Cleaning", path: "/sanitation-cleaning/" },
          { title: "All Janitorial Services", path: "/janitorial/" },
          { title: "Green Cleaning", path: "/green-cleaning/" },
        ]}
      />
      <CallToAction
        title="Ready for a deeper clean?"
        description="Contact our in-house team to schedule a walkthrough and get a free quote for your San Diego facility."
      />
    </Layout>
  )
}

export const Head = () => (
  <>
    <Seo {...seo} />
    <StructuredData data={breadcrumbSchema} />
    <StructuredData data={serviceSchema} />
  </>
)

export default DeepCleaning
