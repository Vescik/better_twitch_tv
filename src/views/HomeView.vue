<template>
  <div class="hero_container">
    <CategoryFilter/>
   <ContentContainer/>
   
  </div>
</template>

<script lang="ts" setup >
import { onBeforeMount,ref } from "vue";
import CategoryFilter from "../components/CategoryFilter.vue";
import ContentContainer from "@/components/ContentContainer.vue";
import {useLanguagesStore} from '@/store/LanguageStore'
import fetchChannels from '@/composable/getChannels'
import { useCategories } from "@/store/CategoryStore";




  
    const langStore = useLanguagesStore()
    const categoryStore = useCategories()

    const {getChannelsData} = fetchChannels() 
    onBeforeMount(()=> {getChannelsData(langStore.selectedLang)

  console.log(categoryStore.categoryList);
    })

</script>
<style  lang="scss">
@import "../scss/abstract/_variables.scss";
</style>
