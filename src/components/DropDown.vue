<template>
  <div id="app">
    <button @click="dropIt">Pet Options</button>
    <transition name="slide">
      <ul class="list" v-if="isDropped">
        <li>Dog</li>
        <li>Cat</li>
        <li>Bunny</li>
        <li>Parrot</li>
        <li>Fish</li>
      </ul>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isDropped = ref(false)

const dropIt = () => {
  isDropped.value = !isDropped.value
}
</script>

<style scoped>
html {
  display: grid;
  height: 100%;
}

body {
  margin: auto;
  background: linear-gradient(#5e2973, #692424);
}

button {
  padding: 20px 60px;
  border: 1px solid rgba(181, 0, 100, 0.9); /* Utilisation de rgba pour la couleur de bordure */
  background: #b50064;
  color: #eee;
}

button:focus {
  outline: 1px solid rgba(181, 0, 100, 0.7); /* Utilisation de rgba pour la couleur de l'outline */
}

.list {
  position: absolute;
  width: 204px;
  margin: 0;
  padding: 0;
  list-style-type: none;
  transform-origin: top;
  transition: transform 0.4s ease-in-out;
  overflow: hidden;
}

.list li {
  padding: 10px;
  background: white;
  border-bottom: 1px solid #eee;
  border-left: 2px solid #cbc;
}

/* Effets de transition pour l'animation de slide */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.4s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
  transform: scaleY(0);
}
</style>
