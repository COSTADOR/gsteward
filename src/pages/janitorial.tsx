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
  title: "Janitorial Services in San Diego | Good Steward Cleaning",
  description:
    "Professional janitorial services in San Diego for offices, schools, medical & gyms — deep cleaning, sanitation, day porter & floor care. Free quote.",
  pathname: ROUTES.janitorial,
}

const breadcrumbs = [
  { label: "Home", path: ROUTES.home },
  { label: "Janitorial" },
]

const schemas = [
  createBreadcrumbSchema(breadcrumbs, seo.pathname),
  createServiceSchema({
    name: "Janitorial Services in San Diego",
    pathname: seo.pathname,
    serviceType: "Janitorial services",
    areaServed: SERVICE_AREAS.sanDiego,
  }),
]

const Janitorial = () => {
  const data = useStaticQuery(graphql`
    query {
      service1: file(relativePath: { eq: "janitorial/service1.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 600, formats: [AUTO, WEBP, AVIF], placeholder: BLURRED, quality: 90)
        }
      }
      service2: file(relativePath: { eq: "janitorial/service2.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 600, formats: [AUTO, WEBP, AVIF], placeholder: BLURRED, quality: 90)
        }
      }
      service3: file(relativePath: { eq: "janitorial/service3.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 600, formats: [AUTO, WEBP, AVIF], placeholder: BLURRED, quality: 90)
        }
      }
      service4: file(relativePath: { eq: "janitorial/service4.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 600, formats: [AUTO, WEBP, AVIF], placeholder: BLURRED, quality: 90)
        }
      }
      service5: file(relativePath: { eq: "janitorial/service5.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 600, formats: [AUTO, WEBP, AVIF], placeholder: BLURRED, quality: 90)
        }
      }
      service6: file(relativePath: { eq: "janitorial/service6.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 600, formats: [AUTO, WEBP, AVIF], placeholder: BLURRED, quality: 90)
        }
      }
      service7: file(relativePath: { eq: "janitorial/service7.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 600, formats: [AUTO, WEBP, AVIF], placeholder: BLURRED, quality: 90)
        }
      }
      service8: file(relativePath: { eq: "janitorial/service8.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 600, formats: [AUTO, WEBP, AVIF], placeholder: BLURRED, quality: 90)
        }
      }
      service9: file(relativePath: { eq: "janitorial/service9.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 600, formats: [AUTO, WEBP, AVIF], placeholder: BLURRED, quality: 90)
        }
      }
      service10: file(relativePath: { eq: "janitorial/service10.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 600, formats: [AUTO, WEBP, AVIF], placeholder: BLURRED, quality: 90)
        }
      }
    }
  `)
  
  const services = [
    {
      title: "General Janitorial and Facility Cleaning",
      description:
        "Routine cleaning services designed to keep your space clean, organized, and inviting. Our trained team ensures every corner is spotless, creating a professional environment for your business.",
      tags: [
        "Dusting and vacuuming",
        "Trash removal",
        "Restroom cleaning and sanitizing",
        "Floor maintenance",
      ],
      image: getImage(data.service1)!,
      imageAlt: "General janitorial and facility cleaning in San Diego",
    },
    {
      title: "Deep Cleaning",
      description:
        "When your space requires more than surface-level care, our deep cleaning services tackle every nook and cranny, leaving your facility refreshed and immaculate.",
      tags: [
        "High-touch surface sanitization",
        "Furniture and floor detailing",
        "Baseboard, vent, and hard-to-reach area cleaning",
      ],
      image: getImage(data.service2)!,
      imageAlt: "Commercial deep cleaning services in San Diego",
      href: ROUTES.services.deepCleaning,
    },
    {
      title: "Sanitation Cleaning",
      description:
        "Prioritize health and safety with our specialized sanitation cleaning services. Using advanced techniques and EPA-approved products, we create a hygienic environment for staff and visitors.",
      tags: [
        "Disinfection of high-traffic areas",
        "Customized solutions for specific needs",
        "Focus on health compliance",
      ],
      image: getImage(data.service3)!,
      imageAlt: "Sanitation cleaning services in San Diego",
      href: ROUTES.services.sanitationCleaning,
    },
    {
      title: "Day Porter Services",
      description:
        "Keep your facility consistently clean throughout the day with our day porter services. From restocking restrooms to maintaining lobbies, we ensure your space remains welcoming.",
      tags: [
        "Restocking restroom supplies",
        "Continuous trash removal",
        "Maintaining cleanliness in high-traffic areas",
      ],
      image: getImage(data.service4)!,
      imageAlt: "Day porter services in San Diego",
      href: ROUTES.services.dayPorterServices,
    },
    {
      title: "Strip & Wax Services",
      description:
        "Bring your floors back to life with our strip and wax service. We remove old finishes, apply high-quality wax, and polish your floors for a durable and glossy look.",
      tags: [
        "Removal of old floor finishes",
        "Application of protective wax layers",
        "Polishing for a smooth and shiny finish",
      ],
      image: getImage(data.service5)!,
      imageAlt: "Strip and wax floor services in San Diego",
      href: ROUTES.services.stripAndWaxFloorCare,
    },
    {
      title: "Carpet & Floor Cleaning",
      description:
        "Extend the life of your carpets and keep them looking like new with our professional carpet cleaning services.",
      tags: [
        "Stain removal and deep cleaning",
        "Texture revitalization",
        "Fabric-safe and eco-friendly methods",
      ],
      image: getImage(data.service6)!,
      imageAlt: "Commercial carpet and floor cleaning in San Diego",
      href: ROUTES.services.commercialFloorCare,
    },
    {
      title: "Spot Cleaning",
      description:
        "Quick and effective spot cleaning services to address stains and spills promptly.",
      tags: [
        "Stain removal for furniture, carpets, and surfaces",
        "Specialized solutions for stubborn marks",
        "Minimal drying time",
      ],
      image: getImage(data.service7)!,
      imageAlt: "Spot cleaning services in San Diego",
      href: ROUTES.services.spotCleaning,
    },
    {
      title: "Window Cleaning",
      description:
        "Enhance the appearance of your building with crystal-clear windows that let in more light.",
      tags: [
        "Interior and exterior window cleaning",
        "Streak and smudge removal",
        "Safe techniques for all types of windows",
      ],
      image: getImage(data.service8)!,
      imageAlt: "Commercial window cleaning in San Diego",
      href: ROUTES.services.commercialWindowCleaning,
    },
    {
      title: "Green Cleaning",
      description:
        "Our eco-friendly cleaning solutions provide the same exceptional results while minimizing environmental impact. Perfect for businesses that value sustainability.",
      tags: [
        "Use of organic and biodegradable products",
        "Practices that reduce water and energy usage",
        "Certified to national and state standards",
      ],
      image: getImage(data.service9)!,
      imageAlt: "Green cleaning services in San Diego",
      href: ROUTES.services.greenCleaning,
    },
    {
      title: "Ozone Cleaning",
      description:
        "Using cutting-edge ozone technology, we eliminate odors, bacteria, and viruses to create a cleaner and fresher space.",
      tags: [
        "Odor neutralization",
        "Air and surface disinfection",
        "Effective against bacteria, viruses, and allergens",
      ],
      image: getImage(data.service10)!,
      imageAlt: "Ozone cleaning services in San Diego",
      href: ROUTES.services.ozoneCleaning,
    },
  ]
  
  const ctaTitle = `Not sure what service you need?`
  const ctaDescription = `Let us help you find the perfect cleaning solution for your business. Get in touch today<br/> to schedule a consultation or request a free quote.`
  
  return (
    <Layout>
      <ServiceHero
        breadcrumbs={<Breadcrumbs items={breadcrumbs} />}
        subtitle="Professional Janitorial Services in San Diego"
        title="Janitorial Services in San Diego"
        description="Our professional janitorial services ensure your business maintains a clean, hygienic, and welcoming environment. From routine cleaning to tackling tough messes, we’ve got you covered. We specialize in private schools, office buildings, medical offices, and gym facilities across San Diego."
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

export default Janitorial
