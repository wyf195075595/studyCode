import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    redirect:'/index',
    children:[
      {
        path: '/index',
        name: 'index',
        component: () => import('../views/Index.vue'),
      }
    ]
  },
  {
    path: '/index',
    name: 'index',
    component: () => import( '../views/Index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
