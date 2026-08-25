import React, { useEffect, useRef, useState } from "react"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"
import { ROUTES } from "../../../constants/routes.const"
import {
  JANITORIAL_NAV_ITEMS,
  SERVICE_AREA_NAV_ITEMS,
  type NavigationLink,
} from "../../../data/navigation.data"
import "./header.scss"

type MenuGroup = "janitorial" | "service-areas"

interface DropdownProps {
  id: MenuGroup
  label: string
  items: NavigationLink[]
  isOpen: boolean
  isCurrent: boolean
  onToggle: (id: MenuGroup) => void
  onClose: () => void
  onNavigate: () => void
  registerTrigger: (element: HTMLButtonElement | null) => void
}

const Dropdown: React.FC<DropdownProps> = ({
  id,
  label,
  items,
  isOpen,
  isCurrent,
  onToggle,
  onClose,
  onNavigate,
  registerTrigger,
}) => (
  <li
    className={`header__nav-item header__nav-item--dropdown ${
      isOpen ? "is-open" : ""
    }`}
    onBlur={event => {
      if (!event.currentTarget.contains(event.relatedTarget)) onClose()
    }}
  >
    <button
      ref={registerTrigger}
      type="button"
      className={`header__nav-link header__nav-toggle ${
        isCurrent ? "header__nav-link--active" : ""
      }`}
      aria-expanded={isOpen}
      aria-controls={`${id}-menu`}
      aria-haspopup="true"
      onClick={() => onToggle(id)}
      onKeyDown={event => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault()
          onToggle(id)
        }
      }}
    >
      {label}
      <svg
        className="header__nav-chevron"
        width="10"
        height="6"
        viewBox="0 0 10 6"
        aria-hidden="true"
      >
        <path d="M1 1L5 5L9 1" />
      </svg>
    </button>
    <ul className="header__dropdown" id={`${id}-menu`}>
      {items.map(item => (
        <li key={item.path}>
          <Link
            to={item.path}
            className="header__dropdown-link"
            activeClassName="header__dropdown-link--active"
            onClick={onNavigate}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  </li>
)

const Header: React.FC = () => {
  const location = useLocation()
  const burgerRef = useRef<HTMLButtonElement>(null)
  const dropdownTriggers = useRef<Partial<Record<MenuGroup, HTMLButtonElement>>>(
    {}
  )
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState<MenuGroup | null>(null)

  const closeNavigation = () => {
    setIsMenuOpen(false)
    setOpenGroup(null)
  }

  const toggleGroup = (group: MenuGroup) => {
    setOpenGroup(current => (current === group ? null : group))
  }

  useEffect(() => {
    const checkScroll = () => {
      setIsScrolled(window.scrollY > 30)
      setOpenGroup(null)
    }

    checkScroll()
    window.addEventListener("scroll", checkScroll)
    return () => window.removeEventListener("scroll", checkScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  useEffect(closeNavigation, [location.pathname])

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key !== "Escape") return

    if (openGroup) {
      dropdownTriggers.current[openGroup]?.focus()
      setOpenGroup(null)
      return
    }

    if (isMenuOpen) {
      setIsMenuOpen(false)
      burgerRef.current?.focus()
    }
  }

  const janitorialIsCurrent = JANITORIAL_NAV_ITEMS.some(
    item => item.path === location.pathname
  )
  const serviceAreasIsCurrent = Object.values(ROUTES.serviceAreas).some(
    path => path === location.pathname
  )

  return (
    <header
      className={`header ${isScrolled ? "is-scrolled" : ""}`}
      onKeyDown={handleKeyDown}
    >
      <div className="header__background" />
      <div className="header__container container">
        <Link to={ROUTES.home} className="header__logo" onClick={closeNavigation}>
          <img
            src="/images/logo.svg"
            alt="Good Steward Cleaning"
            className="header__logo-image"
            width={150}
          />
        </Link>

        <button
          ref={burgerRef}
          type="button"
          className="header__burger"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => {
            setIsMenuOpen(current => !current)
            setOpenGroup(null)
          }}
        >
          <img
            src={isMenuOpen ? "/images/close.svg" : "/images/burger.svg"}
            alt=""
            aria-hidden="true"
            width={23}
          />
        </button>

        <nav
          id="primary-navigation"
          className={`header__nav ${isMenuOpen ? "is-open" : ""}`}
          aria-label="Primary navigation"
        >
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <Link
                to={ROUTES.home}
                className="header__nav-link"
                activeClassName="header__nav-link--active"
                onClick={closeNavigation}
              >
                Home
              </Link>
            </li>
            <Dropdown
              id="janitorial"
              label="Janitorial"
              items={JANITORIAL_NAV_ITEMS}
              isOpen={openGroup === "janitorial"}
              isCurrent={janitorialIsCurrent}
              onToggle={toggleGroup}
              onClose={() => setOpenGroup(null)}
              onNavigate={closeNavigation}
              registerTrigger={element => {
                dropdownTriggers.current.janitorial = element || undefined
              }}
            />
            <li className="header__nav-item">
              <Link
                to={ROUTES.maintenance}
                className="header__nav-link"
                activeClassName="header__nav-link--active"
                onClick={closeNavigation}
              >
                Maintenance
              </Link>
            </li>
            <Dropdown
              id="service-areas"
              label="Service Areas"
              items={SERVICE_AREA_NAV_ITEMS}
              isOpen={openGroup === "service-areas"}
              isCurrent={serviceAreasIsCurrent}
              onToggle={toggleGroup}
              onClose={() => setOpenGroup(null)}
              onNavigate={closeNavigation}
              registerTrigger={element => {
                dropdownTriggers.current["service-areas"] = element || undefined
              }}
            />
            <li className="header__nav-item">
              <Link
                to={ROUTES.aboutUs}
                className="header__nav-link"
                activeClassName="header__nav-link--active"
                onClick={closeNavigation}
              >
                About Us
              </Link>
            </li>
            <li className="header__nav-item header__nav-item--mobile-contact">
              <Link
                to={ROUTES.contactUs}
                className="header__nav-link"
                activeClassName="header__nav-link--active"
                onClick={closeNavigation}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        <Link
          to={ROUTES.contactUs}
          className="button button--primary header__contact-us"
        >
          Contact Us
        </Link>
      </div>
    </header>
  )
}

export default Header
