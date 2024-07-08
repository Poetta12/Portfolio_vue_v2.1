<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const desktopArticles = ref([
  { image: '/HandiPhil.png' },
  { image: '/La_Cravate_Solidaire.png' },
  { image: '/Sumika.png' },
  { image: '/PoettaTech_WSDS.png' }
])

const mobileArticles = ref([
  { image: '/HandiPhil-mobile.png' },
  { image: '/La_Cravate_Solidaire-mobile.png' },
  { image: '/Sumika-mobile.png' },
  { image: '/PoettaTech_WSDS-mobile.png' }
])

const isMobile = ref(window.innerWidth <= 768)
const articles = computed(() => (isMobile.value ? mobileArticles.value : desktopArticles.value))

let currentIndex = ref(0)
const totalSlides = computed(() => articles.value.length)
let timer = null
let direction = null

function nextSlide() {
  direction = 'up'
  currentIndex.value = (currentIndex.value + 1) % totalSlides.value
  resetTimer()
}

// function prevSlide() {
//   direction = 'down'
//   currentIndex.value = (currentIndex.value - 1 + totalSlides.value) % totalSlides.value
//   resetTimer()
// }

function goToSlide(index) {
  direction = index > currentIndex.value ? 'up' : 'down'
  currentIndex.value = index
  router.push({ name: 'Portfolio' })
  resetTimer()
}

function resetTimer() {
  clearInterval(timer)
  timer = setInterval(() => {
    nextSlide()
  }, 3000)
}

function handleResize() {
  isMobile.value = window.innerWidth <= 768
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
  timer = setInterval(() => {
    nextSlide()
  }, 3000)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  clearInterval(timer)
})
</script>

<template>
  <div id="slide-container">
    <div id="slides">
      <article
        v-for="(article, index) in articles"
        :key="index"
        :class="{
          active: index === currentIndex,
          'slide-from-up': index === currentIndex && direction === 'up',
          'slide-from-down': index === currentIndex && direction === 'down'
        }"
      >
        <router-link :to="{ name: 'Portfolio' }">
          <img :src="article.image" alt="Slide Image" />
        </router-link>
      </article>
    </div>

    <div class="button-slide">
      <!-- <button class="prev" @click="prevSlide">
        <i class="icon-triangle-up" style="font-size: 55px"></i>
      </button>
      <button class="next" @click="nextSlide">
        <i class="icon-triangle-up" style="font-size: 55px"></i>
      </button> -->
      <ul id="dots" class="dots-container">
        <li
          v-for="(article, index) in articles"
          :key="index"
          :class="{ selected: index === currentIndex }"
          @click="goToSlide(index)"
        ></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-weight: 300;
}

button:focus {
  outline: none;
}

body {
  width: 100%;
  height: 100vh;
  background: linear-gradient(to right, #ef629f, #fcbf93);
  position: relative;
  font-family: 'Playfair-Display';
}

.title {
  position: relative;
  top: 5%;
  text-align: center;
  font-family: 'Quicksand';
  color: #fff;
  font-weight: 300;
  font-size: 30px;
}

/* Slideshow CSS */

#slide-container {
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(253, 193, 123, 0.8);
  width: 100%;
  height: 70vh;
  position: relative;
  margin: 0;
  margin-bottom: 0;
  background: #222;
  padding: 0;
  overflow: hidden;
  z-index: 10;
}

#slides {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
}

#slides article {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0; /* Caché par défaut */
  transition: opacity 0.5s ease; /* Animation de transition */
}

#slides article.active {
  opacity: 1; /* Rend l'article actif visible */
  z-index: 1; /* Assurez-vous que l'article actif est au-dessus */
}

#slides article a {
  text-decoration: none;
  color: inherit;
}

.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}

#slides article img {
  width: 100%;
  height: 100%;
  object-fit: contain; /* Ajuste l'image sans déformation */
}

#slides article:first-child {
  top: 0;
  z-index: 2;
}

/* Slideshow button */

button.next {
  background-color: #fdc17b;
  border: none;
  width: 90px;
  height: 50px;
  border-radius: 55px 55px 0 0;
  position: absolute;
  /* margin: 0 auto; */
  top: 0;
  right: 50px;
  padding: 0;
  z-index: 10;
  -webkit-transition-duration: 0.1s;
  transform: rotate(180deg);
}

button.next:active {
  background-color: #c9720e;
  cursor: pointer;
  margin-bottom: -7px;
  -webkit-transition-duration: 0.1s;
}

button.prev {
  background-color: #fdc17b;
  border: none;
  width: 90px;
  height: 50px;
  border-radius: 0 0 55px 55px;
  position: absolute;
  /* margin: 0 auto; */
  top: 0;
  left: 50px;
  padding: 0;
  z-index: 10;
  -webkit-transition-duration: 0.1s;
}

button.prev:active {
  background-color: #c9720e;
  cursor: pointer;
  margin-top: -7px;
  -webkit-transition-duration: 0.1s;
}
.dots-container {
  position: absolute;
  margin: 0;
  padding: 0;
  top: 0;
  left: 0;
  z-index: 10;
}

.dots-container li {
  width: 15px;
  height: 15px;
  display: block;
  font-size: 20px;
  background-color: #fdc17b;
  border-radius: 50%;
  margin: 18px 10px;
  z-index: 10;
}

.dots-container li:hover {
  background-color: #c9720e;
  cursor: pointer;
  -webkit-transition: all 1000ms cubic-bezier(0.215, 0.61, 0.355, 1);
  transition: all 1000ms cubic-bezier(0.215, 0.61, 0.355, 1);
}

#dots .selected {
  background-color: #c9720e;
  -webkit-transition: all 1000ms cubic-bezier(0.215, 0.61, 0.355, 1);
  transition: all 1000ms cubic-bezier(0.215, 0.61, 0.355, 1);
}

#slides article.active {
  opacity: 1;
  z-index: 1;
  animation: slideFromUp 0.5s ease forwards; /* Animation par défaut */
}

#slides article.active.slide-from-down {
  opacity: 1;
  z-index: 1;
  animation: slideFromDown 0.5s ease forwards;
}

@media (min-width: 768px) {
  #slide-container {
    border-radius: 20px;
    box-shadow: 0 0 20px rgba(253, 193, 123, 0.8);
    width: 80%;
    height: 450px;
    position: relative;
    margin: 0 auto;
    margin-bottom: 0;
    background: #222;
    padding: 0;
    overflow: hidden;
    z-index: 10;
  }
}

@keyframes slideFromUp {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slideFromDown {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
