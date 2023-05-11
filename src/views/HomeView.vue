<template>
  <div class="hero_container">
    <CategoryFilter 
    :filterState="filterState"
    @FilterChange="filterState = $event"
    />
   <ContentContainer />
   
  </div>
</template>

<script lang="ts">
import { defineComponent,ref, computed,onBeforeMount } from "vue";
import CategoryFilter from "../components/CategoryFilter.vue";
import ContentContainer from "@/components/ContentContainer.vue";
export default defineComponent({
  name: "HomeView",
  components: {
    CategoryFilter,
    ContentContainer,
},
  setup() {
    const filterState = ref("channels");
    return {filterState};
  },
});
</script>
<style  lang="scss">
@import "../scss/abstract/_variables.scss";
</style>
