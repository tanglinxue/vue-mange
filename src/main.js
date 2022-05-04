import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Button, Radio, Container, Header, Main, Aside, Menu, Submenu, MenuItem, MenuItemGroup, DropdownItem, Dropdown, DropdownMenu } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/less/index.less'
import store from './store/index.js'
console.log(store)

Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Radio)
Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Aside)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
