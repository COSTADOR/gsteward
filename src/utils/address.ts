import type { PostalAddress } from "../types/location.types"

export const formatPostalAddress = (address: PostalAddress) =>
  `${address.streetAddress}, ${address.addressLocality}, ${address.addressRegion} ${address.postalCode}`
