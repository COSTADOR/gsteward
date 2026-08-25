import React from "react"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"
import {
  containerStyle,
  G_API_KEY,
  mapStyles,
  OCEANSIDE_OFFICE_LOCATION,
} from "../../../constants/map.const"
import type { PostalAddress } from "../../../types/location.types"
import AddressLink from "../../common/address-link/address-link"
import "./office-location.scss"

interface OfficeLocationProps {
  label: string
  address: PostalAddress
  googleMapsUrl: string
}

const OfficeLocation: React.FC<OfficeLocationProps> = ({
  label,
  address,
  googleMapsUrl,
}) => {
  return (
    <section className="office-location">
      <div className="office-location__container container">
        <div className="office-location__info">
          <div className="office-location__subtitle">Local Office</div>
          <h2 className="office-location__title title-lg">{label}</h2>
          <address className="office-location__address">
            <AddressLink address={address} googleMapsUrl={googleMapsUrl} />
          </address>
          <p className="office-location__description">
            Locally based in Oceanside, our team provides dependable commercial
            cleaning for businesses throughout North County.
          </p>
        </div>
        <div className="office-location__map">
          <LoadScript googleMapsApiKey={G_API_KEY || ""}>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={OCEANSIDE_OFFICE_LOCATION}
              zoom={15}
              options={{ styles: mapStyles }}
            >
              <Marker position={OCEANSIDE_OFFICE_LOCATION} title={label} />
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </section>
  )
}

export default OfficeLocation
