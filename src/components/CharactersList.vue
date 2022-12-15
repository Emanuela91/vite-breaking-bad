<script>
import SingleCharacterVue from './SingleCharacter.vue';

import { store } from '../store.js';

export default {
    name: "CharactersList",
    components: {
        SingleCharacterVue
    },

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
            <!-- ciclo for per creare tutti i personaggi -->
            <div v-for="character in store.characterList" :key="character.id">
                <!-- card importata da single character-->
                <SingleCharacterVue />

            </div>
        </div>
    </section>

</template>

<style lang="scss" scoped>

</style>