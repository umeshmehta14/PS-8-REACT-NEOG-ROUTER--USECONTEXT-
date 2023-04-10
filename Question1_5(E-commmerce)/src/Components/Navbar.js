import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (

      <nav>
        <NavLink to="/">Product List</NavLink>
        <NavLink to="/cart">Cart</NavLink>
        <NavLink to="/whishlist">Whishlist</NavLink>
      </nav>
  )
}

export default Navbar
