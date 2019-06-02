import React, { useState } from "react"

import useForm from "../utils/useForm"

const Form = () => {
  const { values, handleChange, handleSubmit } = useForm(login)
  const [isSuccess, setIsSuccess] = useState(false)

  function login() {
    const data = {
      toEmails: ["pviral810@gmail.com"],
      subject: "Contact Form from viralpatel.blog",
      replyToEmails: [values.email],
      message: values.message,
    }
    fetch("https://3lujo4z6z0.execute-api.us-east-1.amazonaws.com/Prod/send", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(() => setIsSuccess(true))
  }

  return (
    <form onSubmit={handleSubmit}>
      {isSuccess && (
        <>
          <div className="a-message a-message--success">
            <strong>Message Successfully Sent</strong>
          </div>
          <br />
        </>
      )}
      <div className="input">
        <input
          className="a-input__input"
          type="email"
          name="email"
          placeholder="Your Email"
          onChange={handleChange}
          value={values.email || ""}
          required
        />
      </div>
      <br />
      <div className="input">
        <textarea
          className="a-input__input"
          name="message"
          placeholder="Ask away...."
          rows={4}
          onChange={handleChange}
          value={values.message || ""}
          required
        />
      </div>
      <br />
      <button type="submit" className="a-button a-button--secondary">
        Send Email
      </button>
    </form>
  )
}

export default Form
