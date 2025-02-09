import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import Layout from "../components/common/layout/layout"
import CallToAction from "../components/sections/call-to-action/call-to-action"
import ServiceList from "../components/sections/service-list/service-list"
import ServiceHero from "../components/sections/service-hero/service-hero"

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
    },
  ]
  
  const maintenanceStats = [
    { number: "1,650+", label: "Facilities Cleaned" },
    { number: "18", label: "Years of Service" },
    { number: "98%", label: "Satisfaction Rate" },
  ]
  
  const ctaTitle = `Need reliable maintenance services?`
  const ctaDescription = `Let us take care of your property’s maintenance needs. Contact us today for <br/>a consultation or to request a free quote.`
  
  return (
    <Layout>
      <ServiceHero
        subtitle="Professional Maintenance Services"
        title="Maintenance"
        description="At Steward Cleaning, we provide a full range of services to keep your property in top condition. From minor repairs to major renovations, our team ensures your space is safe, functional, and always at its best."
        stats={maintenanceStats}
      />
      <ServiceList services={services} />
      <CallToAction title={ctaTitle} description={ctaDescription} />
    </Layout>
  )
}

export const Head = () => (
  <>
    <title>Maintenance Services - Good Steward Cleaning</title>
    <meta name="description" content="Professional maintenance services to keep your property in top condition. From minor repairs to major renovations, our team ensures your space is safe, functional, and at its best." />
    <meta property="og:title" content="Maintenance Services - Good Steward Cleaning" />
    <meta property="og:description" content="Professional maintenance services to keep your property in top condition. From minor repairs to major renovations, our team ensures your space is safe, functional, and at its best." />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="/images/logo.svg" />
    <meta property="og:url" content="https://www.gsteward.com/maintenance" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Maintenance Services - Good Steward Cleaning" />
    <meta name="twitter:description" content="Expert maintenance solutions, including handyman services, renovations, and water damage restoration." />
    <meta name="twitter:image" content="/images/logo.svg" />
    <link rel="canonical" href="https://www.gsteward.com/maintenance" />
  </>
)

export default Maintenance
