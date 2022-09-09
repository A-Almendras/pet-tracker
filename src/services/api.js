import Axios from 'axios'

// If backend is deployed utilize:
// export const BASE_URL = ''
// Else use:
export const BASE_URL = 'http://localhost:8000/api'

const Client = Axios.create({ baseURL: BASE_URL })

Client.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')

    if (token) {
      config.headers['authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

export default Client
