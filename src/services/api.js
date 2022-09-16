import Axios from 'axios'

// If backend is deployed utilize:
export const BASE_URL = process.env.REACT_APP_DB_URL
// Else use:
// export const BASE_URL = 'http://localhost:8000/api'

const Client = Axios.create({ baseURL: BASE_URL })

Client.interceptors.request.use(
  (config) => {
    let token = localStorage.getItem('token')
    // console.log(token)
    if (token) {
      config.headers['authorization'] = `Bearer ${token}`
      // console.log(config)
    }
    return config
  },
  (error) => Promise.reject(error)
)

export default Client
