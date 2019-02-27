import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <header className="m-masthead l-spacing-bottom-1 m-masthead--offset">
        <div className="m-masthead__content">
          <h1 className="a-type-xxl m-masthead__heading">Contact Me</h1>

          <div className="m-masthead__description">
            <p className="a-type-xs">
              Anyway I can help you?{' '}
              <a href="mailto:pviral810@gmail.com">Get in touch</a>
            </p>
          </div>
        </div>
      </header>
  </Layout>
)

export default IndexPage
