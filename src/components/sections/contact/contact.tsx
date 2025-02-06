import React from "react"
import { Link } from "gatsby"
import "./contact.scss"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"
import { center, containerStyle, G_API_KEY, mapStyles } from "../../../constants/contact.const"

const markers = [
  { lat: 33.195869, lng: -117.379483 },
  { lat: 33.017258, lng: -117.074565 },
]

const Contact: React.FC = () => {
  return (
    <section className="contact">
      <div className="contact__container container">
        <div className="contact__info">
          <h2 className="title-lg">
            Let's discuss
            <br /> <em>your cleaning needs!</em>
          </h2>
          <div className="contact__content">
            <p className="contact__title">San Diego Office</p>
            <p className="contact__text">
              1400 Bernardo Court #300, San Diego, CA 92127
            </p>
            <p className="contact__title">North County Office</p>
            <p className="contact__text">
              2103 S. El Camino Real, Oceanside, CA 92054
            </p>
            <p className="contact__title">Phone: 1-858-379-7770</p>
            <p className="contact__title">
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
          <LoadScript googleMapsApiKey={G_API_KEY}>
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
