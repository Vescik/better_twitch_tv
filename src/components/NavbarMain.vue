<template lang="html">
  <nav class="navbar">
    <div class="navbar_logo">
      <img src="../assets/logo.png" alt="logo" class="navbar_logo_img" />
      <span class="navbar_logo_title">TwitchSimplified</span>
    </div>
    <div class="user" v-if="userStore.user.display_name">
      <h1 class="navbar_greetings">Cześć, {{ userStore.user.display_name }}</h1>


      <img :src="userStore.user.profile_image_url" alt="user avatar" class="user_avatar" />
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useUserStore } from "@/store/UserStore";
const userStore = useUserStore()


</script>

<style lang="scss">
@import "../scss/layout/navbar_top.scss";

.user {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 20px 0 50px;
}
</style>
