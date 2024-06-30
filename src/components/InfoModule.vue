<template>
  <div id="info-module">
    <!-- Modal -->
    <div id="myModal" class="modal" :class="{ show: modalOpen }" @click="closeModal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <p id="modal-text">{{ modalContent }}</p>
      </div>
    </div>

    <!-- Contenu principal -->
    <div id="bloc1">
      <section>
        <article
          v-for="(item, index) in infoItems"
          :key="index"
          :id="item.id"
          @click="openModal(item.content)"
        >
          <h4 :class="item.iconClass">{{ item.title }}</h4>
          <div class="read-more" @click="openModal(item.content)">Lire plus</div>
          <div class="info-content">
            <p class="text-content">{{ item.content }}</p>
          </div>
        </article>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const modalOpen = ref(false)
const modalContent = ref('')

const infoItems = ref([
  {
    id: 'time',
    title: 'Time',
    iconClass: 'icon-time',
    content:
      "Le temps est une ressource inestimable que j'utilise avec soin. Je m'engage à gérer efficacement mon temps pour garantir des livraisons de projets ponctuelles et de haute qualité. Mon approche rigoureuse et structurée me permet de respecter les délais tout en maintenant un haut niveau de performance."
  },
  {
    id: 'work',
    title: 'Work',
    iconClass: 'icon-briefcase',
    content:
      'Mon travail en tant que développeur full-stack junior est le reflet de ma passion et de mon engagement dans le domaine du développement web. J\'ai participé à divers projets, allant de la création de sites web dynamiques à des applications mobiles intuitives. Explorez ma section "Projets" pour voir des exemples concrets de mes réalisations, incluant des technologies telles que HTML, CSS, JavaScript, Vue.js, et Laravel.'
  },
  {
    id: 'smart',
    title: 'Smart',
    iconClass: 'icon-coffee',
    content:
      "J'aime transformer des défis techniques en solutions intelligentes. Mon esprit analytique et ma capacité à apprendre rapidement me permettent de concevoir et d'implémenter des solutions innovantes qui répondent aux besoins des utilisateurs tout en optimisant les processus existants. Mon objectif est d'utiliser la technologie de manière stratégique pour créer une valeur ajoutée significative."
  },
  {
    id: 'vision',
    title: 'Vision',
    iconClass: 'icon-leaf',
    content:
      "Je crois en une vision qui anticipe et s'adapte aux évolutions technologiques. Mon ambition est de développer des solutions numériques qui non seulement répondent aux besoins actuels, mais qui sont également prêtes à évoluer avec les futures tendances et exigences du marché. Je suis passionné par l'innovation et déterminé à contribuer à des projets ambitieux et visionnaires."
  }
])

const openModal = (content) => {
  modalContent.value = content
  modalOpen.value = true
  document.body.classList.add('modal-open') // Ajoute la classe au body
}

const closeModal = () => {
  modalOpen.value = false
  document.body.classList.remove('modal-open') // Retire la classe du body
}

// Fermer la modal lorsqu'on clique en dehors de celle-ci
window.onclick = function (event) {
  const modal = document.getElementById('myModal')
  if (event.target == modal) {
    closeModal()
  }
}
</script>

<style scoped>
#info-module {
  width: 100%;

  margin: auto;
}

/* Styles spécifiques au composant InfoModule */
#myModal {
  width: 100vw !important;
  height: 100vh !important;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
}

.modal {
  display: none; /* Cachée par défaut */
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.7);
}

.modal-content {
  background-color: #111;
  padding: 20px;
  border: 1px solid #00ffff;
  width: 80%;
  max-width: 600px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.4);
  color: #fff;
  position: relative;
  top: 50%;
  left: 50%; /* Centrer horizontalement */
  transform: translate(-50%, -50%); /* Centrer verticalement et horizontalement */
}

.close {
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  position: absolute;
  top: 10px;
  right: 15px;
  cursor: pointer;
}

.close:hover,
.close:focus {
  color: #00ffff;
}

/* Ajout de la classe .show */
.modal.show {
  display: block;
}

/* Articles */
#bloc1 {
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
}

#bloc1 section {
  width: 100%;
  margin: auto;
}

#bloc1 article {
  display: flex;
  place-content: space-between;
  align-items: center;
  cursor: pointer;
  width: 100%; /* Ajustement pour mobile */
  background-color: #111;
  color: #fdc17b;
  padding: 15px;
  margin: 10px 0;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 255, 255, 0.2);
  transition: transform 0.3s ease;
}

#bloc1 article:hover {
  transform: scale(1.03);
}

#bloc1 h4 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.info-content {
  display: none; /* Cache le contenu par défaut */
}

.read-more {
  background-color: #fdc17b;
  color: #111;
  border: none;
  padding: 8px 15px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-left: 10px;
  text-align: center;
}

.read-more:hover {
  background-color: #00ffff;
  color: #111;
}

@media (min-width: 440px) {
  #bloc1 section {
    display: flex;
    place-content: space-between;
    flex-wrap: wrap;
  }
  #bloc1 article {
    width: 49%;
  }
}

@media (min-width: 768px) {
  #bloc1 article {
    width: 49%;
    max-width: 400px;
    margin: 10px auto;
  }
}

@media (min-width: 1024px) {
  #bloc1 article {
    width: 24%; /* Retour à la largeur pour les grands écrans */
  }
}
</style>
