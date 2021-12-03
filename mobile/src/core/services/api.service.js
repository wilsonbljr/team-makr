import axios from 'axios';

// Creates API connection
const api = axios.create({
    baseURL: "http://10.0.2.2:3000",
    responseType: 'json',
    timeout: 180000,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default api;