<script>
import Card from './Card.vue'
import { store } from './../store.js'

export default {
  components: {
    Card,
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
            <select class="btn btn-secondary dropdown-toggle"
            type="button"
            id="triggerId"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            value="Seleziona una categoria"
            v-model="store.filterModel">
            <option v-for="(select, ind) in store.filter" class="dropdown-item" href="#" @click="$emit('filter')">
                    {{select.archetype_name}}
            </option>
            </select>
        </div>
        <p>{{store.filterModel}}</p>
        <div class="card-list p-5">
            <div class="row">
                <div class="col-12">
                    <div class="card-counter p-3">
                        <p v-if="store.cardList.data">Found {{ store.cardList.data.length }} cards</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <Card v-for="(card, i) in store.cardList.data" :details="card" :index="i"/>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.card-counter{
    background-color: rgb(27, 27, 27);

    p{
        color: #fff;
        margin: 0px;
    }
}

</style>