import { get, post, delete, put } from './axios'

export default {
  captcha: () => get('/login/captcha'),
  login: params => get('/api/login', params),
  permission: params => get('api/auth/permissions', params),
  menu: () => get('api/auth/menu'),

  projectType: () => get('api/manager/category/all?is_page=0')
}


export const captcha = () => get('/login/captcha')