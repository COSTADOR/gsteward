import React from "react"
import { Link } from "gatsby"
import "./lets-connect.scss"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"
import { center, containerStyle, G_API_KEY, mapStyles } from "../../../constants/contact.const"

const markers = [
  { lat: 33.195869, lng: -117.379483 },
  { lat: 33.017258, lng: -117.074565 },
]

const LetsConnect: React.FC = () => {
  return (
    <section className="lets-connect">
      <div className="lets-connect__container container">
        <div className="lets-connect__info">
          <h2 className="lets-connect__title title-xl">
            Let’s connect
            <br /> <em>⎯ we’re here to help!</em>
          </h2>
          <p className="lets-connect__description">
            Have questions about our services or want to schedule a
            consultation? Reach out to us, and we’ll be happy to assist you.
            Your satisfaction is our priority, and we’re committed to providing
            prompt, reliable support.
          </p>
          <div className="lets-connect__content">
            <p className="lets-connect__content-title">
              Call us directly to discuss your cleaning needs or to schedule a
              consultation
            </p>
            <p className="lets-connect__text">+1 (858)-379-7770</p>
            <hr className="lets-connect__divider" />
            <p className="lets-connect__content-title">San Diego Office</p>
            <p className="lets-connect__text">
              1400 Bernardo Court #300, San Diego, CA 92127
            </p>
            <hr className="lets-connect__divider" />
            <p className="lets-connect__content-title">North County Office</p>
            <p className="lets-connect__text">
              2103 S. El Camino Real, Oceanside, CA 92054
            </p>
            <hr className="lets-connect__divider" />
            <p className="lets-connect__content-title">Email</p>
            <p className="lets-connect__text">goodsteward@gmail.com</p>
            <hr className="lets-connect__divider" />
            <p className="lets-connect__content-title">Available Monday to Friday, 9 AM - 6 PM PST</p>
          </div>
          <div className="lets-connect__buttons">
            <a href="tel:+18583797770" className="button button--primary with-icon">
              1 (858)-379-7770
            </a>
          </div>
        </div>
        <div className="lets-connect__map">
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

export default LetsConnect
