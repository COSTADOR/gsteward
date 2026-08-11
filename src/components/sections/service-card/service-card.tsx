import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import "./service-card.scss"
import type { Service } from "../../../types/service.types"

const ServiceCard: React.FC<Service> = ({
  title,
  description,
  tags,
  image,
  imageAlt,
  href,
}) => {
  return (
    <div className="service-card">
      <div className="service-card__image">
        <GatsbyImage
          image={image}
          alt={imageAlt || title}
          className="service-card__image-content"
        />
      </div>
      <div className="service-card__content">
        <h3 className="service-card__title">{title}</h3>
        <p className="service-card__description">{description}</p>
        <div className="service-card__tags">
          {tags.map(tag => (
            <span key={tag} className="service-card__tag">
              {tag}
            </span>
          ))}
        </div>
        {href && (
          <Link to={href} className="service-card__link">
            Learn More
          </Link>
        )}
      </div>
    </div>
  )
}

export default ServiceCard
