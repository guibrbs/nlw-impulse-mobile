import axios from "axios";

export const api = axios.create({
    baseURL: 'http://172.22.150.81:3333'
})