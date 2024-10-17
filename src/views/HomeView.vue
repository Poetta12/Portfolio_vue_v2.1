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

    <div class="right-container">
      <div class="right-slide" ref="slideRight">
        <figure
          v-for="(image, index) in images"
          :key="index"
          :style="{ backgroundColor: image.color }"
        >
          <img :src="image.src" :alt="image.alt" />
        </figure>
      </div>
    </div>

    <div class="action-buttons">
      <button class="down-button" @click="changeSlide('down')" aria-label="down">
        <i class="icon-arrow-bold-down"></i>
      </button>
      <button class="up-button" @click="changeSlide('up')" aria-label="up">
        <i class="icon-arrow-bold-up"></i>
      </button>
    </div>
    <div id="h2">
      <h2 id="second">PORTFOLIO</h2>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Données pour les images
const leftSlides = [
  { color: '#222', title: 'POETTATECH', description: 'Mon PortFolio' },
  { color: '#c9720e', title: 'MOUSE FOLLOWER', description: 'Follow the mouse, mouse, mouse' },
  { color: '#c9720e', title: 'LOGIN ANIME', description: 'La joie de la connexion' },
  { color: '#003cff', title: 'SLIDER PORTUGAL', description: 'Un carousel nature' },
  { color: '#3e9ce3', title: 'SUMIKA', description: 'Polymer Compounds' },
  { color: '#b6b7f2', title: 'HANDIPHIL', description: 'Fonds de dotation' },
  { color: '#3d2d57', title: 'LA CRAVATE SOLIDAIRE', description: 'Réseau d’associations,' }
]

const mobileImages = [
  {
    src: 'La_Cravate_Solidaire-mobile.webp',
    alt: 'La_Cravate_Solidaire-mobile'
  },
  { src: 'HandiPhil-mobile.webp', alt: 'HandiPhil-mobile' },
  { src: 'Sumika-mobile.webp', alt: 'Sumika-mobile' },
  { src: 'PoettaTech_WSDS-mobile.webp', alt: 'PoettaTech_WSDS-mobile' }
]

const desktopImages = [
  {
    src: 'La_Cravate_Solidaire.webp',
    alt: 'La_Cravate_Solidaire-mobile',
    color: '#3d2d57'
  },
  { src: 'HandiPhil.webp', alt: 'HandiPhil', color: '#b6b7f2' },
  { src: 'Sumika.webp', alt: 'Sumika', color: '#3e9ce3' },
  { src: '/pt_slider.png', alt: '3.webp', color: '#003cff' },
  { src: '/animated_login.png', alt: '3.webp', color: '#c9720e' },
  { src: '/mouse_follower.png', alt: '3.webp', color: '#c9720e' },
  { src: 'PoettaTech_WSDS.webp', alt: 'PoettaTech_WSDS', color: '#222' }
]

const images = ref(mobileImages) // Valeur par défaut pour mobile

const slideLeft = ref(null)
const slideRight = ref(null)
const activeSlideIndex = ref(0)
let autoSlideInterval = null

// Fonction pour changer les diapositives
const changeSlide = (direction) => {
  const slidesLength = images.value.length
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

// Fonction pour mettre à jour les images en fonction de la taille de l'écran
const updateImages = () => {
  const isMobile = window.innerWidth <= 768
  images.value = isMobile ? mobileImages : desktopImages
}

onMounted(() => {
  // Initialisation des diapositives
  slideLeft.value.style.top = `-${(desktopImages.length - 1) * 100}vh`

  // Mettre à jour les images initiales
  updateImages()

  // Démarrer le défilement automatique
  autoSlideInterval = setInterval(() => {
    changeSlide('up')
  }, 3000) // Changement toutes les 3 secondes

  // Ajouter un écouteur d'événements pour le redimensionnement de la fenêtre
  window.addEventListener('resize', updateImages)
})

onUnmounted(() => {
  // Nettoyer l'écouteur d'événements et l'intervalle
  clearInterval(autoSlideInterval)
  window.removeEventListener('resize', updateImages)
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
  width: 100%;
}

div#h2 {
  display: flex;
  justify-content: center;
  top: 0;
  z-index: 1000;
  width: 100vw;
  position: absolute;
}

h2 {
  display: inline-block;
  width: 80%;
  font-size: 4vw;
  letter-spacing: 7vw;
  color: transparent !important;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #c9720e;
}

.right-container {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  left: 0;
}

button {
  display: none;
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
  display: none;
}

.right-slide {
  height: 100%;
  position: absolute;
  z-index: -1;
  top: 0;
  transition: transform 0.5s ease-in-out;
}

.right-slide > figure {
  display: flex;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 100%;
}

.slider-container .action-buttons button {
  position: absolute;
  left: 30%;
  top: 50%;
  z-index: 100;
  margin-top: 5vh !important;
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

@media (min-width: 768px) {
  img {
    max-width: 100%;
    width: 100%;
  }

  h2 {
    display: inline-block;
    width: 100vw;
    position: absolute;
    top: 8vh;
    left: 5%;
    font-size: 4vw;
    letter-spacing: 8vw;
    text-align: center;
  }
  h2#first {
    z-index: 10;
    text-align: center;
    color: rgba(253, 193, 123, 0.2);
  }
  h2#second {
    text-align: left;
    z-index: 1000;
    color: transparent !important;
    -webkit-text-stroke-width: 3px;
    -webkit-text-stroke-color: #c9720e;
  }

  .right-container {
    position: relative;
    display: flex;
    justify-content: center;
    width: 70%;
    left: 30%;
  }

  button {
    display: block;
    background-color: #fff;
    border: 0;
    color: #aaa;
    cursor: pointer;
    font-size: 1.5rem;
    padding: 15px;
    transition: color 0.2s ease-in;
    width: 50px;
    height: 50px;
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
    margin-top: -10vh !important;
  }

  .left-slide {
    display: block;
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
    padding-top: 10vh !important;
  }

  .left-slide h1 {
    font-size: 40px;
    margin-bottom: 10px;
    margin-top: -30px;
  }

  .right-slide {
    height: 100%;
    position: absolute;
    z-index: -1;
    top: 0;
    transition: transform 0.5s ease-in-out;
  }

  .right-slide > figure {
    display: flex;
    align-items: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: 100%;
    padding-right: 2% !important;
    padding-top: 10vh !important;
  }

  .slider-container .action-buttons button {
    position: absolute;
    left: 30%;
    top: 50%;
    z-index: 100;
    margin-top: 5vh !important;
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
}
</style>
