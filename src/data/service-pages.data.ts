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
    content:
      "When everyday janitorial care isn't enough, Good Steward Cleaning's deep cleaning services give your San Diego facility the thorough, top-to-bottom attention it needs. Our in-house team tackles high-touch surface sanitization, furniture and floor detailing, and hard-to-reach areas that routine cleaning skips — baseboards, vents, and behind equipment. Commercial deep cleaning in San Diego works well as a seasonal reset, pre-inspection prep, or one-time refresh before a big event. Pair it with our Sanitation Cleaning for a health-focused finish, or ask about Green Cleaning if eco-friendly products matter to your team. Deep cleaning is one part of our full janitorial services lineup — contact us for a free quote and walkthrough.",
    contentLinks: [
      {
        label: "Sanitation Cleaning",
        path: ROUTES.services.sanitationCleaning,
      },
      { label: "Green Cleaning", path: ROUTES.services.greenCleaning },
      { label: "janitorial services", path: ROUTES.janitorial },
    ],
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
    content:
      "Good Steward Cleaning's sanitation cleaning services help San Diego businesses meet a higher standard of hygiene. Using EPA-approved disinfectants and proven protocols, our in-house team targets high-touch surfaces — door handles, light switches, shared equipment, and restrooms — to reduce the spread of germs across offices, medical suites, schools, and gyms. Every sanitation plan is customized to your facility's traffic, industry, and compliance needs. Sanitation Cleaning pairs naturally with our Deep Cleaning for a complete reset, or Green Cleaning and Ozone Cleaning for facilities that need odor and pathogen control. Explore our full janitorial services or request a free quote today.",
    contentLinks: [
      { label: "Deep Cleaning", path: ROUTES.services.deepCleaning },
      { label: "Green Cleaning", path: ROUTES.services.greenCleaning },
      { label: "Ozone Cleaning", path: ROUTES.services.ozoneCleaning },
      { label: "janitorial services", path: ROUTES.janitorial },
    ],
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
    content:
      "A clean facility isn't a once-a-day event — it needs attention throughout the workday, and that's exactly what Good Steward Cleaning's day porter services provide in San Diego. Our in-house day porters restock restroom supplies, empty trash continuously, wipe down high-traffic surfaces, and keep lobbies, breakrooms, and common areas presentable from open to close. This service is especially valuable for busy offices, retail centers, and medical facilities where appearance and hygiene matter all day long. Day porter service works well alongside our Sanitation Cleaning and Spot Cleaning for spills and stains. It's one option within our complete janitorial services in San Diego — contact us to build a coverage schedule that fits your hours.",
    contentLinks: [
      {
        label: "Sanitation Cleaning",
        path: ROUTES.services.sanitationCleaning,
      },
      { label: "Spot Cleaning", path: ROUTES.services.spotCleaning },
      { label: "janitorial services", path: ROUTES.janitorial },
    ],
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
    content:
      "Worn, dull, or scuffed floors send the wrong message about your San Diego business. Good Steward Cleaning's strip and wax services restore vinyl composition tile and other hard floors to a like-new shine — stripping away old, yellowed finish, then applying fresh protective wax and buffing to a durable gloss. This service extends the life of your flooring and cuts long-term maintenance costs by protecting the surface from scuffs and stains. Strip and wax works best on a scheduled rotation alongside our Carpet & Floor Cleaning services for facilities with mixed flooring. It's part of our complete janitorial services lineup for San Diego offices, schools, and retail spaces — request a free floor care quote today.",
    contentLinks: [
      {
        label: "Carpet & Floor Cleaning",
        path: ROUTES.services.commercialFloorCare,
      },
      { label: "janitorial services", path: ROUTES.janitorial },
    ],
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
    content:
      "Carpets, tile, and grout take a beating in high-traffic commercial spaces, and Good Steward Cleaning keeps San Diego facilities looking their best. Our commercial carpet cleaning removes embedded dirt, stains, and odors using fabric-safe, eco-conscious methods, while our tile and grout cleaning lifts ground-in grime that mopping alone can't reach. Regular commercial floor cleaning protects your flooring investment and creates a healthier indoor environment. For hard floors that need a full restoration, pair this service with Strip & Wax, or add Spot Cleaning for fast response between scheduled visits. See our complete janitorial services or contact us for a free San Diego floor care quote.",
    contentLinks: [
      {
        label: "Strip & Wax",
        path: ROUTES.services.stripAndWaxFloorCare,
      },
      { label: "Spot Cleaning", path: ROUTES.services.spotCleaning },
      { label: "janitorial services", path: ROUTES.janitorial },
    ],
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
    content:
      "Spills and stains don't wait for your next scheduled cleaning, and neither does Good Steward Cleaning. Our spot cleaning service gives San Diego businesses a fast, targeted response to stains on carpets, upholstery, and hard surfaces — removing coffee spills, food stains, and stubborn marks before they set in and become permanent. Using specialized solutions matched to each surface, our in-house team works efficiently with minimal drying time, so your space stays presentable without disrupting your day. Spot cleaning complements our broader Carpet & Floor Cleaning and Day Porter Services for facilities that need ongoing attention. It's part of our full janitorial services in San Diego — contact us to add spot cleaning to your plan.",
    contentLinks: [
      {
        label: "Carpet & Floor Cleaning",
        path: ROUTES.services.commercialFloorCare,
      },
      {
        label: "Day Porter Services",
        path: ROUTES.services.dayPorterServices,
      },
      { label: "janitorial services", path: ROUTES.janitorial },
    ],
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
    content:
      "Streaky, smudged windows dull the natural light and curb appeal of any San Diego business. Good Steward Cleaning's commercial window cleaning service delivers a streak-free finish for storefronts, office buildings, and lobbies — inside and out. Our trained, in-house team uses safe techniques suited to every type of glass, from ground-floor storefronts to multi-pane office partitions, removing dust, fingerprints, and grime that build up between visits. Clean windows brighten your space and create a stronger first impression for clients and employees. Combine window cleaning with our Carpet & Floor Cleaning services for a complete facility refresh, or explore our full janitorial services in San Diego. Contact us for a free window cleaning quote.",
    contentLinks: [
      {
        label: "Carpet & Floor Cleaning",
        path: ROUTES.services.commercialFloorCare,
      },
      { label: "janitorial services", path: ROUTES.janitorial },
    ],
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
    content:
      "More San Diego businesses are choosing sustainable operations, and Good Steward Cleaning's green cleaning service delivers the same exceptional results without harsh chemicals. Our in-house team uses organic, biodegradable products and practices that reduce water and energy use — creating a healthier indoor environment for employees and visitors while minimizing your facility's environmental footprint. Green cleaning is a smart choice for offices, schools, medical suites, and any business prioritizing indoor air quality. It pairs well with our Sanitation Cleaning for health-focused facilities, or Ozone Cleaning for advanced odor control. Green Cleaning is available across our full janitorial services lineup in San Diego — ask about eco-friendly options with your free quote.",
    contentLinks: [
      {
        label: "Sanitation Cleaning",
        path: ROUTES.services.sanitationCleaning,
      },
      { label: "Ozone Cleaning", path: ROUTES.services.ozoneCleaning },
      { label: "janitorial services", path: ROUTES.janitorial },
    ],
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
    content:
      "Persistent odors, bacteria, and airborne viruses need more than surface cleaning to eliminate — that's where Good Steward Cleaning's ozone cleaning service comes in. Using advanced ozone technology, our in-house team neutralizes odors at the source and disinfects air and surfaces throughout your San Diego facility, reaching areas that traditional cleaning methods miss. Ozone treatment is effective against bacteria, viruses, mold, and allergens, making it ideal for facilities recovering from water damage or requiring an extra layer of disinfection. Ozone cleaning pairs naturally with our Sanitation Cleaning and Green Cleaning services. Explore our complete janitorial services in San Diego or contact us to discuss whether ozone treatment fits your needs.",
    contentLinks: [
      {
        label: "Sanitation Cleaning",
        path: ROUTES.services.sanitationCleaning,
      },
      { label: "Green Cleaning", path: ROUTES.services.greenCleaning },
      { label: "janitorial services", path: ROUTES.janitorial },
    ],
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
