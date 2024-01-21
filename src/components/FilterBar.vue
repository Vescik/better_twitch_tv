<template>
    <div v-if="filtrList">
        <span @click="categFilterStore.removeUsedFilters" > {{ filtrList }} X</span>
    </div>
</template>

<script setup lang="ts">
import { defineProps, ref, onBeforeMount, watch } from 'vue';
import { useCategFilter } from '@/store/CategFilterStore';
const filtrList = ref<string | null>(null); // Use a ref to hold the userAvatar value
const categFilterStore = useCategFilter()

filtrList.value = categFilterStore.getUsedFilters()

watch(() => {
    filtrList.value = categFilterStore.getUsedFilters()
})

console.log(filtrList.value)

</script>

<style scoped lang="scss">
@import "../scss/abstract/variables.scss";
span{
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    height: fit-content;

    padding: 5px 10px;
    margin: 5px 0px;
    border-radius: 5px;
    background-color:$color-twitch;
    color: #fff;

    &:hover{
        background-color: $color-twitch-hover;
        cursor: pointer;
    }
}
</style>