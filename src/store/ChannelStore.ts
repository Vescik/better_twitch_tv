import {defineStore} from 'pinia';
import getChannels from "@/composable/getChannels";
import { ref } from 'vue';
//import { ref,computed } from 'vue'

interface TwitchStream {
   id: number;
   user_id: number;
   user_login: string;
   user_name: string;
   game_id: string;
   game_name: string;
   type: string;
   title: string;
   viewer_count: number;
   started_at: string;
   language: string;
   thumbnail_url: string;
   tag_ids: string[];
   tags: string[];
   is_mature: boolean;
 }

export const useChannels = defineStore("useChannelStore",()=>{
   const {getChannelsData} = getChannels();
   const channelList = ref<TwitchStream[]>([])

  

   return{getChannelsData,channelList}
})
