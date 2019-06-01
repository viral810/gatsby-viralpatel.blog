import React from "react"

import useForm from "../utils/useForm"

const Form = () => {
  const { values, handleChange, handleSubmit } = useForm(login)

  function login() {
    console.log(values)
  }

  return (
    <form onSubmit={handleSubmit}>
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
          type="password"
          name="password"
          placeholder="Ask away...."
          rows={4}
          onChange={handleChange}
          value={values.password || ""}
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
