import { createRouter, createWebHistory } from "vue-router"
import HomePage from "@/pages/HomePage"
import LoginPage from "@/pages/LoginPage"
import RegistrationPage from "@/pages/RegistrationPage"
import ProductDetailsPage from "@/pages/ProductDetailsPage"
import CatalogPage from "@/pages/CatalogPage"
import CartPage from "@/pages/CartPage"
// import ErrorPage from '@/pages/ErrorPage'

const routes = [
  {
    path: "/",
    name: "Homepage",
    component: HomePage,
    meta: {
      breadcrumb: "Home",
    },
  },
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/register",
    name: "RegistrationPage",
    component: RegistrationPage,
  },
  {
    path: "/product-details/:id(\\d+)",
    name: "ProductDetailsPage",
    component: ProductDetailsPage,
    meta: {
      breadcrumb: "Product details",
    },
  },
  {
    path: "/catalog/:page(\\d+)",
    name: "CatalogPage",
    component: CatalogPage,
    meta: {
      breadcrumb: "Catalog",
    },
  },
  {
    path: "/cart",
    name: "CartPage",
    component: CartPage,
    meta: {
      breadcrumb: "Cart",
    },
  },
  {
    path: "/404",
    name: "NotfoundPage",
    // Динамический путь (подгрузка страницы с сервера)
    component: () => import("@/pages/ErrorPage"),
  },
  {
    path: "/:CatchAll(.*)",
    redirect: "/404",
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
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      }
    } else {
      return { top: 0 }
    }
  },
})

export default router
