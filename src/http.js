import axios from 'axios'
import Vue from 'vue'
import router from './router'


const http = axios.create({
  baseURL: 'http://localhost:3000/admin/api'
})

http.interceptors.request.use(function (config) {
  // 判断是否存在token
  if (localStorage.token) {
    config.headers.Authorization = 'Bearer ' + localStorage.token    //处理请求头
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});


// 拦截器
http.interceptors.response.use(res => {
  return res
}, err => {
  if (err.response.data.message) {
    Vue.prototype.$message({      //应用Vue原型链中的$messge方法 如果data中有message则会有弹窗
      type: 'error',
      message: err.response.data.message
    })
    // 判断状态码 跳转到登录页面
    if(err.response.status === 401) {
      router.push('/login')
    }

    return Promise.reject(err)
  }
})

export default http