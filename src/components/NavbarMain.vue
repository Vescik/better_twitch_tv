<template lang="html">
  <nav class="navbar">
    <div class="navbar_logo">
      <img src="../assets/logo.png" alt="logo" class="navbar_logo_img" />
      <span class="navbar_logo_title">TwitchSimplified</span>
    </div>
    <h1 class="navbar_greetings">Cześć, {{ userStore.user.display_name }}</h1>

    <div class="searchbar">
      <SearchBar />
      <div v-if="true" class="searchbar-resoults">
        <ul>
          <li>
            {{ searchStore.searchName }}
          </li>
        </ul>
      </div>
    </div>


    <img :src="userStore.user.profile_image_url" alt="user avatar" class="user_avatar" />
  </nav>
</template>

<script setup lang="ts">
import SearchBar from "./SearchBar.vue";
import { useSearchStore } from '@/store/SearchStore'
import { useUserStore } from "@/store/UserStore";


  const userStore = useUserStore()
  const searchStore = useSearchStore()




</script>

<style lang="scss">
@import "../scss/layout/navbar_top.scss";
</style>
