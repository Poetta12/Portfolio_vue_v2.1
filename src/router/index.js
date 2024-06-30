import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PoettaView from '../views/PoettaView.vue'
import CvView from '../views/CvView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/poetta', name: 'Poetta', component: PoettaView },
  { path: '/cv', name: 'CV', component: CvView },
  { path: '/contact', name: 'Contact', component: ContactView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
