import React, { useContext, useEffect } from 'react'
import AuthUserContext from '../context/AuthUserContext'
import { GetUserInfo } from '../services/UserReq'

const UserPage = () => {
  let { user } = useContext(AuthUserContext)

  useEffect(() => {
    const userInfo = GetUserInfo(user.user_id)
    console.log(userInfo)
  }, [])

  return <div>UserPage</div>
}

export default UserPage
