<template lang="html">
    <div class="content_container">
        <h1 class="content_heading">Twórcy nażywo</h1>
        <ChannelLangFilter/>
        <ChannelList /> 
    </div>
    
</template>
<script lang="ts">
import { defineComponent} from "vue";
import ChannelList from "./ChannelList.vue";
import ChannelLangFilter from "@/components/ChannelLangFilter.vue";

export default defineComponent({
    components: {
      ChannelList,
      ChannelLangFilter,
    },
   
 
});
</script>
<style lang="scss">
    
</style>