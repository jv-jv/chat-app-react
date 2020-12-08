import React, { useState } from "react"
import { deleteAll } from "./firebase"
import { Chat, Landing, ActionBtn } from "./Components"
import useLocalStorage from "./Hooks/useLocalStorage"
import "./app.scss"

export default function App() {
  // variables

  const [username, setUsername] = useLocalStorage("username", null)
  const [userInput, setUserInput] = useState("")

  // functions decalrations

  function handleSubmitLanding(e) {
    e.preventDefault()
    setUsername(userInput)
  }

  function handleChangeLanding(e) {
    const { value } = e.target
    setUserInput(value)
  }

  function logout() {
    setUsername(null)
    setUserInput("")
  }

  // render

  return (
    <div className="over-container">
      <div className="container-top-bar">
        <div className="title">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 100 100"
            x="0px"
            y="0px"
          >
            <title>25</title>
            <path d="M95,51.49251c0-14.57319-14.02285-26.387-31.321-26.387s-31.32088,11.81381-31.32088,26.387S46.381,77.87945,63.67905,77.87945a35.64852,35.64852,0,0,0,16.27011-3.83582L95,82.68175Z" />
            <path d="M33.08917,68.39675a28.16616,28.16616,0,0,1-5.72982-16.89954c0-13.87961,10.47968-25.6792,24.95931-29.81922a34.33248,34.33248,0,0,0-16.95954-4.35974C18.58958,17.31825,5,28.76788,5,42.89748V73.1266l14.58955-8.36976A34.45841,34.45841,0,0,0,33.08917,68.39675Z" />
            {/* <text
        x="0"
        y="115"
        fill="#000000"
        font-size="5px"
        font-weight="bold"
        font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
        >
        Created by Markus
        </text>
        <text
        x="0"
        y="120"
        fill="#000000"
        font-size="5px"
        font-weight="bold"
        font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
        >
        from the Noun Project
        </text> */}
          </svg>
          <h1>Chat App</h1>
        </div>
        <ActionBtn icon="👋" action="logout" handleClick={logout} />
        <ActionBtn icon="🤯" action="clear" handleClick={deleteAll} />
      </div>

      {username ? (
        <Chat username={username} />
      ) : (
        <Landing
          username={username}
          userInput={userInput}
          handleSubmitLanding={handleSubmitLanding}
          handleChangeLanding={handleChangeLanding}
        />
      )}
    </div>
  )
}
