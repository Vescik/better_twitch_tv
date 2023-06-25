import { defineStore } from "pinia";
import {ref,watch} from 'vue'
import {useLanguagesStore} from '@/store/LanguageStore'
import fetchChannels from '@/composable/getChannels'
import fetchCategories from "@/composable/getCategories";


export const useCategFilter = defineStore("useCategFilter", () => {
    const filterState = ref<string>("channels")
    const langStore = useLanguagesStore()

    const {getCategoriesData} = fetchCategories()

    const changeCateg = (categ:string) => {
        filterState.value = categ
    }
    watch(filterState,(newVal)=>{
        if(newVal !== "channels"){
            getCategoriesData()
        }
       
    })

    return {changeCateg,filterState}

})