import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import Layout from "../components/common/layout/layout"
import CallToAction from "../components/sections/call-to-action/call-to-action"
import ServiceList from "../components/sections/service-list/service-list"
import ServiceHero from "../components/sections/service-hero/service-hero"
import Seo from "../components/common/seo/seo"
import Breadcrumbs from "../components/common/breadcrumbs/breadcrumbs"
import StructuredData from "../components/common/structured-data/structured-data"
import { ROUTES } from "../constants/routes.const"
import { SERVICE_AREAS } from "../constants/service-areas.const"
import {
  createBreadcrumbSchema,
  createServiceSchema,
} from "../utils/service-schema"

const seo = {
  title: "Commercial Maintenance Services San Diego | Good Steward",
  description:
    "Professional maintenance services in San Diego — handyman, remodeling, water damage restoration & air duct cleaning. Get a free quote today.",
  pathname: ROUTES.maintenance,
}

const breadcrumbs = [
  { label: "Home", path: ROUTES.home },
  { label: "Maintenance" },
]

const schemas = [
  createBreadcrumbSchema(breadcrumbs, seo.pathname),
  createServiceSchema({
    name: "Maintenance Services in San Diego",
    pathname: seo.pathname,
    serviceType: "Commercial maintenance services",
    areaServed: SERVICE_AREAS.sanDiego,
  }),
]

const Maintenance = () => {
  // Загружаем изображения через GraphQL
  const data = useStaticQuery(graphql`
    query {
      service1: file(relativePath: { eq: "maintenance/service1.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 600, formats: [AUTO, WEBP, AVIF], placeholder: BLURRED, quality: 90)
        }
      }
      service2: file(relativePath: { eq: "maintenance/service2.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 600, formats: [AUTO, WEBP, AVIF], placeholder: BLURRED, quality: 90)
        }
      }
      service3: file(relativePath: { eq: "maintenance/service3.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 600, formats: [AUTO, WEBP, AVIF], placeholder: BLURRED, quality: 90)
        }
      }
      service4: file(relativePath: { eq: "maintenance/service4.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 600, formats: [AUTO, WEBP, AVIF], placeholder: BLURRED, quality: 90)
        }
      }
      service5: file(relativePath: { eq: "maintenance/service5.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 600, formats: [AUTO, WEBP, AVIF], placeholder: BLURRED, quality: 90)
        }
      }
      service6: file(relativePath: { eq: "maintenance/service6.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 600, formats: [AUTO, WEBP, AVIF], placeholder: BLURRED, quality: 90)
        }
      }
      service7: file(relativePath: { eq: "maintenance.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 600, formats: [AUTO, WEBP, AVIF], placeholder: BLURRED, quality: 90)
        }
      }
    }
  `)
  
  const services = [
    {
      title: "Handyman Services",
      description:
        "Quick, reliable solutions for everyday repairs and maintenance needs. Let us handle the small tasks so you can focus on what matters most.",
      tags: [
        "Minor repairs and touch-ups",
        "Fixture replacements",
        "General maintenance tasks",
      ],
      image: getImage(data.service1)!,
      imageAlt: "Handyman services in San Diego",
    },
    {
      title: "Home Improvement Services",
      description:
        "Upgrade your space with our expert home improvement services, designed to enhance comfort, functionality, and value.",
      tags: [
        "Renovations and upgrades",
        "Interior and exterior improvements",
        "Custom solutions tailored to your needs",
      ],
      image: getImage(data.service2)!,
      imageAlt: "Property improvement services in San Diego",
    },
    {
      title: "Tenant Improvement Services",
      description:
        "Transform commercial spaces to meet tenant requirements with our tenant improvement services. We ensure every detail aligns with your vision and business goals.",
      tags: [
        "Office space customization",
        "Layout modifications",
        "Compliance with building regulations",
      ],
      image: getImage(data.service3)!,
      imageAlt: "Commercial tenant improvement services in San Diego",
    },
    {
      title: "Remodeling & Construction Services",
      description:
        "Whether you're planning a small remodel or a full-scale construction project, we bring expertise and precision to every step.",
      tags: [
        "Kitchen and bathroom remodeling",
        "Full-scale construction projects",
        "Structural upgrades and repairs",
      ],
      image: getImage(data.service4)!,
      imageAlt: "Remodeling and construction services in San Diego",
    },
    {
      title: "Water Damage Restoration Services",
      description:
        "Recover quickly from water damage with our expert restoration services. We assess, repair, and restore your space to its original condition.",
      tags: [
        "Water extraction and drying",
        "Mold prevention and remediation",
        "Repair and reconstruction of affected areas",
      ],
      image: getImage(data.service5)!,
      imageAlt: "Water damage restoration services in San Diego",
    },
    {
      title: "Consulting Services",
      description:
        "Not sure what your space needs? Our consulting services provide expert guidance to help you identify potential issues and implement effective solutions.",
      tags: [
        "Facility assessments and inspections",
        "Clear and tailored maintenance recommendations",
        "Preventive strategies to avoid future problems",
      ],
      image: getImage(data.service6)!,
      imageAlt: "Commercial property maintenance consulting in San Diego",
    },
    {
      title: "Air Duct Cleaning",
      description:
        "Commercial air duct cleaning for San Diego facilities, helping keep HVAC ductwork clean and well maintained.",
      tags: [
        "Commercial air duct cleaning",
        "HVAC ductwork cleaning",
        "Service for San Diego facilities",
      ],
      image: getImage(data.service7)!,
      imageAlt: "Commercial air duct cleaning in San Diego",
    },
  ]
  
  const ctaTitle = `Need reliable maintenance services?`
  const ctaDescription = `Let us take care of your property’s maintenance needs. Contact us today for <br/>a consultation or to request a free quote.`
  
  return (
    <Layout>
      <ServiceHero
        breadcrumbs={<Breadcrumbs items={breadcrumbs} />}
        subtitle="Professional Maintenance Services in San Diego"
        title="Maintenance Services in San Diego"
        description="At Good Steward Cleaning, we provide a full range of services across San Diego to keep your property in top condition. From minor repairs to major renovations, our team ensures your space is safe, functional, and always at its best."
      />
      <ServiceList services={services} />
      <CallToAction title={ctaTitle} description={ctaDescription} />
    </Layout>
  )
}

export const Head = () => (
  <>
    <Seo {...seo} />
    {schemas.map(schema => (
      <StructuredData data={schema} key={schema["@type"]} />
    ))}
  </>
)

export default Maintenance
