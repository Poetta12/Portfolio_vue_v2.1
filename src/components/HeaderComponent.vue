<script setup>
import { ref, watchEffect } from 'vue'

const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

// Observer les changements de menuOpen et gérer le scroll
watchEffect(() => {
  if (menuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
})
</script>

<template>
  <header>
    <div id="header-container">
      <div class="logo">
        <img src="/public/logo/WDS_logo_white-150x123.png" alt="Logo" />
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
      <nav :class="{ show: menuOpen }" class="main-nav">
        <ul>
          <li><router-link to="/" @click="closeMenu">Accueil</router-link></li>
          <li><router-link to="/poetta" @click="closeMenu">Poetta</router-link></li>
          <li><router-link to="/CV">CV</router-link></li>
          <!-- <li><a href="#">PortFolio</a></li>
          <li><a href="#">Contact</a></li> -->
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
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

.menu-button {
  display: none;
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
}

.main-nav ul li:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
}

.menu-button.hide-desktop {
  display: none;
}

@media (max-width: 768px) {
  .menu-button.hide-desktop {
    display: flex;
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
    z-index: 999;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
    overflow: hidden;
  }

  .main-nav.show {
    transform: translateX(0);
  }

  .main-nav ul {
    flex-direction: column;
    margin-top: 5rem;
    padding: 0.3rem;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 10px 0 0 10px;
  }

  .main-nav ul li {
    margin: 0.5rem 0;
  }

  .menu-button {
    display: flex;
    margin-right: 1rem;
  }

  .menu-button span {
    width: 30px;
    height: 4px;
    background-color: #fdc17b;
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

  .menu-opened {
    overflow: hidden;
  }
}
</style>
