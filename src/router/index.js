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
        component: () => import('@/views/home'),
        redirect: '/home/first',
        children: [
          {
            path: '/home/first',
            component: () => import('@/views/home/children/first/index')
          },
          {
            path: '/home/second',
            component: () => import('@/views/home/children/second')
          },
          {
            path: '/home/fouth',
            component: () => import('@/views/home/children/fouth')
          },
          {
            path: '/home/fifth',
            component: () => import('@/views/home/children/fifth')
          },
          {
            path: '/home/third',
            component: () => import('@/views/home/children/third')
          },
          {
            path: '/home/sixth',
            component: () => import('@/views/home/children/sixth')
          }
        ]
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
