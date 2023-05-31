<template>
  <div class="hero_container">
    <CategoryFilter 
    :filterState="filterState"
    @FilterChange="filterState = $event"
    />
   <ContentContainer />
   
  </div>
</template>

<script lang="ts" setup >
import { onBeforeMount,ref } from "vue";
import CategoryFilter from "../components/CategoryFilter.vue";
import ContentContainer from "@/components/ContentContainer.vue";
import {useLanguagesStore} from '@/store/LanguageStore'
import fetchChannels from '@/composable/getChannels'




    onBeforeMount(()=> getChannelsData(langStore.selectedLang))
    const langStore = useLanguagesStore()
    const {getChannelsData} = fetchChannels() 
    
    const filterState = ref("channels");


</script>
<style  lang="scss">
@import "../scss/abstract/_variables.scss";
</style>
