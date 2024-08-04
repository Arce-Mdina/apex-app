import React from 'react'

const Card = ({ heading, desc, classes, colour }) => {
  return (
    <div className={`visit-card ${classes}`}>
      <h2 style={{ color: colour }}>{heading}</h2>
      <div>{desc}</div>
    </div>
  )
}

export default Card