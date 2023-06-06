<script>
export default {
  components: {
   
  },
  props: {
        details: Object,
        index: Number,
    }
}
</script>

<template>
    <div class="col-12 col-md-3 d-flex">
        <div class="card my-2">
            <img :src="details.card_images[0].image_url" class="card-img-top" :alt="index">
            <div class="card-body text-center d-flex flex-column justify-content-around">
                <h4 class="card-title text-white">{{details.name}}</h4>
                <h5>{{details.archetype}}</h5>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use '../styles/partials/variables.scss' as *;
.card-list{
    background-color: #fff;

    .card{
        background-color: $primary;
    }
}
</style>