import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div>
      <div>
        <h1>PetCare 2.0</h1>
        <h3>Pet More, Worry Less</h3>
      </div>

      <Link to="/register">Register</Link>
      <Link to="/login">Log in</Link>
    </div>
  )
}

export default LandingPage
