import { defineStore } from "pinia";
import { ref } from 'vue'
import getUserData from '@/composable/getSingleUser'

export const useUserStore = defineStore('userStore',()=> {
    const streamer = ref(null)
    const setStreamer = (data:any) => {
    streamer.value = data;
    }
    return { streamer,setStreamer}
})