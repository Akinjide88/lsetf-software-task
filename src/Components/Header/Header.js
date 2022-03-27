import React from 'react';
import "./Header.css";
import logo from '../Images/logo.png';
import {FaTimes, FaBars} from "react-icons/fa";


function Header() {
  return (
    <div className='Headerholder'>
      <div className='Nav'>
        <div className='logohold'>
          <img src={logo} alt="log" className='logopix'/>
        </div>
        <div className='Icons'>
          <FaBars />
          <FaTimes />
        </div>
        <ul className='Navlinks'>
          <li>Home</li>
          <li>Product</li>
          <li>Service</li>
          <li>Contact</li>
          <li>About</li>
          <button className='btn1'>Portfolio</button>
        </ul>
      </div>
    </div>
  )
}

export default Header
