import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '@/components/Index/Index.vue'
import Goods from '@/components/Goods/Goods.vue'
import List from '@/components/List/List.vue'
import My from '@/components/My/My.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/index',
      component: Index
    },
    {
      path: '/goods',
      component: Goods
    },
    {
      path: '/list',
      component: List
    },
    {
      path: '/my',
      component: My
    }
  ]
})
