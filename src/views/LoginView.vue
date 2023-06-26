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
import { onBeforeMount, onUnmounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

import { useAccesTokenStore } from '@/store/AccesTokenStore';
import fetchUser from "@/composable/getSingleUser";
import { useUserStore } from "@/store/UserStore";

const client_id = "bkh1n11ohrua2vuej6snus4q6l6bk1"
const redirect_uri = "http://localhost:8080/"
//const redirect_uri = "https://twitchsimplified.netlify.app/"
const url = `https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=${client_id}&redirect_uri=${redirect_uri}&scope=channel%3Amanage%3Apolls+channel%3Aread%3Apolls+user%3Aread%3Afollows&state=c3ab8aa609ea11e793ae92361f002671`;

const router = useRouter()
const accesTokenStore = useAccesTokenStore()

const { getUserData } = fetchUser();
const userStore = useUserStore()

onBeforeMount(async () => {
    const isTokenValid = await accesTokenStore.isTokenExp()
    const isTokenSet = accesTokenStore.isTokenSet()

    if(isTokenSet && isTokenValid){
        if(isTokenValid){
        console.log('token is valid')
        router.push('/')
    }
    }

   
})

</script>
<style scoped>

</style>