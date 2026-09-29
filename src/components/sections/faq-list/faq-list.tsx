import React from "react"
import { Link } from "gatsby"
import type { FaqItem } from "../../../types/faq.types"
import "./faq-list.scss"

interface FaqListProps {
  items: FaqItem[]
}

const renderAnswer = (item: FaqItem): React.ReactNode[] => {
  let content: React.ReactNode[] = [item.answer]

  item.links?.forEach((link, linkIndex) => {
    let hasLinkedMatch = false

    content = content.flatMap((part, partIndex) => {
      if (typeof part !== "string" || hasLinkedMatch) return [part]

      const matchIndex = part.indexOf(link.label)

      if (matchIndex === -1) return [part]

      hasLinkedMatch = true

      const linkedText = link.href.startsWith("/") ? (
        <Link
          className="faq-list__answer-link"
          to={link.href}
          key={`${link.href}-${linkIndex}-${partIndex}`}
        >
          {link.label}
        </Link>
      ) : (
        <a
          className="faq-list__answer-link"
          href={link.href}
          key={`${link.href}-${linkIndex}-${partIndex}`}
        >
          {link.label}
        </a>
      )

      return [
        part.slice(0, matchIndex),
        linkedText,
        part.slice(matchIndex + link.label.length),
      ]
    })
  })

  return content
}

const FaqList: React.FC<FaqListProps> = ({ items }) => (
  <section className="faq-list" aria-label="Frequently asked questions">
    <div className="faq-list__container container">
      {items.map((item, index) => (
        <details className="faq-list__item" key={item.question}>
          <summary className="faq-list__question">
            <span className="faq-list__number" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="faq-list__question-text">{item.question}</span>
            <span className="faq-list__icon" aria-hidden="true" />
          </summary>
          <div className="faq-list__answer">
            <p>{renderAnswer(item)}</p>
          </div>
        </details>
      ))}
    </div>
  </section>
)

export default FaqList
