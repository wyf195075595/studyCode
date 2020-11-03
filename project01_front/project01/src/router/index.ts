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
      },
      {
        path: '/lwzx',
        name: 'lwzx',
        component: () => import( '../views/Lwzx.vue')
      },
      {
        path: '/jjjr',
        name: 'jjjr',
        component: () => import( '../views/Jjjr.vue')
      },
      {
        path: '/game',
        name: 'game',
        component: () => import( '../views/Game.vue')
      }

    ]
  },

  {
    path: '/404',
    name: 'notfound',
    component: () => import( '../views/NotFound.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
