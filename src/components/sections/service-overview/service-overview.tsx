import React from "react"
import type { Service } from "../../../types/service.types"
import ServiceCard from "../service-card/service-card"
import "./service-overview.scss"

const ServiceOverview: React.FC<Service> = props => (
  <section className="service-overview">
    <div className="service-overview__container container">
      <ServiceCard {...props} variant="standalone" headingLevel={2} />
    </div>
  </section>
)

export default ServiceOverview
