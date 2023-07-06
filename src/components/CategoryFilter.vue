<template lang="html">
    <div class="filterbar">
        <button class="filterbar_mode" :class="{ 'filterbar--active': categFilterStore.filterState === 'channels' }"
            @click="categFilterStore.changeCateg('channels')">
            Kanały</button>

        <button class="filterbar_mode" :class="{ 'filterbar--active': categFilterStore.filterState === 'categories' }"
            @click="categFilterStore.changeCateg('categories')">
            Kategorie</button>

    </div>
</template>
<script 
lang="ts"
setup>
import { useCategFilter } from '@/store/CategFilterStore';

const categFilterStore = useCategFilter()



</script>
<style lang="scss">
@import "../scss/components/filterbar_nav.scss"
</style>