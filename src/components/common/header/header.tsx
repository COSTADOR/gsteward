import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import "./header.scss"

export const navItems = [
  { name: "Home", path: "/" },
  { name: "Janitorial", path: "/janitorial/" },
  { name: "Maintenance", path: "/maintenance/" },
  { name: "About Us", path: "/about-us/" },
  { name: "Contact Us", path: "/contact-us/" },
]

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const checkScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }

    checkScroll()

    window.addEventListener("scroll", checkScroll)
    return () => window.removeEventListener("scroll", checkScroll)
  }, [])

  return (
    <header className={`header ${isScrolled ? "is-scrolled" : ""}`}>
      <div className="header__container container">
        <Link to="/" className="header__logo">
          <img
            src="/images/logo.svg"
            alt="Good Steward Logo"
            className="header__logo-image"
            width={150}
          />
        </Link>

        <input type="checkbox" id="menu-toggle" className="header__checkbox" />

        <label htmlFor="menu-toggle" className="header__burger">
          <img
            src="/images/burger.svg"
            alt="Burger menu icon"
            className="header__burger-icon"
            width={23}
          />
          <img
            src="/images/close.svg"
            alt="Close menu icon"
            className="header__close-icon"
            width={23}
          />
        </label>

        <nav className="header__nav">
          <ul className="header__nav-list">
            {navItems.map(item => (
              <li key={item.path} className="header__nav-item">
                <Link
                  to={item.path}
                  className="header__nav-link"
                  activeClassName="header__nav-link--active"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          to="/contact-us"
          className="button button--primary header__contact-us"
        >
          Contact Us
        </Link>
      </div>
    </header>
  )
}

export default Header
