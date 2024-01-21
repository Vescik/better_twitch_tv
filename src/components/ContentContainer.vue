<template lang="html">
    <div class="content">
        <div class="content_heading_box" v-if="categFilterStore.filterState === 'channels'">
            <div class="col">
                <div class="row">
                <h1 class="content_heading">Twórcy na żywo</h1>
                <ChannelLangFilter />
            </div>
            <FilterBar/>
            </div>
        </div>
        <div v-else>
            <h1>Kategorie</h1>
        </div>
        <div class="content_container">
            <div>
                <ChannelList />
                <RouterView />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import ChannelList from "./ChannelList.vue";
import ChannelLangFilter from "@/components/ChannelLangFilter.vue";
import { useCategFilter } from '@/store/CategFilterStore';
import FilterBar from "./FilterBar.vue";
const categFilterStore = useCategFilter()





</script>
<style lang="scss">
@import "../scss/abstract/_variables.scss";

.content {
    background-color: red;
    padding: 20px;
    border-radius: 20px;
    width: 100%;
    background-color: $color-dark-primary;

    &_heading {
        &_box {
            display: flex;
            margin-bottom: 15px;
        }
    }
}
.row{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.col{
    display: flex;
    flex-direction: column;
}
</style>