import React from "react"
import { Link } from "gatsby"
import "./service-hero.scss"

interface ServiceHeroProps {
  subtitle: string
  title: string
  description: string
  stats: {
    number: string
    label: string
  }[]
}

const ServiceHero: React.FC<ServiceHeroProps> = ({
  subtitle,
  title,
  description,
  stats,
}) => {
  return (
    <section className="service-hero">
      <div className="service-hero__container container">
        <div className="service-hero__header">
          <div className="service-hero__subtitle">{subtitle}</div>
          <h1 className="service-hero__title title-xxl">{title}</h1>
          <p className="service-hero__description">{description}</p>
        </div>
        <div className="service-hero__stats">
          {stats.map((stat, index) => (
            <div key={index} className="service-hero__stat">
              <span className="service-hero__stat-number">{stat.number}</span>
              <span className="service-hero__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
        <div className="service-hero__cta">
          <div>
            Let’s get started on your cleaning project—click to request your
            personalized quote!
          </div>
          <Link to="/contact-us" className="button button--primary with-icon">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServiceHero
