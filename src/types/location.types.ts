export interface PostalAddress {
  streetAddress: string
  addressLocality: string
  addressRegion: string
  postalCode: string
  addressCountry: string
}

export interface ServiceArea {
  city: string
  stateCode: string
  stateName: string
  countryCode: string
  officeAddress: PostalAddress
}
