import React from "react"
import { Link } from "gatsby"
import "./call-to-action.scss"

interface CtaServicesProps {
  title: string
  description: string
  phone?: boolean
}

const CtaServices: React.FC<CtaServicesProps> = ({ title, description, phone }) => {
  return (
    <section className="cta">
      <div className="cta__container container">
        <h2 className="cta__title title-lg">{title}</h2>
        <div
          className="cta__description"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <div className="cta__buttons">
          {phone ? (
            <a href="tel:+18583797770" className="button button--primary with-icon">
              1 (858)-379-7770
            </a>
          ) : (
            <Link to="/contact-us" className="button button--primary with-icon">
              Contact Us
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}

export default CtaServices
