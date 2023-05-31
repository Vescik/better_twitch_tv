<template lang="html">
    <div class="filterbar">
        <button 
        class="filterbar_mode"
        :class="{'filterbar--active': props.filterState === 'channels'}"
        @click="updateFilter('channels')"
        >
        Kanały</button>

        <button 
        class="filterbar_mode"
        :class="{'filterbar--active': props.filterState === 'categories'}"
        @click="updateFilter('categories')"
        >
        Kategorie</button>
        
    </div>
</template>
<script 
lang="ts"
setup>
    import { defineEmits,defineProps } from 'vue'

    const props = defineProps({
        filterState: {
            type: String,
            required: true,
        }
    })
    const emit = defineEmits(['FilterChange'])
    const updateFilter = (by:string)=>{
            emit('FilterChange', by)
        }

</script>
<style lang="scss">
    @import "../scss/components/filterbar_nav.scss"
</style>