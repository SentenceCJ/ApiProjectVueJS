<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router'
import Footer from './components/Footer.vue'

const router = useRouter()
let searchText = ''
function searchMovie() {
  if (searchText) {
    router.push(`/search/${searchText}`)
  }
}
</script>




<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <a href="#">
        <img src="./components/icons/CJmovies.png" alt="Logo" style="width: 100%; height: 80px;"/>
      </a>
    </div>
    <ul class="navbar-nav">
      <li class="nav-item">
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/about">Cinema</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/movie">Movie</RouterLink>
      </li>
      <li class="nav-item">
        <form @submit.prevent="searchMovie">
    <input type="text" placeholder="Search movie" v-model="searchText">
    <button type="submit">Search</button>
  </form>
      </li>
    </ul>
  </nav>
  
  <RouterView />
  
  <footer class="footer"></footer>
</template>

<style scoped>


.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: whitesmoke;
  color: #fff;
  text-align: center;
  padding: 20px;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 20px;
  background-color: #f8f8f8;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-brand {
  font-size: 24px;
  font-weight: bold;
}

.navbar-brand img {
  height: 50px;
}

.navbar-nav {
  display: flex;
  list-style: none;
}

.nav-item {
  margin-right: 20px;
}

.nav-item:last-child {
  margin-right: 0;
}

.nav-item a {
  text-decoration: none;
  color: #333;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
}

.content {
  margin-top: 80px; 
}
</style>


<!-- <template>
 
  <nav class="navbar">
    <div class="navbar-brand">
      <a href="#">
        <img src="./components/icons/CJmovies.png" alt="Logo" style="width: 100%; height: 80px;"/>
      </a>
    </div>
    <ul class="navbar-nav">
      <li class="nav-item">
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/about">About</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/movie">Movie</RouterLink>
      </li>
    </ul>
   
  </nav>

 
  <RouterView />

  <footer class="footer">
  </footer>
</template> -->