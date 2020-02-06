import request from '../utils/request';
import { baseUrl } from '../config/index';

export function registry({ username, password, phone }) {
    // const url = baseUrl + ;
    return request.post("/user/registry", {
        username, password, phone
    })
}
export function login({ phone, password }) {
    const url = "/user/login";
    return request.post(url, {
        phone, password
    })
}