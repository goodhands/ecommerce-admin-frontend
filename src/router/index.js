import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Orders from '../views/Orders.vue'
import Products from '../views/Products/Products.vue';
import ProductSingle from '@/views/Products/ProductSingle.vue';
import Collections from '../views/Products/Collections.vue';
import CollectionSingle from '../views/Products/CollectionSingle.vue';
import Login from '../views/auth/Login.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Overview',
    component: Home
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders,
    children: [
      {
        path: ':id',
        name: 'Order',
      }
    ]
  },
  {
    path: '/products',
    name: 'Products',
    component: Products,
  },
  {
    path: '/products/:id',
    name: 'Product',
    component: ProductSingle
  },
  {
    path: '/collections',
    name: 'Collections',
    component: Collections,
    children: [
      {
        path: ':id',
        name: 'Collection',
        component: CollectionSingle
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    components:{
      default: Login,
      auth: Login
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return {savedPosition, behavior: 'smooth'}
    } else {
      return { x: 0, y: 0, behavior: 'smooth' }
    }
  }
})

export default router
