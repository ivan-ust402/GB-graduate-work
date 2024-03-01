import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage'
import LoginPage from '@/pages/LoginPage'
import RegistrationPage from '@/pages/RegistrationPage'
import ProductDetailsPage from '@/pages/ProductDetailsPage'
import CatalogPage from '@/pages/CatalogPage'
import CartPage from '@/pages/CartPage'
// import ErrorPage from '@/pages/ErrorPage'

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: HomePage
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'RegistrationPage',
    component: RegistrationPage
  },
  {
    path: '/product-details/:id(\\d+)',
    name: 'ProductDetailsPage',
    component: ProductDetailsPage
  },
  {
    path: '/catalog/:page(\\d+)',
    name: 'CatalogPage',
    component: CatalogPage
  },  
  {
    path: '/cart',
    name: 'CartPage',
    component: CartPage
  }, 
  {
    path: '/notfound',
    name: 'NotfoundPage',
    // Динамический путь (подгрузка страницы с сервера)
    component: () => import('@/pages/ErrorPage')
  },
  {
    path: '/:CatchAll(.*)',
    redirect: '/404'
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
