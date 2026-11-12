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

export const WHAT_IS_COMMERCIAL_CLEANING_ARTICLE: BlogArticleSummary = {
  slug: "what-is-commercial-cleaning",
  path: ROUTES.blog.whatIsCommercialCleaning,
  title:
    "What is Commercial Cleaning? A Complete Guide for San Diego Businesses",
  seoTitle: "What Is Commercial Cleaning? San Diego Guide | Good Steward",
  description:
    "Learn what commercial cleaning includes, which services San Diego businesses need, and how to choose a cleaning company for your office, school, or church.",
  excerpt:
    "Learn what commercial cleaning includes, how it differs from janitorial services, and what San Diego businesses should look for in a cleaning company.",
  publishedAt: "2026-11-12",
  publishedLabel: "November 12, 2026",
  modifiedAt: "2026-11-12",
  author: "Christina Okhotin",
  image: "/images/blog/commercial-cleaning-school-classroom-san-diego.webp",
  imageAlt:
    "Good Steward team cleaning a school classroom with backpack vacuums and mops in San Diego",
}

export const BLOG_ARTICLES: BlogArticleSummary[] = [
  WHAT_IS_COMMERCIAL_CLEANING_ARTICLE,
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

export const WHAT_IS_COMMERCIAL_CLEANING_FAQ: FaqItem[] = [
  {
    question: "What is commercial cleaning?",
    answer:
      "Commercial cleaning is the professional cleaning and maintenance of business facilities. It may include routine janitorial services, deep cleaning, or other agreed-upon services.",
  },
  {
    question: "What is included in commercial cleaning services?",
    answer:
      "The most common tasks include emptying trash, vacuuming and mopping floors, and cleaning restrooms and kitchens. Specialized services like carpet extraction depend on your specific contract.",
  },
  {
    question:
      "What is the difference between commercial cleaning and janitorial services?",
    answer:
      "Janitorial services mostly consist of routine maintenance, while commercial cleaning covers a broader range of services.",
  },
  {
    question:
      "How do I find commercial cleaning services near me in San Diego?",
    answer:
      "Search for a provider that services your type of facility, offers a clear scope of work, and can conduct an in-person walkthrough.",
  },
  {
    question: "Do commercial cleaning companies provide their own staff?",
    answer:
      "Commercial cleaning companies use different staffing models. Some use in-house teams, while others subcontract the work. Ask cleaning companies who will perform the cleaning and who will be accountable for service concerns. Good Steward provides its own reputable cleaning staff rather than outsource the work.",
  },
]
