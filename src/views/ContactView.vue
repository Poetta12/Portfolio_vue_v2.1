<template>
  <div id="contact-container">
    <div id="contact-header">
      <div>
        <h2>Contact</h2>
        <p>Contactez-moi via le formulaire ci-dessous :</p>
      </div>
      <img src="/src/assets/logos/logo.png" alt="Logo" class="logo hidden" />
    </div>
    <form @submit.prevent="handleSubmit" id="contact_form" novalidate>
      <div class="form-group" :class="{ invalid: !isNameValid }">
        <label for="name">Nom</label>
        <input
          v-model="name"
          type="text"
          placeholder="Je m'appelle ..."
          name="name"
          id="name_input"
          pattern="[A-Za-zÀ-ÖØ-öø-ÿ-' ]+"
          title="Nom invalide. Utilisez uniquement des lettres, des tirets ou des espaces."
          required
        />
        <span class="tooltip" v-if="!isNameValid"
          >Nom invalide. Utilisez uniquement des lettres, des tirets ou des espaces.</span
        >
      </div>
      <div class="form-group" :class="{ invalid: !isEmailValid }">
        <label for="email">Email</label>
        <input
          v-model="email"
          type="email"
          placeholder="Mon adresse e-mail est ..."
          name="email"
          id="email_input"
          required
        />
        <span class="tooltip" v-if="!isEmailValid"
          >Email invalide. Veuillez entrer une adresse email valide.</span
        >
      </div>
      <div class="form-group" :class="{ invalid: !isTelephoneValid }">
        <label for="telephone">Téléphone</label>
        <input
          v-model="telephone"
          type="text"
          placeholder="Mon numéro est ..."
          name="telephone"
          id="telephone_input"
          pattern="[0-9]{10}"
          title="Numéro de téléphone invalide. Veuillez entrer 10 chiffres."
          required
        />
        <span class="tooltip" v-if="!isTelephoneValid"
          >Numéro de téléphone invalide. Veuillez entrer 10 chiffres.</span
        >
      </div>
      <div class="form-group">
        <label for="subject">Sujet</label>
        <select v-model="subject" name="subject" id="subject_input" required>
          <option disabled hidden value="">J'écris à propos de :</option>
          <option>J'aimerais démarrer un projet.</option>
          <option>J'aimerais poser une question.</option>
          <option>J'aimerais faire une proposition.</option>
        </select>
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea
          v-model="message"
          name="message"
          placeholder="J'aimerais parler de ..."
          id="message_input"
          cols="30"
          rows="5"
          required
        ></textarea>
      </div>
      <div id="bloc-submit">
        <div class="recaptcha">
          <div
            class="g-recaptcha"
            :data-sitekey="'6LfcPQMqAAAAAB5-L1sVv4dmQEZoh7fLM6HTh4co'"
            data-callback="onReCAPTCHASuccess"
          ></div>
        </div>
        <div class="submit">
          <input type="submit" value="Envoyer le message" id="form_button" />
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const name = ref('')
const email = ref('')
const telephone = ref('')
const subject = ref('')
const message = ref('')
let recaptchaResponse = ref('')
const isNameValid = ref(true)
const isEmailValid = ref(true)
const isTelephoneValid = ref(true)

const handleSubmit = async () => {
  // Validation regex
  const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ-' ]+$/
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  const phoneRegex = /^[0-9]{10}$/

  // Validation des champs
  if (!nameRegex.test(name.value)) {
    isNameValid.value = false
    return
  } else {
    isNameValid.value = true
  }

  if (!emailRegex.test(email.value)) {
    isEmailValid.value = false
    return
  } else {
    isEmailValid.value = true
  }

  if (!phoneRegex.test(telephone.value)) {
    isTelephoneValid.value = false
    return
  } else {
    isTelephoneValid.value = true
  }

  // Autres validations selon vos besoins
  // ...

  // Envoyer le formulaire si tout est valide
  const formData = {
    name: name.value,
    email: email.value,
    telephone: telephone.value,
    subject: subject.value,
    message: message.value,
    'g-recaptcha-response': recaptchaResponse.value
  }

  try {
    const response = await axios.post('https://formspree.io/f/mjkbbqko', formData)
    if (response.status === 200) {
      alert('Votre message a été envoyé avec succès!')
      clearForm()
    } else {
      alert('Une erreur est survenue. Veuillez réessayer plus tard.')
    }
  } catch (error) {
    alert('Une erreur est survenue. Veuillez réessayer plus tard.')
    console.error(error)
  }
}

const clearForm = () => {
  name.value = ''
  email.value = ''
  telephone.value = ''
  subject.value = ''
  message.value = ''
  recaptchaResponse.value = ''
  isNameValid.value = true
  isEmailValid.value = true
  isTelephoneValid.value = true
  if (window.grecaptcha) {
    window.grecaptcha.reset()
  }
}

onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://www.google.com/recaptcha/api.js'
  script.async = true
  script.defer = true
  script.onload = () => {
    window.onReCAPTCHASuccess = (response) => {
      recaptchaResponse.value = response
    }
  }
  document.head.appendChild(script)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

#contact-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
}

#contact-header img {
  width: 100px;
}
#contact-container {
  background-color: #111;
  color: #fff;
  padding: 1rem;
  border: 1px solid #333;
  box-shadow: 0 0 20px #0ff3;
  border-radius: 15px;
  transition: transform 0.5s ease;
  width: 100%;
  font-family: 'Orbitron', sans-serif;
  letter-spacing: 0.1rem;
}

#contact-container:hover {
  transform: scale(1.02);
}

h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #00ffff;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.8);
}

p {
  font-size: 1rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  color: #00ffff;
}

input,
select,
textarea {
  width: 100%;
  padding: 0.8rem;
  font-size: 1rem;
  color: #fff;
  text-shadow: 1px 1px 2px #000;
  border: none;
  border-radius: 5px;
  margin-bottom: 1rem;
  background: linear-gradient(#0ff, #111);
}

option {
  color: #222;
  text-shadow: none;
}

select {
  color: rgba(255, 255, 255, 0.5);
  font-family: 'Orbitron', sans-serif;
  letter-spacing: 0.1rem;
  text-shadow: 1px 1px 1px #333;
}

textarea {
  height: 100px;
  resize: none;
}

input::placeholder,
textarea::placeholder {
  color: #fff;
  text-shadow: 1px 1px 2px #000;
  opacity: 0.5; /* Firefox */
  font-family: 'Orbitron', sans-serif;
  letter-spacing: 0.1rem;
}

#form_button {
  background-color: #00ffff;
  color: #333;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;
}

#form_button:hover {
  background-color: #fdc17b;
  transform: scale(1.05);
}

#form_button:focus {
  outline: none;
  box-shadow: 0 0 10px rgba(253, 193, 123, 0.8);
}

#bloc-submit {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#bloc-submit #form_button {
  width: 100%;
  height: 50px;
  color: #fff;
  font-size: 1.2rem;
}

#rc-imageselect,
.g-recaptcha {
  text-align: center;
  transform: scale(0.85);
  -webkit-transform: scale(0.85);
  transform-origin: 0 0;
  -webkit-transform-origin: 0 0;
}
.recaptcha {
  margin: auto;
}
@media (min-width: 371px) {
  #rc-imageselect,
  .g-recaptcha {
    text-align: center;
    transform: scale(1);
    -webkit-transform: scale(1);
    transform-origin: 0 0;
    -webkit-transform-origin: 0 0;
  }
  .submit {
    width: 300px;
    margin: auto;
  }
}

/* Media Queries for larger screens */
@media (min-width: 600px) {
  #contact-header {
    flex-direction: row;
    place-content: space-between;
  }

  #contact-header img {
    width: 150px;
  }

  h2 {
    font-size: 2.5rem;
  }

  p {
    font-size: 1.2rem;
  }

  label {
    font-size: 1.2rem;
  }

  textarea {
    height: 150px;
  }

  #form_button {
    font-size: 1.5rem;
    height: 78px;
  }
}
@media (min-width: 768px) {
  #contact-header img.hidden {
    display: block;
  }
  #bloc-submit #form_button {
    font-size: 1.5rem;
    height: 74px;
    margin-bottom: 0;
  }
  #bloc-submit {
    flex-direction: row;
    align-items: center;
  }
}
</style>
