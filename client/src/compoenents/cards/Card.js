import React from 'react'
import { Col } from 'react-materialize'

function Card({ name, image }){
  return (
    <Col s={3} m={2} l={2}
      className="game-card-container">
      <img src={image} alt={name} className="card-image"/>
      <p>{name}</p>
      
    </Col>
  
  )
}

export default Card