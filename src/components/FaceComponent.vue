<template>
  <div class="face">
    <Eye position="left" />
    <Eye position="right" />
    <Muzzle />
  </div>
</template>

<script setup>
import Eye from './EyeComponent.vue'
import Muzzle from './MuzzleComponent.vue'
</script>

<style scoped>
.face {
  position: relative;
  height: 100%;
  width: 100%;
  background: #161616;
  border-radius: 50%;
}
</style>
