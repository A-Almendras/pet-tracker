import React from 'react'
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthUserContext from '../context/AuthUserContext'
import { DeletePetProfile } from '../services/UserReq'

const PetDash = () => {
  let navigate = useNavigate()
  let { user, pets, selectedPet, setEditPetForm, renderUserPets } =
    useContext(AuthUserContext)

  const handleProfileUpdate = () => {
    setEditPetForm(true)
    navigate(`/pets/petform`)
    console.log(selectedPet)
  }

  const handleDeleteProfile = async (petId) => {
    await DeletePetProfile(petId)
    navigate('/pets')
  }

  return (
    <div>
      <h2>{selectedPet.name}</h2>
      <p>
        {selectedPet.animal_group} | {selectedPet.animal_kind}
      </p>
      <p>Gotcha Day: {selectedPet.gotcha_date}</p>
      <p>{selectedPet.dob ? selectedPet.dob : ''}</p>
      <p>{selectedPet.age ? selectedPet.age : ''}</p>
      <button onClick={() => handleProfileUpdate()}>Profile</button>
      <button onClick={() => handleDeleteProfile(selectedPet.id)}>
        Delete Profile
      </button>
    </div>
  )
}

export default PetDash
