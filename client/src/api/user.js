/*
 * @Author: heinan 
 * @Date: 2020-02-04 10:15:53 
 * @Last Modified by: heinan
 * @Last Modified time: 2020-02-04 14:59:27
 */
import request from '@/utils/request';
import { baseUrl } from '@/config';

/**
 * 注册
 */
export function registry({ username, password, phone }) {
  const url = baseUrl + "/user/registry";
  return request.post(url, {
    username, password, phone
  })
}
/**
 * 登陆
 */
export function login({ phone, password }) {
  const url = baseUrl + "/user/login";
  return request.post(url, {
    phone, password
  })
}
/**
 * 获取手机验证码
 */
export function getVerifyCode({ phone }) {
  const url = baseUrl + "/user/verificationCode";
  return request.post(url, {
    phone
  })
}

/**
 * 修改密码
 */
export function modifyPassword({ phone, password, vCode }) {
  const url = baseUrl + "/user/resetPassword";
  return request.post(url, {
    phone,
    password,
    vCode
  })
}