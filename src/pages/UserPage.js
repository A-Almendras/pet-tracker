import React, { useContext, useEffect } from 'react'
import AuthUserContext from '../context/AuthUserContext'
import { GetUserInfo } from '../services/UserReq'

const UserPage = () => {
  let { user } = useContext(AuthUserContext)

  useEffect(() => {}, [])

  return <div>{user.last_name}</div>
}

export default UserPage
