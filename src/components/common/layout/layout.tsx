import React, { ReactNode } from "react"
import Header from "../header/header"
import Footer from "../footer/footer"
import "./layout.scss"

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="layout">
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
)

export default Layout
