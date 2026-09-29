import { CONTACT_INFO } from "../constants/contacts.const"
import { ROUTES } from "../constants/routes.const"
import type { FaqItem } from "../types/faq.types"

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What is commercial cleaning?",
    answer:
      "Commercial cleaning is professional cleaning for business facilities — offices, medical suites, schools, gyms, and retail spaces. It covers routine janitorial work such as dusting, vacuuming, trash removal, and restroom sanitation, along with deeper services like deep cleaning, disinfection, and window cleaning. Good Steward Cleaning provides commercial cleaning across San Diego and Oceanside with an in-house team.",
    links: [{ label: "deep cleaning", href: ROUTES.services.deepCleaning }],
  },
  {
    question:
      "What's the difference between janitorial and commercial cleaning?",
    answer:
      '"Commercial cleaning" is the umbrella term for cleaning any business facility, while "janitorial" usually refers to the routine, day-to-day upkeep within it — trash, restrooms, floors, and common areas. Most businesses need both ongoing janitorial service and periodic deep or specialized cleaning, and Good Steward Cleaning offers the full range.',
    links: [{ label: "janitorial service", href: ROUTES.janitorial }],
    schemaAnswer:
      "Commercial cleaning is the umbrella term for cleaning any business facility, while janitorial usually refers to the routine, day-to-day upkeep within it — trash, restrooms, floors, and common areas. Most businesses need both ongoing janitorial service and periodic deep or specialized cleaning, and Good Steward Cleaning offers the full range.",
  },
  {
    question: "What's included in a commercial cleaning service?",
    answer:
      "A typical service includes dusting, vacuuming and mopping, trash removal, restroom cleaning and restocking, and breakroom and common-area cleaning. Add-ons can include deep cleaning, sanitation and disinfection, floor strip and wax, carpet and floor care, and day porter service. We build a custom checklist for each client.",
    links: [
      { label: "deep cleaning", href: ROUTES.services.deepCleaning },
      {
        label: "sanitation and disinfection",
        href: ROUTES.services.sanitationCleaning,
      },
      {
        label: "strip and wax",
        href: ROUTES.services.stripAndWaxFloorCare,
      },
      {
        label: "carpet and floor care",
        href: ROUTES.services.commercialFloorCare,
      },
      {
        label: "day porter service",
        href: ROUTES.services.dayPorterServices,
      },
    ],
  },
  {
    question: "How much does commercial or office cleaning cost in San Diego?",
    answer:
      "Pricing depends on your square footage, cleaning frequency, facility type, and scope of work, so providers usually quote per visit, per month, or per square foot rather than a flat rate. The most accurate way to get a number is a free on-site walkthrough — contact Good Steward Cleaning for a custom quote.",
    links: [
      {
        label: "contact Good Steward Cleaning",
        href: ROUTES.contactUs,
      },
    ],
  },
  {
    question: "How do I choose a commercial cleaning company in San Diego?",
    answer:
      "Look for a company with an in-house (not subcontracted) team, consistent crews, clear scope and pricing, and strong local reviews. Ask whether they offer a walkthrough and a written plan. Good Steward Cleaning is locally based in San Diego and Oceanside and never outsources its work.",
  },
  {
    question: "How often should my workplace be cleaned?",
    answer:
      "It depends on foot traffic, facility type, and your industry. Many offices choose daily or several-times-weekly service, while smaller spaces may only need weekly cleaning. Medical, food-service, and high-traffic facilities usually need more frequent cleaning and disinfection — we'll recommend a frequency during your walkthrough.",
    schemaAnswer:
      "It depends on foot traffic, facility type, and your industry. Many offices choose daily or several-times-weekly service, while smaller spaces may only need weekly cleaning. Medical, food-service, and high-traffic facilities usually need more frequent cleaning and disinfection.",
  },
  {
    question: "Do you offer after-hours, weekend, or one-time cleaning?",
    answer:
      "Yes. We schedule around your business hours — including evenings and weekends — so cleaning never disrupts your team. We provide recurring service (daily, weekly, or custom) as well as one-time deep cleans and special-event cleaning.",
  },
  {
    question: "What areas do you serve?",
    answer: `Good Steward Cleaning serves San Diego and North County, with offices in San Diego (92127) and Oceanside (92054). We cover the greater San Diego metro and the North County coast, including communities like Carlsbad and Vista. Call ${CONTACT_INFO.phoneLocal} to confirm service for your location.`,
    links: [{ label: CONTACT_INFO.phoneLocal, href: CONTACT_INFO.phoneHref }],
    schemaAnswer:
      "Good Steward Cleaning serves San Diego and North County, with offices in San Diego (92127) and Oceanside (92054). We cover the greater San Diego metro and the North County coast, including communities like Carlsbad and Vista.",
  },
  {
    question: "Are your cleaners insured and background-checked?",
    answer:
      "All work is done by our own in-house staff — never subcontractors — so the same trusted, accountable team cleans your space every visit. Ask your account manager for our current insurance and screening details for your specific facility.",
    schemaAnswer:
      "All work is done by our own in-house staff — never subcontractors — so the same trusted, accountable team cleans your space every visit.",
  },
  {
    question: "Do you use eco-friendly (green) cleaning products?",
    answer:
      "Yes. We offer green cleaning using organic, biodegradable products and practices that reduce water and energy use — effective results that are safer for your staff, visitors, and the environment. Just ask for green cleaning when you request your quote.",
    links: [{ label: "green cleaning", href: ROUTES.services.greenCleaning }],
    schemaAnswer:
      "Yes. We offer green cleaning using organic, biodegradable products and practices that reduce water and energy use — effective results that are safer for your staff, visitors, and the environment.",
  },
]
