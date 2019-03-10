import React, { Fragment, useState } from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const StyledTable = styled.div`
  margin-bototm: 30px;

  .type {
    font-size: 1rem;
    font-weight: 700;

    &.last {
      text-align: right;
      text-transform: uppercase;
    }
  }

  h3 {
    display: inline-block;
    width: 100%;
    text-align: center;
    padding: 5px;
    margin-bottom: 15px;
    background-color: var(--secondary);
  }

  .grid__table {
    display: -ms-grid;
    display: grid;
    grid-gap: 1.25rem 1.25rem;
    -ms-grid-template-columns: 5fr 2fr;
    grid-template-columns: 5fr 2fr;

    input {
      padding: 0.125rem 1rem;
    }

    span {
      padding: 5px 10px;
      border-bottom: 1px solid var(--primary);

      &:last-child,
      &:nth-last-child(2) {
        background: var(--secondary);
      }
    }
  }
`

const Fields = [
  "Rent/Mortgage",
  "Property Taxes",
  "Education/Tution",
  "Credit Card Minimum Payments",
  "Car Payments",
  "Other Loan Payments",
  "Car Insurance",
  "Home Insurance",
  "Life Insurance",
  "Health/Dental Insurance",
  "Telephone",
  "Cable/TV",
  "Heating/Electricity",
  "Water",
  "Gasoline",
  "Eating out",
  "Subscriptions(Online and Offline)",
  "Memberships",
  "Miscellaneous",
]

const IndexPage = () => {
  const [cost, setCost] = useState(0)

  const onCostChange = () => {
    const inputs = document.getElementsByClassName("control")
    let totalCost = 0
    for (let input of inputs) {
      totalCost = totalCost + parseFloat(input.value)
    }
    setCost(totalCost)
  }

  return (
    <Layout>
      <SEO
        title="Monthly Expense Calculator | Viral Patel | Software Developer | Toronto"
        description="Viral Patel, Software Developer, a tech blogger working in Toronto, ON Canada. Follow Viral on Instagram and other social media on @thedecodedcoder"
        keywords={[
          `developer`,
          `toronto`,
          `viral patel`,
          `patel`,
          `website`,
          `finance`,
          `personal finance`,
          "expense calculator",
          `monthly expense`,
        ]}
      />
      <header className="m-masthead l-spacing-bottom-1 m-masthead--offset">
        <div className="m-masthead__content">
          <h1 className="a-type-md m-masthead__heading">
            Monthly Expense Calculator
          </h1>

          <div className="m-masthead__description">
            <p className="a-type-xxs">
              Input all of your current monthly expenses, If something doesn't
              fill in the below categories, add it to the miscellaneous total.
              This is a good snapshot of your outgoing cash-flow.
            </p>
          </div>
        </div>
      </header>
      <StyledTable>
        <h3 className="o-work-detail-item__content-child-heading a-type-xxs">
          Monthly Totals
        </h3>
        <div className="grid__table">
          {Fields.map((field, index) => (
            <Fragment key={index}>
              <span className="type">{field}</span>
              <span>
                <input
                  className="a-input__input control"
                  type="number"
                  min={0}
                  defaultValue={0}
                  onChange={() => onCostChange()}
                />
              </span>
            </Fragment>
          ))}
          <span className="type last">Total spent for month</span>
          <span>
            <input
              className="a-input__input"
              type="text"
              value={`$${cost}`}
              readOnly
              disabled
            />
          </span>
          <span className="type last">Dreamline Buffer</span>
          <span>
            <input
              className="a-input__input"
              type="text"
              disabled
              value={`$${cost * 1.3}`}
              readOnly
            />
          </span>
        </div>
      </StyledTable>
      <br />
      <br />
      <span>
        Inspired from the book{" "}
        <a
          className="a-link"
          href="https://amzn.to/2F0R4WI"
          rel="noopener noreferrer"
          target="_blank"
        >
          The 4-Hour Workweek by Tim Ferriss{" "}
        </a>{" "}
      </span>
    </Layout>
  )
}

export default IndexPage
