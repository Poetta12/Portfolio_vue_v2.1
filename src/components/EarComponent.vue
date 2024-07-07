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
  background: #161616;
}

.ear--left {
  left: -7%;
  transform: rotate(-25deg);
  border-radius: 5px 20px 0 0;
}

.ear--right {
  right: -7%;
  transform: rotate(25deg);
  border-radius: 20px 5px 0 0;
}
</style>
