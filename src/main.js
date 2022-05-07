import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {
  Button,
  Container,
  Header,
  Main,
  Aside,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Row,
  Card,
  Col,
  Table,
  TableColumn,
  Breadcrumb,
  BreadcrumbItem,
  Tag,
  Form,
  FormItem,
  Input,
  Select,
  Option,
  Switch,
  DatePicker,
  Dialog,
  Pagination,
  MessageBox,
  Message,
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/less/index.less'
import store from './store/index.js'
import http from 'axios'
import './api/mock.js'


Vue.config.productionTip = false

Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message
Vue.use(Button)
Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Aside)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Row)
Vue.use(Card)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Tag)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(Switch)
Vue.use(DatePicker)
Vue.use(Dialog)
Vue.use(Pagination)


Vue.prototype.$http = http

// 路由守卫逻辑
router.beforeEach((to, from, next) => {
  // store.commit('clearToken')
  store.commit('getToken')
  const token = store.state.user.token

  if (!token && to.name !== 'login') {
      next({name: 'login'})
  } else if (token && to.name === 'login') {
      next({name: 'home'})
  } else {
      next()
  }
})


new Vue({
  store,
  render: h => h(App),
  router,
  created() {
    store.commit('tab/addMenu', router)
},
}).$mount('#app')
