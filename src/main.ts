import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createHead } from '@vueuse/head'
import 'vue3-carousel/dist/carousel.css'

const app = createApp(App)
const head = createHead()

app.use(head)
app.use(router)

// Appel pour s'assurer que la page se charge toujours en haut
router.beforeEach(() => {
  window.scrollTo(0, 0)
})

app.mount('#app')
