<template>
  <div class="reservation">
    <h1>Réservation de places</h1>
    <form @submit.prevent="submitForm">
      <label for="name">Nom :</label>
      <input type="text" id="name" v-model="name" required>
      <label for="color">Rangée :</label>
      <select id="color" v-model="color" required>
        <option value="" disabled selected>Sélectionnez une rangée</option>
        <option value="orange">Orange</option>
        <option value="bleu">Bleu</option>
        <option value="vert">Vert</option>
      </select>
      <label for="quantity">Nombre de places :</label>
      <input type="number" id="quantity" v-model="quantity" min="1" max="150" required>
      <p> Prix des places : </p>
      <p>Rangée Orange = 7e</p>
      <p>Rangée Bleu = 10e</p>
      <p>Rangée Vert = 13e</p>
      <button type="submit">Réserver</button>
    </form>
    <div class="summary" v-if="reservationSubmitted">
      <h2>Récapitulatif de votre commande :</h2>
      <p>Nom : {{ name }}</p>
      <p>Rangée : {{ color }}</p>
      <p>Nombre de places : {{ quantity }}</p>
      <p>Prix unitaire : {{ getPrice() }} €</p>
      <!-- <p>Places disponibles : {{ getAvailablePlaces() }} / 150</p> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      color: '',
      quantity: 1,
      reservationSubmitted: false
    }
  },
  methods: {
    submitForm() {
      this.reservationSubmitted = true;
    },
    getPrice() {
      switch (this.color) {
        case 'orange':
          return 7;
        case 'bleu':
          return 10;
        case 'vert':
          return 13;
        default:
          return 0;
      }
    },
//     getAvailablePlaces() {
//   const quantity = this.quantity;
//   return 150 - quantity;
// }
  }
}
</script>

<style>
/* .reservation {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}
h1 {
  font-size: 2em;
  margin-bottom: 30px;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
label {
  margin-top: 20px;
  font-size: 1.2em;
}
input, select {
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
  max-width: 100%;
}
button[type="submit"] {
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  background-color: #4CAF50;
  color: white;
  font-size: 1.2em;
  border-radius: 5px;
  cursor: pointer;
}
.summary {
  margin-top: 50px;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
  width: 500px;
  max-width: 100%;
  text-align: center;
} */
</style>