import React from 'react'
import "./Header.css"
import logo from '../Images/logo.png'

function Header() {
  return (
    <div className='Headerholder'>
      <div className='Nav'>
        <div className='logohold'>
          <img src={logo} className='logopix'/>
        </div>
        <div className='Navlinks'>
          <p>Home</p>
          <p>Product</p>
          <p>Service</p>
          <p>Contact</p>
          <p>About</p>
          <button className='btn1'>Buy Now</button>
        </div>
      </div>
    </div>
  )
}

export default Header
