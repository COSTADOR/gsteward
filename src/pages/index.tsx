import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/common/layout/layout"
import Hero from "../components/sections/hero/hero"
import Steps from "../components/sections/steps/steps"
import Features from "../components/sections/features/features"
import MainServices from "../components/sections/main-services/main-services"
import Contact from "../components/sections/contact/contact"
import Seo from "../components/common/seo/seo"

const seo = {
  title: "Commercial & Office Cleaning San Diego | Good Steward",
  description:
    "Reliable commercial & office cleaning in San Diego & Oceanside. Good Steward's in-house team delivers custom, dependable service. Get a free quote today.",
  pathname: "/",
}

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

export const Head = () => <Seo {...seo} />

export default IndexPage
