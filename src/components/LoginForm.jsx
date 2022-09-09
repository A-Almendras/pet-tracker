import React, { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthUserContext from '../context/AuthUserContext'
// import AuthUserProvider from '../context/AuthUserProvider'
import { LogInUser } from '../services/Auth'

const LoginForm = () => {
  let navigate = useNavigate()
  let { user, setUser, authenticated, toggleAuthenticated } =
    useContext(AuthUserContext)

  const [formValues, setFormValues] = useState({ username: '', password: '' })

  // Updates the state of the form values as it is being entered
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  // Submits the log in form to sign the user in
  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await LogInUser(formValues)
    // Resets the form to blank once API req completes successfully
    setFormValues({ username: '', password: '' })
    setUser(payload)
    toggleAuthenticated(true)

    navigate('/pets')
  }
  console.log(user)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Log in</h3>
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
        {/* disabled={!formValues.username || !formValues.password} */}
        <button>Log in</button>
        <p>Don't have an account?</p>
        <a href="/register">Register</a>
      </form>
    </div>
  )
}

export default LoginForm
