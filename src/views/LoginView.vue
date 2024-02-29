<template>
    <LoginPanel />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

import { useAccesTokenStore } from '@/store/AccesTokenStore';
import LoginPanel from "@/components/LoginPanel.vue";

const router = useRouter()
const accesTokenStore = useAccesTokenStore()

onMounted(async () => {
    const isTokenValid = await accesTokenStore.isTokenExp()
    const isTokenSet = accesTokenStore.isTokenSet()

    if (isTokenSet && isTokenValid) {
        if (isTokenValid) {
            router.push('/')
        }
    }
})

</script>
<style lang="scss" ></style>