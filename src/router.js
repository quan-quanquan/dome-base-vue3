import {createRouter, createWebHistory} from 'vue-router'

import VirtualScroll from '@/pages/virtual-scroll'
import RichEditor from '@/pages/rich-editor'

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
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})