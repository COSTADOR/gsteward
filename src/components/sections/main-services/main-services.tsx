import React from "react"
import { Link } from "gatsby"
import "./main-services.scss"

const services = [
  {
    title: "Janitorial",
    description:
      "Our professional janitorial services ensure your business maintains a clean, hygienic, and welcoming environment.",
    image: "/images/janitorial.jpg",
    link: "/janitorial/",
  },
  {
    title: "Maintenance",
    description:
      "Our maintenance solutions help keep your facilities running smoothly, from repairs to preventative care.",
    image: "/images/maintenance.jpg",
    link: "/maintenance/",
  },
]

const MainServices: React.FC = () => {
  return (
    <section id="main-services" className="main-services">
      <div className="main-services__container container">
        <div className="main-services__subtitle">Services</div>
        <h2 className="main-services__title title-lg">
          Tailored cleaning solutions for <em>every need</em>
        </h2>
        <div className="main-services__description">
          Discover cleaning solutions tailored to your business. From routine
          janitorial services to specialized deep cleaning, we deliver unmatched
          quality every time.
        </div>
        <div className="main-services__content">
          {services.map((service, index) => (
            <div key={index} className="main-services__item">
              <div className="main-services__image">
                <img src={service.image} alt={service.title} />
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
