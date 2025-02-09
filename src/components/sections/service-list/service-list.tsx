import React from "react"
import ServiceCard from "../service-card/service-card"
import "./service-list.scss"
import { IGatsbyImageData } from "gatsby-plugin-image"

interface Service {
  title: string
  description: string
  tags: string[]
  image: IGatsbyImageData
}

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
            <React.Fragment key={index}>
              <ServiceCard key={index} {...service} />
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
