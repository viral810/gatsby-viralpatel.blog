import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const showMenuListener = () => {
  const el = document.getElementsByClassName("js-nav-menu")[0]
  const flag = el.getAttribute("aria-hidden")
  const value = flag === "false"
  el.setAttribute("aria-hidden", value.toString())
}

const Header = ({ siteTitle }) => (
  <header className="o-header">
    <div className="o-header__container">
      <Link to="/" className="o-header__logo">
        <span className="a-button a-button--square o-header__logo-mark">
          <span className="o-header__logo-mark-text">VP</span>
        </span>
        <span className="o-header__logo-text">Viral Patel</span>
      </Link>
      <nav
        className="m-nav js-nav"
        aria-label="Main menu"
        role="presentation"
        onClick={() => showMenuListener()}
        onKeyDown={() => showMenuListener()}
      >
        <button
          className="m-nav__menu-toggle-button js-nav-menu-button"
          type="button"
          aria-expanded="true"
        >
          <span
            className="m-nav__menu-toggle-button-text js-nav-menu-button-text"
            data-closed="Menu"
            data-opened="Close"
          >
            Menu
          </span>
          <span className="a-button a-button--square m-nav__menu-toggle-button-button">
            <svg
              className="a-icon a-icon--stroke a-icon--burger a-button__icon m-nav__menu-button-icon"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 12h14" />
              <path d="M1 8h14" />
              <path d="M1 4h14" />
            </svg>
          </span>
        </button>

        <div className="m-nav__menu js-nav-menu" aria-hidden="false">
          <div className="m-nav__menu-inner">
            <ul className="m-nav__menu-list" role="menubar">
              <li className="m-nav__menu-item" role="menuitem">
                <Link
                  to="/what-i-am-reading"
                  className="a-link m-nav__menu-link"
                >
                  Books I Read
                </Link>
              </li>
              <li className="m-nav__menu-item" role="menuitem">
                <Link to="/tech-stack" className="a-link m-nav__menu-link">
                  Tech Stack
                </Link>
              </li>
              <li className="m-nav__menu-item" role="menuitem">
                <Link to="/blog" className="a-link m-nav__menu-link">
                  Blog
                </Link>
              </li>
              <li className="m-nav__menu-item" role="menuitem">
                <Link to="/contact" className="a-button m-nav__menu-button">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
