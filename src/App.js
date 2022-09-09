import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'

function App() {
  ////////// Control visibility of all private components //////////
  const [authenticated, toggleAuthenticated] = useState(false) // To toggle the UI
  const [user, setUser] = useState(null) // Store info about the user

  return (
    <div className="App">
      <header className="App-header"></header>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  )
}

export default App
