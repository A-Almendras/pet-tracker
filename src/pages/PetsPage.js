import React from 'react'
import { useContext, useEffect } from 'react'
import AuthUserContext from '../context/AuthUserContext'
import { GetUserInfo, GetPets } from '../services/UserReq'
import { useState } from 'react'

const PetsPage = () => {
  let { user, setUser, pets, renderUserPets } = useContext(AuthUserContext)

  const handleUserInfo = async (userId) => {
    const data = await GetUserInfo(userId)
    setUser(data)
  }

  const petDash = () => {}

  useEffect(() => {
    handleUserInfo(user.user_id)
  }, [])

  useEffect(() => {
    renderUserPets(user.pets)
  }, [pets])

  console.log(user)
  console.log({ pets })

  return (
    <div>
      <h2>Choose a pet:</h2>
      {user.pets}
      {/* {pets.name} */}
      <a href={user.pets}>Pets</a>
      {pets?.map((pet, index) => (
        <button key={index}>{pet.name}</button>
      ))}
      <button onClick={petDash}>+</button>
    </div>
  )
}

export default PetsPage
