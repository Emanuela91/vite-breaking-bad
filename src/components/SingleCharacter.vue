<script>

export default {
    name: "SingleCharacter",
    props: ["info"],
}
</script>

<template>
    <!-- card -->
    <div class="text-center">
        <img :src="info.image" :alt="info.name">
        <h4>{{ info.name }} </h4>
        <div>{{ info.status }}</div>
        <div>{{ info.species }}</div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss';

.text-center {
    margin: 10px 0;

}
</style>