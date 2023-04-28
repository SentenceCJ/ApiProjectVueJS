<template>
  <div style="margin-left:200px">
    <h2>Search results for "{{ query }}"</h2>
    <ul v-if="movies.length > 0">
      <li v-for="movie in movies" :key="movie.id">
        <!-- <router-link :to="{ name: 'MovieDetails', params: { id: movie.id }}">-->
        {{ movie.title }}
        <!-- </router-link>  -->
      </li>
    </ul>
    <p v-else>No movies found</p>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'


const route = useRoute()
const props = defineProps(['query'])
let movies = ref([{ id: null, title: null, overview: null }])

const apiKey = 'c800a4a3cdad2bcff8ab7652fc3fa99b';
const apiUrl = 'https://api.themoviedb.org/3/search/movie';
const searchMovies = (query) => fetch(`${apiUrl}?api_key=${apiKey}&query=${query}`).then(res => res.json())


watch(() => props.query, (newValue, oldValue) => { 
  searchMovies(newValue).then(response => { 
    console.log(response)
    movies.value = response.results
   }).catch(error => { 
    console.error(error)
   })
  },{immediate: true })


</script>


