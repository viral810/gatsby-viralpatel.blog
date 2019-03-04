import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FormDialog from "../components/form-dialog"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Tech Stack| Viral Patel | Software Developer | Toronto"
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
        `books`,
        `programming`,
        `Website Design`,
      ]}
    />
    <FormDialog />
    <header className="m-section-header l-spacing-bottom-1 m-section-header--offset">
      <h2 className="a-type-lg m-section-header__heading">Tech Stack</h2>

      <p className="m-section-header__description">
        If you're wondering what language or technologies I used to built this
        site.
      </p>
    </header>
    <div className="m-content o-tutorial-article__content">
      <div className="a-type-content m-content__content">
        <h4>Frameworks</h4>
        <ul>
          <li>React JS</li>
          <li>Gatsby JS</li>
        </ul>

        <h4>Deployment & Hosting</h4>
        <ul>
          <li>AWS S3</li>
          <li>Cloudflare (Security and CDN)</li>
        </ul>

        <h4>Web performance and Analytics</h4>
        <ul>
          <li>Google Analytics</li>
          <li>Google PageSpeed Insights</li>
          <li>Lighthouse Chrome DevTools</li>
        </ul>
      </div>
    </div>
  </Layout>
)

export default IndexPage
