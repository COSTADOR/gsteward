import type { ServicePageConfig } from "../types/service-page.types"
import { ROUTES } from "../constants/routes.const"

export const servicePages = {
  deepCleaning: {
    pathname: ROUTES.services.deepCleaning,
    seoTitle: "Deep Cleaning Services San Diego | Good Steward",
    seoDescription:
      "Thorough commercial deep cleaning in San Diego — high-touch sanitization, detailing & hard-to-reach area cleaning by our in-house team. Free quote.",
    h1: "Deep Cleaning Services in San Diego",
    eyebrow: "Professional Deep Cleaning Services",
    breadcrumbLabel: "Deep Cleaning",
    serviceType: "Commercial Deep Cleaning",
    introduction:
      "When your space requires more than surface-level care, our deep cleaning services tackle every nook and cranny, leaving your San Diego facility refreshed and immaculate.",
    included: [
      "High-touch surface sanitization",
      "Furniture and floor detailing",
      "Baseboard, vent, and hard-to-reach area cleaning",
    ],
    imageAlt: "Commercial deep cleaning services in San Diego",
    relatedServices: [
      {
        title: "Sanitation Cleaning",
        path: ROUTES.services.sanitationCleaning,
      },
      { title: "General Janitorial", path: ROUTES.janitorial },
      { title: "Green Cleaning", path: ROUTES.services.greenCleaning },
    ],
  },
  sanitationCleaning: {
    pathname: ROUTES.services.sanitationCleaning,
    seoTitle: "Sanitation Cleaning Services San Diego | Good Steward",
    seoDescription:
      "EPA-approved sanitation & disinfection cleaning for San Diego businesses. Health-compliant, hygienic results from our in-house team. Free quote.",
    h1: "Sanitation Cleaning Services in San Diego",
    eyebrow: "Health & Safety Focused Cleaning",
    breadcrumbLabel: "Sanitation Cleaning",
    serviceType: "Sanitation Cleaning",
    introduction:
      "Prioritize health and safety with our specialized sanitation cleaning services in San Diego. Using advanced techniques and EPA-approved products, we create a hygienic environment for staff and visitors.",
    included: [
      "Disinfection of high-traffic areas",
      "Customized solutions for specific needs",
      "Focus on health compliance",
    ],
    imageAlt: "Sanitation cleaning services in San Diego",
    relatedServices: [
      { title: "Deep Cleaning", path: ROUTES.services.deepCleaning },
      { title: "Green Cleaning", path: ROUTES.services.greenCleaning },
      { title: "Ozone Cleaning", path: ROUTES.services.ozoneCleaning },
      { title: "General Janitorial", path: ROUTES.janitorial },
    ],
  },
  dayPorterServices: {
    pathname: ROUTES.services.dayPorterServices,
    seoTitle: "Day Porter Services San Diego | Good Steward Cleaning",
    seoDescription:
      "Reliable day porter services in San Diego — restroom restocking, lobby upkeep & continuous cleaning throughout the day. Get a free quote today.",
    h1: "Day Porter Services in San Diego",
    eyebrow: "Consistent Cleanliness All Day",
    breadcrumbLabel: "Day Porter Services",
    serviceType: "Day Porter Services",
    introduction:
      "Keep your San Diego facility consistently clean throughout the day with our day porter services. From restocking restrooms to maintaining lobbies, we ensure your space remains welcoming.",
    included: [
      "Restocking restroom supplies",
      "Continuous trash removal",
      "Maintaining cleanliness in high-traffic areas",
    ],
    imageAlt: "Day porter services in San Diego",
    relatedServices: [
      { title: "General Janitorial", path: ROUTES.janitorial },
      {
        title: "Sanitation Cleaning",
        path: ROUTES.services.sanitationCleaning,
      },
      { title: "Spot Cleaning", path: ROUTES.services.spotCleaning },
    ],
  },
  stripAndWax: {
    pathname: ROUTES.services.stripAndWaxFloorCare,
    seoTitle: "Strip & Wax Floor Services San Diego | Good Steward",
    seoDescription:
      "Professional strip & wax floor services in San Diego. Remove old finishes and restore a durable, glossy shine. Free quote from our in-house team.",
    h1: "Strip & Wax Floor Services in San Diego",
    eyebrow: "Restore Your Floors' Shine",
    breadcrumbLabel: "Strip & Wax Services",
    serviceType: "Strip and Wax Floor Services",
    introduction:
      "Bring your San Diego floors back to life with our strip and wax service. We remove old finishes, apply high-quality wax, and polish your floors for a durable and glossy look.",
    included: [
      "Removal of old floor finishes",
      "Application of protective wax layers",
      "Polishing for a smooth and shiny finish",
    ],
    imageAlt: "Strip and wax floor services in San Diego",
    relatedServices: [
      {
        title: "Carpet & Floor Cleaning",
        path: ROUTES.services.commercialFloorCare,
      },
      { title: "General Janitorial", path: ROUTES.janitorial },
    ],
  },
  commercialFloorCare: {
    pathname: ROUTES.services.commercialFloorCare,
    seoTitle: "Commercial Carpet & Floor Cleaning San Diego | Good Steward",
    seoDescription:
      "Professional commercial carpet, floor, tile & grout cleaning in San Diego. Stain removal, deep cleaning & eco-friendly methods. Free quote.",
    h1: "Commercial Carpet & Floor Cleaning in San Diego",
    eyebrow: "Extend the Life of Your Floors",
    breadcrumbLabel: "Carpet & Floor Cleaning",
    serviceType: "Commercial Carpet and Floor Cleaning",
    introduction:
      "Extend the life of your carpets and floors with our professional carpet, tile & grout cleaning services in San Diego.",
    included: [
      "Stain removal and deep cleaning",
      "Texture revitalization",
      "Fabric-safe and eco-friendly methods",
      "Tile & grout cleaning for commercial floors",
    ],
    imageAlt: "Commercial carpet and floor cleaning in San Diego",
    relatedServices: [
      {
        title: "Strip & Wax Services",
        path: ROUTES.services.stripAndWaxFloorCare,
      },
      { title: "Spot Cleaning", path: ROUTES.services.spotCleaning },
      { title: "General Janitorial", path: ROUTES.janitorial },
    ],
  },
  spotCleaning: {
    pathname: ROUTES.services.spotCleaning,
    seoTitle: "Spot Cleaning Services San Diego | Good Steward",
    seoDescription:
      "Fast, effective spot cleaning for stains and spills in San Diego offices & commercial spaces. Get a free quote from our in-house cleaning team.",
    h1: "Spot Cleaning Services in San Diego",
    eyebrow: "Quick Response to Stains & Spills",
    breadcrumbLabel: "Spot Cleaning",
    serviceType: "Spot Cleaning",
    introduction:
      "Quick and effective spot cleaning services to address stains and spills promptly, keeping your San Diego facility looking its best.",
    included: [
      "Stain removal for furniture, carpets, and surfaces",
      "Specialized solutions for stubborn marks",
      "Minimal drying time",
    ],
    imageAlt: "Spot cleaning services in San Diego",
    relatedServices: [
      {
        title: "Carpet & Floor Cleaning",
        path: ROUTES.services.commercialFloorCare,
      },
      {
        title: "Day Porter Services",
        path: ROUTES.services.dayPorterServices,
      },
      { title: "General Janitorial", path: ROUTES.janitorial },
    ],
  },
  commercialWindowCleaning: {
    pathname: ROUTES.services.commercialWindowCleaning,
    seoTitle: "Commercial Window Cleaning San Diego | Good Steward",
    seoDescription:
      "Interior & exterior commercial window cleaning in San Diego. Streak-free results for offices & commercial buildings. Request your free quote.",
    h1: "Commercial Window Cleaning in San Diego",
    eyebrow: "Crystal-Clear Windows, More Natural Light",
    breadcrumbLabel: "Window Cleaning",
    serviceType: "Commercial Window Cleaning",
    introduction:
      "Enhance the appearance of your San Diego building with crystal-clear windows that let in more light.",
    included: [
      "Interior and exterior window cleaning",
      "Streak and smudge removal",
      "Safe techniques for all types of windows",
    ],
    imageAlt: "Commercial window cleaning in San Diego",
    relatedServices: [
      { title: "General Janitorial", path: ROUTES.janitorial },
      {
        title: "Carpet & Floor Cleaning",
        path: ROUTES.services.commercialFloorCare,
      },
    ],
  },
  greenCleaning: {
    pathname: ROUTES.services.greenCleaning,
    seoTitle: "Green Cleaning Services San Diego | Good Steward",
    seoDescription:
      "Eco-friendly commercial green cleaning in San Diego using organic, biodegradable products. Sustainable results for your business. Free quote.",
    h1: "Green Cleaning Services in San Diego",
    eyebrow: "Sustainable, Eco-Friendly Cleaning",
    breadcrumbLabel: "Green Cleaning",
    serviceType: "Commercial Green Cleaning",
    introduction:
      "Our eco-friendly cleaning solutions provide the same exceptional results while minimizing environmental impact — perfect for San Diego businesses that value sustainability.",
    included: [
      "Use of organic and biodegradable products",
      "Practices that reduce water and energy usage",
      "Certified to national and state standards",
    ],
    imageAlt: "Green cleaning services in San Diego",
    relatedServices: [
      {
        title: "Sanitation Cleaning",
        path: ROUTES.services.sanitationCleaning,
      },
      { title: "Ozone Cleaning", path: ROUTES.services.ozoneCleaning },
      { title: "General Janitorial", path: ROUTES.janitorial },
    ],
  },
  ozoneCleaning: {
    pathname: ROUTES.services.ozoneCleaning,
    seoTitle: "Ozone Cleaning Services San Diego | Good Steward",
    seoDescription:
      "Advanced ozone cleaning in San Diego to eliminate odors, bacteria & viruses. A fresher, cleaner space for your business. Get a free quote today.",
    h1: "Ozone Cleaning Services in San Diego",
    eyebrow: "Advanced Odor & Pathogen Elimination",
    breadcrumbLabel: "Ozone Cleaning",
    serviceType: "Ozone Cleaning",
    introduction:
      "Using cutting-edge ozone technology, we eliminate odors, bacteria, and viruses to create a cleaner and fresher space for your San Diego business.",
    included: [
      "Odor neutralization",
      "Air and surface disinfection",
      "Effective against bacteria, viruses, and allergens",
    ],
    imageAlt: "Ozone cleaning services in San Diego",
    relatedServices: [
      { title: "Green Cleaning", path: ROUTES.services.greenCleaning },
      {
        title: "Sanitation Cleaning",
        path: ROUTES.services.sanitationCleaning,
      },
      { title: "General Janitorial", path: ROUTES.janitorial },
    ],
  },
} satisfies Record<string, ServicePageConfig>
