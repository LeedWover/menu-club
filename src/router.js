import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Etlap from './views/Etlap.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Etlap',
      name: 'Etlap',
      component: Etlap
    }
  ]
})
