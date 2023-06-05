<script setup>
import CardList from './components/CardList.vue'
</script>

<template>
  <div>
    <!-- Header -->
      <nav class="navbar bg-body-tertiary">
        <div class="container">
          <a class="navbar-brand" href="#">Navbar</a>
        </div>
      </nav>
      <section class="card-list container">
        <CardList />
      </section>
    </div>
</template>

<style lang="scss">
@use '../styles/partials/variables.scss' as *;
@use '../styles/general.scss' as *;

</style>
