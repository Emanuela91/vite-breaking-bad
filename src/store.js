import { reactive } from 'vue';

export const store = reactive({
    characterList: [],
    apiURL: "http://rickandmortyapi.com/api/character",
});