import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.dkawasaka.com'
});

export default api;