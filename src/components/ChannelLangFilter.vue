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
    const channelsStore = useChannels();

    watch(() => ({ selectedLang: langStore.selectedLang }), (newLang, oldLang) => {
            if (newLang.selectedLang !== oldLang.selectedLang) {   
                console.log('test');
                channelsStore.getChannelsData("byLang");
  }
});
    

</script>
<style lang="scss">
    @import "../scss/abstract/_variables.scss";
    select {
        background-color: $color-dark-primary;
        color: $color-white;
        border: none;
        border-radius: 5px;
        padding: 5px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        outline: none;
        margin: 0 10px;
        margin: 10px;
    }
    select:hover {
        background-color: $color-dark-secondary;
    }
    select:focus {
        background-color: $color-dark-secondary;
    }
    select option {
        background-color: $color-dark-primary;
        color: $color-white;
        border: none;
        border-radius: 5px;
        padding: 5px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        outline: none;
        margin: 0 10px;
    }
    select option:hover {
        background-color: $color-dark-secondary;
    }
    select option:focus {
        background-color: $color-dark-secondary;
    }
    
</style>