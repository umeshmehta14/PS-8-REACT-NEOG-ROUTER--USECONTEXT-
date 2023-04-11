import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Welcome John</h1>
      <NavLink to="/question">Show Question list</NavLink>
    </div>
  )
}

export default Home
