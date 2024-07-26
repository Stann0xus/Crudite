import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5068',
});

export default api;
