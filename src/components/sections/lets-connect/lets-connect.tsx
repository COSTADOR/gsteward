import React from "react"
import "./lets-connect.scss"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"
import {
  center,
  containerStyle,
  G_API_KEY,
  mapStyles,
  markers,
} from "../../../constants/map.const"
import { CONTACT_INFO } from "../../../constants/contacts.const"
import { SERVICE_AREA_LIST } from "../../../constants/service-areas.const"
import { formatPostalAddress } from "../../../utils/address"

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
            <p className="lets-connect__text">
              <a href={CONTACT_INFO.phoneHref}>{CONTACT_INFO.phone}</a>
            </p>
            <hr className="lets-connect__divider" />
            {SERVICE_AREA_LIST.map(serviceArea => (
              <React.Fragment key={serviceArea.city}>
                <p className="lets-connect__content-title">
                  {serviceArea.officeLabel}
                </p>
                <p className="lets-connect__text">
                  {formatPostalAddress(serviceArea.officeAddress)}
                </p>
                <hr className="lets-connect__divider" />
              </React.Fragment>
            ))}
            <p className="lets-connect__content-title">Email</p>
            <p className="lets-connect__text">
              <a href={CONTACT_INFO.emailHref}>{CONTACT_INFO.email}</a>
            </p>
            <hr className="lets-connect__divider" />
            <p className="lets-connect__content-title">
              {CONTACT_INFO.availability}
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

export default LetsConnect
