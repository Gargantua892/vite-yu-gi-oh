<script>
import { store } from './store.js'
import CardList from './components/CardList.vue'
import axios from 'axios'

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
      axios.get(store.apiURL)
      .then(res => {
        store.cardList = res.data;
      })
      .catch( err => {
        console.log(err);
      })
    }
  },
  created() {
    this.getCards();
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
          <CardList />
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
