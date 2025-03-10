import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home/index.vue')
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('../views/category/index.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/cart/index.vue')
  },
  {
    path: '/mine',
    name: 'Mine',
    component: () => import('../views/mine/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 