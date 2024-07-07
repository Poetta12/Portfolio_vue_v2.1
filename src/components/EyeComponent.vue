<template>
  <div :class="['eye', `eye--${position}`]">
    <div class="eye-pupil"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  position: String
})
</script>

<style scoped>
.eye {
  position: absolute;
  top: 35%;
  height: 30%;
  width: 31%;
  background: #fff;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
}

.eye-pupil {
  position: absolute;
  top: 25%;
  height: 50%;
  width: 20%;
  background: #161616;
  border-radius: 50%;
  animation: look-around 4s infinite;
}

@keyframes look-around {
  0% {
    transform: translate(0);
  }
  5% {
    transform: translate(50%, -25%);
  }
  10% {
    transform: translate(50%, -25%);
  }
  15% {
    transform: translate(200%, -25%);
  }
  20% {
    transform: translate(200%, -25%);
  }
  25% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}

.eye--left {
  left: 0;
}

.eye--right {
  right: 0;
}
</style>
