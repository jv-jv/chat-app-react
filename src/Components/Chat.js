import React, { useState, useEffect, useRef } from "react"
import { Message } from "../Components"
import firebase from "firebase/app"
import { database } from "../firebase"

export default function Chat({ username, ...props }) {
  // variables

  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([])
  const messageEl = useRef(null)

  // useEffect

  useEffect(() => {
    database
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()))
      })
  }, [])

  useEffect(() => {
    if (messageEl) {
      messageEl.current.addEventListener("DOMNodeInserted", (event) => {
        const { currentTarget: target } = event
        target.scroll({ top: target.scrollHeight, behavior: "smooth" })
      })
    }
  }, [])

  // functions declarations

  function handleSubmitChat(e) {
    e.preventDefault()
    if (input === "") return
    setInput("")
    database.collection("messages").add({
      message: input,
      user: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
  }

  function handleChangeChat(e) {
    const { value } = e.target
    setInput(value)
  }

  // render

  return (
    <>
      <div className="chat-container" ref={messageEl}>
        {messages.map((message) => (
          <Message
            key={message.timestamp}
            message={message}
            username={username}
          />
        ))}
      </div>

      <form className="form" onSubmit={handleSubmitChat}>
        <input
          className="form__text"
          placeholder="Write something..."
          value={input}
          onChange={handleChangeChat}
        />
        <button
          className="form__btn"
          onClick={handleSubmitChat}
          disabled={input === ""}
        >
          Send
        </button>
      </form>
    </>
  )
}
