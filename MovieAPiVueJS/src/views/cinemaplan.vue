<template>
  <img src="http://mediakwest.com/wp-content/uploads/2016/11/formule_dynamic.png" alt="salle de cinéma" style="margin-left:750px;">
  <h1 style="text-align:center;">Réservation de places</h1>
  <div class="reservation"  >
    
    <form @submit.prevent="submitForm">
      <label for="nameMovie">Nom du film :</label>
      <input type="text" id="nameMovie" v-model="nameMovie" required>
      <label for="nameMovie">Date :</label>
      <input type="text" id="date" v-model="date" required>
      <label for="name">Nom :</label>
      <input type="text" id="name" v-model="name" required>
      
      <label for="color">Rangée :</label>
      <select id="color" v-model="color" required>
        <option value="" disabled selected>Sélectionnez une rangée</option>
        <option value="jaune">Jaune</option>
        <option value="bleu">Bleu</option>
        <option value="rouge">Rouge</option>
      </select>
      <label for="quantity">Nombre de places :</label>
      <input type="number" id="quantity" v-model="quantity" min="1" max="150" required>
      <p> Prix des places : </p>
      <p>Rangée Bleu = 7e</p>
      <p>Rangée Jaune = 9e</p>
      <p>Rangée Rouge = 11e</p>
      <button type="submit">Réserver</button>
    </form>
    <div class="summary" v-if="reservationSubmitted">
      <h2 style="text-align:center;">Récapitulatif de votre commande :</h2>
      <br>
      <p style="text-align:center;">Nom du film : {{ nameMovie }}</p> 
      <br>
      <p style="text-align:center;">Date : {{ date }}</p> 
      <br>
      <p style="text-align:center;">Nom : {{ name }}</p> 
      <br>
      <p style="text-align:center;">Rangée : {{ color }}</p>
      <br>
      <p style="text-align:center;">Nombre de places : {{ quantity }}</p>
      <br>
      <p style="text-align:center;">Prix Total : {{ getTotalPrice() }} €</p>
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      date:'',
      nameMovie :'',
      color: '',
      quantity: 1,
      price : 1,
      reservationSubmitted: false
    }
  },
  // méthodes qui permettent de valider le formulaire / Calculer le total des places en fonction des rangés 
  methods: {
    submitForm() {
      this.reservationSubmitted = true;
    },
    getPrice() {
      switch (this.color) {
        case 'bleu':
          return 7;
        case 'jaune':
          return 9;
        case 'rouge':
          return 11;
        default:
          return 0;
      }
    },
    getTotalPrice() {
      const price = this.getPrice();
      return price * this.quantity;
    },

  }
}
</script>

<style>
.reservation {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
}
/* h1 {
  font-size: 2em;
  margin-bottom: 30px;
} */
 form {
  display: flex;
  flex-direction: column;
  align-items: center;
}/*
label {
  margin-top: 20px;
  font-size: 1.2em;
} */
input, select {
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
  max-width: 100%;
}
/* button[type="submit"] {
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  background-color: #4CAF50;
  color: white;
  font-size: 1.2em;
  border-radius: 5px;
  cursor: pointer;
} */
.summary {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
  width: 40%; 
  margin-left: 10%; 
  float: right;
  
}
</style>