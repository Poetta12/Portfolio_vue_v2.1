<template>
  <div>
    <AboutModule />
    <InfoModule />
  </div>
</template>

<script setup>
import AboutModule from '../components/AboutModule.vue'
import InfoModule from '../components/InfoModule.vue'
import { useHead } from '@vueuse/head'

useHead({
  title: 'PoettaTech - Pedro Costa',
  meta: [
    {
      name: 'description',
      content:
        "Bienvenue sur PoettaTech, votre source d'informations sur la technologie et le développement web. Découvrez nos projets, notre portfolio et plus encore."
    }
  ]
})
</script>

<style scoped>
/* Styles spécifiques à PoettaView.vue si nécessaire */
</style>
