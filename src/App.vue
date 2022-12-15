<script>
import axios from 'axios';
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

  methods: {
    getCharacters() {

      axios
        .get(store.apiURL)
        .then(res => {
          store.characterList = res.data.results;
        })
        .catch(err => {
          console.log("Errori", err);
        });
    }
  },
  mounted() {
    this.getCharacters();
  }
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
