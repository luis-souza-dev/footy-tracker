import axios from 'axios';

export const controller = new AbortController();

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': process.env.REACT_APP_API_HOST
    },
    params: {
        domain: 'com'
    },
    signal: controller.signal
});

export default axiosInstance;