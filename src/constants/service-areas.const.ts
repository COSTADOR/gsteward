import type { ServiceArea } from "../types/location.types"

export const SERVICE_AREAS = {
  sanDiego: {
    officeLabel: "San Diego Office",
    city: "San Diego",
    stateCode: "CA",
    stateName: "California",
    countryCode: "US",
    officeAddress: {
      streetAddress: "11440 W. Bernardo Court #300",
      addressLocality: "San Diego",
      addressRegion: "CA",
      postalCode: "92127",
      addressCountry: "US",
    },
  },
  oceanside: {
    officeLabel: "North County Office",
    city: "Oceanside",
    stateCode: "CA",
    stateName: "California",
    countryCode: "US",
    officeAddress: {
      streetAddress: "2103 S El Camino Real #105C",
      addressLocality: "Oceanside",
      addressRegion: "CA",
      postalCode: "92054",
      addressCountry: "US",
    },
  },
} as const satisfies Record<string, ServiceArea>

export const SERVICE_AREA_LIST = [
  SERVICE_AREAS.sanDiego,
  SERVICE_AREAS.oceanside,
] as const
