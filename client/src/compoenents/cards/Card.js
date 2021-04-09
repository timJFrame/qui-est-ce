import React from 'react'
// import { Col } from 'react-materialize'

function Card({ name, image }){
  return (
    <div
      className="game-card-container">
      <img src={image} alt={name} className="card-image"/>
      <p>{name}</p>
      
    </div>
  
  )
}

export default Card