import React from "react"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import "./service-card.scss"

interface ServiceCardProps {
  title: string
  description: string
  tags: string[]
  image: IGatsbyImageData
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, tags, image }) => {
  return (
    <div className="service-card">
      <div className="service-card__image">
        <GatsbyImage image={image} alt={title} className="service-card__image-content" />
      </div>
      <div className="service-card__content">
        <h3 className="service-card__title">{title}</h3>
        <p className="service-card__description">{description}</p>
        <div className="service-card__tags">
          {tags.map((tag, index) => (
            <span key={index} className="service-card__tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
