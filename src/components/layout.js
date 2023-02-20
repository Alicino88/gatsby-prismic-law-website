/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"
import ContactsNav from "./ContactsNav"
import MenuNav from "./MenuNav"
import MobileNav from "./MobileNav"
import Footer from "./Footer"

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
    console.log("test")
  }
  /*
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  */

  return (
    <>
      <div className="fixed top-0 w-full z-20">
        <ContactsNav />
        <MenuNav toggle={toggle} isOpen={isOpen} />
        <MobileNav toggle={toggle} isOpen={isOpen} />
      </div>
      <main>{children}</main>
      <Footer />
      <div
        style={{
          marginTop: `var(--space-5)`,
          fontSize: `var(--font-sm)`,
        }}
        className="max-w-screen-xl mx-auto py-4 px-5"
      >
        © Alice Moretti - {new Date().getFullYear()} | Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </div>
    </>
  )
}

export default Layout
