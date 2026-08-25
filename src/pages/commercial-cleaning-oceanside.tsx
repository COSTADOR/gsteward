import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import {
  GeoDetailLandingPage,
  GeoLandingHead,
} from "../components/templates/geo-landing-page/geo-landing-page"
import OfficeLocation from "../components/sections/office-location/office-location"
import { geoPages } from "../data/geo-pages.data"

const config = geoPages.commercialCleaningOceanside

const CommercialCleaningOceanside = () => {
  const data = useStaticQuery(graphql`
    query {
      serviceImage: file(relativePath: { eq: "janitorial/service1.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 900
            formats: [AUTO, WEBP, AVIF]
            placeholder: BLURRED
            quality: 90
          )
        }
      }
    }
  `)

  return (
    <GeoDetailLandingPage
      config={config}
      image={getImage(data.serviceImage)!}
    >
      <OfficeLocation
        label={config.officeLabel}
        address={config.areaServed.officeAddress}
        googleMapsUrl={config.areaServed.googleMapsUrl}
      />
    </GeoDetailLandingPage>
  )
}

export const Head = () => <GeoLandingHead config={config} />

export default CommercialCleaningOceanside
