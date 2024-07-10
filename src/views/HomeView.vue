<script setup>
import { useHead } from '@vueuse/head'
import Carousel from '@/components/carouselComponent.vue'
import { useRouter } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'

const heroSection = ref(null)
const heroParaf = ref(null)
const heroHeight = ref(null)
const aboutParaf = ref(null)
const aboutHeight = ref(null)
const aboutSection = ref(null)
const servicesSection = ref(null)
const router = useRouter()
const loaded = ref(false)
const scrollEnabled = ref(true)
const showFullHeroText = ref(false)
const showFullAboutText = ref(false)

const toggleFullHeroText = () => {
  showFullHeroText.value = !showFullHeroText.value
  heroHeight.value = heroParaf.value ? heroParaf.value.getBoundingClientRect() : null
  console.log(heroHeight.value)
}

const toggleFullAboutText = () => {
  showFullAboutText.value = !showFullAboutText.value
  aboutHeight.value = aboutParaf.value ? aboutParaf.value.getBoundingClientRect() : null
  console.log(aboutHeight.value)
}

const redirectToPortfolio = () => {
  router.push({ name: 'Portfolio' })
}

const scrollToNextSection = () => {
  const nextSection = document.querySelector('.hero-section')
  let offset = 170 // Offset par défaut

  // Définir des offsets différents en fonction de la taille de l'écran
  if (window.innerWidth >= 1024) {
    offset = 170 // Offset pour les écrans larges (par exemple, desktop)
  } else if (window.innerWidth >= 768) {
    offset = 160 // Offset pour les tablettes (par exemple, iPad)
  } else {
    offset = 110 // Offset pour les petits écrans (par exemple, mobile)
  }

  if (nextSection) {
    window.scrollTo({
      top: nextSection.offsetTop - offset,
      behavior: 'smooth'
    })
  }
  document.body.style.overflow = 'auto'
  scrollEnabled.value = true
}

const observeSections = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in')
          entry.target.classList.remove('fade-out')
        } else {
          entry.target.classList.add('fade-out')
          entry.target.classList.remove('fade-in')
        }
      })
    },
    { threshold: 0.02 }
  )

  observer.observe(heroSection.value)
  observer.observe(aboutSection.value)
  observer.observe(servicesSection.value)
}

const handleScroll = () => {
  const buttonContainer = document.querySelector('.button-container-3')
  if (window.scrollY > 200) {
    buttonContainer.classList.add('fade-out')
  } else {
    buttonContainer.classList.remove('fade-out')
  }
}

onMounted(() => {
  // Access heroParaf.value here after the component is mounted
  heroHeight.value = heroParaf.value ? heroParaf.value.getBoundingClientRect() : null
  console.log(heroHeight.value)
  aboutHeight.value = aboutParaf.value ? aboutParaf.value.getBoundingClientRect() : null
  console.log(aboutHeight.value)
  observeSections()
  window.addEventListener('scroll', handleScroll)

  observeSections()
  window.addEventListener('scroll', handleScroll)

  setTimeout(() => {
    loaded.value = true
  }, 100)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

useHead({
  title: 'Poettatech - Accueil',
  meta: [
    {
      name: 'description',
      content:
        "Bienvenue sur PoettaTech, votre source d'informations sur la technologie et le développement web. Découvrez nos projets, notre portfolio et plus encore."
    }
  ]
})
</script>

<template>
  <div class="home-container">
    <div id="carousel-container">
      <h2 :class="{ 'slide-in-left': loaded }" @click="redirectToPortfolio">PORTFOLIO</h2>
      <h2 :class="{ 'slide-in-left': loaded }" @click="redirectToPortfolio">PORTFOLIO</h2>
      <Carousel :class="{ 'slide-in-right': loaded }" />

      <div class="button-container-3">
        <span class="mas"></span>
        <button @click="scrollToNextSection" class="scroll-button" aria-label="scrollToNextSection">
          <div class="arrow down"></div>
        </button>
      </div>
    </div>

    <!-- Hero section -->
    <section ref="heroSection" class="hero-section reflection fade-out">
      <div class="hero-content" ref="heroParaf">
        <h1>Bienvenue sur PoettaTech</h1>
        <p class="desktop-text">
          Actuellement en formation avancée de Développeur, je suis activement à la recherche d'une
          alternance de 12 mois. Dynamique et doté d'un excellent sens du contact, j'apprécie
          particulièrement collaborer avec divers interlocuteurs. Mon engagement pour le collectif
          et ma passion pour l'apprentissage sont des aspects essentiels de ma personnalité. Je suis
          animé par une volonté forte de contribuer au succès de votre entreprise et de développer
          mes compétences dans un environnement professionnel stimulant et dynamique.
        </p>
        <p class="mobile-text" :style="{ maxHeight: showFullHeroText ? '100%' : '60vh' }">
          Actuellement en formation avancée de Développeur, je suis activement à la recherche d'une
          alternance de 12 mois.
          <span v-if="!showFullHeroText" class="short-text">
            Dynamique et doté d'un excellent sens du contact, j'apprécie particulièrement collaborer
            avec divers interlocuteurs.
          </span>
          <span v-else>
            Dynamique et doté d'un excellent sens du contact, j'apprécie particulièrement collaborer
            avec divers interlocuteurs. Mon engagement pour le collectif et ma passion pour
            l'apprentissage sont des aspects essentiels de ma personnalité. Je suis animé par une
            volonté forte de contribuer au succès de votre entreprise et de développer mes
            compétences dans un environnement professionnel stimulant et dynamique.
          </span>
          <button @click="toggleFullHeroText" aria-label="toggleFullHeroText">
            {{ showFullHeroText ? 'Réduire' : 'Lire la suite' }}
          </button>
        </p>

        <router-link to="/portfolio" class="cta-button">Découvrir mes projets</router-link>
      </div>
    </section>

    <!-- About section -->
    <section ref="aboutSection" class="about-section reflection fade-out">
      <div class="about-content" ref="aboutParaf">
        <h2>A propos de Pedro Costa</h2>
        <p class="desktop-text">
          Je suis récemment passé au domaine du développement numérique pour relever les défis et
          saisir les opportunités du monde moderne. Fort d'un certificat en développement web et
          mobile front-end et d'une première expérience professionnelle de 8 mois, je suis déterminé
          à approfondir mes compétences en devenant développeur Logiciel / Full Stack. Actuellement
          engagé dans un programme intensif au Campus Numérique in the Alps à Annecy, je me
          spécialise en développement web front-end et back-end, ainsi qu'en algorithmes et
          programmation. Passionné par l'innovation technologique, je suis prêt à relever de
          nouveaux défis et à contribuer au succès de projets numériques ambitieux.
        </p>
        <p class="mobile-text" :style="{ maxHeight: showFullAboutText ? '100%' : '50vh' }">
          Je suis récemment passé au domaine du développement numérique pour relever les défis et
          saisir les opportunités du monde moderne.
          <span v-if="!showFullAboutText" class="short-text">
            Fort d'un certificat en développement web et mobile front-end et d'une première
            expérience professionnelle de 8 mois,
          </span>
          <span v-else>
            je suis déterminé à approfondir mes compétences en devenant développeur Logiciel / Full
            Stack. Actuellement engagé dans un programme intensif au Campus Numérique in the Alps à
            Annecy, je me spécialise en développement web front-end et back-end, ainsi qu'en
            algorithmes et programmation. Passionné par l'innovation technologique, je suis prêt à
            relever de nouveaux défis et à contribuer au succès de projets numériques ambitieux.
          </span>
          <button @click="toggleFullAboutText" aria-label="toggleFullAboutText">
            {{ showFullAboutText ? 'Réduire' : 'Lire la suite' }}
          </button>
        </p>

        <router-link to="/cv" class="cta-button">Voir mon CV</router-link>
      </div>
    </section>

    <!-- Services section -->
    <section ref="servicesSection" class="services-section reflection fade-out">
      <div class="services-content">
        <h2>Mes Services</h2>
        <div class="services-list">
          <div class="service-item">
            <h3>Développement Web</h3>
            <p>Développement de sites web modernes et réactifs.</p>
          </div>
          <div class="service-item with-badge">
            <h3>Développement Mobile</h3>
            <p>Applications mobiles pour iOS et Android.</p>
            <span class="badge">Bientôt disponible</span>
          </div>
          <div class="service-item">
            <h3>Consultation Technologique</h3>
            <p>Conseils stratégiques pour vos projets numériques.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero-content .mobile-text {
  overflow: hidden;
  max-height: 60vh;
  transition: max-height 3s ease;
}

.about-content .mobile-text {
  overflow: hidden;
  max-height: 50vh;
  transition: max-height 3s ease;
}

.home-container {
  overflow-x: hidden;
  margin: auto;
  padding: 0 1rem;
  font-family: 'Orbitron', sans-serif;
  letter-spacing: 0.25rem;
}

#carousel-container {
  width: 100%;
  height: 88vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 8rem;
}

#carousel-container h2 {
  font-size: 10vw;
  cursor: pointer;
}
#carousel-container h2:first-child {
  display: none;
}

.button-container-3 {
  position: relative;
  margin: 5% auto 0;
  bottom: 0rem;
  width: 50px;
  height: 50px;
  overflow: hidden;
  border: 1px solid #000;
  transition: 0.5s;
  border-radius: 8px;
  background: #c9720e;
}

.button-container-3 button {
  width: 100%;
  -webkit-mask: url('https://raw.githubusercontent.com/pizza3/asset/master/natureSmaller.png');
  mask: url('https://raw.githubusercontent.com/pizza3/asset/master/natureSmaller.png');
  -webkit-mask-size: 7100% 100%;
  mask-size: 7100% 100%;
  cursor: pointer;
  -webkit-animation: ani2 1s steps(70) forwards;
  animation: ani2 1s steps(70) forwards;
}

.button-container-3 button:hover {
  -webkit-animation: ani 1s steps(70) forwards;
  animation: ani 1s steps(70) forwards;
}
.button-container-3 button:hover .arrow.down,
.button-container-3 button:hover .arrow.down {
  background: #fdc17b;
}

.arrow {
  transform: rotate(90deg);
  width: 50px;
  height: 50px;
  overflow: hidden;
  margin: 5px auto;
  position: relative;
  -webkit-mask: linear-gradient(to right, transparent, #fff 20% 80%, transparent);
  mask: linear-gradient(to right, transparent, #fff 20% 80%, transparent);
}
.arrow:before,
.arrow:after {
  content: '';
  position: absolute;
  width: 400%;
  left: 0;
  top: 0;
  height: 50%;
  background: linear-gradient(to right, #c9720e 8px, transparent 0) left/calc(100%/8) 100%;
  transform: var(--s, scaleY(1)) skew(45deg);
  transform-origin: bottom;
  animation: move 1s infinite linear;
}
.arrow.down:before,
.arrow.down:after {
  animation-direction: reverse;
}
.arrow:after {
  --s: scaleY(-1);
}

.scroll-button {
  width: 5%;
  background-color: #fdc17b;
  color: #000;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;
  box-shadow: 0 0 20px rgba(253, 193, 123, 0.8);
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
}

.hero-section::before,
.about-section::before,
.services-section::before {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 70%);
}

.scroll-button:hover {
  background-color: #c9720e;
}

.hero-section,
.about-section,
.services-section {
  border-radius: 20px;
  text-align: center;
  color: #fff;
  margin-bottom: 8rem;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  font-size: 1rem;
  line-height: 1.6;
}

.hero-section {
  width: 100%;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.about-section {
  background-color: #111;
}
.services-section {
  padding: 2rem 0;
  background-color: #222;
}

.hero-content,
.about-content {
  max-width: 900px;
  margin: auto;
  padding: 1rem;
  transition: all 3s;
}

.hero-content h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.hero-content p,
.about-content p {
  font-size: 1rem;
  margin-bottom: 2rem;
  text-align: justify;
}

.cta-button {
  display: inline-block;
  background-color: #fdc17b;
  color: #000;
  padding: 0.5rem 1rem;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1rem;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;
  box-shadow: 0 0 20px rgba(253, 193, 123, 0.8);
}

.cta-button:hover {
  background-color: #c9720e;
  transform: scale(1.05);
}

.about-content h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.services-content {
  max-width: 1200px;
  margin: auto;
}

.services-content h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.services-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.service-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 320px;
  height: 250px;
  padding: 1rem;
  background-color: #333;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  text-align: center;
  margin: 1rem;
}

.service-item h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.service-item p {
  font-size: 1rem;
}

.badge {
  position: absolute;
  top: 0px;
  right: -20px;
  background-color: #fdc17b;
  color: #111;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  border-radius: 5px;
  transform: rotate(5deg);
  transform-origin: top right;
  box-shadow: 0 0 20px rgba(253, 193, 123, 0.5);
}

.desktop-text {
  display: none;
}
.mobile-text {
  display: block;
  text-align: left !important;
}
.mobile-text .short-text {
  max-height: 60vh;
  overflow: hidden;
}

.mobile-text button {
  background: none;
  border: none;
  color: #fdc17b;
  cursor: pointer;
  font-size: 1rem;
  text-decoration: underline;
}
@media (min-width: 768px) {
  #carousel-container {
    height: 100vh;
  }

  .hero-section,
  .about-section,
  .services-section {
    margin-bottom: 5rem;
  }

  #carousel-container h2 {
    display: block;
    position: absolute;
    font-size: 13vw;
    cursor: pointer;
  }
  #carousel-container h2:first-child {
    display: block;
    color: transparent;
    z-index: 100;
    -webkit-text-stroke-width: 3px;
    -webkit-text-stroke-color: #c9720e;
  }
  #carousel-container h2:last-child {
    color: green;
  }

  .hero-content h1 {
    font-size: 3.5rem;
  }

  .hero-content p {
    font-size: 1.4rem;
  }

  .hero-section {
    align-items: start;
  }

  .cta-button {
    padding: 1rem 2rem;
    font-size: 1.2rem;
  }

  .about-section {
    padding: 4rem 0;
  }

  .about-content h2 {
    font-size: 3rem;
  }

  .services-section {
    padding: 4rem 0;
  }

  .services-content h2 {
    font-size: 3rem;
  }

  .services-list {
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }

  .service-item {
    padding: 1.5rem;
    margin: 1rem;
  }

  .service-item h3 {
    font-size: 1.8rem;
  }

  .badge {
    font-size: 1rem;
    padding: 0.3rem 0.5rem;
  }
  .hero-section,
  .about-section,
  .services-section {
    border-radius: 20px;
    text-align: center;
    color: #fff;
    margin-bottom: 5rem;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    font-size: 1rem;
    line-height: 1.6;
  }
}

@media (min-width: 1024px) {
  #carousel-container {
    height: 100vh;
  }
  .hero-section,
  .about-section,
  .services-section {
    margin-bottom: 8rem;
  }
  .home-container {
    padding: 0 2rem 1rem;
  }
  .header {
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-size: 34px;
    margin-top: 12vh;
  }
  #carousel-container {
    display: flex;
    margin-bottom: 1rem;
  }

  .footer {
    text-align: center;
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    font-size: 20px;
    margin-top: 15vh;
  }

  a {
    color: #00ff95;
  }
  .desktop-text {
    display: block;
  }
  .mobile-text {
    display: none;
  }
}
@media (min-width: 1124px) {
  .services-list {
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    margin: 0;
  }
  .service-item {
    margin: 0;
  }
}

.reflection {
  position: relative;
}

.reflection::before {
  content: '';
  position: absolute;
  top: 180px;
  left: 200px;
  right: 0;
  bottom: 0;
  z-index: 1;
  pointer-events: none;
  opacity: 0.3;
  border-radius: 10px;
  transform: rotate(-4deg) translateY(-20%);
  filter: blur(4px);
}

.fade-in {
  opacity: 1;
  transition: opacity 2s ease;
}

.fade-out {
  opacity: 0;
  transition: opacity 2s ease;
}

.slide-in-left {
  animation: slideFromLeft 1s ease forwards;
  opacity: 0;
}

.slide-in-right {
  animation: slideFromRight 1s ease forwards;
  opacity: 0;
}

@keyframes slideFromLeft {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideFromRight {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@-webkit-keyframes move {
  to {
    transform: translateX(-25%) var(--s, scaleY(1)) skew(45deg);
  }
}

@keyframes move {
  to {
    transform: translateX(-25%) var(--s, scaleY(1)) skew(45deg);
  }
}

@-webkit-keyframes ani {
  from {
    -webkit-mask-position: 0 0;
    mask-position: 0 0;
  }
  to {
    -webkit-mask-position: 100% 0;
    mask-position: 100% 0;
  }
}

@keyframes ani {
  from {
    -webkit-mask-position: 0 0;
    mask-position: 0 0;
  }
  to {
    -webkit-mask-position: 100% 0;
    mask-position: 100% 0;
  }
}

@-webkit-keyframes ani2 {
  from {
    -webkit-mask-position: 100% 0;
    mask-position: 100% 0;
  }
  to {
    -webkit-mask-position: 0 0;
    mask-position: 0 0;
  }
}

@keyframes ani2 {
  from {
    -webkit-mask-position: 100% 0;
    mask-position: 100% 0;
  }
  to {
    -webkit-mask-position: 0 0;
    mask-position: 0 0;
  }
}
</style>
