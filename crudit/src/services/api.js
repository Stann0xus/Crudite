// Conexão com o Backend - Edite conforme o endereço de seu backend - Ex: https://localhost:7069
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5068',
});

export default api;
