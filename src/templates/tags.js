import React from "react"
import PropTypes from "prop-types"
import SEO from "../components/seo"
import Layout from "../components/layout"
import FormDialog from "../components/form-dialog"

// Components
import { Link, graphql } from "gatsby"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <Layout>
      <SEO
        title={`${tag} | Viral Patel | Software Developer | Toronto`}
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
          tag,
        ]}
      />
      <header className="m-masthead l-spacing-bottom-1 m-masthead--offset">
        <div className="m-masthead__content">
          <h1 className="a-type-xxl m-masthead__heading">{tagHeader}</h1>
        </div>
      </header>
      <div className="o-tutorial-listing l-spacing-bottom-5">
        <article className="m-tutorial-item o-tutorial-listing__item">
          <div className="center mw6 pa3 pa4-ns">
            {edges.map(({ node }) => {
              const { title, path } = node.frontmatter
              return (
                <li key={path}>
                  <a
                    className="a-link a-type-xs m-tutorial-item__heading-link"
                    href={path}
                  >
                    {title}
                  </a>
                </li>
              )
            })}
          </div>
        </article>
        <br />
        <a
          className="a-link a-type-xs m-tutorial-item__heading-link"
          href="/tags"
        >
          See All tags
        </a>
        <br />
        <FormDialog />
      </div>
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              path: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            path
            title
          }
        }
      }
    }
  }
`
