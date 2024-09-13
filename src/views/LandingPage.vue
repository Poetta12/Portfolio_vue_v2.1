<template>
  <div class="slider-container">
    <div class="left-slide" ref="slideLeft">
      <div
        v-for="(item, index) in leftSlides"
        :key="index"
        :style="{ backgroundColor: item.color }"
      >
        <h1>{{ item.title }}</h1>
        <p>{{ item.description }}</p>
      </div>
    </div>

    <div class="rigth-container">
      <h2>PEDRO COSTA</h2>
      <div class="right-slide" ref="slideRight">
        <figure
          v-for="(image, index) in images"
          :key="index"
          :style="{ backgroundColor: image.color }"
        >
          <img :src="image.src" :alt="image.alt" />
        </figure>
      </div>
      <h2>PORTFOLIO</h2>
    </div>

    <div class="action-buttons">
      <button class="down-button" @click="changeSlide('down')">
        <i class="icon-arrow-bold-down"></i>
      </button>
      <button class="up-button" @click="changeSlide('up')">
        <i class="icon-arrow-bold-up"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const leftSlides = [
  { color: '#222', title: 'POETTATECH', description: 'Mon PortFolio' },
  { color: '#3d2d57', title: 'LA CRAVATE SOLIDAIRE', description: 'Réseau d’associations,' },
  { color: '#b6b7f2', title: 'HANDIPHIL', description: 'Fonds de dotation' },
  { color: '#778fa4', title: 'SUMIKA', description: 'Polymer Compounds' }
]

const images = [
  { src: '/public/La_Cravate_Solidaire.webp', alt: '1.webp', color: '#778fa4' },
  { src: '/public/HandiPhil.webp', alt: '2.webp', color: '#b6b7f2' },
  { src: '/public/Sumika.webp', alt: '3.webp', color: '#3d2d57' },
  { src: '/public/PoettaTech_WSDS.webp', alt: '4.webp', color: '#222' }
]

const slideLeft = ref(null)
const slideRight = ref(null)
const activeSlideIndex = ref(0)
let autoSlideInterval = null

const changeSlide = (direction) => {
  const slidesLength = images.length
  const sliderHeight = slideRight.value.clientHeight

  if (direction === 'up') {
    activeSlideIndex.value++
    if (activeSlideIndex.value > slidesLength - 1) {
      activeSlideIndex.value = 0
    }
  } else if (direction === 'down') {
    activeSlideIndex.value--
    if (activeSlideIndex.value < 0) {
      activeSlideIndex.value = slidesLength - 1
    }
  }

  slideRight.value.style.transition = 'transform 0.5s ease-in-out'
  slideLeft.value.style.transition = 'transform 0.5s ease-in-out'
  slideRight.value.style.transform = `translateY(-${activeSlideIndex.value * sliderHeight}px)`
  slideLeft.value.style.transform = `translateY(${activeSlideIndex.value * sliderHeight}px)`
}

const startAutoSlide = () => {
  autoSlideInterval = setInterval(() => {
    changeSlide('up')
  }, 3000) // Change every 3 seconds
}

const stopAutoSlide = () => {
  clearInterval(autoSlideInterval)
}

onMounted(() => {
  slideLeft.value.style.top = `-${(images.length - 1) * 100}vh`
  startAutoSlide()
})

onUnmounted(() => {
  stopAutoSlide()
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

* {
  box-sizing: border-box !important;
  margin: 0 !important;
  padding: 0 !important;
  max-width: none !important;
}

img {
  max-width: 100%;
}

body {
  font-family: 'Open Sans', sans-serif;
  height: 100vh;
}

.rigth-container {
  position: relative;
  display: flex;
  width: 100%;
}

.rigth-container h2 {
  font-size: 5vw;
  position: absolute;
}

.rigth-container h2:first-child,
.rigth-container h2:last-child {
  align-self: start;
  left: 50vw;
  z-index: 100;
}

.rigth-container h2:last-child {
  align-self: end;
  left: 55vw;
}

button {
  background-color: #fff;
  border: 0;
  color: #aaa;
  cursor: pointer;
  font-size: 16px;
  padding: 15px;
  transition: color 0.2s ease-in;
}

button:hover {
  color: #222;
}

button:focus {
  outline: 0;
}

.slider-container {
  display: flex;
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
}

.left-slide {
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 30%;
  transition: transform 0.5s ease-in-out;
}

.left-slide > div {
  align-items: center;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
}

.left-slide h1 {
  font-size: 40px;
  margin-bottom: 10px;
  margin-top: -30px;
}

.right-slide {
  height: 100%;
  position: absolute;
  top: 0;
  left: 30%;
  width: 70%;
  transition: transform 0.5s ease-in-out;
}

.right-slide > figure {
  display: flex;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 100%;
  width: 100%;
}

.slider-container .action-buttons button {
  position: absolute;
  left: 30%;
  top: 50%;
  z-index: 100;
}

.slider-container .action-buttons .down-button {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  transform: translateX(-100%);
}

.slider-container .action-buttons .up-button {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  transform: translateY(-100%);
}

footer {
  bottom: 0;
  background-color: #222;
  color: #fff;
  font-family: 'Open Sans', 'Arial', sans-serif;
  padding: 10px;
  position: fixed;
  left: 0;
  right: 0;
  letter-spacing: 1px;
  text-align: center;
}

footer i {
  color: red;
}

footer a {
  color: #3c97bf;
  text-decoration: none;
}

@media (min-width: 768px) {
}
</style>
