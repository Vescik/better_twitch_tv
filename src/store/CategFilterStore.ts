import { defineStore } from "pinia";
import {ref,watch} from 'vue'
import {useLanguagesStore} from '@/store/LanguageStore'
import fetchChannels from '@/composable/getChannels'
import fetchCategories from "@/composable/getCategories";


export const useCategFilter = defineStore("useCategFilter", () => {
    const filterState = ref<string>("channels")
    const langStore = useLanguagesStore()
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
    }

    return {changeCateg,filterState,getUsedFilters,setUsedFilters,removeUsedFilters}

})