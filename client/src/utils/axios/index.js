import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    timeout: 5000,
    headers: {},
});

instance.interceptors.request.use({
    success: (config) => {
        return config;
    },
    error: (error) => {
        // Do something with request error
        return Promise.reject(error);
    },
});

instance.interceptors.response.use({
    success: (response) => {
        console.log(response)
        return response.data;
    },
    error: (error) => {
        // Do something with request error
        return Promise.reject(error);
    },
});

export default instance;