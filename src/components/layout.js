import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main id="main-content">
          <div className="l-container l-container--rel">{children}</div>
        </main>
        <div id="amzn-assoc-ad-83f1be74-3746-4844-9035-abbea5ae82a5" />
        <script
          async
          src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=83f1be74-3746-4844-9035-abbea5ae82a5"
        />
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
