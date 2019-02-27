import React, { Fragment } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const onSubmit = event => {
  event.preventDefault()
  const { elements } = event.target
  Object.keys(elements).forEach(key =>
    console.log(`${elements[key].name} -> ${elements[key].value}`)
  )
}

const IndexPage = () => (
  <Layout>
    <SEO
      title="Dreamline Worksheet"
      keywords={[`gatsby`, `application`, `react`]}
    />
    <header className="m-masthead l-spacing-bottom-1 m-masthead--offset">
      <div className="m-masthead__content">
        <h1 className="a-type-xxl m-masthead__heading">Dreamline Worksheet</h1>

        <div className="m-masthead__description">
          <p className="a-type-xs">
            Inspired from Tim {`Ferriss's`} book{" "}
            <a
              href="https://amzn.to/2GZcdlJ"
              target="_blank"
              rel="noopener noreferrer"
            >
              The 4-Hour Workweek
            </a>
          </p>
          Checkout{" "}
          <a
            href="https://fhww.files.wordpress.com/2013/04/dreamline.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            sample dreamline
          </a>
        </div>
      </div>
    </header>
    <form onSubmit={e => onSubmit(e)}>
      In{" "}
      <input
        className="a-input__input "
        id="dreamline-months"
        name="months"
        type="number"
        max={12}
        min={1}
        required
        placeholder="months"
      />{" "}
      months | DREAM of:
      <section>
        <h5>Having</h5>
        <div className="grid">
          <span className="headerTitle">Star?</span>
          <span className="headerTitle">Description</span>
          <span className="headerTitle">Cost</span>
          <span className="headerTitle">Cost Type</span>
          {[...Array(5).keys()].map(count => (
            <Fragment key={count}>
              <span>
                <input
                  className="a-checkbox__input"
                  name={`starred-having[${count}]`}
                  type="checkbox"
                  data-button-text="Subscribe"
                  value="no"
                />
              </span>
              <span>
                <input className="a-input__input " />
              </span>
              <span>
                <input className="a-input__input " />
              </span>
              <span>
                <select className="a-input__input ">
                  <option>One-Time</option>
                  <option>Monthly</option>
                </select>
              </span>
            </Fragment>
          ))}
        </div>
      </section>
      <section>
        <h5>Being</h5>
        <div className="grid five">
          <span className="headerTitle">Star?</span>
          <span className="headerTitle">Description</span>
          <span className="headerTitle">To make it happen</span>
          <span className="headerTitle">Cost</span>
          <span className="headerTitle">Cost Type</span>
          {[...Array(5).keys()].map(count => (
            <Fragment key={count}>
              <span>
                <input
                  className="a-checkbox__input"
                  name={`starred-having[${count}]`}
                  type="checkbox"
                  data-button-text="Subscribe"
                  value="no"
                />
              </span>
              <span>
                <input className="a-input__input " />
              </span>
              <span>
                <input className="a-input__input " />
              </span>
              <span>
                <input className="a-input__input " />
              </span>
              <span>
                <select className="a-input__input ">
                  <option>One-Time</option>
                  <option>Monthly</option>
                </select>
              </span>
            </Fragment>
          ))}
        </div>
      </section>
      <section>
        <h5>Doing</h5>
        <div className="grid">
          <span className="headerTitle">Star?</span>
          <span className="headerTitle">Description</span>
          <span className="headerTitle">Cost</span>
          <span className="headerTitle">Cost Type</span>
          {[...Array(5).keys()].map(count => (
            <Fragment key={count}>
              <span>
                <input
                  className="a-checkbox__input"
                  name={`starred-doing[${count}]`}
                  type="checkbox"
                  data-button-text="Subscribe"
                  value="no"
                />
              </span>
              <span>
                <input className="a-input__input " />
              </span>
              <span>
                <input className="a-input__input " />
              </span>
              <span>
                <select className="a-input__input ">
                  <option>One-Time</option>
                  <option>Monthly</option>
                </select>
              </span>
            </Fragment>
          ))}
        </div>
      </section>
      <input
        type="submit"
        className="a-button m-nav__menu-button"
        value="Proceed to monthly expense calculator"
      />
    </form>
  </Layout>
)

export default IndexPage
