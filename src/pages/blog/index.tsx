import * as React from "react"
import { Link } from "gatsby"
import Breadcrumbs from "../../components/common/breadcrumbs/breadcrumbs"
import Layout from "../../components/common/layout/layout"
import Seo from "../../components/common/seo/seo"
import StructuredData from "../../components/common/structured-data/structured-data"
import BlogList from "../../components/sections/blog-list/blog-list"
import CallToAction from "../../components/sections/call-to-action/call-to-action"
import ServiceHero from "../../components/sections/service-hero/service-hero"
import { CONTACT_INFO } from "../../constants/contacts.const"
import { ROUTES } from "../../constants/routes.const"
import { BLOG_ARTICLES } from "../../data/blog.data"
import { createBreadcrumbSchema } from "../../utils/service-schema"
import "../../styles/blog-page.scss"

const seo = {
  title:
    "Commercial Cleaning Blog | Tips for San Diego Businesses | Good Steward",
  description:
    "Practical guides on commercial and office cleaning in San Diego: costs, checklists, schedules, and how to choose a cleaning company. From the Good Steward team.",
  pathname: ROUTES.blog.index,
}

const breadcrumbs = [{ label: "Home", path: ROUTES.home }, { label: "Blog" }]

const services = [
  { label: "Janitorial Services", path: ROUTES.janitorial },
  {
    label: "Commercial Cleaning — San Diego",
    path: ROUTES.serviceAreas.commercialCleaningSanDiego,
  },
  {
    label: "Office Cleaning — San Diego",
    path: ROUTES.serviceAreas.officeCleaningSanDiego,
  },
  { label: "Maintenance Services", path: ROUTES.maintenance },
]

const ctaDescription = `Tell us about your facility and cleaning needs, or call <a href="${CONTACT_INFO.phoneHref}">${CONTACT_INFO.phoneLocal}</a> to schedule a free on-site walkthrough.`

const BlogPage = () => (
  <Layout className="blog-page">
    <ServiceHero
      breadcrumbs={<Breadcrumbs items={breadcrumbs} />}
      subtitle="Tips & Guides for San Diego Businesses"
      title="Commercial Cleaning Blog"
      description="Welcome to the Good Steward Cleaning blog. Here you'll find practical guides for business owners, office managers, and facility managers in San Diego and Oceanside: what commercial cleaning costs, what it should include, how often your space needs it, and how to choose a cleaning company you can trust. Our in-house team shares what we see on the job every day, so you can keep your workplace clean, healthy, and welcoming."
      showCta={false}
    />

    <BlogList articles={BLOG_ARTICLES} />

    <section className="blog-services" aria-labelledby="blog-services-title">
      <div className="blog-services__container container">
        <div className="blog-services__header">
          <h2
            className="blog-services__title title-lg"
            id="blog-services-title"
          >
            Our services
          </h2>
        </div>
        <ul className="blog-services__grid">
          {services.map(service => (
            <li key={service.path}>
              <Link className="blog-services__link" to={service.path}>
                <span>{service.label}</span>
                <span className="blog-services__arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <CallToAction title="Need a cleaning quote?" description={ctaDescription} />
  </Layout>
)

export const Head = () => (
  <>
    <Seo {...seo} />
    <StructuredData data={createBreadcrumbSchema(breadcrumbs, seo.pathname)} />
  </>
)

export default BlogPage
