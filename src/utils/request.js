import axios from 'axios'
import store from '@/store'
import { getToken } from '@/utils/auth'
import { Message, MessageBox } from 'element-ui'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

service.interceptors.request.use(config => {
  if (store.getters.token) {
    config.headers['X-Token'] = getToken()
  }
  return config
}, error => {
  console.log(error)
  return Promise.reject(error)
})

service.interceptors.response.use(response => {
  const res = response.data
  if (res.code !== 20000) {
    Message({
      message: res.message || '错误',
      type: 'error',
      duration: 5 * 1000
    })
    if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
      MessageBox.confirm('您已退出登录,您可以选择留在本页面或者重新登录', '确定退出', {
        confirmButtonText: '重新登录',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        store.dispatch('user/resetToken').then(() => {
          window.location.reload()
        })
      })
    }
    return Promise.reject(new Error(res.message || '错误'))
  } else {
    return res
  }
}, error => {
  console.log('err' + error) // for debug
  Message({
    message: error.message,
    type: 'error',
    duration: 5 * 1000
  })
  return Promise.reject(error)
})

export default service
