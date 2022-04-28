import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'Home',
    components:()=>import('../views/Home.vue')
  },
  {
    path:'/user',
    name:'User',
    components:()=>import('../views/User.vue')
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
