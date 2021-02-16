import {createRouter, createWebHistory} from 'vue-router'

import VirtualScroll from './pages/virtual-scroll'

const routes = [
  {
    path: '/virtual-scroll',
    name: 'VirtualScroll',
    component: VirtualScroll
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})