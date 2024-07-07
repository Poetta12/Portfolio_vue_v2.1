<template>
  <div class="cat">
    <Ear position="left" />
    <Ear position="right" />
    <Face />
  </div>
</template>

<script setup>
import Ear from './EarComponent.vue'
import Face from './FaceComponent.vue'
</script>

<style scoped>
.cat {
  position: relative;
  height: 30px; /* Taille basée sur la variable $size du CSS */
  width: 50px; /* Calcul: $size * 1.13 */
  animation: head-bob 4s infinite alternate; /* Animation pour la tête */
}

@keyframes head-bob {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(10px);
  }
}
</style>
