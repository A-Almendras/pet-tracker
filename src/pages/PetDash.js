import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthUserContext from '../context/AuthUserContext'
import { DeletePetProfile } from '../services/UserReq'

const PetDash = () => {
  let navigate = useNavigate()
  let { user, pets, selectedPet } = useContext(AuthUserContext)

  const handleProfileUpdate = () => {}

  const handleDeleteProfile = async (petId) => {
    await DeletePetProfile(petId)
    navigate('/pets')
  }

  return (
    <div>
      <h2>{selectedPet.name}</h2>
      <p>
        {selectedPet.animal_kind} | {selectedPet.animal_group}
      </p>
      <button onClick={() => handleProfileUpdate()}>Profile</button>
      <button onClick={() => handleDeleteProfile(selectedPet.id)}>
        Delete Profile
      </button>
    </div>
  )
}

export default PetDash
