<!-- src/components/PageTransition.vue -->
<template>
  <div id="bodymovin"></div>
  <button id="close" name="close">╳</button>
</template>

<script>
import bodymovin from 'bodymovin';

export default {
  mounted() {
    const animContainer = document.getElementById('bodymovin');
    const animationData = { /* Ton animation JSON ici */ };

    const params = {
      container: animContainer,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: animationData,
      rendererSettings: { preserveAspectRatio: 'none' },
    };

    this.anim = bodymovin.loadAnimation(params);

    this.anim.addEventListener("complete", () => {
      // Gérer la logique pour le changement de page
    });

    const closeButton = document.getElementById('close');
    closeButton.addEventListener("click", () => {
      this.anim.setDirection(-1);
      this.anim.play();
    });
  },
  beforeDestroy() {
    this.anim.destroy();
  },
};
</script>

<style scoped>
/* Ton CSS ici */
* { box-sizing: border-box; }
html, body { height: 100%; }
body { background-color: #89E9C2; margin: 0; overflow: hidden; font-family: "Roboto", sans-serif; font-weight: 100; }
#bodymovin { width: 100%; height: 100%; display: block; }
#close { /* Styles pour le bouton de fermeture */ }
</style>
