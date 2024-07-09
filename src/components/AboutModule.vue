<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const downloadCV = () => {
  const pdfUrl = '/CV-Pedro_Costa.pdf'
  // const pdfUrl = '/public/CV-Pedro_Costa.pdf'
  const link = document.createElement('a')
  link.href = pdfUrl
  link.setAttribute('download', 'CV-Pedro_Costa.pdf')
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

const viewCV = () => {
  // Utilisation de router.push pour naviguer vers la route nommée 'CV'
  router.push({ name: 'CV' })
}
</script>

<template>
  <div id="about">
    <section class="about-content">
      <article class="about-profile">
        <div class="profile-photo">
          <img src="@/assets/img/Pedro-COSTA.png" alt="Pedro Costa" />
        </div>
        <div class="profile-details">
          <h2>PEDRO COSTA</h2>
          <h6>DEVELOPPEUR FULL STACK JR</h6>
        </div>
      </article>
      <article class="about-contact">
        <section class="contact-info">
          <h2>Coordonnées</h2>
          <ul>
            <li>
              <span class="icon-email"></span>
              <a href="mailto:pedro.costa@poettatech.fr">pedro.costa@poettatech.fr</a>
            </li>
            <li>
              <span class="icon-phone"></span>
              <a href="tel:+33753812381">07 53 81 23 81</a>
            </li>
            <li>
              <span class="icon-location1"></span>
              <p>Annecy, 74</p>
            </li>
            <li>
              <span class="icon-v-card"></span>
              <p>Permis B</p>
            </li>
          </ul>
        </section>

        <section class="cv-download">
          <h2>CV</h2>
          <div>
            <button class="cv-view icon-eye" @click="viewCV"></button>
            <button class="icon-download2" @click="downloadCV"></button>
          </div>
        </section>
      </article>
    </section>
    <div id="about-descrip">
      <h2>A propos</h2>
      <p>
        Avec une carrière réussie dans le commerce et la gestion, j'ai récemment fait la transition
        vers le domaine du développement numérique pour relever les défis et saisir les opportunités
        du monde moderne. Ayant obtenu mon certificat en développement web et mobile front-end et
        ayant pu avoir une première expérience professionnelle de 8 mois, je suis désormais
        déterminé à approfondir mes compétences en devenant développeur Logiciel / Full Stack. Je
        m'engage dans un programme de formation intensif au Campus Numérique in the Alps à Annecy,
        où j'acquerrai une expertise à la fois en développement web front-end et back-end, ainsi
        qu'en algorithmes et programmation. Captivé par l'innovation technologique et animé par le
        désir de créer des solutions numériques impactantes, je suis prêt à relever de nouveaux
        défis et à contribuer au succès de projets numériques ambitieux.
      </p>
    </div>
  </div>
</template>

<style scoped>
#about {
  width: 100%; /* Largeur maximale par défaut pour les appareils mobiles */
  margin: auto;
  padding: 3rem 1rem;
  background-color: #111;
  color: #fff;
  border: 1px solid #333;
  box-shadow: 0 0 20px rgba(253, 193, 123, 0.3);
  border-radius: 15px;
  font-family: 'Orbitron', sans-serif;
  letter-spacing: 0.1rem;
  transition: transform 0.3s ease;
}

#about:hover {
  transform: scale(1.02);
}

#about-descrip {
  margin-top: 2rem;
  text-align: justify;
}

#about-descrip:before {
  display: block;
  content: ' ';
  border-top: 1px dotted #fdc17b;
  width: 50%;
  margin: auto;
  height: 5px;
}

#about-descrip h2 {
  font-size: 1.2em;
  color: #fdc17b;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 10px rgba(253, 193, 123, 0.8);
}

.about-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
}

.about-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.profile-photo {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #fdc17b;
  box-shadow: 0 0 15px rgba(253, 193, 123, 0.5);
  transition: box-shadow 0.3s ease;
}

.profile-photo img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.profile-photo:hover {
  box-shadow: 0 0 30px rgba(253, 193, 123, 0.8);
}

.profile-details h2 {
  text-align: center;
  font-size: 3rem;
  color: #fdc17b;
  text-shadow: 0 0 10px rgba(253, 193, 123, 0.8);
}

.profile-details h6 {
  font-size: 1.2rem;
  color: #fdc17b;
  margin: 0;
  text-shadow: 0 0 10px rgba(253, 193, 123, 0.8);
  text-align: center; /* Alignement au centre pour les appareils mobiles */
}

.contact-info {
  width: 100%;
  text-align: center;
}

.contact-info h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #fdc17b;
  text-shadow: 0 0 10px rgba(253, 193, 123, 0.8);
}

.contact-info ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.contact-info li {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-bottom: 1rem;
}

.contact-info li span {
  font-size: 1.3rem;
  color: #fdc17b;
}

.contact-info li a,
.contact-info li p {
  font-size: 1rem;
  color: #fff;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
}

.cv-download {
  width: 80%; /* Largeur maximale par défaut pour les appareils mobiles */
  margin: auto;
}

.cv-download div {
  display: flex;
  place-content: center; /* Alignement centré pour les appareils mobiles */
  width: 100%; /* Largeur maximale par défaut pour les appareils mobiles */
}

.cv-download h2 {
  font-size: 1.8rem;
  color: #fdc17b;
  text-shadow: 0 0 10px rgba(253, 193, 123, 0.8);
  text-align: center; /* Alignement centré pour les appareils mobiles */
}

.cv-download button {
  width: 100%; /* Largeur maximale par défaut pour les appareils mobiles */
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #333;
  background-color: #fdc17b;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;
  text-align: center; /* Alignement centré pour les appareils mobiles */
}

.cv-download button:hover {
  background-color: #c9720e;
  transform: scale(1.1);
}

.cv-download button:focus {
  outline: none;
  box-shadow: 0 0 10px rgba(253, 193, 123, 0.8);
}

@media (min-width: 768px) {
  #about {
    width: 100%; /* Largeur pour les tablettes et écrans plus larges */
    padding: 3rem;
    margin: 1rem auto;
  }

  .about-content {
    flex-direction: row;
    justify-content: space-between;
  }

  .about-profile {
    width: 45%;
  }

  .about-contact {
    width: 45%;
  }
}
</style>
