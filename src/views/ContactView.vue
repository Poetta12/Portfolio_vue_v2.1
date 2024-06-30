<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const name = ref('')
const email = ref('')
const telephone = ref('')
const subject = ref('')
const message = ref('')
let recaptchaResponse = ref('')

const handleSubmit = async () => {
  if (!recaptchaResponse.value) {
    alert('Veuillez compléter le reCAPTCHA.')
    return
  }

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

<template>
  <div id="contact-container">
    <h2>Contact</h2>
    <p>Contactez-moi via le formulaire ci-dessous :</p>
    <form @submit.prevent="handleSubmit" id="contact_form">
      <div class="form-group">
        <label for="name">Nom</label>
        <input
          v-model="name"
          type="text"
          placeholder="Je m'appelle ..."
          name="name"
          id="name_input"
          required
        />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input
          v-model="email"
          type="email"
          placeholder="Mon adresse e-mail est ..."
          name="email"
          id="email_input"
          required
        />
      </div>
      <div class="form-group">
        <label for="telephone">Téléphone</label>
        <input
          v-model="telephone"
          type="text"
          placeholder="Mon numéro est ..."
          name="telephone"
          id="telephone_input"
          required
        />
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
          <div class="g-recaptcha" data-sitekey="6LfcPQMqAAAAAB5-L1sVv4dmQEZoh7fLM6HTh4co"></div>
        </div>
        <div class="submit">
          <input type="submit" value="Envoyer le message" id="form_button" />
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

#contact-container {
  background-color: #111;
  color: #fff;
  padding: 3rem;
  border: 1px solid #333;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.2);
  border-radius: 15px;
  font-family: 'Orbitron', sans-serif;
  transition: transform 0.3s ease;
  max-width: 768px;
  margin: 2rem auto;
}

#contact-container:hover {
  transform: scale(1.02);
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #00ffff;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.8);
}

p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  color: #00ffff;
}

input,
select,
textarea {
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  color: #fff;
  /* background-color: #fff; */
  border: none;
  border-radius: 5px;
  margin-bottom: 1rem;
  background: linear-gradient(#111, #0ff);
}

textarea {
  height: 150px;
  resize: none;
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
  transform: scale(1.1);
}

#form_button:focus {
  outline: none;
  box-shadow: 0 0 10px rgba(253, 193, 123, 0.8);
}

#bloc-submit {
  display: flex;
}
#bloc-submit div {
  width: 100%;
}

#bloc-submit #form_button {
  width: 100%;
  height: 78px;
  color: #fff;
  font-size: 1.5rem;
}
</style>
