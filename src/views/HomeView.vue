<script setup>
// Aucun JavaScript
</script>

<template>
  <div class="home-container">
    <section class="hero-section">
      <div class="hero-content">
        <h1>Bienvenue sur PoettaTech</h1>
        <p>
          Actuellement en formation avancée de Développeur, je suis activement à la recherche d'une
          alternance de 12 mois· Dynamique et doté d'un excellent sens du contact, j'apprécie
          particulièrement collaborer avec divers interlocuteurs· Mon engagement pour le collectif
          et ma passion pour l'apprentissage sont des aspects essentiels de ma personnalité· Je suis
          animé par une volonté forte de contribuer au succès de votre entreprise et de développer
          mes compétences dans un environnement professionnel stimulant et dynamique·
        </p>
        <router-link to="/portfolio" class="cta-button">Découvrir mes projets</router-link>
      </div>
    </section>

    <section class="about-section">
      <div class="about-content">
        <h2>A propos de Pedro Costa</h2>
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
        <router-link to="/cv" class="cta-button">Voir mon CV</router-link>
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
          <div class="service-item with-badge">
            <h3>Développement Mobile</h3>
            <p>Applications mobiles pour iOS et Android.</p>
            <span class="badge">Bientôt disponible</span>
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
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

.home-container {
  margin: auto;
  padding: 1rem;
  font-family: 'Orbitron', sans-serif;
  letter-spacing: 0.25rem;
}

.hero-section {
  width: 100%;
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;

  margin-bottom: 5rem;
}

.hero-content,
.about-content {
  max-width: 900px;
  margin: auto;
  padding: 2rem;
}

.hero-content h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.hero-content p,
.about-content p {
  font-size: 1rem;
  margin-bottom: 2rem;
  text-align: justify;
}

.cta-button {
  display: inline-block;
  background-color: #fdc17b;
  color: #000;
  padding: 0.5rem 1rem;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1rem;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;
  box-shadow: 0 0 20px rgba(253, 193, 123, 0.8);
}

.cta-button:hover {
  background-color: #c9720e;
  transform: scale(1.05);
}

.about-section {
  line-height: 1.8;
  text-align: center;
  background-color: #111;
  color: #fff;
  font-size: 1.2rem;
}

.about-content h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.services-section {
  padding: 2rem 0;
  background-color: #222;
  text-align: center;
  color: #fff;
}

.services-content {
  max-width: 1200px;
  margin: auto;
}

.services-content h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.services-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.service-item {
  position: relative; /* Position relative pour contenir la pastille */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 320px;
  height: 250px;
  padding: 1rem;
  background-color: #333;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  text-align: center;
  margin: 1rem;
}

.service-item h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.service-item p {
  font-size: 1rem;
}

.badge {
  position: absolute;
  top: 0px;
  right: -20px;
  background-color: #fdc17b;
  color: #111;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  border-radius: 5px;
  transform: rotate(5deg); /* Rotation pour l'effet incliné */
  transform-origin: top right; /* Point d'origine de la rotation */
  box-shadow: 0 0 20px rgba(253, 193, 123, 0.5);
}

@media (min-width: 768px) {
  .hero-content h1 {
    font-size: 3.5rem;
  }

  .hero-content p {
    font-size: 1.4rem;
  }

  .hero-section {
    align-items: start;
  }

  .cta-button {
    padding: 1rem 2rem;
    font-size: 1.2rem;
  }

  .about-section {
    padding: 4rem 0;
  }

  .about-content h2 {
    font-size: 3rem;
  }

  .services-section {
    padding: 4rem 0;
  }

  .services-content h2 {
    font-size: 3rem;
  }

  .services-list {
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }

  .service-item {
    padding: 1.5rem;
    margin: 1rem;
  }

  .service-item h3 {
    font-size: 1.8rem;
  }

  .badge {
    font-size: 1rem;
    padding: 0.3rem 0.5rem;
  }
}

@media (min-width: 1024px) {
  .home-container {
    padding: 1rem 2rem;
  }
}
@media (min-width: 1124px) {
  .services-list {
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    margin: 0;
  }
  .service-item {
    margin: 0;
  }
}
</style>
