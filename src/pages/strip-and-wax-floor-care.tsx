import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import {
  ServiceLandingHead,
  ServiceLandingPage,
} from "../components/templates/service-landing-page/service-landing-page"
import { servicePages } from "../data/service-pages.data"

const config = servicePages.stripAndWax

const StripAndWaxFloorCare = () => {
  const data = useStaticQuery(graphql`
    query {
      serviceImage: file(relativePath: { eq: "janitorial/service5.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 900, formats: [AUTO, WEBP, AVIF], placeholder: BLURRED, quality: 90)
        }
      }
    }
  `)

  return <ServiceLandingPage config={config} image={getImage(data.serviceImage)!} />
}

export const Head = () => <ServiceLandingHead config={config} />

export default StripAndWaxFloorCare
