<template>
  <div class="hero_container">
    <CategoryFilter />
    <ContentContainer />

  </div>
</template>

<script lang="ts" setup >
import { onBeforeMount, ref } from "vue";
import CategoryFilter from "../components/CategoryFilter.vue";
import ContentContainer from "@/components/ContentContainer.vue";
import { useLanguagesStore } from '@/store/LanguageStore'
import fetchChannels from '@/composable/getChannels'
import { useCategories } from "@/store/CategoryStore";
import { useAccesTokenStore } from "@/store/AccesTokenStore";
import validateToken from "@/composable/getValid";





const langStore = useLanguagesStore()
const categoryStore = useCategories()
const accesTokenStore = useAccesTokenStore()

const { getChannelsData } = fetchChannels()
onBeforeMount(async () => {
  if (!document.cookie.length) {
    accesTokenStore.setAccesToken()
  } else {
    validateToken(document.cookie)
  }

  getChannelsData(langStore.selectedLang)

})

</script>
<style  lang="scss">
@import "../scss/abstract/_variables.scss";
</style>
