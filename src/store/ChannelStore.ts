import {defineStore} from 'pinia';
import getChannels from "@/composable/getChannels";
import { onBeforeMount } from 'vue';

export const useChannels = defineStore("channelStore",()=>{
    const {channels,fetchChannels} = getChannels("pl");
    onBeforeMount(()=>{
        fetchChannels("pl")
    })
})