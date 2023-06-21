<template>
    <div>
        <h1>Login</h1>
        <button>
            <a 
            :href="url">
                Connect with Twitch</a>   
        </button>
    </div>
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import validateToken from "@/composable/getValid";

const client_id:string = process.env.VUE_APP_CLIENT_ID
const redirect_uri = "http://localhost:8080/home"
const url = `https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=${client_id}&redirect_uri=${redirect_uri}&scope=channel%3Amanage%3Apolls+channel%3Aread%3Apolls&state=c3ab8aa609ea11e793ae92361f002671`

const router = useRouter()
onBeforeMount(async () => {
    if(document.cookie.length){
        try{
            const res = await validateToken(document.cookie);
            if(res.expires_in > 0){
                router.push('/home')
            }
        }catch(err){
            console.log(err)
        }
    }
})
</script>
<style scoped>

</style>