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
export const GetPets = async (userPets) => {
  try {
    const res = await Client.get(userPets)
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}
