import React from "react"

const FormDialog = () => (
  <dialog className="o-dialog js-dialog" data-hash="#newsletter" open="">
    <div className="o-dialog__wrapper">
      <div className="o-dialog__content">
        <div className="o-newsletter  js-newsletter">
          <div className="a-message a-message--success o-newsletter__message">
            <strong className="a-type-sm a-message__heading">
              Thank you, your answers have been sent
            </strong>

            <div className="a-type-content a-message__description">
              These will help me create more relevant content that you’re
              looking for.
            </div>
          </div>

          <div className="o-newsletter__content">
            <form
              className="o-newsletter__form"
              action="//robsimpson.us15.list-manage.com/subscribe/post?u=14997b309dfb0b3e305921d3d&amp;id=e43ced8d62"
              method="post"
              _lpchecked="1"
            >
              <fieldset className="o-newsletter__fieldset">
                <legend className="a-type-sm o-newsletter__legend">
                  Always stay up to date
                </legend>
                <div className="m-form-group m-form-group--input o-newsletter__form-group js-newsletter-form-group-name">
                  <label
                    className="a-label m-form-group__label"
                    for="newsletter-input-1"
                  >
                    First name
                  </label>
                  <div className="a-input m-form-group__input">
                    <input
                      className="a-input__input "
                      id="newsletter-input-1"
                      name="FNAME"
                      type="text"
                      value=""
                      required=""
                    />
                  </div>
                </div>

                <div className="m-form-group m-form-group--input o-newsletter__form-group js-newsletter-form-group-email">
                  <label
                    className="a-label m-form-group__label"
                    for="newsletter-input-2"
                  >
                    Email
                  </label>
                  <div className="a-input m-form-group__input">
                    <input
                      className="a-input__input "
                      id="newsletter-input-2"
                      name="EMAIL"
                      type="email"
                      value=""
                      required=""
                    />
                  </div>
                </div>

                <fieldset className="m-form-group m-form-group--checkbox o-newsletter__form-group js-newsletter-form-group-interest">
                  <legend className="m-form-group__legend">
                    What would you like to recieve?
                  </legend>

                  <div className="a-checkbox m-form-group__checkbox">
                    <input
                      className="a-checkbox__input"
                      id="newsletter-interest-1"
                      name="group[5333][1]"
                      type="checkbox"
                      value="Updates when new tutorials are released"
                      data-button-text="Subscribe"
                    />
                    <label
                      className="a-checkbox__label"
                      for="newsletter-interest-1"
                    >
                      <span className="a-checkbox__box">
                        <svg
                          className="a-icon a-icon--stroke a-icon--tick a-checkbox__icon"
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <polyline points="1 9.26644699 6.70753323 13.4134757 15 2" />
                        </svg>
                      </span>
                      Updates when new tutorials are released
                    </label>
                  </div>

                  <div className="a-checkbox m-form-group__checkbox">
                    <input
                      className="a-checkbox__input"
                      id="newsletter-interest-2"
                      name="group[5333][2]"
                      type="checkbox"
                      value="Updates when guides are launched"
                      data-button-text="Subscribe"
                    />
                    <label
                      className="a-checkbox__label"
                      for="newsletter-interest-2"
                    >
                      <span className="a-checkbox__box">
                        <svg
                          className="a-icon a-icon--stroke a-icon--tick a-checkbox__icon"
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <polyline points="1 9.26644699 6.70753323 13.4134757 15 2" />
                        </svg>
                      </span>
                      Updates when guides are launched
                    </label>
                  </div>
                </fieldset>

                <fieldset className="m-form-group m-form-group--checkbox o-newsletter__form-group">
                  <legend className="m-form-group__legend">
                    Please confirm that you’d like to hear from me
                  </legend>

                  <p className="m-form-group__description">
                    I’ll only use the information you provide on this form to
                    get touch about the topics you’ve chosen above. For more
                    information on how I use and protect your data, please view
                    my{" "}
                    <a
                      className="a-link"
                      href="../../privacy-policy"
                      target="_blank"
                    >
                      privacy policy
                    </a>
                    .
                  </p>

                  <div className="a-checkbox m-form-group__checkbox">
                    <input
                      className="a-checkbox__input"
                      id="newsletter-option-3"
                      name="newsletter-option-3"
                      type="checkbox"
                      value="Yes, send me emails"
                      required=""
                    />
                    <label
                      className="a-checkbox__label"
                      for="newsletter-option-3"
                    >
                      <span className="a-checkbox__box">
                        <svg
                          className="a-icon a-icon--stroke a-icon--tick a-checkbox__icon"
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <polyline points="1 9.26644699 6.70753323 13.4134757 15 2" />
                        </svg>
                      </span>
                      Yes, send me emails
                    </label>
                  </div>
                </fieldset>

                <button
                  className="a-button o-newsletter__button js-newsletter-button"
                  type="submit"
                >
                  Subscribe
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>

    <button className="o-dialog__close js-dialog-close" type="button">
      <svg
        className="a-icon a-icon--stroke a-icon--close o-dialog__close-icon"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Close dialog</title>

        <path d="M3 3l10 10M3 13L13 3" />
      </svg>
    </button>
  </dialog>
)
