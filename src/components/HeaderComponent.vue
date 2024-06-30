<script setup>
import { ref, watchEffect } from 'vue'
import { useRouter } from 'vue-router'

const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
}

// Observer les changements de menuOpen et gérer le scroll
watchEffect(() => {
  if (menuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
})

const router = useRouter()

const goToHome = () => {
  closeMenu()
  router.push('/')
}

// Scroll to top after route change
router.afterEach(() => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <header>
    <div id="header-container">
      <div class="logo" @click="goToHome">
        <img src="/src/assets/logos/logo.png" alt="Logo" />
      </div>
      <ul id="header-reseaux">
        <li><a href="https://www.poettatech.fr" class="icon-profile"></a></li>
        <li><a href="https://x.com/poettawds" class="icon-x"></a></li>
        <li><a href="https://github.com/Poetta12" class="icon-github"></a></li>
        <li><a href="https://www.linkedin.com/in/pedronfcosta/" class="icon-linkedin"></a></li>
      </ul>
      <!-- Burger Button -->
      <div @click="toggleMenu" :class="{ open: menuOpen }" class="menu-button">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <!-- Navigation Menu -->
      <nav :class="{ show: menuOpen }" class="main-nav">
        <ul>
          <li><router-link to="/" @click="closeMenu">Accueil</router-link></li>
          <li><router-link to="/poetta" @click="closeMenu">Poetta</router-link></li>
          <li><router-link to="/cv" @click="closeMenu">CV</router-link></li>
          <li><router-link to="/contact" @click="closeMenu">Contact</router-link></li>
          <li><router-link to="/portfolio" @click="closeMenu">Portfolio</router-link></li>
          <!-- <li><a href="#">PortFolio</a></li>
      <li><a href="#">Contact</a></li> -->
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
/* Styles de base pour les écrans mobiles */

@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

header {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 1rem;
  background-color: #111;
  color: #fff;
  height: 12vh;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.2);
  font-family: 'Orbitron', sans-serif;
}

#header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.logo {
  width: 75px;
  cursor: pointer;
}

.logo img {
  height: auto;
  max-width: 100%;
  transition: transform 0.3s ease;
}

.logo img:hover {
  transform: scale(1.1);
}

#header-reseaux {
  display: none; /* Caché par défaut sur mobile */
}

.menu-button {
  display: flex;
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 2000;
  margin-right: 1rem;
}

.menu-button span {
  display: block;
  width: 100%;
  height: 4px;
  background-color: #fdc17b;
  transition: all 0.3s ease;
}

.menu-button.open span:nth-child(1) {
  transform: translateY(12px) rotate(45deg);
}

.menu-button.open span:nth-child(2) {
  opacity: 0;
}

.menu-button.open span:nth-child(3) {
  transform: translateY(-12px) rotate(-45deg);
}

.main-nav {
  display: flex;
  align-items: self-end;
  justify-content: flex-end;
  text-align: end;
  padding-bottom: 50px;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 70%;
  max-width: 300px;
  background-color: #111;
  z-index: 1500;
  flex-direction: column;
  padding-top: 4rem;
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
}

.main-nav.show {
  transform: translateX(0);
}

.main-nav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
}

.main-nav ul li {
  margin: 1rem;
}

.main-nav ul li a {
  text-decoration: none;
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  transition: color 0.3s ease;
}

.main-nav ul li a:hover {
  color: #fdc17b;
}

.menu-button.hide-desktop {
  display: none;
}

/* Media queries pour les écrans plus larges (desktop) */

@media (min-width: 769px) {
  #header-reseaux {
    display: flex;
    justify-content: space-evenly;
    list-style: none;
    width: 30%;
    margin: auto;
  }

  #header-reseaux li {
    display: flex;
    align-items: center;
  }

  #header-reseaux a {
    font-size: 2rem;
    color: #fdc17b;
    transition:
      color 0.3s ease,
      text-shadow 0.3s ease;
  }

  #header-reseaux a:hover {
    color: #00ffff;
    text-shadow: 0 0 10px rgba(0, 255, 255, 0.8);
  }

  .main-nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
  }

  .main-nav ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
  }

  .main-nav ul li {
    margin-left: 1rem;
  }

  .main-nav ul li a {
    display: inline-block;
    text-decoration: none;
    color: #fff;
    padding: 0 1rem;
    transition: background-color 0.3s ease;
    font-size: 1.5rem;
    font-weight: bold;
  }

  .main-nav ul li:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 5px;
  }

  .menu-button.hide-desktop {
    display: none;
  }
}
</style>
