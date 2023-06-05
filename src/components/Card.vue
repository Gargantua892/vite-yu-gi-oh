<script>
export default {
  components: {
   
  }
}
</script>

<template>
    <div class="card-list p-5">
       <div class="row">
         <div class="col-3">
            <div class="card">
                <img src="https://www.cardgamecorner.com/prodotti/6/224/ldd001.jpg" class="card-img-top" alt="...">
                <div class="card-body text-center">
                    <h4 class="card-title text-white">Card title</h4>
                    <h5>Genere</h5>
                </div>
            </div>
         </div>
       </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;
.card-list{
    background-color: #fff;

    .card{
        background-color: $primary;
    }
}
</style>