<script setup>
// Aucun JavaScript
</script>

<template>
  <div class="home-container">
    <section class="hero-section">
      <div class="hero-content">
        <h1>Bienvenue sur PoettaTech</h1>
        <p>
          Avec une passion pour la technologie et un désir d'innover, nous sommes ici pour créer des
          solutions numériques impactantes.
        </p>
        <router-link to="/portfolio" class="cta-button">Découvrir nos projets</router-link>
      </div>
    </section>

    <section class="about-section">
      <div class="about-content">
        <h2>A propos de Poetta</h2>
        <p>
          Je suis récemment passé au domaine du développement numérique pour relever les défis et
          saisir les opportunités du monde moderne. Fort d'un certificat en développement web et
          mobile front-end et d'une première expérience professionnelle de 8 mois, je suis déterminé
          à approfondir mes compétences en devenant développeur Logiciel / Full Stack. Actuellement
          engagé dans un programme intensif au Campus Numérique in the Alps à Annecy, je me
          spécialise en développement web front-end et back-end, ainsi qu'en algorithmes et
          programmation. Passionné par l'innovation technologique, je suis prêt à relever de
          nouveaux défis et à contribuer au succès de projets numériques ambitieux.
        </p>
      </div>
    </section>

    <section class="services-section">
      <div class="services-content">
        <h2>Nos Services</h2>
        <div class="services-list">
          <div class="service-item">
            <h3>Développement Web</h3>
            <p>Développement de sites web modernes et réactifs.</p>
          </div>
          <div class="service-item">
            <h3>Développement Mobile</h3>
            <p>Applications mobiles pour iOS et Android.</p>
          </div>
          <div class="service-item">
            <h3>Consultation Technologique</h3>
            <p>Conseils stratégiques pour vos projets numériques.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-container {
  max-width: 1200px;
  margin: auto;
  padding: 2rem;
  font-family: 'Orbitron', sans-serif;
  letter-spacing: 0.1rem;
}

.hero-section {
  background-color: #000;
  color: #fff;
  padding: 4rem 0;
  text-align: center;
  position: relative;
}

.hero-content {
  max-width: 800px;
  margin: auto;
}

.hero-content h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
}

.hero-content p {
  font-size: 1.4rem;
  margin-bottom: 2rem;
}

.cta-button {
  display: inline-block;
  background-color: #fdc17b;
  color: #000;
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1.2rem;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #00ffff;
}

.about-section {
  padding: 4rem 0;
  text-align: center;
  background-color: #111;
  color: #fff;
}

.about-content {
  max-width: 800px;
  margin: auto;
}

.about-content p {
  text-align: justify;
}

.about-content h2 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.services-section {
  padding: 4rem 0;
  background-color: #222;
  text-align: center;
  color: #fff;
}

.services-content {
  max-width: 1000px;
  margin: auto;
}

.services-content h2 {
  font-size: 3rem;
  margin-bottom: 2rem;
}

.services-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.service-item {
  max-width: 300px; /* Augmentez cette valeur si nécessaire */
  padding: 1.5rem; /* Ajustez le padding si nécessaire */
  background-color: #333;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  margin: 1rem;
}

.service-item h3 {
  font-size: 1.8rem; /* Ajustez la taille de la police */
  margin-bottom: 1rem;
}

.service-item p {
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .home-container {
    padding: 0.5rem; /* Réduit le padding pour les écrans de largeur maximale de 768px */
  }

  .home-container section {
    padding: 0.5rem;
  }

  .home-container h1 {
    font-size: 2rem;
  }

  .service-item {
    min-width: 250px;
    width: 300px; /* Ajustez la largeur pour les appareils mobiles */
    padding: 1rem; /* Ajustez le padding */
  }

  .service-item h3 {
    font-size: 1.3rem; /* Ajustez la taille de la police pour les appareils mobiles */
  }
}
</style>
