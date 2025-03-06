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
    <title>About Us - Good Steward Cleaning</title>
    <meta name="description" content="Learn more about Good Steward Cleaning – a team of professionals dedicated to delivering high-quality, client-centered cleaning solutions with trust and integrity." />
    <meta property="og:title" content="About Us - Good Steward Cleaning" />
    <meta property="og:description" content="We take pride in our commitment to quality, integrity, and sustainability. Discover why businesses trust Good Steward Cleaning for their cleaning needs." />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="/images/logo.svg" />
    <meta property="og:url" content="https://www.gsteward.com/about-us" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="About Us - Good Steward Cleaning" />
    <meta name="twitter:description" content="At Good Steward Cleaning, we focus on quality, integrity, and client satisfaction. Learn more about our values and commitment to excellence." />
    <meta name="twitter:image" content="/images/logo.svg" />
    <link rel="canonical" href="https://www.gsteward.com/about-us" />
  </>
)

export default AboutUs
