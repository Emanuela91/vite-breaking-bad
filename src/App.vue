<script>
import HeaderVue from './components/Header.vue';
import CharactersListVue from './components/CharactersList.vue';

import { store } from './store.js';

export default {
  name: "App",
  components: {
    HeaderVue,
    CharactersListVue
  },

  data() {
    return {
      store,
    }
  },
}
</script>

<template>
  <HeaderVue msg="Rick and Morty App" />
  <main>
    <CharactersListVue />
  </main>
</template>

<style lang="scss">
@use './style/general.scss';
</style>
