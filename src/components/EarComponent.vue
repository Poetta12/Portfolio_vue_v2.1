<template>
  <div :class="['ear', `ear--${position}`]">
    <div class="ear-hair"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  position: String
})
</script>

<style scoped>
.ear {
  position: absolute;
  top: -30%;
  height: 60%;
  width: 25%;
  background: #fff;
}

.ear-hair::before,
.ear-hair::after {
  content: '';
  position: absolute;
  bottom: 24%;
  height: 10%;
  width: 5%;
  border-radius: 50%;
  background: #161616;
}

.ear--left {
  left: -7%;
  transform: rotate(-15deg);
}

.ear--right {
  right: -7%;
  transform: rotate(15deg);
}
</style>
