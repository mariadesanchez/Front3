import React from 'react'

const Card = ({cities}) => {
  return (
   <ul>
{cities.filter(cities => cities.country === "AR").map(cities => (
     <li key={cities.id} style={{backgroundColor:cities.color}}>
   <h1>{cities.country}</h1>
    <h3>{cities.city}</h3>
    <p>{cities.population}</p>
     </li>
    
) )}

   
   </ul>
  )
}

export default Card