import { defineStore } from "pinia";
import {ref,watch} from 'vue'
import {useLanguagesStore} from '@/store/LanguageStore'
import fetchChannels from '@/composable/getChannels'
import fetchCategories from "@/composable/getCategories";

import { useChannels } from "@/store/ChannelStore";

export const useCategFilter = defineStore("useCategFilter", () => {
    const filterState = ref<string>("channels")
    const langStore = useLanguagesStore()
    const channelStore = useChannels()
    const usedFilters = ref<string | null>("")

    const {getCategoriesData} = fetchCategories()

    const changeCateg = (categ:string) => {
        filterState.value = categ
    }
    watch(filterState,(newVal)=>{
        if(newVal !== "channels"){
            getCategoriesData()
        }
    })
    watch(usedFilters,(newVal)=>{
        console.log(newVal);
    }
    )

    const getUsedFilters = () => {
        return usedFilters.value
    }

    const setUsedFilters = (filter:string) => {
        usedFilters.value = filter
        console.log(filter);
        console.log(usedFilters.value);
    }
    const removeUsedFilters = () => {
        usedFilters.value = null
        channelStore.getChannelsData('byLang')
        console.log(channelStore.channelList)

    }

    return {changeCateg,filterState,getUsedFilters,setUsedFilters,removeUsedFilters}

})