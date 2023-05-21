/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
// eslint-disable-next-line no-unused-vars
import cardStyle from '../Card.module.css'



// eslint-disable-next-line react/prop-types
function Card({ cities }) {
  return (
    <ul className={cardStyle.card} >

      {cities.filter(cities => cities.country === "AR").map(cities => (
        <li key={cities.id} style={{ backgroundColor: cities.color, color:'white',margin:'10px' }}>
          <h1>{cities.country}</h1>
          <h3>{cities.city}</h3>
          <p>{cities.population}</p>
        </li>

      ))}
    </ul>
  )
}

export default Card