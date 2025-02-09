import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "./steps.scss"
import { Link } from "gatsby"

const steps = [
  {
    number: "01",
    title: "Schedule a Consultation",
    description:
      "Connect with us to discuss your cleaning needs and schedule an initial meeting.",
  },
  {
    number: "02",
    title: "On-Site Walkthrough",
    description:
      "We'll visit your space to evaluate its condition and customize a plan that works for you.",
  },
  {
    number: "03",
    title: "Service Begins",
    description:
      "Our expert team will get started, ensuring top-quality cleaning, health, and hygiene.",
  },
]

const Steps: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      stepsImage: file(relativePath: { eq: "steps-image.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 600, formats: [AUTO, WEBP, AVIF], placeholder: BLURRED, quality: 90)
        }
      }
    }
  `)
  
  return (
    <section className="steps">
      <div className="steps__container container">
        <h2 className="steps__title title-lg">
          How we work <br />
          <em>— Your seamless cleaning journey</em>
        </h2>
        <div className="steps__content">
          <div className="steps__list">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <div className="steps__item">
                  <span className="steps__item--number">{step.number}</span>
                  <div className="steps__item--content">
                    <h3 className="steps__item--heading">{step.title}</h3>
                    <p className="steps__item--description">
                      {step.description}
                    </p>
                  </div>
                </div>
                {index < steps.length - 1 && <hr className="steps__divider" />}
              </React.Fragment>
            ))}
            <Link
              to="/contact-us"
              className="button button--primary with-icon steps__action-button"
            >
              Contact Us
            </Link>
          </div>
          <div className="steps__image">
            <GatsbyImage
              image={getImage(data.stepsImage)!}
              alt="Worker"
              className="steps__image-content"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Steps
