<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'

const searchQuery = ref('')
const selectedTheme = ref('')
const selectedLetter = ref('')
const terms = ref([])
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

const newTerm = ref({
  title: '',
  definition: '',
  theme: ''
})

const fetchTerms = async () => {
  try {
    const response = await axios.get('/glossaire.json')
    terms.value = response.data
  } catch (error) {
    console.error('Erreur lors du chargement des termes du glossaire:', error)
  }
}

onMounted(() => {
  fetchTerms()
})

const filteredTerms = computed(() => {
  return terms.value
    .filter((term) => term.title.toLowerCase().includes(searchQuery.value.toLowerCase()))
    .filter((term) => !selectedTheme.value || term.theme === selectedTheme.value)
    .filter(
      (term) => !selectedLetter.value || term.title.toUpperCase().startsWith(selectedLetter.value)
    )
})

const uniqueThemes = computed(() => {
  const themes = terms.value.map((term) => term.theme)
  return [...new Set(themes)].sort()
})

const addTerm = async () => {
  try {
    // Ajoutez le nouveau terme localement
    terms.value.push({ ...newTerm.value })

    // Réinitialisez le formulaire
    newTerm.value = { title: '', definition: '', theme: '' }

    // Envoyez la requête pour mettre à jour le fichier JSON ou base de données
    // Note : Vous devez configurer un backend pour cette partie, ici c'est juste un exemple
    await axios.post('/add-term', newTerm.value)
  } catch (error) {
    console.error("Erreur lors de l'ajout du terme:", error)
  }
}
</script>

<template>
  <div class="glossaire-container">
    <header>
      <h1>Glossaire de Développement Web</h1>
      <p>Explorez les termes clés du développement web avec des descriptions détaillées.</p>
      <input v-model="searchQuery" placeholder="Rechercher un terme..." class="search-bar" />
      <select v-model="selectedTheme" class="theme-selector">
        <option value="">Tous les thèmes</option>
        <option v-for="theme in uniqueThemes" :key="theme" :value="theme">{{ theme }}</option>
      </select>
      <div class="alphabet-filter">
        <button
          v-for="letter in alphabet"
          :key="letter"
          @click="selectedLetter = letter"
          :class="{ active: selectedLetter === letter }"
        >
          {{ letter }}
        </button>
      </div>
    </header>

    <!-- Formulaire d'ajout de termes -->
    <!-- <section class="add-term-form">
      <h2>Ajouter un terme</h2>
      <form @submit.prevent="addTerm">
        <input v-model="newTerm.title" placeholder="Titre" required />
        <textarea v-model="newTerm.definition" placeholder="Définition" required></textarea>
        <input v-model="newTerm.theme" placeholder="Thème" />
        <button type="submit">Ajouter</button>
      </form>
    </section> -->

    <section class="terms">
      <transition-group name="fade" tag="div">
        <div v-for="(term, index) in filteredTerms" :key="index" class="term-card">
          <h2>{{ term.title }}</h2>
          <p>{{ term.definition }}</p>
          <p class="theme">Thème : {{ term.theme }}</p>
        </div>
      </transition-group>
    </section>
  </div>
</template>

<style scoped>
/* Styles principaux pour le conteneur du glossaire */
.glossaire-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'orbitron', sans-serif;
  letter-spacing: 0.3rem;
  background: #222;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  color: #fdc17b;
}

::placeholder,
::-webkit-input-placeholder,
select,
option {
  font-family: 'orbitron', sans-serif;
  letter-spacing: 0.3rem;
}

/* Styles pour l'en-tête */
header {
  text-align: center;
  margin-bottom: 30px;
}

h1 {
  font-size: 2.5em;
  margin-bottom: 0.5em;
  color: #c9720e;
}

p {
  font-size: 1.2em;
  color: #fdc17b;
}

/* Styles pour les champs de recherche et de filtre */
.search-bar,
.theme-selector {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  font-size: 1em;
  border-radius: 5px;
  border: 1px solid #c9720e;
  background: #333;
  color: #fdc17b;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
}

/* Styles pour les boutons de filtre alphabétique */
.alphabet-filter {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-top: 20px;
}

.alphabet-filter button {
  padding: 8px 12px;
  border: none;
  background: #333;
  color: #fdc17b;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
}

.alphabet-filter button.active {
  background: #c9720e;
  color: #222;
}

/* Styles pour le formulaire d'ajout de termes */
.add-term-form {
  margin-top: 30px;
  background: #444;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.add-term-form h2 {
  font-size: 1.5em;
  margin-bottom: 20px;
  color: #c9720e;
}

.add-term-form form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.add-term-form input,
.add-term-form textarea {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #c9720e;
  background: #333;
  color: #fdc17b;
  font-size: 1em;
}

.add-term-form textarea {
  resize: vertical;
  min-height: 100px;
}

.add-term-form button {
  padding: 10px;
  border: none;
  background: #c9720e;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s;
}

.add-term-form button:hover {
  background: #a5600d;
}

/* Styles pour les cartes de termes */
.terms {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.terms div {
  width: 100%;
}

.term-card {
  background: #333;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  flex: 1 1 calc(50% - 40px);
  margin-bottom: 20px;
  transition:
    transform 0.3s,
    box-shadow 0.3s;
}

.term-card:hover {
  transform: translateY(-10px);
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
}

.term-card h2 {
  font-size: 1.5em;
  margin-bottom: 0.5em;
  color: #c9720e;
}

.term-card p {
  font-size: 1em;
  color: #fff;
}

.term-card .theme {
  font-style: italic;
  color: #fdc17b;
}

/* Transition pour l'apparition des termes */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
