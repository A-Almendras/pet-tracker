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
    const formData = new FormData()
    formData.append('name', petInfo.name)
    formData.append('animal_group', petInfo.animal_group)
    formData.append('animal_kind', petInfo.animal_kind)
    formData.append('dob', petInfo.dob)
    formData.append('gotcha_date', petInfo.gotcha_date)
    formData.append('age', petInfo.age)
    formData.append('user_id', petInfo.user_id)
    const res = await Client.post('pets/', formData)
    console.log(res)
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

//
// export const UpdatePetInfo = async (petId) => {
//   try {
//     const res = await Client.put(`pets/${petId}`)
//     console.log(res.data)
//     return res.data
//   } catch (error) {
//     throw error
//   }
// }

// //
// export const DeletePet = async (petId) => {
//   try {
//     const res = await Client.delete(`pets/${petId}`)
//     console.log(res.data)
//     return res.data
//   } catch (error) {
//     throw error
//   }
// }
