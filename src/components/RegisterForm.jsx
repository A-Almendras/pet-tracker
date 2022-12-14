import { TextField, Paper, Grid, Card, Typography } from '@mui/material'
import React from 'react'
import { useState, useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { RegisterUser } from '../services/Auth'
import AuthUserContext from '../context/AuthUserContext'

const RegisterForm = () => {
  let { paperStyle } = useContext(AuthUserContext)

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

  // Submits the user registration form (do not set user state since not logged in yet)
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
    // <div>
    <Paper style={paperStyle}>
      <Grid>
        <Typography component={'span'}>
          {/* <Card> */}
          <form className="form" onSubmit={handleSubmit}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <h3>Join Today!</h3>
              <Grid>
                <TextField
                  onChange={handleChange}
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  value={formValues.first_name}
                  label="First Name"
                  variant="outlined"
                  size="small"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={handleChange}
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  value={formValues.last_name}
                  label="Last Name"
                  variant="outlined"
                  size="small"
                  required
                />
              </Grid>
              <TextField
                onChange={handleChange}
                type="email"
                name="email"
                placeholder="Email"
                value={formValues.email}
                label="Email"
                variant="outlined"
                size="small"
                required
              />
              <TextField
                onChange={handleChange}
                type="text"
                name="username"
                placeholder="Username"
                value={formValues.username}
                label="Username"
                variant="outlined"
                size="small"
                required
              />
              <TextField
                onChange={handleChange}
                type="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                label="Password"
                variant="outlined"
                size="small"
                required
              />
              <TextField
                onChange={handleChange}
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formValues.confirmPassword}
                label="Confirm Password"
                variant="outlined"
                size="small"
                required
              />
              <Grid item p={2}>
                <button
                  disabled={
                    !formValues.username ||
                    (!formValues.password &&
                      formValues.confirmPassword === formValues.password)
                  }
                >
                  Register
                </button>
              </Grid>
              <p>
                Already a member? <Link to="/login">Log in</Link>
              </p>
            </Grid>
          </form>
          {/* </Card> */}
        </Typography>
      </Grid>
    </Paper>
    // </div>
  )
}

export default RegisterForm
