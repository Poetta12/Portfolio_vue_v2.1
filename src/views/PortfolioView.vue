<script setup>
import { ref } from 'vue'
import { useHead } from '@vueuse/head'
import Modal from '../components/ModalComponent.vue'

const projects = ref([
  {
    title: 'HandiPhil',
    imageUrl: '/HandiPhil.webp',
    description: `<p>En tant que développeur web, j'ai eu l'opportunité enrichissante de travailler sur mon tout premier projet client, Handiphil, pour le Fonds de Dotation Handiphil. Ce projet revêt une importance particulière car il soutient activement l'inclusion des personnes handicapées mentales, cognitives ou psychiques en Île-de-France.</p>

    <p>Mon rôle central dans ce projet comprenait la conception et le développement d'un site web dynamique utilisant WordPress. J'ai été chargé de personnaliser le thème WordPress avec du code JavaScript, CSS, HTML et PHP pour répondre aux besoins spécifiques de l'association et assurer une expérience utilisateur optimale.</p>
    
    <p>En collaborant étroitement avec l'équipe du Fonds de Dotation Handiphil, j'ai pu intégrer des fonctionnalités essentielles telles que la gestion de contenu flexible, des formulaires interactifs et une navigation intuitive. J'ai également mis en œuvre des améliorations de performance et d'accessibilité conformes aux normes WCAG, garantissant ainsi une accessibilité maximale pour tous les utilisateurs.</p>`,
    link: 'https://www.handiphil.fr/'
  },
  {
    title: 'La Cravate Solidaire',
    imageUrl: '/La_Cravate_Solidaire.webp',
    description: `<p>Pour mon deuxième projet client, j'ai collaboré avec La Cravate Solidaire (https://lacravatesolidaire.org/), une association œuvrant pour l'emploi des personnes en difficulté.</p>

    <p>J'ai développé des compétences approfondies en Vue.js pour créer des composants interactifs et dynamiques, améliorant ainsi l'expérience utilisateur du site. En parallèle, j'ai assuré un design responsive en utilisant CSS, SASS et Bootstrap, garantissant une navigation optimale sur tous les appareils.</p>

    <p>J'ai structuré le contenu en HTML de manière sémantique, optimisant ainsi l'accessibilité et le référencement naturel du site. Mon rôle a également inclus l'intégration et l'optimisation d'images pour des performances optimales.</p>

    <p>Grâce à ces améliorations, le site de La Cravate Solidaire est devenu plus attractif et fonctionnel, amplifiant sa visibilité et soutenant efficacement ses initiatives sociales.</p>`,
    link: 'https://lacravatesolidaire.org/'
  },
  {
    title: 'Sumika',
    imageUrl: '/Sumika.webp',
    description: `<p>Pour mon troisième projet avec Sumika Europe (https://www.sumikaeurope.com), j'ai dirigé le développement d'un site web dynamique en utilisant WordPress, tout en intégrant des animations personnalisées avec CSS et JavaScript conformément au cahier des charges.</p>

    <p>J'ai également configuré un module avancé avec Advanced Custom Fields (ACF) en PHP et HTML, offrant au client un tableau de bord sécurisé pour gérer efficacement le contenu du site.</p>
    
    <p>J'ai optimisé le site pour assurer des performances optimales, avec une vitesse de chargement rapide et une expérience utilisateur fluide.</p>
    
    <p>Ce projet a consolidé ma capacité à répondre aux besoins spécifiques des clients tout en maintenant une haute qualité de développement et une gestion de projet efficace, respectant les délais et les attentes. Mon travail a significativement amélioré la présence en ligne de Sumika Europe et a renforcé son image dans le secteur des matériaux de haute performance.</p>`,
    link: 'https://www.sumikaeurope.com/'
  },
  {
    title: 'PoettaTech WSDS',
    imageUrl: '/PoettaTech_WSDS.webp',
    description: `<p>Poettatch.fr est mon portfolio personnel développé avec Vue.js, mettant en avant mes compétences en développement web. Le site présente une interface interactive avec un design responsive optimisé pour tous les appareils.</p>
    
    <p>J'ai intégré des animations fluides et des fonctionnalités avancées en JavaScript pour enrichir l'expérience utilisateur. Les sections incluent mes informations personnelles, mes liens professionnels (LinkedIn, GitHub), mon parcours éducatif, mes compétences techniques (HTML, CSS, JavaScript, PHP, Vue.js, etc.), ainsi que mes expériences professionnelles précédentes.</p>
    
    <p>Une attention particulière a été portée à l'esthétique et à la fonctionnalité, avec l'utilisation de CSS personnalisé pour styliser chaque élément de manière harmonieuse.</p>
    
    <p>Poettatch.fr représente non seulement mon expertise technique mais aussi ma capacité à concevoir des interfaces utilisateur modernes et ergonomiques, essentielles pour répondre aux attentes actuelles du marché du développement web.</p>`,
    link: 'https://www.poettatech.fr/'
  }
])
const selectedProject = ref(null)

// Fonction pour ouvrir la modal
const openModal = (project) => {
  selectedProject.value = project
}

// Fonction pour fermer la modal
const closeModal = () => {
  selectedProject.value = null
}

useHead({
  title: 'PoettaTech - PortFolio',
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
  <div id="portfolio">
    <section class="portfolio-section">
      <article v-for="(project, index) in projects" :key="index" class="portfolio-item">
        <h3>{{ project.title }}</h3>
        <figure class="portfolio-image">
          <img :src="project.imageUrl" :alt="project.title" />
        </figure>
        <div class="portfolio-description">
          <!-- Utilisation correcte de v-html pour interpréter le HTML -->
          <div v-html="project.description"></div>
          <div id="more-btn-container">
            <a href="#" @click.prevent="openModal(project)">Voir plus</a>
            <a :href="project.link" target="_blank">Aller au site</a>
          </div>
        </div>
      </article>
    </section>
    <Modal v-if="selectedProject" @close="closeModal">
      <template #header>
        <h2>{{ selectedProject.title }}</h2>
      </template>
      <template #body>
        <div class="modal-description">
          <p v-html="selectedProject.description"></p>
        </div>
      </template>
    </Modal>
  </div>
</template>

<style scoped>
#portfolio {
  padding: 0 1rem; /* Smaller padding for mobile */
  background-color: #111;
  color: #fff;
  font-family: 'Orbitron', sans-serif;
  letter-spacing: 0.1rem;
}

.portfolio-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%; /* Full width for mobile */
  margin: 0; /* No margin for mobile */
}

.portfolio-item {
  text-align: justify;
  width: 100%; /* Full width for mobile */
  margin: 1rem 0; /* Smaller margin for mobile */
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(201, 114, 14, 0.2); /* Smaller shadow for mobile */
  transition: transform 0.3s ease;
  padding: 1rem; /* Smaller padding for mobile */
}

.portfolio-item:hover {
  transform: scale(1.02);
}

.portfolio-image {
  width: 100%;
  overflow: hidden;
  padding-bottom: 1rem; /* Smaller padding for mobile */
}

.portfolio-image img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.portfolio-description {
  width: 100%;
}

.portfolio-description div {
  color: #fdc17b;
  font-size: 1rem; /* Smaller font size for mobile */
  line-height: 1.4; /* Smaller line height for mobile */
  display: -webkit-box;
  -webkit-line-clamp: 11; /* Limit to 11 lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.portfolio-description a {
  display: inline-block;
  margin-top: 0.5rem; /* Smaller margin for mobile */
  padding: 0.3rem 0.5rem; /* Smaller padding for mobile */
  background-color: #fdc17b;
  color: #333;
  font-weight: bold;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.portfolio-description a:hover {
  background-color: #c9720e;
}

#more-btn-container {
  display: flex;
  justify-content: space-between;
  width: 100%; /* Full width for mobile */
}

/* Media queries for larger screens */
@media (min-width: 768px) {
  #portfolio {
    margin: 1rem auto;
    padding-top: 4vh;
  }

  .portfolio-section {
    max-width: 1200px;
    width: 100%;
    margin: auto;
  }

  .portfolio-item {
    display: flex;
    flex-direction: column;
    place-content: space-between;
    width: 48%; /* Half width for tablets */
    margin: 1.5rem 0;
    padding: 1.5rem;
  }

  .portfolio-item:hover {
    box-shadow: 0 0 15px rgba(201, 114, 14, 0.2); /* Larger shadow for tablets */
  }

  .portfolio-image {
    padding-bottom: 1.5rem;
  }

  .portfolio-description div {
    font-size: 1.1rem; /* Larger font size for tablets */
    line-height: 1.5; /* Larger line height for tablets */
  }

  .portfolio-description a {
    margin-top: 0.7rem;
    padding: 0.4rem 0.6rem;
  }
}

@media (min-width: 1024px) {
  .portfolio-item {
    width: 49%; /* Slightly larger width for desktops */
    margin: 2rem 0;
    padding: 2rem;
  }

  .portfolio-item:hover {
    box-shadow: 0 0 20px rgba(201, 114, 14, 0.2); /* Larger shadow for desktops */
  }

  .portfolio-image {
    padding-bottom: 2rem;
  }

  .portfolio-description div {
    font-size: 1.2rem; /* Larger font size for desktops */
    line-height: 1.6; /* Larger line height for desktops */
  }

  .portfolio-description a {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
  }
}
</style>
