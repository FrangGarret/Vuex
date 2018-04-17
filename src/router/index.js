import Vue from 'vue'
import Router from 'vue-router'
import Increment from '@/components/Increment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Increment',
      component: Increment
    }
  ]
})
