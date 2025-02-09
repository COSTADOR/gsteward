import * as React from "react"
import "./footer.scss"
import { Link } from "gatsby"
import { CONTACT_INFO } from "../../../constants/contacts.const"

const Footer = () => (
  <footer className="footer">
    <div className="footer__container container">
      <div className="footer__top">
        <div className="footer__logo">
          <Link to="/">
            <img
              src="/images/logo-on-dark.svg"
              alt="Good Steward Logo"
              className="footer__logo-image"
              width={150}
            />
          </Link>
        </div>
        <div className="footer__content">
          <div className="footer__section">
            <h3 className="footer__title">ABOUT</h3>
            <ul className="footer__list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/janitorial">Janitorial</Link>
              </li>
              <li>
                <Link to="/maintenance">Maintenance</Link>
              </li>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="footer__section">
            <h3 className="footer__title">CONTACT US</h3>
            {CONTACT_INFO.addresses.map((address, index) => (
              <p key={index} className="footer__text">{address}</p>
            ))}
            <p className="footer__text">
              <a href={CONTACT_INFO.phoneHref}>{CONTACT_INFO.phone}</a>
            </p>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        &copy; {new Date().getFullYear()} Steward Cleaning. All Rights Reserved.
      </div>
    </div>
  </footer>
)

export default Footer
