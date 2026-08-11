import * as React from "react"
import { Link } from "gatsby"
import { CONTACT_INFO } from "../../../constants/contacts.const"
import { ROUTES } from "../../../constants/routes.const"
import { SERVICE_AREA_LIST } from "../../../constants/service-areas.const"
import {
  COMPANY_NAV_ITEMS,
  FOOTER_SERVICE_NAV_ITEMS,
  SERVICE_AREA_NAV_ITEMS,
  type NavigationLink,
} from "../../../data/navigation.data"
import { formatPostalAddress } from "../../../utils/address"
import "./footer.scss"

interface FooterLinksProps {
  title: string
  links: NavigationLink[]
  className?: string
}

const FooterLinks: React.FC<FooterLinksProps> = ({
  title,
  links,
  className = "",
}) => (
  <div className={`footer__section ${className}`}>
    <h2 className="footer__title">{title}</h2>
    <ul className="footer__list">
      {links.map(link => (
        <li key={link.path}>
          <Link to={link.path}>{link.name}</Link>
        </li>
      ))}
    </ul>
  </div>
)

const Footer = () => (
  <footer className="footer">
    <div className="footer__container container">
      <div className="footer__top">
        <div className="footer__logo">
          <Link to={ROUTES.home}>
            <img
              src="/images/logo-on-dark.svg"
              alt="Good Steward Cleaning"
              className="footer__logo-image"
              width={300}
            />
          </Link>
        </div>
        <div className="footer__content">
          <FooterLinks
            title="Services"
            links={FOOTER_SERVICE_NAV_ITEMS}
            className="footer__section--services"
          />
          <FooterLinks title="Service Areas" links={SERVICE_AREA_NAV_ITEMS} />
          <FooterLinks title="Company" links={COMPANY_NAV_ITEMS} />
          <div className="footer__section footer__section--contact">
            <h2 className="footer__title">Contact Us</h2>
            {SERVICE_AREA_LIST.map(serviceArea => (
              <p key={serviceArea.city} className="footer__text">
                {formatPostalAddress(serviceArea.officeAddress)}
              </p>
            ))}
            <p className="footer__text">
              <a href={CONTACT_INFO.phoneHref}>{CONTACT_INFO.phone}</a>
            </p>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        &copy; {new Date().getFullYear()} Good Steward Cleaning. All Rights
        Reserved.
      </div>
    </div>
  </footer>
)

export default Footer
