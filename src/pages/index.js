import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="l-container">
      <h1 className="a-type-xxl m-masthead__heading">
        Hey, I’m Viral! <br /> A Full Stack Software Developer
      </h1>
      <br />
      <div className="m-masthead__description">
        <p className="a-type-xs">
          Toronto based Full Stack Developer working with teams and startups to
          create websites, scalable web applications and systems that focus on
          performance, amazing UI/UX design, and simplicity.
        </p>
      </div>
      <div className="o-service-listing t-home__services" />
      <div className="t-home__schedule-work-history">
        <div className="m-content t-home__schedule">
          <div className="a-type-content m-content__content">
            <h2>What I’m busy working on</h2>{' '}
            <ul>
              {' '}
              <li>
                Working at{' '}
                <a
                  href="http://www.pathfactory.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PathFactory
                </a>{' '}
                on some exciting projects
              </li>{' '}
              <li>
                Working on my side project –{' '}
                <a
                  href="https://t.imer.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  T.imer App
                </a>
                ; a web app for pomodoro timer
              </li>{' '}
              <li>
                Writing new tutorials – mostly focused on application
                development and cloud technologies
              </li>{' '}
              <li>
                Listening to audiobook{' '}
                <a
                  href="https://www.audible.ca/pd/Atomic-Habits-Audiobook/B07GBGQJSW?qid=1550204338&sr=1-1&ref=a_search_c3_lProduct_1_1&pf_rd_p=65c74350-6dfb-47fa-85fd-1459a4762abd&pf_rd_r=GRX678MKASEWQT79RNMG&"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Atom Habits
                </a>
              </li>{' '}
              <li>
                Reading{' '}
                <a
                  href="https://www.amazon.ca/gp/product/0596528124/ref=ppx_yo_dt_b_asin_title_o00__o00_s00?ie=UTF8&psc=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mastering Regular Expressions
                </a>
                ,{' '}
                <a
                  href="https://www.amazon.ca/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612/ref=sr_1_1?crid=Q7WX0FU1Y3QJ&keywords=design+patterns&qid=1550114327&s=books&sprefix=design+pat%2Cstripbooks%2C158&sr=1-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Design Patterns - Elements of Reusable Object-Oriented
                  Software
                </a>{' '}
                and{' '}
                <a
                  href="https://www.amazon.ca/gp/product/0307273601/ref=ppx_yo_dt_b_asin_title_o07__o00_s00?ie=UTF8&psc=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Daily Rituals - How Artists Work
                </a>
              </li>{' '}
            </ul>
          </div>
        </div>

        <section className="o-work-history o-work-history--highlight t-home__work-history">
          <div className="o-work-history__content">
            <h2 className="a-type-lg o-work-history__heading">Work history</h2>

            <ol className="o-work-history-listing o-work-history__listing">
              <li className="m-work-history-item o-work-history-listing__item">
                <div className="m-work-history-item__header">
                  <h3 className="a-type-sm m-work-history-item__heading">
                    PathFactory
                  </h3>
                  <span className="m-work-history-item__date">
                    (
                    <time
                      className="m-work-history-item__date-from"
                      dateTime="2018"
                    >
                      2018
                    </time>{' '}
                    -{' '}
                    <time
                      className="m-work-history-item__date-to"
                      dateTime="2019"
                    >
                      Present
                    </time>
                    )
                  </span>
                </div>
                <span className="m-work-history-item__job-title">
                  Senior Software developer
                </span>
              </li>

              <li className="m-work-history-item o-work-history-listing__item">
                <div className="m-work-history-item__header">
                  <h3 className="a-type-sm m-work-history-item__heading">
                    Symantec
                  </h3>
                  <span className="m-work-history-item__date">
                    (
                    <time
                      className="m-work-history-item__date-from"
                      dateTime="2017"
                    >
                      2017
                    </time>{' '}
                    -{' '}
                    <time
                      className="m-work-history-item__date-to"
                      dateTime="2018"
                    >
                      2018
                    </time>
                    )
                  </span>
                </div>
                <span className="m-work-history-item__job-title">
                  Software Developer
                </span>
              </li>

              <li className="m-work-history-item o-work-history-listing__item">
                <div className="m-work-history-item__header">
                  <h3 className="a-type-sm m-work-history-item__heading">
                    SurfEasy
                  </h3>
                  <span className="m-work-history-item__date">
                    (
                    <time
                      className="m-work-history-item__date-from"
                      dateTime="2016"
                    >
                      2016
                    </time>{' '}
                    -{' '}
                    <time
                      className="m-work-history-item__date-to"
                      dateTime="2017"
                    >
                      2017
                    </time>
                    )
                  </span>
                </div>
                <span className="m-work-history-item__job-title">
                  Full Stack Web developer
                </span>
              </li>

              <li className="m-work-history-item o-work-history-listing__item">
                <div className="m-work-history-item__header">
                  <h3 className="a-type-sm m-work-history-item__heading">
                    Edealer
                  </h3>
                  <span className="m-work-history-item__date">
                    (
                    <time
                      className="m-work-history-item__date-from"
                      dateTime="2014"
                    >
                      2014
                    </time>{' '}
                    -{' '}
                    <time
                      className="m-work-history-item__date-to"
                      dateTime="2016"
                    >
                      2016
                    </time>
                    )
                  </span>
                </div>
                <span className="m-work-history-item__job-title">
                  Senior Front-End developer
                </span>
              </li>
            </ol>

            <a
              className="a-button o-work-history__button"
              href="https://www.linkedin.com/in/viralpatel810/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View CV on LinkedIn
            </a>
          </div>
        </section>
      </div>
      <br />
      <br />
      <section
        className="m-call-to-action t-home__call-to-action js-inview is-inview"
        data-threshold="0.75"
      >
        <div className="m-call-to-action__content">
          <h2 className="a-type-lg m-call-to-action__heading">
            I’m <span className="m-call-to-action__highlight">available</span>{' '}
            for new website and application development work
          </h2>

          <a
            className="a-button m-call-to-action__button"
            href="mailto:pviral810@gmail.com"
          >
            Get in touch
          </a>
        </div>

        <figure className="a-image m-call-to-action__image">
          <div className="a-image__inner">
            <div className="a-image__picture">
              <img
                src="https://www.robsimpson.me/img/svg/laptop.svg"
                alt="Viral Patel | Desk Setup | Developer Laptop"
                className="a-image__media"
              />
            </div>
          </div>
        </figure>
      </section>
      <section className="m-call-to-action-link t-home__call-to-action-link">
        <div className="m-call-to-action-link__content">
          <h2 className="a-type-xs m-call-to-action-link__heading">
            Learn more about web development work...
          </h2>
          <Link href="/contact">
            <a className="a-link m-call-to-action-link__link" href="./work">
              blog
            </a>
          </Link>
        </div>
      </section>
    </div>
  </Layout>
)

export default IndexPage
