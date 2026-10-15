import { ROUTES } from "../constants/routes.const"
import type { BlogArticleSummary } from "../types/blog.types"
import type { FaqItem } from "../types/faq.types"

export const OFFICE_CLEANING_COST_ARTICLE: BlogArticleSummary = {
  slug: "office-cleaning-cost-san-diego",
  path: ROUTES.blog.officeCleaningCostSanDiego,
  title: "How Much Does Commercial & Office Cleaning Cost in San Diego?",
  seoTitle: "Office Cleaning Cost in San Diego: 2026 Pricing Guide",
  description:
    "How much does office cleaning cost in San Diego? See 2026 per-square-foot rates, monthly examples, cost factors, and how to get an accurate quote.",
  excerpt:
    "See 2026 per-square-foot rates, monthly examples, cost factors, and how to get an accurate office cleaning quote in San Diego.",
  publishedAt: "2026-10-15",
  publishedLabel: "October 15, 2026",
  modifiedAt: "2026-10-15",
  author: "Christina Okhotin",
  image: "/images/blog/office-cleaning-team-san-diego.webp",
  imageAlt: "Good Steward team cleaning a commercial office in San Diego",
}

export const BLOG_ARTICLES: BlogArticleSummary[] = [
  OFFICE_CLEANING_COST_ARTICLE,
]

export const OFFICE_CLEANING_COST_FAQ: FaqItem[] = [
  {
    question: "How much does office cleaning cost in San Diego?",
    answer:
      "Current 2026 market research puts recurring office cleaning in San Diego around $0.10–$0.20+ per square foot per visit. However, quotes can fall outside of this range depending on the scope and frequency of work.",
    schemaAnswer:
      "Current 2026 market research puts recurring office cleaning in San Diego around $0.10–$0.20+ per square foot per visit. However, quotes can fall outside of this range depending on the scope and frequency of work. These are not Good Steward published prices.",
  },
  {
    question: "How much do janitorial services cost in San Diego?",
    answer:
      "Recurring janitorial services in San Diego are usually priced like office cleaning: per square foot, per visit. The final price depends on how often the crew comes, which tasks happen every visit, and the type of facility.",
  },
  {
    question: "Is commercial cleaning priced by the hour or by square foot?",
    answer:
      "Both models can be used. Per-square-foot pricing is more common for recurring commercial cleaning. Hourly pricing may be used for one-time/smaller/specialty jobs. The important thing is to understand what is included in the quoted price.",
  },
  {
    question: "How often should an office be professionally cleaned?",
    answer:
      "Most offices need professional cleaning anywhere from once a week to every business day. Low-traffic offices with few visitors can often get by with weekly cleaning. Customer-facing offices usually need cleaning about three times a week. Offices with heavy kitchen or restroom use typically need daily service.",
  },
  {
    question: "How do I get an accurate office cleaning quote?",
    answer:
      "Share your approximate square footage, how often you want cleaning, your facility type, and the areas or services you need. Then schedule an on-site walkthrough so the cleaning company can see the space and give you a customized estimate.",
  },
]
