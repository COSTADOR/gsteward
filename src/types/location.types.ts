export interface PostalAddress {
  streetAddress: string
  addressLocality: string
  addressRegion: string
  postalCode: string
  addressCountry: string
}

export interface ServiceArea {
  officeLabel: string
  city: string
  stateCode: string
  stateName: string
  countryCode: string
  officeAddress: PostalAddress
}
