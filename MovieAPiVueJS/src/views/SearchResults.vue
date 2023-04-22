<template>
  <div>
    <h2>Search results for "{{ query }}"</h2>
    <ul>
      <li v-for="movie in movies" :key="movie.id">
        <router-link :to="{ name: 'MovieDetails', params: { id: movie.id }}">
          {{ movie.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const apiKey = 'c800a4a3cdad2bcff8ab7652fc3fa99b';
const searchMovies = (query) => fetch(`${apiUrl}?api_key=${apiKey}&query=${query}`).then(res => res.json());


const route = useRoute()

const query = ref(route.params.query)
const movies = ref([])

searchMovies(query.value).then(response => {
  movies.value = response.data.results
})
</script>