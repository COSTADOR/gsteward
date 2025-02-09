import * as React from "react"

import Layout from "../components/common/layout/layout"
import Seo from "../components/common/seo/seo"
import Hero from "../components/sections/hero/hero"
import Steps from "../components/sections/steps/steps"
import Features from "../components/sections/features/features"
import Stats from "../components/sections/stats/stats"
import MainServices from "../components/sections/main-services/main-services"
import Contact from "../components/sections/contact/contact"

const title = `Your space, <em>our expertise</em>
            <br /> — quality cleaning
            <br /> you can trust`
const description = `From offices to commercial spaces, our professional cleaning services deliver unmatched quality and a spotless experience.`

const IndexPage = () => (
  <Layout className={'main-page'}>
    <Hero title={title} description={description} showServicesButton={true} imgUrl={'/images/hero-main.jpg'}/>
    <Steps />
    <Features />
    <Stats />
    <MainServices />
    <Contact />
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
