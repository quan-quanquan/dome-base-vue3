import {createRouter, createWebHistory} from 'vue-router'

import VirtualScroll from '@/pages/virtual-scroll'
import RichEditor from '@/pages/rich-editor'
import ParticleMovement from '@/pages/particle-movement'

const routes = [
  {
    path: '/virtual-scroll',
    name: 'VirtualScroll',
    component: VirtualScroll
  },
  {
    path: '/rich-editor',
    name: 'RichEditor',
    component: RichEditor
  },
  {
    path: '/particle-movement',
    name: 'ParticleMovement',
    component: ParticleMovement
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})