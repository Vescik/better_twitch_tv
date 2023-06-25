import {defineStore} from 'pinia';
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

export const useCategories = defineStore("useCategoryStore",()=>{
   const categoryList = ref([])
   const gameID = ref('')
   
 
   return{categoryList,gameID}
})