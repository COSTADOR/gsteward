import React from "react"
import { Link } from "gatsby"
import "./breadcrumbs.scss"

export interface BreadcrumbItem {
  label: string
  path?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => (
  <nav className="breadcrumbs" aria-label="Breadcrumb">
    <ol className="breadcrumbs__list">
      {items.map((item, index) => {
        const isCurrentPage = index === items.length - 1

        return (
          <li className="breadcrumbs__item" key={item.label}>
            {item.path && !isCurrentPage ? (
              <Link className="breadcrumbs__link" to={item.path}>
                {item.label}
              </Link>
            ) : (
              <span
                className="breadcrumbs__current"
                aria-current={isCurrentPage ? "page" : undefined}
              >
                {item.label}
              </span>
            )}
            {!isCurrentPage && (
              <img
                className="breadcrumbs__separator"
                src="/images/icons/arrow.svg"
                alt=""
                aria-hidden="true"
              />
            )}
          </li>
        )
      })}
    </ol>
  </nav>
)

export default Breadcrumbs
