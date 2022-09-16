import {
  TextField,
  Paper,
  Grid,
  Card,
  Typography,
  Select,
  InputLabel,
  MenuItem
} from '@mui/material'
import React from 'react'
import { useState, useContext } from 'react'
import AuthUserContext from '../context/AuthUserContext'
import { Link, useNavigate } from 'react-router-dom'
import { CreatePet } from '../services/UserReq'

const PetForm = () => {
  let navigate = useNavigate()

  let { user, paperStyle } = useContext(AuthUserContext)

  const [formValues, setFormValues] = useState({
    name: '',
    animal_group: '',
    animal_kind: '',
    dob: '',
    gotcha_date: '',
    age: ''
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await CreatePet({
      name: formValues.name,
      animal_group: formValues.animal_group,
      animal_kind: formValues.animal_kind,
      dob: formValues.dob,
      gotcha_date: formValues.gotcha_date,
      age: formValues.age,
      user_id: user.id
    })
    // Resets the form to blank once API req completes successfully
    setFormValues({
      name: '',
      animal_group: '',
      animal_kind: '',
      dob: '',
      gotcha_date: '',
      age: ''
    })
    // Redirects user to login
    navigate('/pets')
  }

  return (
    <div>
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
                // spacing={5}
                // p={2}
              >
                <h3>Pet Form</h3>
                <Grid>
                  <TextField
                    onChange={handleChange}
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formValues.name}
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    size="small"
                    // className={fieldStyle.field}
                    // fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputLabel id="animal_group_label">Animal Group</InputLabel>
                  <Select
                    onChange={handleChange}
                    name="animal_group"
                    value={formValues.animal_group}
                    id="animal_group"
                    label="Animal Group"
                    size="small"
                    required
                  >
                    <MenuItem value={'mammal'}>Mammal</MenuItem>
                    <MenuItem value={'bird'}>Bird</MenuItem>
                    <MenuItem value={'fish'}>Fish</MenuItem>
                    <MenuItem value={'reptile'}>Reptile</MenuItem>
                    <MenuItem value={'amphibian'}>Amphibian</MenuItem>
                    <MenuItem value={'other'}>Other</MenuItem>
                  </Select>
                </Grid>
                <TextField
                  onChange={handleChange}
                  name="animal_kind"
                  placeholder="Animal kind"
                  value={formValues.animal_kind}
                  id="outlined-basic"
                  label="Animal Kind"
                  variant="outlined"
                  size="small"
                  required
                />
                <TextField
                  onChange={handleChange}
                  type="text"
                  name="dob"
                  placeholder="YYYY-MM-DD"
                  value={formValues.dob}
                  id="dob"
                  label="Date of Birth"
                  variant="outlined"
                  size="small"
                />
                <TextField
                  onChange={handleChange}
                  type="text"
                  name="gotcha_date"
                  placeholder="YYYY-MM-DD"
                  value={formValues.gotcha_date}
                  id="gotcha_date"
                  label="Gotcha Date"
                  variant="outlined"
                  size="small"
                  required
                />
                <TextField
                  onChange={handleChange}
                  type="text"
                  name="age"
                  placeholder="Age"
                  value={formValues.age}
                  id="age"
                  label="Age"
                  variant="outlined"
                  size="small"
                />
                <Grid item p={2}>
                  <button
                    disabled={
                      !formValues.name ||
                      !formValues.animal_group ||
                      !formValues.animal_kind ||
                      !formValues.gotcha_date
                    }
                  >
                    Add Pet
                  </button>
                </Grid>
                <p>
                  <Link to="/pets">Cancel</Link>
                </p>
              </Grid>
            </form>
            {/* </Card> */}
          </Typography>
        </Grid>
      </Paper>
    </div>
  )
}

export default PetForm
