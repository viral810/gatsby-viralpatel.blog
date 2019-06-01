import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from "../components/Form"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Contact Viral Patel | Software Developer | Toronto"
      description="Viral Patel, Software Developer, a tech blogger working in Toronto, ON Canada. Follow Viral on Instagram and other social media on @thedecodedcoder"
      keywords={[
        `developer`,
        `toronto`,
        `react`,
        `ruby on rails`,
        `website`,
        `wordpress`,
        `javascript`,
        "jekyll",
        `blogger`,
        `tech blogger`,
      ]}
    />
    <header className="m-masthead l-spacing-bottom-1 m-masthead--offset">
      <div className="m-masthead__content">
        <h1 className="a-type-xxl m-masthead__heading">Contact Me</h1>

        <div className="m-masthead__description">
          <p className="a-type-xs">Anyway I can help you? </p>
        </div>
      </div>
    </header>
    <div className="l-container">
      <Form />
    </div>
  </Layout>
)

export default IndexPage
