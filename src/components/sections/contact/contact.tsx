import React from "react"
import { Link } from "gatsby"
import "./contact.scss"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"
import { center, containerStyle, G_API_KEY, mapStyles, markers } from "../../../constants/map.const"
import { CONTACT_INFO } from "../../../constants/contacts.const"

const Contact: React.FC = () => {
  return (
    <section className="contact">
      <div className="contact__container container">
        <div className="contact__info">
          <h2 className="contact__title title-lg">
            Let's discuss
            <br /> <em>your cleaning needs!</em>
          </h2>
          <div className="contact__content">
            <p className="contact__content-title">San Diego Office</p>
            <p className="contact__text">{CONTACT_INFO.addresses[0]}</p>
            <p className="contact__content-title">North County Office</p>
            <p className="contact__text">{CONTACT_INFO.addresses[1]}</p>
            <p className="contact__content-title">Phone</p>
            <p className="contact__text">{CONTACT_INFO.phone}</p>
            <p className="contact__content-title">
              Available Monday to Friday, 9 AM - 6 PM PST
            </p>
          </div>
          <div className="contact__buttons">
            <Link to="/contact-us" className="button button--primary with-icon">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="contact__map">
          <LoadScript googleMapsApiKey={G_API_KEY || ""}>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
              options={{ styles: mapStyles }}
            >
              {markers.map((marker, index) => (
                <Marker
                  key={index}
                  position={{ lat: marker.lat, lng: marker.lng }}
                />
              ))}
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </section>
  )
}

export default Contact
