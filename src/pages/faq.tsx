import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/common/layout/layout"
import Breadcrumbs from "../components/common/breadcrumbs/breadcrumbs"
import Seo from "../components/common/seo/seo"
import StructuredData from "../components/common/structured-data/structured-data"
import FaqList from "../components/sections/faq-list/faq-list"
import ServiceHero from "../components/sections/service-hero/service-hero"
import { ROUTES } from "../constants/routes.const"
import { FAQ_ITEMS } from "../data/faq.data"
import { createBreadcrumbSchema } from "../utils/service-schema"
import { createFaqSchema } from "../utils/faq-schema"

const seo = {
  title: "Commercial Cleaning FAQ | Good Steward Cleaning",
  description:
    "Answers to common questions about commercial cleaning cost, service areas, scheduling, and green cleaning options from Good Steward Cleaning. Free quote.",
  pathname: ROUTES.faq,
}

const breadcrumbs = [{ label: "Home", path: ROUTES.home }, { label: "FAQ" }]

const schemas = [
  createBreadcrumbSchema(breadcrumbs, seo.pathname),
  createFaqSchema(FAQ_ITEMS),
]

const FaqPage = () => (
  <Layout>
    <ServiceHero
      breadcrumbs={<Breadcrumbs items={breadcrumbs} />}
      subtitle="Commercial Cleaning FAQ — San Diego & Oceanside"
      title="Frequently Asked Questions"
      description={
        <>
          Have questions about commercial cleaning in San Diego or Oceanside?
          Below are answers to the questions we hear most from office managers,
          facility managers, and business owners — from pricing and scheduling
          to insurance and eco-friendly options. Don&apos;t see your question
          here? <Link to={ROUTES.contactUs}>Contact us</Link> and we&apos;ll get
          you a straight answer.
        </>
      }
    />
    <FaqList items={FAQ_ITEMS} />
  </Layout>
)

export const Head = () => (
  <>
    <Seo {...seo} />
    {schemas.map(schema => (
      <StructuredData data={schema} key={schema["@type"]} />
    ))}
  </>
)

export default FaqPage
