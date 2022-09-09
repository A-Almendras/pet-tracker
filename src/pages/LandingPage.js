import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div>
      <div>Landing Page</div>
      <Link to="/register">Register</Link>
      <Link to="/login">Log in</Link>
    </div>
  )
}

export default LandingPage
