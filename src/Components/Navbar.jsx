/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import navStyle from './Navbar.module.css'
// eslint-disable-next-line react/prop-types
const Navbar = ({titulos}) => {


  return (
    <div className={navStyle.nav} >
        {titulos.map((titulo, index) => (
            <div key={index}>
                <button style={{margin:'30px'}}>{titulo}</button>
            </div>
        ))}
    </div>
  )
}

export default Navbar