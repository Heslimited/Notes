import axios from "axios";

const instance = axios.create({
    baseURL: 'https://localhost:5173',
    withCredentials: true,
    headers: {
        accept: 'application/json'
    }
})

export default instance