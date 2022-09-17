import { Route, Navigate, Outlet } from 'react-router-dom'
import { useContext } from 'react'
import AuthUserContext from '../context/AuthUserContext'

const PrivateRoute = () => {
  let { user } = useContext(AuthUserContext)
  return user ? <Outlet /> : <Navigate to="/" />
}

export default PrivateRoute
