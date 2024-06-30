<template>
  <div class="modal" @click.self="closeModal">
    <div class="modal-content">
      <header class="modal-header">
        <slot name="header"></slot>
        <button class="modal-close" @click="closeModal">&times;</button>
      </header>
      <section class="modal-body">
        <slot name="body"></slot>
      </section>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['close'])

const closeModal = () => {
  emit('close')
  document.body.classList.remove('modal-open') // Supprime la classe qui empêche le défilement du corps
}

// Ajouter la classe pour empêcher le défilement du corps
document.body.classList.add('modal-open')
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto; /* Permet le défilement à l'intérieur de la modal */
  z-index: 9999; /* Assure que la modal est au-dessus de tout */
}

.modal-content {
  background: #222;
  padding: 1rem;
  border-radius: 10px;
  max-width: 90%; /* Pleine largeur pour les appareils mobiles */
  max-height: 90vh; /* Limite la hauteur pour éviter le débordement */
  position: relative;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.2);
  border: 1px solid rgba(0, 255, 255, 0.5);
  overflow-y: auto; /* Permet le défilement du contenu à l'intérieur de la modal */
}

.modal-header,
.modal-body,
.modal-footer {
  margin-bottom: 1rem;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-header h2 {
  margin: 0;
}

.modal-close {
  position: fixed;
  bottom: 30px; /* Ajusté pour les appareils mobiles */
  right: 20px; /* Ajusté pour les appareils mobiles */
  background: none;
  border: none;
  font-size: 2rem; /* Bouton de fermeture plus petit pour les appareils mobiles */
  cursor: pointer;
  color: red;
  border: 1px solid red;
  border-radius: 70px;
  padding: 0 9px 2px;
  z-index: 1; /* Assure que le bouton est au-dessus du contenu de la modal */
}

/* Media query pour les écrans plus larges */
@media (min-width: 601px) {
  .modal-content {
    width: 600px; /* Largeur fixe pour les écrans plus larges */
    padding: 1rem; /* Restaure le padding */
  }

  .modal-close {
    font-size: 5rem; /* Bouton de fermeture plus grand pour les écrans plus larges */
    bottom: 50px; /* Position restaurée */
    right: 50px; /* Position restaurée */
  }
}
</style>
