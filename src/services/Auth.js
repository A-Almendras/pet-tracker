import Client from './api'

// Sets the current signed in user's token to localStorage
export const LogInUser = async (data) => {
  try {
    const res = await Client.post('/token/', data)
    localStorage.setItem('token', res.data.access) // stores the user's auth access token with a key of token
    // console.log('data:', res.data)
    // console.log(res.data.token)
    // console.log(data)
    return data // returns user object
  } catch (error) {
    throw error
  }
}

// Submit users info to our back-end via this service function
export const RegisterUser = async (data) => {
  try {
    const res = await Client.post('/user/register', data)
    console.log(res)
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}
