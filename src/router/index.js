import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Admin from '@/pages/Admin'
import customer from '@/pages/customer'
import info from '@/pages/info'
import orderInfo from '@/pages/orderInfo'
import productInfo from '@/pages/productInfo'
import shopping from '@/pages/shopping'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/customer',
      name: 'customer',
      component: customer
    },
    {
      path: '/info',
      name: 'info',
      component: info
    },
    {
      path: '/orderinfo',
      name: 'orderInfo',
      component: orderInfo
    },
    {
      path: '/productinfo',
      name: 'productInfo',
      component: productInfo
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: shopping
    }
  ]
})
