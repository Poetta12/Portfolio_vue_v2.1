<template>
  <div class="modal" @click.self="closeModal">
    <div class="modal-content">
      <header class="modal-header">
        <slot name="header"></slot>
        <button class="modal-close" @click="closeModal">&times;</button>
      </header>
      <section class="modal-body">
        <div class="modal-description">
          <slot name="body"></slot>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['close'])

const closeModal = () => {
  emit('close')
  document.body.classList.remove('modal-open')
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
  overflow-y: auto;
  z-index: 9999;
  font-family: 'Orbitron', sans-serif;
  letter-spacing: 0.1rem;
}
.modal-content {
  background: #222;
  padding: 1rem;
  border-radius: 10px;
  max-width: 90%;
  max-height: 90vh;
  position: relative;
  box-shadow: 0 0 20px rgba(253, 193, 123, 0.2);
  border: 1px solid rgba(253, 193, 123, 0.5);
  overflow-y: auto;
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
  position: absolute;
  top: 5px;
  right: 10px;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: red;
  z-index: 1;
}

.modal-description {
  color: #fff; /* Couleur du texte pour la modal */
  font-size: 1rem; /* Taille de police pour la modal */
  line-height: 1.5; /* Hauteur de ligne pour la modal */
}

/* Media query pour les écrans plus larges */
@media (min-width: 601px) {
  .modal-content {
    width: 600px;
    padding: 1rem;
  }

  .modal-close {
    font-size: 3rem;
  }
}
</style>
