import { ROUTES } from "../constants/routes.const"

export interface NavigationLink {
  name: string
  path: string
}

const ALL_JANITORIAL_SERVICES: NavigationLink = {
  name: "All Janitorial Services",
  path: ROUTES.janitorial,
}

export const JANITORIAL_NAV_ITEMS: NavigationLink[] = [
  ALL_JANITORIAL_SERVICES,
  { name: "Deep Cleaning", path: ROUTES.services.deepCleaning },
  { name: "Sanitation Cleaning", path: ROUTES.services.sanitationCleaning },
  { name: "Day Porter Services", path: ROUTES.services.dayPorterServices },
  {
    name: "Strip & Wax Services",
    path: ROUTES.services.stripAndWaxFloorCare,
  },
  {
    name: "Carpet & Floor Cleaning",
    path: ROUTES.services.commercialFloorCare,
  },
  { name: "Spot Cleaning", path: ROUTES.services.spotCleaning },
  {
    name: "Window Cleaning",
    path: ROUTES.services.commercialWindowCleaning,
  },
  { name: "Green Cleaning", path: ROUTES.services.greenCleaning },
  { name: "Ozone Cleaning", path: ROUTES.services.ozoneCleaning },
]

export const SERVICE_AREA_NAV_ITEMS: NavigationLink[] = [
  {
    name: "San Diego",
    path: ROUTES.serviceAreas.commercialCleaningSanDiego,
  },
  {
    name: "Oceanside",
    path: ROUTES.serviceAreas.commercialCleaningOceanside,
  },
]

export const COMPANY_NAV_ITEMS: NavigationLink[] = [
  { name: "Home", path: ROUTES.home },
  { name: "About Us", path: ROUTES.aboutUs },
  { name: "Contact Us", path: ROUTES.contactUs },
]

export const FOOTER_SERVICE_NAV_ITEMS: NavigationLink[] = [
  ALL_JANITORIAL_SERVICES,
  { name: "Maintenance", path: ROUTES.maintenance },
  ...JANITORIAL_NAV_ITEMS.slice(1),
]
