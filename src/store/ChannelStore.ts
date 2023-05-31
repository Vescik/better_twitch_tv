import {defineStore} from 'pinia';
import getChannels from "@/composable/getChannels";
import { useLanguagesStore } from './LanguageStore';
import { ref } from 'vue';
//import { ref,computed } from 'vue'

interface TwitchStream {
   id: string;
   user_id: string;
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
   const {channels,getChannelsData} = getChannels();
   const langStore = useLanguagesStore()
   const channelList = ref<TwitchStream[]>([])

  

   return{channels,getChannelsData,channelList}
})