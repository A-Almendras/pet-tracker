import Client from './api'
import jwt_decode from 'jwt-decode'

//
export const GetUserInfo = async (userId) => {
  try {
    const res = await Client.get(`users/${userId}`)
    console.log(res)
    return res
  } catch (error) {
    throw error
  }
}
