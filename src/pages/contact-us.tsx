import * as React from "react"
import Layout from "../components/common/layout/layout"
import CallToAction from "../components/sections/call-to-action/call-to-action"
import LetsConnect from "../components/sections/lets-connect/lets-connect"

const title = `Ready to transform your space?`
const description = `Call us today to discuss your needs, or visit us at one of our locations. We look forward to working with you!`

const ContactUs = () => (
  <Layout>
    <LetsConnect></LetsConnect>
    <CallToAction title={title} description={description} phone={true} />
  </Layout>
)

export default ContactUs
