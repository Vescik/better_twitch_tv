<template>
 <LoginPanel />
</template>

<script setup lang="ts">
import { onBeforeMount, onUnmounted, onBeforeUnmount,onMounted } from 'vue'
import { useRouter } from 'vue-router'

import { useAccesTokenStore } from '@/store/AccesTokenStore';
import fetchUser from "@/composable/getSingleUser";
import { useUserStore } from "@/store/UserStore";
import LoginPanel from "@/components/LoginPanel.vue";

const router = useRouter()
const accesTokenStore = useAccesTokenStore()

const { getUserData } = fetchUser();
const userStore = useUserStore()

onMounted(async () => {
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
<style lang="scss" >



</style>