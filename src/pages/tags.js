import React from "react"
import { Link, graphql } from "gatsby"
import PropTypes from "prop-types"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import SEO from "../components/seo"
import Layout from "../components/layout"

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <SEO
      title={`${title} | Viral Patel | Software Developer | Toronto`}
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
        title,
      ]}
    />
    <header className="m-masthead l-spacing-bottom-1 m-masthead--offset">
      <h1 className="a-type-xxl m-masthead__heading">Tags</h1>
    </header>
    <div className="o-tutorial-listing l-spacing-bottom-5">
      <article className="m-tutorial-item o-tutorial-listing__item">
        <div className="center mw6 pa3 pa4-ns">
          {group.map(tag => {
            return (
              <div className="m-tutorial-item__content" key={tag.fieldValue}>
                <h2 className="a-type-md m-tutorial-item__heading">
                  <a
                    className="a-link m-tutorial-item__heading-link"
                    href={`/tags/${kebabCase(tag.fieldValue)}/`}
                  >
                    {tag.fieldValue} ({tag.totalCount})
                  </a>
                </h2>
              </div>
            )
          })}
        </div>
      </article>
    </div>
  </Layout>
)

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
