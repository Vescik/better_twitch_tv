import  {defineStore} from 'pinia'
import {ref} from 'vue'


      
export const useAccesTokenStore = defineStore("useAccesTokenStore", () => {
    const accesToken = ref("")
    
    const setAccesToken = () => {
        const url = window.location.href
        const getToken = url.split("=")[1].split("&")[0];
        accesToken.value = getToken
        document.cookie = getToken
        console.log(document.cookie); 
    }
    return {accesToken,setAccesToken}
})