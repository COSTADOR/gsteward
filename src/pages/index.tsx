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
          gatsbyImageData(width: 940, formats: [AUTO, WEBP, AVIF], placeholder: BLURRED, quality: 80)
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
    <title>Home - Good Steward Cleaning</title>
    <meta name="description" content="Good Steward Cleaning provides top-quality janitorial and maintenance services for commercial and office spaces." />
    <meta property="og:title" content="Home - Good Steward Cleaning" />
    <meta property="og:description" content="Good Steward Cleaning provides top-quality janitorial and maintenance services for commercial and office spaces." />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="/images/logo.svg" />
    <meta property="og:url" content="https://www.gsteward.com/" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Home - Good Steward Cleaning" />
    <meta name="twitter:description" content="Good Steward Cleaning provides top-quality janitorial and maintenance services for commercial and office spaces." />
    <meta name="twitter:image" content="/images/logo.svg" />
  </>
)

export default IndexPage
