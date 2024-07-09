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
</script>

<template>
  <header>
    <div id="header-container">
      <div class="logo" @click="goToHome">
        <img src="/src/assets/logos/logo_2.webp" alt="Logo" />
      </div>
      <ul id="header-reseaux">
        <li><a href="https://www.poettatech.fr" class="icon-profile"></a></li>
        <li><a href="https://x.com/poettawds" class="icon-x"></a></li>
        <li><a href="https://github.com/Poetta12" class="icon-github"></a></li>
        <li><a href="https://www.linkedin.com/in/pedronfcosta/" class="icon-linkedin"></a></li>
      </ul>
      <!-- Burger Button -->
      <div @click="toggleMenu" :class="{ open: menuOpen }" class="menu-button hide-desktop">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <!-- Navigation Menu -->

      <nav :class="{ 'main-nav': true, flex: menuOpen, hidden: !menuOpen }">
        <ul>
          <li>
            <router-link to="/" @click="closeMenu" active-class="active-link">Accueil</router-link>
          </li>
          <li>
            <router-link to="/poetta" @click="closeMenu" active-class="active-link"
              >Pedro Costa</router-link
            >
          </li>
          <li>
            <router-link to="/cv" @click="closeMenu" active-class="active-link">CV</router-link>
          </li>
          <li>
            <router-link to="/portfolio" @click="closeMenu" active-class="active-link"
              >Mes Projets</router-link
            >
          </li>
          <li>
            <router-link to="/contact" @click="closeMenu" active-class="active-link"
              >Contact</router-link
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
/* Styles par défaut pour mobile */
header {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 1rem;
  background-color: #111;
  color: #fff;
  height: 10vh;
  box-shadow: 0 0 20px rgba(253, 193, 123, 0.2);
  font-family: 'Orbitron', sans-serif;
  letter-spacing: 0.25rem;
}

#header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.logo {
  width: 65px;
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
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  flex-direction: column;
  align-items: flex-end;
  place-content: start;
  z-index: 999;
  transform: translateX(-100%);
  transition: transform 0.5s ease-in-out;
  overflow: hidden;
}

.main-nav.flex {
  transform: translateX(0);
}

.main-nav ul {
  height: inherit;
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: end;
  margin-top: 5rem;
  padding: 0.3rem;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 10px 0 0 10px;
}

.main-nav ul li {
  margin: 0.5rem 0;
  margin: 30px 0;
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
  display: flex;
}

.flex {
  display: flex;
}

/* Media queries pour les écrans plus larges */
@media (min-width: 769px) {
  header {
    top: 0;
  }
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
    color: #c9720e;
    /*text-shadow: 0 0 10px rgba(201, 114, 14, 0.2);*/
  }
}

@media (min-width: 1024px) {
  .menu-button {
    display: none;
  }

  .main-nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    background: none;
    flex-direction: row;
    height: auto;
    width: auto;
    transform: none;
    overflow: visible;
  }

  .main-nav ul {
    flex-direction: row;
    margin-top: 0;
    background: none;
    border-radius: 0;
  }
  .main-nav ul li a {
    font-size: 1rem;
  }
  .menu-button.hide-desktop {
    display: none;
  }
}

/* Ajouter cette section pour styliser le lien actif */
.active-link {
  color: #fdc17b;
  border-bottom: 2px solid #fdc17b;
}
</style>
