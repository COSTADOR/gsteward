import React from "react"
import { Link } from "gatsby"
import "./related-services.scss"

interface RelatedService {
  title: string
  path: string
}

interface RelatedServicesProps {
  services: RelatedService[]
}

const RelatedServices: React.FC<RelatedServicesProps> = ({ services }) => (
  <section className="related-services">
    <div className="related-services__container container">
      <div className="related-services__subtitle">Related Services</div>
      <h2 className="related-services__title title-lg">
        Explore more cleaning services
      </h2>
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
