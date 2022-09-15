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
