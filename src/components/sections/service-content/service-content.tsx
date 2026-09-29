import React from "react"
import { Link } from "gatsby"
import type { ContextualServiceLink } from "../../../types/service-page.types"
import "./service-content.scss"

interface ServiceContentProps {
  text: string
  links: ContextualServiceLink[]
}

const renderLinkedText = (
  text: string,
  links: ContextualServiceLink[]
): React.ReactNode[] => {
  let content: React.ReactNode[] = [text]

  links.forEach((link, linkIndex) => {
    let hasLinkedMatch = false

    content = content.flatMap((part, partIndex) => {
      if (typeof part !== "string" || hasLinkedMatch) {
        return [part]
      }

      const matchIndex = part.indexOf(link.label)

      if (matchIndex === -1) {
        return [part]
      }

      hasLinkedMatch = true

      return [
        part.slice(0, matchIndex),
        <Link
          className="service-content__link"
          to={link.path}
          key={`${link.path}-${linkIndex}-${partIndex}`}
        >
          {link.label}
        </Link>,
        part.slice(matchIndex + link.label.length),
      ]
    })
  })

  return content
}

const ServiceContent: React.FC<ServiceContentProps> = ({ text, links }) => (
  <section className="service-content" aria-label="Service details">
    <div className="service-content__container container">
      <p className="service-content__text">{renderLinkedText(text, links)}</p>
    </div>
  </section>
)

export default ServiceContent
