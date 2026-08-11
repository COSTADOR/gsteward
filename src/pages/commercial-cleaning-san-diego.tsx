import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import {
  GeoHubLandingPage,
  GeoLandingHead,
} from "../components/templates/geo-landing-page/geo-landing-page"
import RelatedServices from "../components/sections/related-services/related-services"
import { geoPages } from "../data/geo-pages.data"

const config = geoPages.commercialCleaningSanDiego

const CommercialCleaningSanDiego = () => {
  const data = useStaticQuery(graphql`
    query {
      janitorialImage: file(relativePath: { eq: "janitorial/service1.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 600, formats: [AUTO, WEBP, AVIF], placeholder: BLURRED, quality: 90)
        }
      }
      officeImage: file(relativePath: { eq: "hero-main.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 600, formats: [AUTO, WEBP, AVIF], placeholder: BLURRED, quality: 90)
        }
      }
      medicalImage: file(relativePath: { eq: "janitorial/service3.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 600, formats: [AUTO, WEBP, AVIF], placeholder: BLURRED, quality: 90)
        }
      }
      kitchenImage: file(relativePath: { eq: "janitorial/service4.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 600, formats: [AUTO, WEBP, AVIF], placeholder: BLURRED, quality: 90)
        }
      }
      floorImage: file(relativePath: { eq: "janitorial/service6.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 600, formats: [AUTO, WEBP, AVIF], placeholder: BLURRED, quality: 90)
        }
      }
      windowImage: file(relativePath: { eq: "janitorial/service8.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 600, formats: [AUTO, WEBP, AVIF], placeholder: BLURRED, quality: 90)
        }
      }
    }
  `)

  const services = [
    {
      title: config.serviceCards[0].title,
      description:
        "Professional janitorial services for schools, offices, medical facilities, and gyms across San Diego.",
      tags: [
        "Routine facility cleaning",
        "Restroom sanitizing",
        "Floor maintenance",
      ],
      image: getImage(data.janitorialImage)!,
      imageAlt: "Janitorial services in San Diego",
      href: config.serviceCards[0].path,
    },
    {
      title: config.serviceCards[1].title,
      description: geoPages.officeCleaningSanDiego.introduction,
      tags: geoPages.officeCleaningSanDiego.included.slice(0, 3),
      image: getImage(data.officeImage)!,
      imageAlt: geoPages.officeCleaningSanDiego.imageAlt,
      href: config.serviceCards[1].path,
    },
    {
      title: config.serviceCards[2].title,
      description: geoPages.medicalOfficeCleaningSanDiego.introduction,
      tags: geoPages.medicalOfficeCleaningSanDiego.included.slice(0, 3),
      image: getImage(data.medicalImage)!,
      imageAlt: geoPages.medicalOfficeCleaningSanDiego.imageAlt,
      href: config.serviceCards[2].path,
    },
    {
      title: config.serviceCards[3].title,
      description: geoPages.commercialKitchenCleaningSanDiego.introduction,
      tags: geoPages.commercialKitchenCleaningSanDiego.included.slice(0, 3),
      image: getImage(data.kitchenImage)!,
      imageAlt: geoPages.commercialKitchenCleaningSanDiego.imageAlt,
      href: config.serviceCards[3].path,
    },
    {
      title: config.serviceCards[4].title,
      description:
        "Professional carpet, floor, tile, and grout cleaning services for San Diego businesses.",
      tags: [
        "Stain removal and deep cleaning",
        "Tile and grout cleaning",
        "Eco-friendly methods",
      ],
      image: getImage(data.floorImage)!,
      imageAlt: "Commercial carpet and floor cleaning in San Diego",
      href: config.serviceCards[4].path,
    },
    {
      title: config.serviceCards[5].title,
      description:
        "Interior and exterior commercial window cleaning for offices and commercial buildings in San Diego.",
      tags: [
        "Interior and exterior cleaning",
        "Streak and smudge removal",
        "Safe window-cleaning techniques",
      ],
      image: getImage(data.windowImage)!,
      imageAlt: "Commercial window cleaning in San Diego",
      href: config.serviceCards[5].path,
    },
  ]

  return (
    <GeoHubLandingPage config={config} services={services}>
      <RelatedServices
        subtitle="Specialty Cleaning"
        title="Deep & Green Cleaning"
        description="For facilities that need specialized care, our deep cleaning service focuses on detailed and hard-to-reach areas, while green cleaning provides an eco-friendly option for San Diego businesses. Explore each service for complete details."
        services={config.specialtyServices}
      />
      <RelatedServices
        subtitle="Facility Support"
        title="Commercial property maintenance"
        services={config.supportServices}
      />
    </GeoHubLandingPage>
  )
}

export const Head = () => <GeoLandingHead config={config} />

export default CommercialCleaningSanDiego
