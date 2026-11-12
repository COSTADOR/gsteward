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

export const COMMERCIAL_CLEANING_CHECKLIST_ARTICLE: BlogArticleSummary = {
  slug: "commercial-cleaning-checklist",
  path: ROUTES.blog.commercialCleaningChecklist,
  title: "What’s Included in a Commercial Cleaning Service? (Full Checklist)",
  seoTitle: "Commercial Cleaning Checklist: What's Included | San Diego",
  description:
    "What does commercial cleaning include? See a full checklist of routine tasks, specialized services, and common exclusions for San Diego businesses.",
  excerpt:
    "See a full checklist of routine commercial cleaning tasks, specialized services, and common exclusions for San Diego businesses.",
  publishedAt: "2026-11-12",
  publishedLabel: "November 12, 2026",
  modifiedAt: "2026-11-12",
  author: "Christina Okhotin",
  image: "/images/blog/commercial-cleaning-team-facility-hallway.webp",
  imageAlt:
    "Good Steward commercial cleaning team walking through a facility hallway with equipment",
}

export const BLOG_ARTICLES: BlogArticleSummary[] = [
  COMMERCIAL_CLEANING_CHECKLIST_ARTICLE,
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

export const COMMERCIAL_CLEANING_CHECKLIST_FAQ: FaqItem[] = [
  {
    question: "What tasks does commercial cleaning include?",
    answer:
      "Commercial cleaning usually includes routine tasks like emptying trash cans, dusting, vacuuming, mopping, and cleaning restrooms and break rooms. Depending on the facility, it may also include maintaining reception areas, meeting rooms, classrooms, and other shared spaces. The exact scope of work depends on your building's needs and the services outlined in your cleaning agreement.",
  },
  {
    question: "Does commercial cleaning include deep cleaning?",
    answer:
      "Not always. Most routine cleaning services focus on maintenance. This includes recurring tasks like wiping surfaces, cleaning floors, and taking out trash. Deep cleaning involves more intensive attention to areas that may be harder to reach. Some companies offer deep cleaning as an additional service. Others may incorporate specialized tasks into a customized cleaning plan. Clarify what's included before you sign.",
  },
  {
    question: "Are cleaning supplies included in commercial cleaning services?",
    answer:
      "This depends on two things: the cleaning company and the terms of your agreement. Some providers supply cleaning products and equipment. Some may require the facility to provide certain items. Restroom consumables, such as toilet paper, paper towels, and hand soap, may also be handled separately. Ask each provider what they supply.",
  },
  {
    question: "How often should a commercial building be cleaned?",
    answer:
      "The frequency of cleaning depends on how your facility is used. Spaces with high foot traffic and frequently used restrooms or shared spaces may need daily cleaning. Other areas may only need attention a few times a week. Your cleaning schedule should reflect the amount of foot traffic coming in and the types of activities taking place.",
  },
  {
    question:
      "What is the difference between janitorial services and commercial cleaning?",
    answer:
      "The terms commercial janitorial services and commercial cleaning are often used interchangeably. Both can include routine tasks like emptying trash, cleaning restrooms, maintaining floors, and tidying shared spaces. Commercial cleaning is a larger umbrella term that can also refer to more specialized services. This includes deep cleaning, carpet extraction, and hard-floor maintenance. However, it’s most important to understand which specific tasks a company includes in its service agreement. Good Steward's janitorial services in San Diego cover both.",
  },
]
