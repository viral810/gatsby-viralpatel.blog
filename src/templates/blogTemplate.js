import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout';
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
    <header className="m-masthead l-spacing-bottom-1 m-masthead--offset">
    <div className="m-masthead__content">
      <h1 className="a-type-xxl m-masthead__heading">{frontmatter.title}</h1>

      <div className="m-masthead__description">
        <p className="a-type-xs">
          Tags: <u>{frontmatter.tags}</u>
        </p>
      </div>
    </div>
  </header>
  <div className="m-content o-tutorial-article__content">
    <div
      className="a-type-content m-content__content"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  </div>
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
