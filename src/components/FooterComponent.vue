<script setup>
// Aucune logique JavaScript spécifique n'est nécessaire pour ce composant
</script>

<template>
  <footer>
    <div id="footerNav">
      <ul>
        <li><button id="accueilFoo">Accueil</button></li>
        <li><button id="poettaFoo">Poetta</button></li>
        <li><button id="portFolioFoo">PortFolio</button></li>
        <li><button id="cvFoo">CV</button></li>
        <li><button id="contactFoo">Contact</button></li>
      </ul>
    </div>

    <div id="responsive_footer">
      <div id="about_resp">
        <h4>PoettaTech WSDS</h4>
        <div id="footerAbout">
          <h5>A propos</h5>
          <p>
            Avec une carrière réussie dans le commerce et la gestion, j'ai récemment fait la
            transition vers le domaine du développement numérique pour relever les défis et saisir
            les opportunités du monde moderne. Ayant obtenu mon certificat en développement web et
            mobile front-end et ayant pu avoir une première expérience professionnelle de 8 mois, je
            suis désormais déterminé à approfondir mes compétences en devenant développeur Logiciel
            / Full Stack. Je m'engage dans un programme de formation intensif au Campus Numérique in
            the Alps à Annecy, où j'acquerrai une expertise à la fois en développement web front-end
            et back-end, ainsi qu'en algorithmes et programmation. Captivé par l'innovation
            technologique et animé par le désir de créer des solutions numériques impactantes, je
            suis prêt à relever de nouveaux défis et à contribuer au succès de projets numériques
            ambitieux.
          </p>
        </div>
      </div>

      <div id="footerColumn">
        <div>
          <h5>Langages</h5>
          <ul>
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li>PHP</li>
            <li>Java</li>
            <li>SQL</li>
          </ul>
        </div>
        <div>
          <h5>Frameworks</h5>
          <ul>
            <li>Vue.JS</li>
            <li>Laravel</li>
            <li>Symfony</li>
            <li>Atisu</li>
          </ul>
        </div>
        <div>
          <h5>Mes projets</h5>
          <ul>
            <li><a href="https://lacravatesolidaire.org/">La cravate solidaire</a></li>
            <li><a href="https://www.handiphil.fr/">HandiPhil</a></li>
            <li><a href="https://www.sumikaeurope.com/">Sumika Europe</a></li>
            <li><a href="https://www.poettatech.fr/">PoettaTech</a></li>
          </ul>
        </div>
        <div>
          <h5>Contacts</h5>
          <ul>
            <li>Situé à Annecy</li>
            <li><a href="tel:+33753812381">Je contacte par téléphone</a></li>
            <li><a href="mailto:pedro.costa@poettatech.fr">Je contacte par email</a></li>
          </ul>
        </div>
      </div>

      <div id="footerNetwork">
        <h5>Suivez moi sur</h5>
        <ul>
          <li class="tooltip">
            <a href="https://www.poettatech.fr" class="icon-profile" data-tooltip="Profil"></a>
            <span class="tooltiptext">Profil</span>
          </li>
          <li class="tooltip">
            <a href="https://x.com/poettawds" class="icon-x" data-tooltip="X"></a>
            <span class="tooltiptext">X / Twitter</span>
          </li>
          <li class="tooltip">
            <a href="https://github.com/Poetta12" class="icon-github" data-tooltip="GitHub"></a>
            <span class="tooltiptext">GitHub</span>
          </li>
          <li class="tooltip">
            <a
              href="https://www.linkedin.com/in/pedronfcosta/"
              class="icon-linkedin"
              data-tooltip="LinkedIn"
            ></a>
            <span class="tooltiptext">LinkedIn</span>
          </li>
        </ul>
      </div>
    </div>

    <div id="footerRights">
      <p class="icon-copyright">2012 PoettaTech. All Rights Reserved |</p>
      <p>Designed & created by <span>Poetta</span>@PoettaTech WSDS</p>
    </div>
  </footer>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

footer {
  background-color: #111;
  color: #fff;
  padding: 2rem;
  text-align: center;
  font-family: 'Orbitron', sans-serif;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.2);
}

#footerNav ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  border-top: 1px solid #00ffff;
  border-bottom: 1px solid #00ffff;
  padding: 1rem 0;
  margin-bottom: 2rem;
  list-style: disclosure-closed;
}

#footerNav button {
  color: #00ffff;
  font-size: 1em;
  font-weight: bold;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.3s ease;
}

#footerNav button:hover {
  color: #fdc17b;
}

#responsive_footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 2rem;
}

#about_resp {
  text-align: justify;
  width: 85%;
  margin: auto;
}

#about_resp h4 {
  font-size: 2em;
  margin-bottom: 1rem;
  color: #00ffff;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.8);
}

#footerAbout h5 {
  font-size: 1.2em;
  color: #00ffff;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.8);
}

#footerColumn {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 2rem;
}

#footerColumn > div {
  flex: 0 0 23%;
  max-width: 23%;
}

#footerColumn h5 {
  font-size: 1.5em;
  color: #00ffff;
  margin-bottom: 1rem;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.8);
}

#footerColumn ul {
  list-style: none;
  padding: 0;
}

#footerColumn ul li {
  margin-bottom: 0.5rem;
}

#footerColumn a {
  color: #00ffff;
  text-decoration: none;
  transition: color 0.3s ease;
}

#footerColumn a:hover {
  color: #fdc17b;
}

#footerNetwork {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
}

#footerNetwork h5 {
  font-size: 2rem;
  color: #00ffff;
  margin-bottom: 0.5rem;
  padding-right: 20px;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.8);
}

#footerNetwork ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: flex-start;
}

#footerNetwork li {
  margin-right: 20px;
  position: relative;
}

#footerNetwork a {
  font-size: 2.5em;
  color: #00ffff;
  text-decoration: none;
  transition: color 0.3s ease;
}

#footerNetwork a:hover {
  color: #fdc17b;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 150px;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  text-align: center;
  border-radius: 4px;
  padding: 5px 10px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}

#footerRights {
  border-top: 1px solid #00ffff;
  padding-top: 1rem;
  text-align: center;
  margin-top: 2rem;
}

#footerRights p {
  font-size: 0.9em;
  margin: 0;
  color: #00ffff;
}

#footerRights span {
  color: #fdc17b;
  font-weight: bold;
}

@media (max-width: 768px) {
  footer[data-v-7490b180] {
    padding: 1rem;
  }
  #footerNav ul {
    flex-direction: column;
    align-items: center;
  }

  #footerColumn {
    flex-wrap: wrap;
    justify-content: space-around;
  }

  #footerColumn > div {
    flex: 0 0 45%;
    max-width: 45%;
    margin-bottom: 1rem;
  }

  #footerNetwork {
    flex-direction: column;
    align-items: center;
  }

  #footerNetwork h5 {
    font-size: 1.5rem;
  }

  #footerNetwork ul {
    justify-content: center;
  }

  #footerNetwork a {
    font-size: 2rem;
  }
}
</style>
