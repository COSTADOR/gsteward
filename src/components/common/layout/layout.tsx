import React, { ReactNode } from "react"
import Header from "../header/header"
import Footer from "../footer/footer"
import "./layout.scss"

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className }) => (
  <div className={`layout ${className || ""}`}>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
)

export default Layout
