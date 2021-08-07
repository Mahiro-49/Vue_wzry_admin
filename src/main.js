import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import http from './http'


import 'element-ui/lib/theme-chalk/index.css'


Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$http = http

// 全局混入 可在任何页面用
Vue.mixin({
  computed: {
    uploadUrl() {
      return this.$http.defaults.baseURL + '/upload'
    }
  },
  methods: {
    getAuthHeaders() {
      return {
        Authorization: `Bearer ${localStorage.token || ''}`
      }
    }
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
