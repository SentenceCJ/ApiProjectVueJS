<template>
  <div class="films-container" >
    <h1 style="margin-top: 60px;">Last Movies</h1>
    <br>
    <div class="film-grid">
      <div v-for="film in films" :key="film.id" class="film-item">
        <img :src="'https://image.tmdb.org/t/p/w342' + film.poster_path" :alt="film.title">
        <p style="font-size: large;">{{ film.title }}</p>
        <span class="film-date">{{ formatDate(film.release_date) }}</span>
      </div>
    </div>
    <br>
    <br>
    <br>
   
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      films: [],
      api_key: 'c800a4a3cdad2bcff8ab7652fc3fa99b'
    }
  },
  mounted() {
    this.fetchFilms();
  },
  methods: {
    fetchFilms() {
      fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${this.api_key}&language=fr-FR&page=1&region=FR&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&vote_average.gte=0&vote_count.gte=0&with_watch_monetization_types=flatrate&with_release_type=2|3&with_original_language=fr&with_watch_providers=8|35|118`)
        .then(response => response.json())
        .then(data => {
          this.films = data.results.slice(0, 4);
        })
        .catch(error => {
          console.log(error);
        });
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return date.toLocaleDateString('fr-FR', options);
    }
  }
}
</script>

<style>

.video-container {
  margin-top: 30px;
}
.films-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-left: 150px;
}

.film-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
}

.film-item img {
  max-width: 100%;
  height: auto;
  
}

.film-item {
  text-align: center;
}
</style>
