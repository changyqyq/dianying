import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'tabs',
    redirect: '/home',
    component: () => import('@/views/tabs'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home')
      },
      {
        path: '/seetv',
        name: 'seetv',
        component: () => import('@/views/seetv')
      },
      {
        path: '/showed',
        name: 'showed',
        component: () => import('@/views/showed')
      },
      {
        path: '/splay',
        name: 'splay',
        component: () => import('@/views/splay')
      },
      {
        path: '/swe',
        name: 'swe',
        component: () => import('@/views/swe')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
