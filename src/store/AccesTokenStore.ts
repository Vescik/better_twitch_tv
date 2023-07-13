import { defineStore } from 'pinia'
import { ref,watch } from 'vue'
import { useRouter } from 'vue-router'
import validateToken from "@/composable/getValid";
import { useUserStore } from './UserStore'



export const useAccesTokenStore = defineStore("useAccesTokenStore", () => {
    const accesToken = ref(document.cookie)
    const url = ref(window.location.href)
    const userStore = useUserStore()
    const router = useRouter()
    const tokenInput = ref("zk3zazy3gv0fj7sqjnbu2p0scav1mf")

    const setTokenInput = (token:string) => {
        document.cookie = token
        router.push("/")

    }

    const checkUrl = () => {
        if(url.value.includes("access_token")){
            return true
        }else{
            return false
        }
    }

    const setAccesToken = () => {
        if(tokenInput.value.length > 0){
            document.cookie = tokenInput.value
            accesToken.value = tokenInput.value
        }else if(checkUrl()){
            const getToken = url.value.split("=")[1].split("&")[0]
            document.cookie = getToken
            accesToken.value = getToken
            console.log("token is set");
            return true
        }else{
            console.log("token is not set");
            return false
        }


    }
    const getAccesToken = () => {
        const token = accesToken.value
        return token
    }

    const isTokenSet = () => {
        const token = getAccesToken()
        if (token.length > 0) {
            return true
        } else {
            return false
        }
    }


    const isTokenExp = async () => {
        const token = getAccesToken()        
        const data = await validateToken(token)
        
           if(data){
            if (data.expires_in > 0) {
                userStore.setUserData(data.user_id);
                return true
            } else {
                console.log("token is not valid");
                return false
            }
           }
        
    }
        return { accesToken, setAccesToken,isTokenExp,isTokenSet,checkUrl,tokenInput,setTokenInput }
    })