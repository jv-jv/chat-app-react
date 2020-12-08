import React from "react"

export default function Message({ message, ...props }) {
  const isUser = props.username === message.user
  return (
    <div className={isUser ? "message message--user" : "message"}>
      <p
        className={
          isUser ? "message__text message__text--user" : "message__text"
        }
      >
        {message.message}
      </p>
      <span
        className={
          isUser ? "message__user message__user--user" : "message__user"
        }
      >
        {message.user}
      </span>
    </div>
  )
}
