import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Admin from '@/pages/Admin'
import customer from '@/pages/customer'
import info from '@/pages/info'
import orderInfo from '@/pages/orderInfo'
import orderList from '@/pages/orderList'
import productInfo from '@/pages/productInfo'
import productList from '@/pages/productList'
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
      path: '/orderlist',
      name: 'orderList',
      component: orderList
    },
    {
      path: '/productinfo',
      name: 'productInfo',
      component: productInfo
    },
    {
      path: '/productlist',
      name: 'productList',
      component: productList
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: shopping
    }
  ]
})
