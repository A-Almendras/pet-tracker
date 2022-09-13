import Client from './api'
import jwt_decode from 'jwt-decode'

// Sets the current signed in user's token to localStorage
export const LogInUser = async (data) => {
  // let { setAuthTokens } = useContext(AuthUserContext)
  try {
    const res = await Client.post('/token/', data)
    localStorage.setItem('token', res.data.access) // stores the user's auth access token with a key of token
    localStorage.setItem('refresh token', res.data.refresh)
    console.log('data:', res.data)
    console.log(res)
    const decoded = jwt_decode(res.data.access)
    console.log(decoded)
    // setAuthTokens(res.data.access)
    return res, decoded // returns user object
  } catch (error) {
    throw error
  }
}

// Submit users info to our back-end via this service function
export const RegisterUser = async (data) => {
  try {
    const res = await Client.post('/register-user', data)
    console.log(res)
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}
