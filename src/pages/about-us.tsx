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
          gatsbyImageData(width: 970, formats: [AUTO, WEBP, AVIF], placeholder: BLURRED)
        }
      }
    }
  `)
    
    const title = `Committed to quality,
              <br /> ⎯ <em>backed by experience</em>`
    const description = `Steward Cleaning isn’t just a cleaning company — it’s a team of professionals dedicated to delivering exceptional results. We pride ourselves on our attention to detail, commitment to quality, and focus on building long-term relationships with our clients.`
    
    const ctaTitle = `Ready to Partner with Steward Cleaning?`
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

export default AboutUs
