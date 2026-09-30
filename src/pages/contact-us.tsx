import * as React from "react"
import Layout from "../components/common/layout/layout"
import CallToAction from "../components/sections/call-to-action/call-to-action"
import LetsConnect from "../components/sections/lets-connect/lets-connect"
import { CONTACT_INFO } from "../constants/contacts.const"
import Seo from "../components/common/seo/seo"
import RequestQuote from "../components/sections/request-quote/request-quote"

const title = `Ready to transform your space?`
const description = `Call us today to discuss your needs, or visit us at one of our locations. We look forward to working with you!`
const seo = {
  title: "Contact Us | Good Steward Cleaning – San Diego & Oceanside",
  description: `Contact Good Steward Cleaning for commercial & office cleaning in San Diego & Oceanside. Call ${CONTACT_INFO.phone} for a free on-site walkthrough & quote.`,
  pathname: "/contact-us",
}

const ContactUs = () => (
  <Layout>
    <LetsConnect></LetsConnect>
    <RequestQuote />
    <CallToAction title={title} description={description} phone={true} />
  </Layout>
)

export const Head = () => <Seo {...seo} />

export default ContactUs
