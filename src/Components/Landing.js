import React from "react"

export default function Landing({
  username,
  userInput,
  handleSubmitLanding,
  handleChangeLanding,
  ...props
}) {
  return (
    <form className="landing" onSubmit={handleSubmitLanding}>
      <input
        className="form__text"
        placeholder="Choose your username"
        value={userInput}
        onChange={handleChangeLanding}
      />
      <button
        className="form__btn landing__btn"
        onChange={handleChangeLanding}
        disabled={userInput === ""}
      >
        Send
      </button>
    </form>
  )
}
