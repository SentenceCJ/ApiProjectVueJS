<!-- <template>
    <div class="movie-details">
      <div class="movie-image">
        <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" :alt="movie.title">
      </div>
      <div class="movie-info">
        <h2>{{ movie.title }}</h2>
        <p>{{ movie.overview }}</p>
        <h3>Acteurs</h3>
        <ul>
          <li v-for="(actor, index) in actors" :key="actor.id">
            <img :src="'https://image.tmdb.org/t/p/w92' + actor.profile_path" :alt="actor.name">
            <p>{{ actor.name }}</p>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'MovieDetails',
    data() {
      return {
        movie: null,
        actors: []
      }
    },
    mounted() {
      this.fetchMovieDetails();
    },
    methods: {
      fetchMovieDetails() {
        const movieId = this.$route.params.movie.id;
        const movieUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=c800a4a3cdad2bcff8ab7652fc3fa99b`;
        const castUrl = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=c800a4a3cdad2bcff8ab7652fc3fa99b`;
  
        axios.all([axios.get(movieUrl), axios.get(castUrl)])
          .then(axios.spread((movieResponse, castResponse) => {
            this.movie = movieResponse.data;
            this.actors = castResponse.data.cast.slice(0, 5);
          }))
          .catch(error => {
            console.log(error);
          });
      }
    }
  }
  </script>
 -->

 <template>
  <div class="container">
    <div style="background-color: whitesmoke;">
      <div v-if="movie">
        <div style="text-align: center; position: relative;">
          <img :src="getImageUrl(movie.poster_path)" alt="Movie Poster" class="movieImg" style="margin-top: 100px;">
          <h1>{{ movie.title }}</h1>
        </div>
        <p>{{ movie.overview }}</p>
        <br>
        <hr>
        <br>
        <div class="row">
          <div class="col-md-4 ">
            <h2>Genre</h2>
            <p>{{ movie.genres.map(genre => genre.name).join(', ') }}</p>
          </div>

          <div class="col-md-4 ">
            <h2>Vote</h2>
            <p>{{ movie.vote_average }}</p>
          </div>

          <div class="col-md-4 ">
            <h2>Time</h2>
            <p>{{ movie.runtime }} min</p>
          </div>
        </div>
        <br>
        <hr>
        <br>
        <h2>Actors</h2>
        <ul style="display: flex;
  flex-wrap: wrap;
  justify-content: space-between;">
          <li v-for="(actor, index) in movie.credits.cast.slice(0, 20)" :key="index" style="width: 20%;
  margin-bottom: 30px;">
            <img :src="getImageUrl(actor.profile_path)" alt="Actor Photo" style="width: 50px; margin-right: 10px">
            {{ actor.name }}
          </li>
        </ul>

      </div>
      <div v-else>
        Loading...
      </div>
    </div>
  </div>
</template>
  
  <script>
  import axios from 'axios'
  
  export default {
    data() {
      return {
        movie: null,
        apiKey: 'c800a4a3cdad2bcff8ab7652fc3fa99b'
      }
    },
    props: ['id'],
    mounted() {
      const movieId = this.id
      axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.apiKey}&append_to_response=credits`)
        .then(response => {
          this.movie = response.data
        })
        .catch(error => {
          console.error(error)
        })
    },
    methods: {
      getImageUrl(path) {
        return `https://image.tmdb.org/t/p/w500${path}`
      }
    }
  }
  </script>

  <style>
  .row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.col-md-4 {
  flex: 0 0 auto;
  width: 33.333333%;
  max-width: 33.333333%;
}

.container {
  width: 100%; 
  margin-right: 20px;
  margin-left: 20px;
  
}

.movieImg{
    max-width: 20.3%;
    float: left;
  margin-right: 10px; 
}

.imgactor{
    width: 50px;
  height: 70px;
}

</style>