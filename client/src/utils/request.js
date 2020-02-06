import axios from "axios";
import { Toast } from "vant";
const request = axios.create();

request.interceptors.request.use((config) => {
    console.log(config)
    return config
}, (error) => {
    return Promise.reject(error)
})

request.interceptors.response.use((response) => {
    console.log(response)
    return response
}, (error) => {
    switch (error.response.status) {
        case 406:
            Toast({
                message: error.response.data.msg
            })
            break;
        default:
            break;
    }
    return Promise.reject(error.response.data)
})

export default request;