import axios, { Axios } from "axios";

const ApiRequestHandler = axios.create({
    baseURL: "http://192.168.10.3:3000",
    headers: {
        'Content-Type': 'application/json'
    }
});

export { ApiRequestHandler }