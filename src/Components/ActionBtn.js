import React from "react"

export default function ActionBtn({ icon, action, handleClick }) {
  return (
    <div className="btn-container">
      <button className="btn-top" onClick={handleClick}>
        {icon}
      </button>
      <span className="btn-label">{action}</span>
    </div>
  )
}
