<script>

export default {
    name: "SingleCharacter",
    props: [],
}
</script>

<template>
    <!-- card -->
    <div class="text-center">
        <img src="http://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="">
        <h4>nome</h4>
        <div>stato</div>
        <div>specie</div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss'
</style>