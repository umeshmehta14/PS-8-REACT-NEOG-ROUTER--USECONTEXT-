import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (

      <nav>
        <NavLink to="/">Todos</NavLink>
        <NavLink to="/donetodo">Done Todo</NavLink>
        <NavLink to="/opentodo">Open Todo</NavLink>
      </nav>
  )
}

export default Navbar
