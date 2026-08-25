import React from "react"
import type { PostalAddress } from "../../../types/location.types"
import { formatPostalAddress } from "../../../utils/address"
import "./address-link.scss"

interface AddressLinkProps {
  address: PostalAddress
  googleMapsUrl: string
}

const AddressLink: React.FC<AddressLinkProps> = ({
  address,
  googleMapsUrl,
}) => {
  const formattedAddress = formatPostalAddress(address)

  return (
    <a
      className="address-link"
      href={googleMapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${formattedAddress} in Google Maps`}
    >
      {formattedAddress}
    </a>
  )
}

export default AddressLink
