import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthUserContext from './AuthUserContext'
// import { LogInUser } from '../services/Auth'
// import { useNavigate } from 'react-router-dom'

const AuthUserProvider = ({ children }) => {
  ////////// Control visibility of all private components //////////
  const [user, setUser] = useState(null) // Store info about the user
  const [authenticated, toggleAuthenticated] = useState(false) // To toggle the UI
  const [authTokens, setAuthTokens] = useState(null) // To get the authentication tokens

  let navigate = useNavigate()

  const logout = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
    navigate('/login')
  }

  let contextData = {
    user: user,
    authenticated: authenticated,
    setUser: setUser,
    toggleAuthenticated: toggleAuthenticated,
    setAuthTokens: setAuthTokens,
    logout: logout
  }

  return (
    <AuthUserContext.Provider value={contextData}>
      {children}
    </AuthUserContext.Provider>
  )
}

export default AuthUserProvider
