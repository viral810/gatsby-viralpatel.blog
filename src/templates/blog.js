import React, { Fragment } from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import FormDialog from "../components/form-dialog"

import kebabCase from "lodash/kebabCase"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO
        title={`${
          frontmatter.title
        } | Viral Patel | Software Developer | Toronto`}
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
          ...frontmatter.tags,
        ]}
      />
      <header className="m-masthead l-spacing-bottom-1 m-masthead--offset">
        <div className="m-masthead__content">
          <h1 className="a-type-xxl m-masthead__heading">
            {frontmatter.title}
          </h1>

          <div className="m-masthead__description">
            <p className="a-type-xs">
              Tags:{" "}
              {frontmatter.tags.map((tag, index) => (
                <Fragment key={index}>
                  <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>{tag}</Link>{" "}
                </Fragment>
              ))}
            </p>
          </div>
        </div>
      </header>
      <div className="m-content o-tutorial-article__content">
        <div
          className="a-type-content m-content__content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <FormDialog />
      </div>
      <br />
      <br />
      <div id="disqus_thread" />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        tags
      }
    }
  }
`
