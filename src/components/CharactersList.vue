<script>
import { store } from '../store.js';

export default {
    name: "CharactersList",
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <section class="container">
        <div class="row">
            <div>
                <!-- card -->
                <div class="text-center">
                    <img src="http://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="">
                    <h4>nome</h4>
                    <div>stato</div>
                    <div>specie</div>
                </div>

            </div>
        </div>
    </section>

</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss'
</style>