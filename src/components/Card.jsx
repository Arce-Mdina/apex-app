import React from 'react'

import { useNavigate } from 'react-router-dom'

const Card = ({ heading, desc, classes, color, link, image }) => {

  const navigate = useNavigate();

  return (
    <div className={`visit-card ${classes}`}>
      <img src={image} style={{ width: "fit", overflow: "hidden", height: "auto", top: 0, right: 0, left: 0, cursor: "pointer" }} onClick={() => window.open(`${link}`)}/>
      <h2 style={{ color }}>{heading}</h2>
      <div>{desc}</div>
    </div>
  )
}

export default Card