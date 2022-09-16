import Client from './api'

//
export const GetUserInfo = async (userId) => {
  try {
    const res = await Client.get(`users/${userId}`)
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}

//
export const GetPets = async () => {
  try {
    const res = await Client.get('pets/')
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}
//
export const CreatePet = async (petInfo) => {
  try {
    const res = await Client.post('pets/', {
      name: petInfo.name,
      animal_group: petInfo.animal_group,
      animal_kind: petInfo.animal_kind,
      dob: petInfo.dob,
      gotcha_date: petInfo.gotcha_date,
      age: petInfo.age,
      user_id: petInfo.user_id
    })
    console.log(res)
    return res.data
  } catch (error) {
    throw error
  }
}

//
export const DeletePetProfile = async (petId) => {
  try {
    const res = await Client.delete(`pets/${petId}`)
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const UpdatePetInfo = async (petId, petInfo) => {
  try {
    const res = await Client.put(`pets/${petId}`, petInfo)
    console.log(res)
    return res.data
  } catch (error) {
    throw error
  }
}

//
// export const GetPetInfo = async (petId) => {
//   try {
//     const res = await Client.get(`pets/${petId}`)
//     console.log(res.data)
//     return res.data
//   } catch (error) {
//     throw error
//   }
// }
