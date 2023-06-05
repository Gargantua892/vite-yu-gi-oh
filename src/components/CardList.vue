<script>
import Card from './Card.vue'

export default {
  components: {
    Card
  }
}
</script>

<template>
    <div>
        <div class="dropdown open">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">
                        Dropdown Button
                    </button>
            <div class="dropdown-menu" aria-labelledby="triggerId">
                <button class="dropdown-item" href="#">Action</button>
                <button class="dropdown-item disabled" href="#">Disabled action</button>
            </div>
        </div>
       <Card />
    </div>
</template>

<style lang="scss" scoped>

</style>