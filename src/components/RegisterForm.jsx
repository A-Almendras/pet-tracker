import { TextField, Paper, Grid, Card, Typography } from '@mui/material'
// import { makeStyles } from '@mui/styles'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterUser } from '../services/Auth'

// const useStyles = makeStyles({
//   field: {
//     marginTop: 10,
//     marginBottom: 10
//   }
// })

const RegisterForm = () => {
  const paperStyle = {
    margin: '10vh auto',
    // height: '50vh',
    width: '20rem'
  }

  // const fieldStyle = useStyles()

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
    // <div>
    <Paper style={paperStyle}>
      <Grid>
        <Typography>
          {/* <Card> */}
          <form className="form" onSubmit={handleSubmit}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              // spacing={5}
              // p={2}
            >
              <h3>Join Today!</h3>
              <Grid>
                <TextField
                  onChange={handleChange}
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  value={formValues.first_name}
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                  size="small"
                  // className={fieldStyle.field}
                  // fullWidth
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
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                  size="small"
                  // fullWidth
                  required
                />
              </Grid>
              <TextField
                onChange={handleChange}
                type="email"
                name="email"
                placeholder="Email"
                value={formValues.email}
                id="outlined-basic"
                label="Email"
                variant="outlined"
                size="small"
                // fullWidth
                required
              />
              <TextField
                onChange={handleChange}
                type="text"
                name="username"
                placeholder="Username"
                value={formValues.username}
                id="outlined-basic"
                label="Username"
                variant="outlined"
                size="small"
                // margin="small"
                // fullWidth
                required
              />
              <TextField
                onChange={handleChange}
                type="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                id="outlined-basic"
                label="Password"
                variant="outlined"
                size="small"
                // margin="normal"
                // fullWidth
                required
              />
              <TextField
                onChange={handleChange}
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formValues.confirmPassword}
                id="outlined-basic"
                label="Confirm Password"
                variant="outlined"
                size="small"
                // margin="normal"
                // fullWidth
                required
              />
              <Grid item p={2}>
                <button
                // disabled={
                //   !formValues.username ||
                //   (!formValues.password &&
                //     formValues.confirmPassword === formValues.password)
                // }
                >
                  Register
                </button>
              </Grid>
              <p>
                Already a member? <a href="/login">Log in</a>
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
