<template lang="html">
    <div class="filterbar">
        <button 
        class="filterbar_mode"
        :class="{'filterbar--active': filterState === 'channels'}"
        @click="updateFilter('channels')"
        >
        Kanały</button>

        <button 
        class="filterbar_mode"
        :class="{'filterbar--active': filterState === 'categories'}"
        @click="updateFilter('categories')"
        >
        Kategorie</button>
        
    </div>
</template>
<script lang="ts">
import { SetupContext } from 'vue';

export default {
    props: {
        filterState: {
            type: String,
            required: true
        }
    },
    emits:['FilterChange'],
    setup(props,{emit}:SetupContext){

        const updateFilter = (by:string)=>{
            emit('FilterChange', by)
        }
        return {updateFilter}
    }
}
</script>
<style lang="scss">
    @import "../scss/components/filterbar_nav.scss"
</style>