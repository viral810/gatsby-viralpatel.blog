import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Monthly Expense Calculator | Viral Patel | Software Developer | Toronto"
      description="Viral Patel, Software Developer, a tech blogger working in Toronto, ON Canada. Follow Viral on Instagram and other social media on @thedecodedcoder"
      keywords={[
        `developer`,
        `toronto`,
        `viral patel`,
        `patel`,
        `website`,
        `finance`,
        `personal finance`,
        "expense calculator",
        `monthly expense`,
      ]}
    />
    <header className="m-masthead l-spacing-bottom-1 m-masthead--offset">
      <div className="m-masthead__content">
        <h1 className="a-type-md m-masthead__heading">
          Monthly Expense Calculator
        </h1>

        <div className="m-masthead__description">
          <p className="a-type-xxs">
            Input all of your current monthly expenses, If something doesn't
            fill in the below categories, add it to the miscellaneous total.
            This is a good snapshot of your outgoing cash-flow.
          </p>
        </div>
      </div>
    </header>
  </Layout>
)

export default IndexPage
