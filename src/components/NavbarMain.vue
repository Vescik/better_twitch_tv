<template lang="html">
  <nav class="navbar">
    <div class="navbar_logo">
      <img src="../assets/logo.png" alt="logo" class="navbar_logo_img" />
      <span class="navbar_logo_title">BetterTwitch</span>
    </div>
    <h1 class="navbar_greetings">Cześć, {{ userName }}</h1>
    <SearchBar></SearchBar>
    <img src="../assets/person.jpg" alt="user avatar" class="user_avatar" />
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SearchBar from "./SearchBar.vue";

export default defineComponent({
  name: "NavbarMain",
  props: {
    userName: {
      type: String,
      default: "Guest",
    },
  },
  components: {
    SearchBar,
  },
});
</script>

<style lang="scss">
@import "../scss/layout/navbar_top.scss";
</style>
