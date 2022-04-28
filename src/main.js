import Vue from 'vue'
import App from './App.vue'
import {Button,Radio} from 'element-ui'


Vue.config.productionTip = false
import router from './router'
Vue.use(Button)
Vue.use(Radio)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
