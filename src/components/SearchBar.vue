<template lang="html">
  <form class="searchbar_container">
    <span class="material-symbols-outlined"> search </span>
    <input
      type="text"
      class="searchbar_input"
      placeholder="Search for a streamer"
      v-model="searchValue"
    />
  </form>
</template>

<script lang="ts">
import { defineComponent,ref } from "vue";
export default defineComponent({
  name: "SearchBar",
  setup() {
    const searchValue = ref("");
    return {searchValue};
  },
});
</script>

<style lang="scss">
@import "../scss/components/searchbar.scss";
</style>
