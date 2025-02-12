import React from "react"
import "./lets-connect.scss"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"
import { center, containerStyle, G_API_KEY, mapStyles, markers } from "../../../constants/map.const"
import { CONTACT_INFO } from "../../../constants/contacts.const"

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
            <p className="lets-connect__text">{CONTACT_INFO.phone}</p>
            <hr className="lets-connect__divider" />
            <p className="lets-connect__content-title">San Diego Office</p>
            <p className="lets-connect__text">{CONTACT_INFO.addresses[0]}</p>
            <hr className="lets-connect__divider" />
            <p className="lets-connect__content-title">North County Office</p>
            <p className="lets-connect__text">{CONTACT_INFO.addresses[1]}</p>
            <hr className="lets-connect__divider" />
            <p className="lets-connect__content-title">Email</p>
            <p className="lets-connect__text">{CONTACT_INFO.email}</p>
            <hr className="lets-connect__divider" />
            <p className="lets-connect__content-title">
              Available Monday to Friday, 9 AM - 6 PM PST
            </p>
          </div>
          <div className="lets-connect__buttons">
            <a
              href={CONTACT_INFO.phoneHref}
              className="button button--primary with-icon"
            >
              {CONTACT_INFO.phone}
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
