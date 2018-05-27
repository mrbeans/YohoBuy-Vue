import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '@/view/homepage'
import Index from '@/view/index'
import ProductList from '@/view/productlist'
import ProductDetail from '@/view/productdetail'
import ShoppingCart from '@/view/shoppingcart'
import Shopping from '@/view/shopping'

import Profile from '@/view/account/profile'
import Login from '@/view/account/login'
import Register from '@/view/account/register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: HomePage,
      children:[
        {
          path: '/',
          name: 'Index',
          component: Index
        },{
          path: '/productlist',
          name: 'ProductList',
          component: ProductList
        },{
          path: '/productdetail',
          name: 'ProductDetail',
          component: ProductDetail
        },{
          path: '/shoppingcart',
          name: 'ShoppingCart',
          component: ShoppingCart
        },{
          path: '/profile',
          name: 'Profile',
          component: Profile
        },{
          path: '/login',
          name: 'Login',
          component: Login
        },{
          path: '/register',
          name: 'Register',
          component: Register
        }, {
          path:'/shopping',
          name: 'Shopping',
          component:Shopping
        }
      ]
    }
  ]
})
