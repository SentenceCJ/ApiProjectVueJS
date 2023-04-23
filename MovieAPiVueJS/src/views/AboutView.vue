import
<template>
  <div class="about" style="margin-left: 450px;">
    <!-- Image centrée en haut de la page -->
    <div class="image-container">
      <img src="require('@/icons/CJmovies.png" alt="cinéma">
    </div>
    
    <!-- Trois cases avec une image et un bouton chacune -->
    <div class="box-container">
      <div class="box">
        <img src="url_de_votre_image" alt="description_de_l'image">
        <button @click="$router.push('./CinemaPlan')">Redirection vers une autre page</button>
      </div>
      <div class="box">
        <img src="url_de_votre_image" alt="description_de_l'image">
        <button @click="$router.push('./CinemaPlan')">Redirection vers une autre page</button>
      </div>
      <div class="box">
        <img src="url_de_votre_image" alt="description_de_l'image">
        <button @click="$router.push('./CinemaPlan')">Redirection vers une autre page</button>
      </div>
    </div>
  </div>
</template>

<style>



body {
  background-image: linear-gradient(to right, #587797, #587797 10%, transparent 10%, transparent 90%,#587797 90%);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
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
  .box button {
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
  }
}
</style>