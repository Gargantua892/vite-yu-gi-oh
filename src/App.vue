<script>
import { store } from './store.js'
import CardList from './components/CardList.vue'
import axios from 'axios'
import * as bootstrap from 'bootstrap';

export default {
  components: {
    CardList,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getCards(){

      let myUrl = store.apiURL;
      
      if(store.filterModel !== ""){
        // myUrl = `${myUrl}?archetype=${store.filterModel}`;
        myUrl = `https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${store.filterModel}`;


        
        console.log(myUrl)
      }

      axios.get(myUrl)
      .then(res => {
        store.cardList = res.data;
      })
      .catch( err => {
        console.log(err);
      })
    },

    filter(){
      axios.get(store.filterURL)
      .then(res => {
        store.filter = res.data;
      })
    }
  },
  created() {
    this.getCards();
    this.filter();
  }
}
</script>

<template>
  <div>
    <!-- Header -->
    <header>
      <nav class="navbar bg-body-white">
        <div class="container">
          <a class="navbar-brand d-flex align-items-center" href="#">
            <img src="https://vignette1.wikia.nocookie.net/yugiohenespanol/images/a/aa/Yugioh_anime_logo.jpg/revision/latest?cb=20130310042737&path-prefix=es" alt="">
            <h1>Yu-Gi-Oh Api</h1>
          </a>
        </div>
      </nav>
    </header>
    <main>
      <section class="container py-5">
          <CardList @filter="getCards"/>
      </section>
    </main>
  </div>
</template>

<style lang="scss">
@use '../styles/partials/variables.scss' as *;
@use '../styles/general.scss' as *;



.navbar-brand{
  img{
    max-width: 110px;
  }

  h1{
    margin: 0px;
    padding: 0px;
    font-size: 24px;
  }
}

main{
  background-color: $primary;
}

</style>
