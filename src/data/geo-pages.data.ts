import { ROUTES } from "../constants/routes.const"
import { SERVICE_AREAS } from "../constants/service-areas.const"
import type { GeoPageConfig } from "../types/geo-page.types"

export const geoPages = {
  commercialCleaningSanDiego: {
    variant: "hub",
    pathname: ROUTES.serviceAreas.commercialCleaningSanDiego,
    seoTitle: "Commercial Cleaning San Diego | Good Steward Cleaning",
    seoDescription:
      "Professional commercial cleaning services in San Diego. In-house team, custom cleaning plans, and reliable service for offices & businesses.",
    h1: "Commercial Cleaning Services in San Diego",
    eyebrow: "Trusted Commercial Cleaning Company",
    breadcrumbLabel: "Commercial Cleaning San Diego",
    menuLabel: "Commercial Cleaning — San Diego",
    serviceType: "Commercial Cleaning",
    areaServed: SERVICE_AREAS.sanDiego,
    introduction:
      "Reliable commercial cleaning in San Diego — from offices to retail spaces, our in-house team delivers custom, dependable service. Get a free quote today.",
    imageAlt: "Commercial cleaning services in San Diego",
    serviceCards: [
      { title: "Janitorial Services", path: ROUTES.janitorial },
      {
        title: "Office Cleaning",
        path: ROUTES.serviceAreas.officeCleaningSanDiego,
      },
      {
        title: "Medical Office Cleaning",
        path: ROUTES.serviceAreas.medicalOfficeCleaningSanDiego,
      },
      {
        title: "Kitchen & Restroom Cleaning",
        path: ROUTES.serviceAreas.commercialKitchenCleaningSanDiego,
      },
      {
        title: "Carpet & Floor Cleaning",
        path: ROUTES.services.commercialFloorCare,
      },
      {
        title: "Window Cleaning",
        path: ROUTES.services.commercialWindowCleaning,
      },
    ],
    specialtyServices: [
      { title: "Deep Cleaning", path: ROUTES.services.deepCleaning },
      { title: "Green Cleaning", path: ROUTES.services.greenCleaning },
    ],
    supportServices: [
      { title: "Maintenance Services", path: ROUTES.maintenance },
    ],
  },
  officeCleaningSanDiego: {
    variant: "detail",
    pathname: ROUTES.serviceAreas.officeCleaningSanDiego,
    seoTitle: "Office Cleaning San Diego | Good Steward Cleaning",
    seoDescription:
      "Reliable office cleaning services in San Diego, CA. Daily, weekly, or custom schedules with an in-house team you can trust. Free quote today.",
    h1: "Office Cleaning Services in San Diego",
    eyebrow: "Keep Your Office Spotless",
    breadcrumbLabel: "Office Cleaning San Diego",
    menuLabel: "Office Cleaning — San Diego",
    serviceType: "Office Cleaning",
    areaServed: SERVICE_AREAS.sanDiego,
    introduction:
      "Professional office cleaning in San Diego — flexible schedules, an in-house trained team, and consistent, high-quality results for offices of any size.",
    included: [
      "Daily, weekly, or custom cleaning schedules",
      "Dusting, vacuuming, and trash removal",
      "Restroom and kitchen sanitizing",
      "Floor care and window spot cleaning",
    ],
    imageAlt: "Office cleaning services in San Diego",
    relatedServices: [
      { title: "Janitorial Services", path: ROUTES.janitorial },
      {
        title: "Commercial Cleaning — San Diego",
        path: ROUTES.serviceAreas.commercialCleaningSanDiego,
      },
      {
        title: "Kitchen & Restroom Cleaning — San Diego",
        path: ROUTES.serviceAreas.commercialKitchenCleaningSanDiego,
      },
    ],
  },
  medicalOfficeCleaningSanDiego: {
    variant: "detail",
    pathname: ROUTES.serviceAreas.medicalOfficeCleaningSanDiego,
    seoTitle: "Medical Office Cleaning San Diego | Good Steward",
    seoDescription:
      "Specialized medical office cleaning in San Diego, CA — disinfection, compliance-focused sanitation, and a trained in-house team. Free quote.",
    h1: "Medical Office Cleaning Services in San Diego",
    eyebrow: "Compliance-Focused Medical Cleaning",
    breadcrumbLabel: "Medical Office Cleaning San Diego",
    menuLabel: "Medical Office Cleaning — San Diego",
    serviceType: "Medical Office Cleaning",
    areaServed: SERVICE_AREAS.sanDiego,
    introduction:
      "Specialized medical office cleaning in San Diego focused on hygiene, disinfection, and health compliance for medical and dental practices.",
    included: [
      "Disinfection of exam rooms and high-touch surfaces",
      "EPA-approved sanitation products",
      "Compliance-focused cleaning protocols",
      "Flexible after-hours scheduling",
    ],
    imageAlt: "Medical office cleaning services in San Diego",
    relatedServices: [
      {
        title: "Commercial Cleaning — San Diego",
        path: ROUTES.serviceAreas.commercialCleaningSanDiego,
      },
      {
        title: "Sanitation Cleaning",
        path: ROUTES.services.sanitationCleaning,
      },
      { title: "Ozone Cleaning", path: ROUTES.services.ozoneCleaning },
      { title: "Janitorial Services", path: ROUTES.janitorial },
    ],
  },
  commercialKitchenCleaningSanDiego: {
    variant: "detail",
    pathname: ROUTES.serviceAreas.commercialKitchenCleaningSanDiego,
    seoTitle: "Commercial Kitchen Cleaning San Diego | Good Steward",
    seoDescription:
      "Professional commercial kitchen & restroom cleaning in San Diego. Health-compliant sanitation for restaurants, offices & facilities. Free quote.",
    h1: "Commercial Kitchen & Restroom Cleaning in San Diego",
    eyebrow: "Health-Compliant Kitchen & Restroom Care",
    breadcrumbLabel: "Commercial Kitchen & Restroom Cleaning San Diego",
    menuLabel: "Kitchen & Restroom Cleaning — San Diego",
    serviceType: "Commercial Kitchen and Restroom Cleaning",
    areaServed: SERVICE_AREAS.sanDiego,
    introduction:
      "Keep commercial kitchens and restrooms in San Diego clean, sanitized, and compliant with our specialized cleaning services.",
    included: [
      "Deep cleaning of kitchen surfaces and equipment",
      "Restroom sanitizing and restocking",
      "Health-code compliant procedures",
      "Flexible scheduling around business hours",
    ],
    imageAlt: "Commercial kitchen and restroom cleaning in San Diego",
    relatedServices: [
      {
        title: "Commercial Cleaning — San Diego",
        path: ROUTES.serviceAreas.commercialCleaningSanDiego,
      },
      {
        title: "Sanitation Cleaning",
        path: ROUTES.services.sanitationCleaning,
      },
      {
        title: "Day Porter Services",
        path: ROUTES.services.dayPorterServices,
      },
      { title: "Janitorial Services", path: ROUTES.janitorial },
    ],
  },
  commercialCleaningOceanside: {
    variant: "location",
    pathname: ROUTES.serviceAreas.commercialCleaningOceanside,
    seoTitle: "Commercial Cleaning Oceanside, CA | Good Steward",
    seoDescription:
      "Reliable commercial & office cleaning in Oceanside, CA. In-house team, custom plans, and dependable service from Good Steward. Free quote today.",
    h1: "Commercial Cleaning Services in Oceanside, CA",
    eyebrow: "Serving Oceanside & North County",
    breadcrumbLabel: "Commercial Cleaning Oceanside",
    menuLabel: "Commercial Cleaning — Oceanside",
    serviceType: "Commercial Cleaning",
    areaServed: SERVICE_AREAS.oceanside,
    introduction:
      "Good Steward proudly serves Oceanside and North County with the same in-house team and dependable commercial cleaning standards trusted across San Diego.",
    included: [
      "Office and commercial space cleaning",
      "Carpet and floor cleaning",
      "Custom cleaning schedules for North County businesses",
    ],
    imageAlt: "Commercial cleaning services in Oceanside, CA",
    relatedServices: [
      { title: "Janitorial Services", path: ROUTES.janitorial },
      {
        title: "Carpet & Floor Cleaning",
        path: ROUTES.services.commercialFloorCare,
      },
      {
        title: "Window Cleaning",
        path: ROUTES.services.commercialWindowCleaning,
      },
    ],
    officeLabel: "North County Office",
  },
} satisfies Record<string, GeoPageConfig>
