import type { ServiceArea } from "../types/location.types"

export const SERVICE_AREAS = {
  sanDiego: {
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
