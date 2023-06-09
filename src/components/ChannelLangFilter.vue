<template lang="html">
    <select name="languages" v-model="langStore.selectedLang" >
        <option v-for="lang in langStore.langs" 
            :key="lang.code" 
            :value="lang.code">
            {{ lang.name }}
        </option>
    </select>
</template>
<script setup lang="ts">
    import { useLanguagesStore } from '@/store/LanguageStore';
    import { useChannels } from '@/store/ChannelStore';
    import {watch} from 'vue'

    const langStore = useLanguagesStore();
    

    watch(() => ({ selectedLang: langStore.selectedLang }), (newLang, oldLang) => {
            if (newLang.selectedLang !== oldLang.selectedLang) {                
                useChannels().getChannelsData(newLang.selectedLang);
  }
});
    

</script>
<style lang="scss">
    
</style>