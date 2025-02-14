import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image"
import "./hero.scss"

interface HeroProps {
  title: string
  description: string
  imgData: IGatsbyImageData
  showServicesButton?: boolean
  backgroundClass?: string
}

const scrollToServices = () => {
  const section = document.getElementById("main-services")
  if (section) {
    section.scrollIntoView({ behavior: "smooth" })
  }
}

const Hero: React.FC<HeroProps> = ({
                                     title,
                                     description,
                                     imgData,
                                     showServicesButton = false,
                                     backgroundClass = "hero__default",
                                   }) => {
  return (
    <section className="hero">
      <div className={`hero__container container ${backgroundClass}`}>
        <GatsbyImage image={getImage(imgData)!} alt="hero photo section" className="hero__image" />
        <div className="hero__text">
          <h1
            className="title-xl hero__title"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p className="hero__description">{description}</p>
          <div className="hero__buttons">
            <Link to="/contact-us" className="button button--primary with-icon">
              Contact Us
            </Link>
            {showServicesButton && (
              <button
                onClick={scrollToServices}
                className="button button--secondary button--services"
              >
                Explore Services →
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
