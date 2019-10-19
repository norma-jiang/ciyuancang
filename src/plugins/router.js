import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/classify',
      name: 'classify',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../pages/Classify.vue')
    },
    {
      path: '/shoppingCart',
      name: 'shoppingCart',
      component: () => import(/* webpackChunkName: "about" */ '../pages/ShoppingCart.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import(/* webpackChunkName: "about" */ '../pages/User.vue')
    },
    {
      path: '/reg',
      name: 'reg',
      component: () => import(/* webpackChunkName: "about" */ '../pages/Reg.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "about" */ '../pages/Login.vue')
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import(/* webpackChunkName: "about" */ '../pages/Detail.vue')
    },
  ]
})
