import React from "react"
import ServiceCard from "../service-card/service-card"
import "./service-list.scss"
import type { Service } from "../../../types/service.types"

interface ServiceListProps {
  services: Service[]
}

const ServiceList: React.FC<ServiceListProps> = ({ services }) => {
  return (
    <section className="service-list">
      <div className="service-list__container container">
        <h2 className="service-list__title title-lg">Services</h2>
        <div className="service-list__content">
          {services.map((service, index) => (
            <React.Fragment key={service.title}>
              <ServiceCard {...service} />
              {index < services.length - 1 && (
                <hr className="service-list__divider" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceList
