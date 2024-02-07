import axios from 'axios'

    const jokesInstance = axios.create({
                    baseURL: import.meta.env.VITE_JOKES_API_BASE_URL,
            headers: {
        'X-Api-Key': import.meta.env.VITE_JOKES_API_KEY,
},
})


function sum(a: number, b: number): number {
    return a + b;
}

sum("asd", 1);

export default jokesInstance

            console.log('LOL')
