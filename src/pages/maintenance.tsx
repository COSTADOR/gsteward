import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/common/layout/layout"
import CallToAction from "../components/sections/call-to-action/call-to-action"
import ServiceList from "../components/sections/service-list/service-list"
import ServiceHero from "../components/sections/service-hero/service-hero"

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
    image: "/images/maintenance/Desktop/service1.jpg",
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
    image: "/images/maintenance/Desktop/service2.jpg",
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
    image: "/images/maintenance/Desktop/service3.jpg",
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
    image: "/images/maintenance/Desktop/service4.jpg",
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
    image: "/images/maintenance/Desktop/service5.jpg",
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
    image: "/images/maintenance/Desktop/service6.jpg",
  },
]

const maintenanceStats = [
  { number: "1,650+", label: "Facilities Cleaned" },
  { number: "18", label: "Years of Service" },
  { number: "98%", label: "Satisfaction Rate" },
]

const ctaTitle = `Need reliable maintenance services?`
const ctaDescription = `Let us take care of your property’s maintenance needs. Contact us today for <br/>a consultation or to request a free quote.`

const Maintenance = () => (
  <Layout>
    <ServiceHero
      subtitle="Professional Maintenance Services"
      title="Maintenance"
      description="At Steward Cleaning, we provide a full range of services to keep your property in top condition. From minor repairs to major renovations, our team ensures your space is safe, functional, and always at its best."
      stats={maintenanceStats}
    />
    <ServiceList services={services}></ServiceList>
    <CallToAction title={ctaTitle} description={ctaDescription} />
  </Layout>
)

export default Maintenance
