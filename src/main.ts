import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createMetaManager } from 'vue-meta'
import 'vue3-carousel/dist/carousel.css'

const app = createApp(App)
app.use(createMetaManager())
app.use(router)

// Appel pour s'assurer que la page se charge toujours en haut
router.beforeEach(() => {
  window.scrollTo(0, 0)
})

app.mount('#app')
