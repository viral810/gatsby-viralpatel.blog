import React, { useState } from "react"

const showModal = () =>
  document.querySelectorAll("[data-hash='#newsletter']")[0].showModal()
const hideModal = () =>
  document.querySelectorAll("[data-hash='#newsletter']")[0].close()

const FormDialog = () => {
  const [fname, setFname] = useState("")
  const [email, setEmail] = useState("")
  const [emailSend, setEmailSend] = useState(false)

  return (
    <>
      <br />
      <button
        className="a-button o-work-history__button"
        onClick={() => showModal()}
      >
        Susbcribe to Newsletter
      </button>
      <dialog className="o-dialog js-dialog" data-hash="#newsletter">
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
                  action="https://formspree.io/pviral810@gmail.com"
                  method="post"
                >
                  <fieldset className="o-newsletter__fieldset">
                    <legend className="a-type-sm o-newsletter__legend">
                      Always stay up to date
                    </legend>
                    <div className="m-form-group m-form-group--input o-newsletter__form-group js-newsletter-form-group-name">
                      <label
                        className="a-label m-form-group__label"
                        htmlFor="newsletter-input-1"
                      >
                        First name
                      </label>
                      <div className="a-input m-form-group__input">
                        <input
                          className="a-input__input "
                          id="newsletter-input-1"
                          name="FNAME"
                          type="text"
                          value={fname}
                          onChange={e => setFname(e.target.value)}
                          required=""
                        />
                      </div>
                    </div>

                    <div className="m-form-group m-form-group--input o-newsletter__form-group js-newsletter-form-group-email">
                      <label
                        className="a-label m-form-group__label"
                        htmlFor="newsletter-input-2"
                      >
                        Email
                      </label>
                      <div className="a-input m-form-group__input">
                        <input
                          className="a-input__input "
                          id="newsletter-input-2"
                          name="EMAIL"
                          type="email"
                          value={email}
                          required=""
                          onChange={e => setEmail(e.target.value)}
                        />
                      </div>
                    </div>

                    <fieldset className="m-form-group m-form-group--checkbox o-newsletter__form-group">
                      <legend className="m-form-group__legend">
                        I do not share data to anyone
                      </legend>

                      <p className="m-form-group__description">
                        I’ll only use the information you provide on this form
                        to get touch about the topics you’ve chosen above. I do
                        not share this data with anyone else.
                      </p>

                      <div className="a-checkbox m-form-group__checkbox">
                        <input
                          className="a-checkbox__input"
                          id="newsletter-option-3"
                          name="newsletter-option-3"
                          type="checkbox"
                          value={emailSend}
                          onChange={e => setEmailSend(e.target.checked)}
                          required=""
                        />
                        <label
                          className="a-checkbox__label"
                          htmlFor="newsletter-option-3"
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

        <button
          className="o-dialog__close js-dialog-close"
          type="button"
          onClick={() => hideModal()}
        >
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
    </>
  )
}

export default FormDialog
