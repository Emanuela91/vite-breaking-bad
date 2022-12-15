import { reactive } from 'vue';

export const store = reactive({
    characterList: [],
    // in http aggiunta la 's' perchè aggiunge la modalità 'sicura' di navigazione, altrimenti mi da errore
    apiURL: "https://rickandmortyapi.com/api/character",
});