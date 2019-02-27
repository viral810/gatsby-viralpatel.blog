import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = ({ data }) => {
  const { allMarkdownRemark: { edges } } = data;
  return (
    <Layout>
      <SEO title="Blog" keywords={[`gatsby`, `application`, `react`]} />
      <header className="m-masthead l-spacing-bottom-1 m-masthead--offset">
          <h1 className="a-type-xxl m-masthead__heading">Tech Blogs</h1>

          {/* <div className="m-masthead__description">
            <p className="a-type-xs">
              Learn more about topics such as{' '}
              <Link
                to="/tags/frontend-web-development"
              >front-end web development
              </Link>
              ,{' '}
              <Link to="/tags/es6-javascript">ES6 Javascript
              </Link>
              ,{' '}
              <Link to="/tags/react">React
              </Link>
              ,{' '}
              <Link to="/tags/ruby-on-rails">Ruby on Rails
              </Link>
              ,{' '}
              <Link
                to="/tags/cloud-computing"
              >Cloud Computing
              </Link>
            </p>
          </div> */}
        </header>
        <div className="o-tutorial-listing l-spacing-bottom-5">
          <article className="m-tutorial-item o-tutorial-listing__item">
            <div className="center mw6 pa3 pa4-ns">
              {edges.map(({ node }) => {
                return (
                  <div className="m-tutorial-item__content" key={node.frontmatter.date}>
                      <h2 className="a-type-md m-tutorial-item__heading">
                        <Link
                          className="a-link m-tutorial-item__heading-link"
                          to={node.frontmatter.path}
                        >
                          {node.frontmatter.title}
                        </Link>
                      </h2>
                  </div>
                );
              })}
            </div>
          </article>
        </div>
    </Layout>
  )
};

export const query = graphql`
  query BlogPageQuery {
    allMarkdownRemark {
      edges {
        node {
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
