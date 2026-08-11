import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import {
  GeoDetailLandingPage,
  GeoLandingHead,
} from "../components/templates/geo-landing-page/geo-landing-page"
import { geoPages } from "../data/geo-pages.data"

const config = geoPages.medicalOfficeCleaningSanDiego

const MedicalOfficeCleaningSanDiego = () => {
  const data = useStaticQuery(graphql`
    query {
      serviceImage: file(relativePath: { eq: "janitorial/service3.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 900, formats: [AUTO, WEBP, AVIF], placeholder: BLURRED, quality: 90)
        }
      }
    }
  `)

  return (
    <GeoDetailLandingPage
      config={config}
      image={getImage(data.serviceImage)!}
    />
  )
}

export const Head = () => <GeoLandingHead config={config} />

export default MedicalOfficeCleaningSanDiego
