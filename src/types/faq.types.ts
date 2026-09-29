export interface FaqAnswerLink {
  label: string
  href: string
}

export interface FaqItem {
  question: string
  answer: string
  links?: FaqAnswerLink[]
  schemaAnswer?: string
}
