import Vue from 'vue'
import VueRouter from "vue-router";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Login2 from "../pages/Login2";
Vue.use(VueRouter)
import SubHome from "../pages/SubHome";
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      {
        path:'/login/{id}',
        name:'Login2',
        component:Login2
      },
      {
        path:'/subhome',
        name:'subhome',
        component: SubHome
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/introduction',
    name: 'Introduction',
    
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
