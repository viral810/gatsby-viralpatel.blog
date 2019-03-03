import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

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
    <h3>
      If you're wondering what language or technologies I used to built this
      site.
    </h3>

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
  </Layout>
)

export default IndexPage
