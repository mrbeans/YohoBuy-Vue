import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '@/view/homepage'
import Index from '@/view/index'
import ProductList from '@/view/productlist'
import ShoppingCart from '@/view/shoppingcart'
import My from '@/view/my'
import Login from '@/view/login'
import Register from '@/view/register'

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
          path: '/shoppingcart',
          name: 'ShoppingCart',
          component: ShoppingCart
        },{
          path: '/my',
          name: 'My',
          component: My
        },{
          path: '/login',
          name: 'Login',
          component: Login
        },{
          path: '/register',
          name: 'Register',
          component: Register
        }
      ]
    }
  ]
})
