import React from 'react'
import { Link } from 'react-router-dom'
import barcaLogo from '../src/images/barca_final_logo.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={barcaLogo} alt="Barca Logo" className="logo" />
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/compare">Compare</Link>
        <Link to="/view-players">View Players</Link>
        <Link to="/vote">Who fits Barca</Link>
      </div>
      <div style={{ width: 100 }}></div>
    </nav>
  )
}

export default Navbar
