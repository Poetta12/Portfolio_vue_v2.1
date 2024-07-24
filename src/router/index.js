import { createRouter, createWebHistory } from 'vue-router'
import LandingLayout from '../layouts/landingLayout.vue'
import DefaultLayout from '../layouts/defaultLayout.vue'
import HomeView from '../views/HomeView.vue'
import PoettaView from '../views/PoettaView.vue'
import CvView from '../views/CvView.vue'
import ContactView from '../views/ContactView.vue'
import PortfolioView from '../views/PortfolioView.vue'

const routes = [
  {
    path: '/',
    component: LandingLayout,
    children: [
      {
        path: '',
        name: 'Landing',
        component: LandingPage
      }
    ]
  },
  {
    path: '/home',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: HomeView
      }
    ]
  },
  {
    path: '/poetta',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'Poetta',
        component: PoettaView
      }
    ]
  },
  {
    path: '/cv',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'CV',
        component: CvView
      }
    ]
  },
  {
    path: '/contact',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'Contact',
        component: ContactView
      }
    ]
  },
  {
    path: '/portfolio',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'Portfolio',
        component: PortfolioView
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
