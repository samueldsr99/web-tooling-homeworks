import axios from 'axios'

const jokesInstance = axios.create({
    baseURL: import.meta.env.VITE_JOKES_API_BASE_URL,
    headers: {
        'X-Api-Key': import.meta.env.VITE_JOKES_API_KEY,
    },
})

export default jokesInstance
