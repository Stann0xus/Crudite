import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:7059',
});

export default api;