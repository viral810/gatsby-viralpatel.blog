import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"

const disqusCode = () =>
  /**
   *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
   *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
  /*
  var disqus_config = function () {
  this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
  this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
  };
  */
  (function() {
    // DON'T EDIT BELOW THIS LINE
    var d = document,
      s = d.createElement("script")
    s.src = "https://https-viralpatel-blog.disqus.com/embed.js"
    s.setAttribute("data-timestamp", +new Date())
    ;(d.head || d.body).appendChild(s)
  })()

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
      <br />
      <br />
      <div id="disqus_thread" />
      <script type="text/javascript" dangerouslySetInnerHTML={disqusCode()} />
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
