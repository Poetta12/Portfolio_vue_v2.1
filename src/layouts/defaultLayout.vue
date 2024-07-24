<template>
  <div>
    <HeaderComponent />
    <main>
      <router-view></router-view>
    </main>
    <div id="cat-eye">
      <CatComponent />
    </div>
    <FooterComponent />
  </div>
</template>

<script setup>
import HeaderComponent from '../components/HeaderComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'
import CatComponent from '../components/CatComponent.vue'
import '@/assets/css/main.css' // Assurez-vous d'importer le bon chemin
import '@/assets/Icomoon/style.css'
</script>

<style scoped>
main {
  max-width: none;
  margin: auto;
  margin-top: 1rem;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  padding: 1rem 0; /* Ajoute du padding pour les petits écrans */
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: block; /* Change à block pour les petits écrans */
  padding: 1rem 0;
  border-bottom: 1px solid var(--color-border); /* Ajoute une bordure basse pour les petits écrans */
}

nav a:first-of-type {
  border: 0;
}

#cat-eye {
  display: flex;
  place-content: center;
  align-items: center;
  width: 70px;
  height: 40px;
  border-radius: 5px;
  position: fixed;
  bottom: 10vh;
  right: 0;
  z-index: 100;
}

@media (min-width: 768px) {
  main {
    padding: 0; /* Augmente le padding pour les écrans moyens et plus grands */
  }

  header {
    display: flex;
    place-items: center;
    padding: 0 2rem; /* Augmente le padding pour les écrans moyens et plus grands */
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: 0; /* Réinitialise la marge pour les écrans moyens et plus grands */
    font-size: 1rem;
    padding: 0; /* Réinitialise le padding pour les écrans moyens et plus grands */
    margin-top: 1rem;
  }

  nav a {
    display: inline-block; /* Change à inline-block pour les écrans moyens et plus grands */
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
    border-bottom: 0; /* Supprime la bordure basse pour les écrans moyens et plus grands */
  }

  nav a:first-of-type {
    border: 0;
  }

  #cat-eye {
    bottom: 0;
  }
}

@media (min-width: 1024px) {
}
</style>
