<template lang="html">
  <form @submbit.prevent class="searchbar_container">
    <span class="material-symbols-outlined"> search </span>
    <input @keydown.enter.prevent="getUserData(searchStore.searchName)"
      type="text"
      class="searchbar_input"
      placeholder="Search for a streamer"
      v-model="searchStore.searchName"
    />
  </form>
</template>

<script setup lang="ts">
import {ref } from "vue";
import {useSearchStore} from '@/store/SearchStore'
import fetchUser from '@/composable/getSingleUser'

const searchStore = useSearchStore()
const { getUserData } = fetchUser();

const testSubmit = () => {
  console.log("test submit");
};


</script>

<style lang="scss">
@import "../scss/components/searchbar.scss";
</style>
