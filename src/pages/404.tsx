import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/common/layout/layout"
import { ROUTES } from "../constants/routes.const"
import "./404.scss"

const NotFoundPage = () => (
  <Layout className="not-found-page">
    <section className="not-found">
      <div className="not-found__container container">
        <div className="not-found__panel">
          <div className="not-found__code" aria-hidden="true">
            404
          </div>
          <div className="not-found__content">
            <div className="not-found__eyebrow">Page Not Found</div>
            <h1 className="not-found__title title-xxl">
              We couldn’t find that page
            </h1>
            <p className="not-found__description">
              The page may have moved or the address may be incorrect. Let’s
              get you back to the right place.
            </p>
            <div className="not-found__actions">
              <Link
                to={ROUTES.home}
                className="button button--primary with-icon"
              >
                Back to Home
              </Link>
              <Link
                to={ROUTES.janitorial}
                className="button button--secondary with-icon icon-right"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export const Head = () => (
  <>
    <title>Page Not Found | Good Steward Cleaning</title>
    <meta
      name="description"
      content="The page you requested could not be found. Return to Good Steward Cleaning or explore our janitorial services."
    />
    <meta name="robots" content="noindex, nofollow" />
  </>
)

export default NotFoundPage
