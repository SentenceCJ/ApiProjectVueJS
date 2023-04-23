<script setup lang="ts">
import ImageCinema from '../components/icons/cinéma.png'


</script>
<template>
  
  <div class="about" >
    <!-- Image centrée en haut de la page -->
    <div class="image-container" style="margin-left: 380px;">
      <img src="https://i.familiscope.fr/1400x787/smart/2023/02/16/actu-cinema.jpg" alt="cinéma" style="width:76%">
      <!-- <img src="@/icons/cinéma.png" alt="cinéma" style="width:80%"> -->
    </div>
    
    <!-- Trois cases avec une image et un bouton chacune -->
    <H1> Cinema near You</H1>
    <div class="box-container">
      <div class="box">
        <p>UGC Ciné Cité Bordeaux</p>
        <p>13-15 Rue Georges Bonnac, 33000 Bordeaux</p>
        <br>
        <!-- <img src="url_de_votre_image" alt="description_de_l'image"> -->
        <button @click="$router.push('./CinemaPlan')">Réserver un Billet</button>
      </div>
      <div class="box">
        <p>CINÉMA CGR Bordeaux Le Français</p>
        <p>9 Rue Montes, 33000 Bordeaux</p>
        <br>
        <!-- <img src="url_de_votre_image" alt="description_de_l'image"> -->
        <button @click="$router.push('./CinemaPlan')">Réserver un Billet</button>
      </div>
      <div class="box">
        <!-- <img src="url_de_votre_image" alt="description_de_l'image"> -->
        <p>Cinéma Mégarama Bordeaux</p>
        <p>7 Quai des Queyries, 33100 Bordeaux</p>
        <br>
        <button @click="$router.push('./CinemaPlan')">Réserver un Billet</button>
      </div>
    </div>
  </div>
  
</template>

<style>




@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .image-container {
    margin-top: 30px;
  }
  .box-container {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    width: 100%;
    max-width: 800px;
  }
  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 250px;
  }
  .box img {
    max-width: 200px;
    margin-bottom: 20px;
  }
  /* .box button {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin-top: 20px;
    cursor: pointer;
    border-radius: 5px;
  } */
}
</style>