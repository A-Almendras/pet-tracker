// import { useState } from 'react'
import './styles/App.css'
import { Route, Routes } from 'react-router-dom'
import { useContext } from 'react'
import AuthUserContext from './context/AuthUserContext'
import Nav from './components/Nav'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import LandingPage from './pages/LandingPage'
import PetsPage from './pages/PetsPage'
import UserPage from './pages/UserPage'
import PetDash from './pages/PetDash'
import PetForm from './components/PetForm'
// import PrivateRoute from './services/PrivateRoute'

function App() {
  let { user } = useContext(AuthUserContext)
  return (
    <div className="App">
      <header className="App-header"></header>
      {user && <Nav />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/user/:username" element={<UserPage />} />
        <Route path="/pets" element={<PetsPage />} />
        <Route path="/pets/petform" element={<PetForm />} />
        <Route path="/dash/:petId" element={<PetDash />} />
      </Routes>
    </div>
  )
}

export default App
