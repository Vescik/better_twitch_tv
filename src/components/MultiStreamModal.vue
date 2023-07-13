<template>
        <div class="multi_container">
                <StreamPlayer  v-for="stream in watchTogetherStore.watchTogetherList" :key="stream.id" :channelName="stream.channelName" />
        </div>
    <div @click="watchTogetherStore.toggleMultiModal" class="backdrop"></div>
</template>

<script setup lang="ts">
import { useWatchTogetherStore } from '@/store/WatchTogetherStore';
import StreamPlayer from './StreamPlayer.vue';

const watchTogetherStore = useWatchTogetherStore();

</script>

<style scoped>
.multi_container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    width:90%;
    margin: 10px;

    background-color: rgb(29, 27, 27);
    border-radius: 10px;
    
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 40;
}


.backdrop {
    position: absolute;
    top: 0;
    left: 0;
    width: 500%;
    height: 500%;
    background-color: rgba(0, 0, 0, 0.781);
    z-index: 9;
}
</style>