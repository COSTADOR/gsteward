import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import "./service-card.scss"
import type { Service } from "../../../types/service.types"

interface ServiceCardProps extends Service {
  variant?: "default" | "standalone"
  headingLevel?: 2 | 3
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  tags,
  image,
  imageAlt,
  href,
  variant = "default",
  headingLevel = 3,
}) => {
  const Title = headingLevel === 2 ? "h2" : "h3"

  return (
    <div
      className={`service-card ${
        variant === "standalone" ? "service-card--standalone" : ""
      }`}
    >
      <div className="service-card__image">
        <GatsbyImage
          image={image}
          alt={imageAlt || title}
          className="service-card__image-content"
        />
      </div>
      <div className="service-card__content">
        <Title className="service-card__title">{title}</Title>
        {description && (
          <p className="service-card__description">{description}</p>
        )}
        <div className="service-card__tags">
          {tags.map(tag => (
            <span key={tag} className="service-card__tag">
              {tag}
            </span>
          ))}
        </div>
        {href && (
          <Link
            to={href}
            className="service-card__link button button--secondary with-icon icon-right"
          >
            Learn More
          </Link>
        )}
      </div>
    </div>
  )
}

export default ServiceCard
