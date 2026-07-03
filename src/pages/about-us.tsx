import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/common/layout/layout"
import Steps from "../components/sections/steps/steps"
import Features from "../components/sections/features/features"
import CallToAction from "../components/sections/call-to-action/call-to-action"
import CoreValues from "../components/sections/core-values/core-values"
import Hero from "../components/sections/hero/hero"

const AboutUs = () => {
    const data = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: { eq: "hero-about-us.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 970, formats: [AUTO, WEBP, AVIF], placeholder: BLURRED, quality: 65)
        }
      }
    }
  `)
    
    const title = `Committed to quality,
              <br /> ⎯ <em>backed by experience</em>`
    const description = `Good Steward Cleaning isn’t just a cleaning company — it’s a team of professionals dedicated to delivering exceptional results. We pride ourselves on our attention to detail, commitment to quality, and focus on building long-term relationships with our clients.`
    
    const ctaTitle = `Ready to Partner with Good Steward Cleaning?`
    const ctaDescription = `Experience the difference with a team that values your trust, prioritizes quality, and always<br/> delivers on its promises. Let’s build a cleaner, healthier environment for your business.`
    
    return (
      <Layout>
          <Hero
            title={title}
            description={description}
            imgData={data.heroImage.childImageSharp.gatsbyImageData}
            backgroundClass="hero__about-us"
          />
          <CoreValues />
          <Steps />
          <Features />
          <CallToAction title={ctaTitle} description={ctaDescription} />
      </Layout>
    )
}

export const Head = () => (
  <>
    <title>About Good Steward Cleaning | San Diego & Oceanside</title>
    <meta name="description" content="Meet Good Steward Cleaning — a San Diego & Oceanside commercial cleaning company with an in-house team, no outsourcing, and a relationship-first approach." />
    <meta property="og:title" content="About Good Steward Cleaning | San Diego & Oceanside" />
    <meta property="og:description" content="Meet Good Steward Cleaning — a San Diego & Oceanside commercial cleaning company with an in-house team, no outsourcing, and a relationship-first approach." />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="/images/logo.svg" />
    <meta property="og:url" content="https://www.gsteward.com/about-us" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="About Good Steward Cleaning | San Diego & Oceanside" />
    <meta name="twitter:description" content="Meet Good Steward Cleaning — a San Diego & Oceanside commercial cleaning company with an in-house team, no outsourcing, and a relationship-first approach." />
    <meta name="twitter:image" content="/images/logo.svg" />
    <link rel="canonical" href="https://www.gsteward.com/about-us" />
  </>
)

export default AboutUs
