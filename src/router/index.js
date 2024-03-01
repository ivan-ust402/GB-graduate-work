import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage'
import LoginPage from '@/pages/LoginPage'
import RegistrationPage from '@/pages/RegistrationPage'
import ProductDetailsPage from '@/pages/ProductDetailsPage'
import CatalogPage from '@/pages/CatalogPage'
import CartPage from '@/pages/CartPage'
import ErrorPage from '@/pages/ErrorPage'

const routes = [
  {
    path: '/',
    name: 'homepage',
    component: HomePage
  },
  {
    path: '/login',
    name: 'loginPage',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'registrationPage',
    component: RegistrationPage
  },
  {
    path: '/product-details/:id',
    name: 'productDetailsPage',
    component: ProductDetailsPage
  },
  {
    path: '/catalog/:page?',
    name: 'catalogPage',
    component: CatalogPage
  },  
  {
    path: '/cart',
    name: 'cartPage',
    component: CartPage
  }, 
  {
    path: '/notfound',
    name: 'notfoundPage',
    component: ErrorPage
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
