import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = ({ data }) => {
  const {
    allMarkdownRemark: { edges },
  } = data
  return (
    <Layout>
      <SEO
        title="Blog | Viral Patel | Software Developer | Toronto"
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
      <div className="o-tutorial-listing l-spacing-bottom-5">
        <article className="m-tutorial-item o-tutorial-listing__item">
          <div className="center mw6 pa3 pa4-ns">
            {edges.map(({ node }) => {
              return (
                <div
                  className="m-tutorial-item__content"
                  key={node.frontmatter.path}
                >
                  <h3 className="a-type-sm m-tutorial-item__heading">
                    <Link className="a-link" to={node.frontmatter.path}>
                      {node.frontmatter.title}
                    </Link>
                  </h3>
                  <p>{node.excerpt}</p>
                  <br />
                  <br />
                </div>
              )
            })}
          </div>
        </article>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query BlogPageQuery {
    allMarkdownRemark {
      edges {
        node {
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`

export default BlogPage
