import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BOOKS from "../books.json"

const IndexPage = () => (
  <Layout>
    <SEO
      title="What Books I am reading | Viral Patel | Software Developer | Toronto"
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
      ]}
    />
    <header className="m-section-header l-spacing-bottom-1 m-section-header--offset">
      <h2 className="a-type-lg m-section-header__heading">Reading list</h2>

      <p className="m-section-header__description">
        A collection of books I’m reading or have recently read that I recommend
        to check out for any level of programmers.
      </p>
    </header>
    <div className="o-publication-listing">
      {BOOKS.books.map(book => (
        <article
          key={book.title}
          className="m-publication-item o-publication-listing__item"
        >
          <figure className="a-image a-image--shadow m-publication-item__image">
            <a
              className="a-link m-publication-item__heading-link"
              href={book.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="a-image__picture"
                src={book.poster}
                alt={book.title}
              />
            </a>
          </figure>

          <div className="m-publication-item__content">
            <h3 className="a-type-xs m-publication-item__heading">
              <a
                className="a-link m-publication-item__heading-link"
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {book.title}
              </a>
            </h3>

            <div className="m-publication-item__author">
              <p>By {book.author}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
    <br />
    <br />
    <br />
  </Layout>
)

export default IndexPage
