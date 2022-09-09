import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterUser } from '../services/Auth'

const RegisterForm = () => {
  let navigate = useNavigate()

  const [formValues, setFormValues] = useState({
    first_name: '',
    last_name: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  })

  // Updates the state of the form values as it is being entered
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  // Submits the user registration form
  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      first_name: formValues.first_name,
      last_name: formValues.last_name,
      email: formValues.email,
      username: formValues.username,
      password: formValues.password
    })
    // Resets the form to blank once API req completes successfully
    setFormValues({
      first_name: '',
      last_name: '',
      email: '',
      username: '',
      password: '',
      confirmPassword: ''
    })
    // Redirects user to login
    navigate('/login')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Join Today!</h3>
        <input
          onChange={handleChange}
          type="text"
          name="first_name"
          id=""
          placeholder="First Name"
          value={formValues.first_name}
          required
        />
        <input
          onChange={handleChange}
          type="text"
          name="last_name"
          id=""
          placeholder="Last Name"
          value={formValues.last_name}
          required
        />
        <input
          onChange={handleChange}
          type="email"
          name="email"
          id=""
          placeholder="Email"
          value={formValues.email}
          required
        />
        <input
          onChange={handleChange}
          type="text"
          name="username"
          id=""
          placeholder="Username"
          value={formValues.username}
          required
        />
        <input
          onChange={handleChange}
          type="password"
          name="password"
          id=""
          placeholder="Password"
          value={formValues.password}
          required
        />
        <input
          onChange={handleChange}
          type="password"
          name="confirmPassword"
          id=""
          placeholder="Confirm Password"
          value={formValues.confirmPassword}
          required
        />
        <button
        // disabled={
        //   !formValues.username ||
        //   (!formValues.password &&
        //     formValues.confirmPassword === formValues.password)
        // }
        >
          Register
        </button>
        <p>Already a member?</p>
        <a href="/login">Log in</a>
      </form>
    </div>
  )
}

export default RegisterForm
