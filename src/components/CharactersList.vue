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
            <div>
                <!-- card importata da single character-->
                <SingleCharacterVue />

            </div>
        </div>
    </section>

</template>

<style lang="scss" scoped>

</style>