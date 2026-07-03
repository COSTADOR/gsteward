import * as React from "react"
import Layout from "../components/common/layout/layout"
import CallToAction from "../components/sections/call-to-action/call-to-action"
import LetsConnect from "../components/sections/lets-connect/lets-connect"
import { CONTACT_INFO } from "../constants/contacts.const"

const title = `Ready to transform your space?`
const description = `Call us today to discuss your needs, or visit us at one of our locations. We look forward to working with you!`

const ContactUs = () => (
  <Layout>
    <LetsConnect></LetsConnect>
    <CallToAction title={title} description={description} phone={true} />
  </Layout>
)

export const Head = () => (
  <>
      <title>Contact Us | Good Steward Cleaning – San Diego & Oceanside</title>
      <meta name="description" content={`Contact Good Steward Cleaning for commercial & office cleaning in San Diego & Oceanside. Call ${CONTACT_INFO.phone} for a free on-site walkthrough & quote.`} />
      <meta property="og:title" content="Contact Us | Good Steward Cleaning – San Diego & Oceanside" />
      <meta property="og:description" content={`Contact Good Steward Cleaning for commercial & office cleaning in San Diego & Oceanside. Call ${CONTACT_INFO.phone} for a free on-site walkthrough & quote.`} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/images/logo.svg" />
      <meta property="og:url" content="https://www.gsteward.com/contact-us" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Contact Us | Good Steward Cleaning – San Diego & Oceanside" />
      <meta name="twitter:description" content={`Contact Good Steward Cleaning for commercial & office cleaning in San Diego & Oceanside. Call ${CONTACT_INFO.phone} for a free on-site walkthrough & quote.`} />
      <meta name="twitter:image" content="/images/logo.svg" />
      <link rel="canonical" href="https://www.gsteward.com/contact-us" />
  </>
)

export default ContactUs
