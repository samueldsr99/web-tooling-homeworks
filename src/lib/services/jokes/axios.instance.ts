import axios from 'axios'

const jokesInstance = axios.create({
  baseURL: import.meta.env.VITE_JOKES_API_BASE_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
    'Access-Control-Allow-Headers':
      'Origin, X-Requested-With, Content-Type, Accept',
  },
})

export default jokesInstance
