import request from '@/utils/request'

export function login (data) {
  return request({
    url: '/vue-base-template/user/login',
    method: 'post',
    data
  })
}
