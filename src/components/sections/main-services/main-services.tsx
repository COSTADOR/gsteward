import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import "./main-services.scss"

const MainServices: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      janitorialImage: file(relativePath: { eq: "janitorial.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 700, formats: [AUTO, WEBP, AVIF], placeholder: BLURRED, quality: 70)
        }
      }
      maintenanceImage: file(relativePath: { eq: "maintenance.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 700, formats: [AUTO, WEBP, AVIF], placeholder: BLURRED, quality: 70)
        }
      }
    }
  `)
  
  const services = [
    {
      title: "Janitorial",
      description:
        "Our professional janitorial services ensure your business maintains a clean, hygienic, and welcoming environment.",
      image: getImage(data.janitorialImage),
      link: "/janitorial/",
    },
    {
      title: "Maintenance",
      description:
        "Our maintenance solutions help keep your facilities running smoothly, from repairs to preventative care.",
      image: getImage(data.maintenanceImage),
      link: "/maintenance/",
    },
  ]
  
  return (
    <section id="main-services" className="main-services">
      <div className="main-services__container container">
        <div className="main-services__subtitle">Services</div>
        <h2 className="main-services__title title-lg">
          Tailored cleaning solutions for <em>every need</em>
        </h2>
        <p className="main-services__description">
          Discover cleaning solutions tailored to your business. From routine
          janitorial services to specialized deep cleaning, we deliver unmatched
          quality every time.
        </p>
        <div className="main-services__content">
          {services.map((service, index) => (
            <div key={index} className="main-services__item">
              <div className="main-services__image">
                <GatsbyImage image={service.image!} alt={service.title} className="main-services__image-content" />
              </div>
              <div className="main-services__item--content">
                <h2 className="main-services__heading">{service.title}</h2>
                <p className="main-services__description">{service.description}</p>
                <Link to={service.link} className="button button--secondary with-icon icon-right">
                  Explore Services
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MainServices
