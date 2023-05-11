<template lang="html">
  <ul class="navbar_menu">
    <li>
      <router-link :to="{ name: 'home' }" class="navbar_menu_item">
        <span class="material-symbols-rounded">grid_view</span>
        <span class="menu_title">Strona główna</span>
      </router-link>
    </li>
    <li>
      <router-link :to="{ name: 'Following' }" class="navbar_menu_item">
        <span class="material-symbols-rounded">group</span>
        <span class="menu_title">Obserwowani</span>
      </router-link>
    </li>
    <li>
      <router-link :to="{ name: 'Settings' }" class="navbar_menu_item">
        <span class="material-symbols-rounded">settings</span>
        <span class="menu_title">Ustawienia</span>
      </router-link>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "NavbarMenu",
});
</script>
<style lang="scss">
@import "../scss/components/navbar_menu_item.scss";
</style>
