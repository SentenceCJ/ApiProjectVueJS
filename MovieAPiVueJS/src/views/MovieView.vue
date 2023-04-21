
  <template>
    <div style="margin-left: 130px;">
    <div class="FilmandSeries">
      <h1 class="title">Movies and Series available</h1>
      <div class="item-movie" >
        <ul> 
          <li v-for="(item, index) in displayedItems" :key="item.id">
            <a :href="'/moviedetails/' + item.id">
              <img :src="'https://image.tmdb.org/t/p/w154' + item.poster_path" :alt="item.title">
              <p  style="color: #212529;">{{ item.title }}</p>
            </a>
          </li>
        </ul>
      </div>
      <div class="pagination">
        <button @click="previousPage" :disabled="currentPage === 0" class="btn btn-secondary" style="margin-left: 10px;">Précédent</button>
        <button @click="nextPage" :disabled="currentPage === maxPage" class="btn btn-secondary" style="margin-left: 100px;">Suivant</button>
      </div>
    </div></div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'FilmsSeries',
    data() {
      return {
        items: [],
        currentPage: 0,
        pageSize: 9
      }
    },
    mounted() {
      this.fetchData();
    },
    methods: {
      fetchData() {
        const url = 'https://api.themoviedb.org/3/discover/movie?api_key=c800a4a3cdad2bcff8ab7652fc3fa99b';
        axios.get(url)
          .then(response => {
            this.items = response.data.results;
          })
          .catch(error => {
            console.log(error);
          });
      },
      previousPage() {
        this.currentPage--;
      },
      nextPage() {
        this.currentPage++;
      }
    },
    computed: {
      displayedItems() {
        const start = this.currentPage * this.pageSize;
        const end = start + this.pageSize;
        return this.items.slice(start, end);
      },
      maxPage() {
        return Math.ceil(this.items.length / this.pageSize) - 1;
      }
    }
  }
  </script>

  
<style>

/*CSS page Film */


.item-movie{

text-align: center;
}
.pagination{
text-align: center;
}

.title{
text-align: center;
font-size: 40px;
margin-bottom: 20px;
}

.FilmandSeries{

margin-top: 100px;
margin-left: 50px;

}
.FilmandSeries ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
}

.FilmandSeries li {
  width: 33%;
  margin-bottom: 20px;
}

.btn {
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.btn-secondary {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}

.btn-secondary:hover {
  color: #fff;
  background-color: #5a6268;
  border-color: #545b62;
}

.btn-secondary:focus, .btn-secondary.focus {
  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
}

.btn-secondary.disabled, .btn-secondary:disabled {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}

.btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active,
.show > .btn-secondary.dropdown-toggle {
  color: #fff;
  background-color: #545b62;
  border-color: #4e555b;
}

.btn-secondary:not(:disabled):not(.disabled):active:focus, .btn-secondary:not(:disabled):not(.disabled).active:focus,
.show > .btn-secondary.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
}

</style>

<!-- <template>
  <div class="FilmandSeries">
    <h1>Films et Séries disponibles</h1>
    <div class="film-row" v-for="(row, index) in rows" :key="index">
      <div class="film-column" v-for="item in row" :key="item.id">
        <img :src="'https://image.tmdb.org/t/p/w92' + item.poster_path" :alt="item.title">
        <p>{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'FilmsSeries',
  data() {
    return {
      items: [],
      rows: []
    }
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      const url = 'https://api.themoviedb.org/3/discover/movie?api_key=c800a4a3cdad2bcff8ab7652fc3fa99b';
      axios.get(url)
        .then(response => {
          this.items = response.data.results;
          this.rows = this.chunkArray(this.items, 3);
        })
        .catch(error => {
          console.log(error);
        });
    },
    chunkArray(array, size) {
      let result = [];
      for (let i = 0; i < array.length; i += size) {
        let chunk = array.slice(i, i + size);
        result.push(chunk);
      }
      return result;
    }
  }
}
</script> -->

<!-- <style>
  .FilmandSeries ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
    padding: 0;
  }

  .FilmandSeries li {
    width: 30%;
    margin-bottom: 20px;
  }
</style> -->