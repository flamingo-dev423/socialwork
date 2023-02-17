import { createRouter, createWebHistory } from 'vue-router'
import SocialClone from '../views/socialclone.vue'

const routes = [
  {
    path: '/',
    name: 'socialclone',
    component: SocialClone
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
