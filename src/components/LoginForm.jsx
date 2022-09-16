import { TextField, Paper, Grid, Card, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import AuthUserContext from '../context/AuthUserContext'
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
    setUser(payload)
    setFormValues({ username: '', password: '' })
    toggleAuthenticated(true)

    navigate('/pets')
  }

  return (
    <Grid>
      <form onSubmit={handleSubmit}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <h3>Log in</h3>
          <Grid>
            <TextField
              onChange={handleChange}
              type="text"
              name="username"
              value={formValues.username}
              label="Username"
              variant="outlined"
              size="small"
              required
            />
          </Grid>
          <TextField
            onChange={handleChange}
            type="password"
            name="password"
            value={formValues.password}
            label="Password"
            variant="outlined"
            size="small"
            margin="normal"
            required
          />

          <Grid item p={1}>
            <button disabled={!formValues.username || !formValues.password}>
              Log in
            </button>
          </Grid>
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </Grid>
      </form>
    </Grid>
  )
}

export default LoginForm
