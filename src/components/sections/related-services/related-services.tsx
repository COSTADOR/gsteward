import React from "react"
import { Link } from "gatsby"
import "./related-services.scss"

interface RelatedService {
  title: string
  path: string
}

interface RelatedServicesProps {
  services: RelatedService[]
  subtitle?: string
  title?: string
  description?: string
}

const RelatedServices: React.FC<RelatedServicesProps> = ({
  services,
  subtitle = "Related Services",
  title = "Explore more cleaning services",
  description,
}) => (
  <section className="related-services">
    <div className="related-services__container container">
      <div className="related-services__subtitle">{subtitle}</div>
      <h2 className="related-services__title title-lg">{title}</h2>
      {description && (
        <p className="related-services__description">{description}</p>
      )}
      <div className="related-services__links">
        {services.map(service => (
          <Link
            className="button button--secondary with-icon icon-right"
            to={service.path}
            key={service.path}
          >
            {service.title}
          </Link>
        ))}
      </div>
    </div>
  </section>
)

export default RelatedServices
