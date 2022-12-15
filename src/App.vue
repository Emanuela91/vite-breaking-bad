<script>
import HeaderVue from './components/Header.vue';
import { store } from './store.js';

export default {
  name: "App",
  components: {
    HeaderVue
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
</template>

<style lang="scss">
@use './style/general.scss';
</style>
