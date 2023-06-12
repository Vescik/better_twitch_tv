<template lang="html">
    <div v-if="categFilterStore.filterState === 'channels'">
    <h1 class="content_heading">Twórcy nażywo</h1>
     <ChannelLangFilter/>
     </div>
     <div v-else>
        <h1 >Kategorie</h1>
     </div>
    <div class="content_container">
        <div>
  
            <ChannelList /> 
        </div>
    </div>
    
</template>
<script setup lang="ts">
import { defineProps,watch,ref} from "vue";
import ChannelList from "./ChannelList.vue";
import ChannelLangFilter from "@/components/ChannelLangFilter.vue";
import SingleCategory from "./SingleCategory.vue";
import { useCategFilter } from '@/store/CategFilterStore';


const categFilterStore = useCategFilter()


  


</script>
<style lang="scss">
    
</style>