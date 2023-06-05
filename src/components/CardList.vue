<script>
import Card from './Card.vue'
import { store } from './../store.js'

export default {
  components: {
    Card
  },
  data() {
    return {
        store,
    }
  },
}
</script>

<template>
    <div>
        <div class="dropdown open mb-4">
            <button class="btn btn-secondary dropdown-toggle"
            type="button"
            id="triggerId"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">
            Bottone
            </button>
            <div class="dropdown-menu" aria-labelledby="triggerId">
                <button class="dropdown-item" href="#">Action</button>
                <button class="dropdown-item disabled" href="#">Disabled action</button>
            </div>
        </div>
        <div class="card-list p-5">
            <div class="row">
                <Card v-for="(card, i) in store.cardList.data" :details="card" :index="i"/>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>