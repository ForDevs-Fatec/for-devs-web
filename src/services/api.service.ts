import axios from 'axios'

const API = axios.create({
    baseURL: 'http://localhost:3000'
    //baseURL: import.meta.env.VITE_FORDEVS_API_URL
})

export default API;