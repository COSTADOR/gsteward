import type { FaqItem } from "../types/faq.types"

export const createFaqSchema = (items: FaqItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map(item => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.schemaAnswer ?? item.answer,
    },
  })),
})
