import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    redirect: { name: 'home' },
    // component: () => import('../views/Home.vue')
  },
  {
    path: '/home',
    name: 'home',
    redirect: { name: 'list' },
    component: () => import('../views/Home.vue'),
    children:[
      {//列表
        path: 'list',
        name: 'list',
        component: () => import('@/components/front/List.vue')
      },
      {//详情
        path: 'info',
        name: 'info',
        component: () => import('@/components/front/Info.vue')
      },
      {//留言
        path: 'message',
        name: 'message',
        component: () => import('@/components/front/Message.vue')
      },
      {//相册
        path: 'album',
        name: 'album',
        component: () => import('@/components/front/List.vue')
      },
      {//友联
        path: 'union',
        name: 'union',
        component: () => import('@/components/front/Union.vue')
      },
      {//日志
        path: 'journal',
        name: 'journal',
        component: () => import('@/components/front/List.vue')
      }]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/sign',
    name: 'sign',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    redirect:{name:'userlist'},
    component: () => import('../views/Admin.vue'),
    children:[
      {
        path: 'userlist',
        name: 'userlist',
        component: () => import('@/components/back/Users.vue'),
      },
      {
        path: 'articlelist',
        name: 'articlelist',
        component: () => import('@/components/back/ArticleList.vue'),
      },
      {
        path: 'addarticle',
        name: 'addarticle',
        component: () => import('@/components/back/Addarticle.vue'),
      },
      {
        path: 'updataarticle',
        name: 'updataarticle',
        component: () => import('@/components/back/Addarticle.vue'),
      },
      {
        path: 'articletype',
        name: 'articletype',
        component: () => import('@/components/back/ArticleType.vue'),
      },
      {
        path: 'leavemessage',
        name: 'leavemessage',
        component: () => import('@/components/back/MessageList.vue'),
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
