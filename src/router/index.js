import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login'
import boss from '@/pages/boss'
import myInfo from '@/pages/myInfo'
import myCart from '@/pages/myCart'
import myMall from '@/pages/myMall'
import myOrder from '@/pages/myOrder'
import customer from '@/pages/customer'
import goods from '@/pages/goods'
import order from '@/pages/order'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/boss',
      name: 'boss',
      component: boss
    },
    {
      path: '/myInfo',
      name: 'myInfo',
      component: myInfo
    },
    {
      path: '/myCart',
      name: 'myCart',
      component: myCart
    },
    {
      path: '/myMall',
      name: 'myMall',
      component: myMall
    },
    {
      path: '/myOrder',
      name: 'myOrder',
      component: myOrder
    },
    {
      path: '/customer',
      name: 'customer',
      component: customer
    },
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },
    {
      path: '/order',
      name: 'order',
      component: order
    }
  ]
})
