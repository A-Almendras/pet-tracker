import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthUserContext from './AuthUserContext'
import { GetPets } from '../services/UserReq'
// import { LogInUser } from '../services/Auth'
// import { useNavigate } from 'react-router-dom'

const AuthUserProvider = ({ children }) => {
  ////////// Control visibility of all private components //////////
  const [user, setUser] = useState(null) // Store info about the user
  const [authenticated, toggleAuthenticated] = useState(false) // To toggle the UI
  const [authTokens, setAuthTokens] = useState(null) // To get the authentication tokens
  const [pets, setPets] = useState([]) // Store info about users pet
  const [selectedPet, setSelectedPet] = useState(null)
  const [editPetForm, setEditPetForm] = useState(false)

  let navigate = useNavigate()

  const renderUserPets = async () => {
    const data = await GetPets()
    console.log(data)
    if (user && authenticated) {
      setPets(data)
    } else {
      setPets(null)
    }
  }

  const logout = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
    navigate('/login')
  }

  const paperStyle = {
    margin: '10vh auto',
    // height: '50vh',
    width: '20rem'
  }

  let contextData = {
    user: user,
    authenticated: authenticated,
    pets: pets,
    selectedPet: selectedPet,
    editPetForm: editPetForm,
    setUser: setUser,
    toggleAuthenticated: toggleAuthenticated,
    setAuthTokens: setAuthTokens,
    renderUserPets: renderUserPets,
    setSelectedPet: setSelectedPet,
    setEditPetForm: setEditPetForm,
    logout: logout,
    paperStyle: paperStyle
  }

  return (
    <AuthUserContext.Provider value={contextData}>
      {children}
    </AuthUserContext.Provider>
  )
}

export default AuthUserProvider
