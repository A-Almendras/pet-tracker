import React from 'react'
import { useState, useContext, useEffect } from 'react'
import AuthUserContext from '../context/AuthUserContext'
import { GetUserInfo, GetPets } from '../services/UserReq'
import PetForm from '../components/PetForm'
import { useNavigate } from 'react-router-dom'

const PetsPage = () => {
  let navigate = useNavigate()
  let { user, setUser, pets, renderUserPets, setSelectedPet, setEditPetForm } =
    useContext(AuthUserContext)

  const handleUserInfo = async (userId) => {
    const data = await GetUserInfo(userId)
    setUser(data)
  }

  // const renderUserPets = async (userPets) => {
  //   const data = await GetPets(userPets)
  //   console.log(data)
  //   if (data.length > 0) {
  //     setPets(data)
  //   } else {
  //     setPets(null)
  //   }
  // }
  const handlePetForm = () => {
    setEditPetForm(false)
    navigate(`/pets/petform`)
  }

  const petDash = (petId, petIndex) => {
    navigate(`/dash/${petId}`)
    let petObj = pets[petIndex]
    console.log(petObj)
    setSelectedPet(petObj)

    // ALTERNATIVE
    // const data = await GetPetInfo(petId)
    // setSelectedPet(data)
  }

  useEffect(() => {
    handleUserInfo(user.user_id)
    renderUserPets()
  }, [user])

  return (
    <div>
      <h2>Choose a pet:</h2>
      {pets?.map((pet, index) => (
        <button key={index} onClick={() => petDash(pet.id, index)}>
          {pet.name}
        </button>
      ))}
      <button onClick={() => handlePetForm()}>+</button>
    </div>
  )
}

export default PetsPage
