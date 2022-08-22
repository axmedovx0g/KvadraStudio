import { createRouter, createWebHistory } from 'vue-router'
import PrivateProjects from '@/components/privateProjects.vue'
import PublicProjects from '@/components/publicProjects.vue'

const routes = [
  {
    path: '/',
    component: PrivateProjects
  },
  {
    path: '/public',
    component: PublicProjects
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
