import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/common/layout/layout"
import Hero from "../components/sections/hero/hero"
import Steps from "../components/sections/steps/steps"
import Features from "../components/sections/features/features"
import MainServices from "../components/sections/main-services/main-services"
import Contact from "../components/sections/contact/contact"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: { eq: "hero-main.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 940, formats: [AUTO, WEBP, AVIF], placeholder: BLURRED, quality: 65)
        }
      }
    }
  `)
  
  const title = `Your space, <em>our expertise</em>
            <br /> — quality cleaning
            <br /> you can trust`
  const description = `From offices to commercial spaces, our professional cleaning services deliver unmatched quality and a spotless experience.`
  
  return (
    <Layout className="main-page">
      <Hero
        title={title}
        description={description}
        showServicesButton={true}
        imgData={data.heroImage.childImageSharp.gatsbyImageData}
      />
      <Steps />
      <Features />
      <MainServices />
      <Contact />
    </Layout>
  )
}

export const Head = () => (
  <>
    <title>Commercial & Office Cleaning San Diego | Good Steward</title>
    <meta name="description" content="Reliable commercial & office cleaning in San Diego & Oceanside. Good Steward's in-house team delivers custom, dependable service. Get a free quote today." />
    <meta property="og:title" content="Commercial & Office Cleaning San Diego | Good Steward" />
    <meta property="og:description" content="Reliable commercial & office cleaning in San Diego & Oceanside. Good Steward's in-house team delivers custom, dependable service. Get a free quote today." />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="/images/logo.svg" />
    <meta property="og:url" content="https://www.gsteward.com/" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Commercial & Office Cleaning San Diego | Good Steward" />
    <meta name="twitter:description" content="Reliable commercial & office cleaning in San Diego & Oceanside. Good Steward's in-house team delivers custom, dependable service. Get a free quote today." />
    <meta name="twitter:image" content="/images/logo.svg" />
  </>
)

export default IndexPage
