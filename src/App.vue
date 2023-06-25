<template>
  <header class="header_conteiner">
    <NavbarMain></NavbarMain>
  </header>
  <div class="container">
    <aside class="aside_menu">
      <NavbarMenu></NavbarMenu>
    </aside>
    <main class="main_conteiner">
      <RouterView />
    </main>
    <StreamModal v-if="streamModalStore.showModal"></StreamModal>
  </div>
</template>

<script setup lang="ts">
import NavbarMain from "./components/NavbarMain.vue";
import NavbarMenu from "./components/NavbarMenu.vue";
import StreamModal from "./components/StreamModal.vue";

import validateToken from "@/composable/getValid";
import fetchUser from "@/composable/getSingleUser";

import { useUserStore } from "@/store/UserStore";
import { useModalStore } from "./store/StreamModalStore"
import { useAccesTokenStore } from "./store/AccesTokenStore";
const streamModalStore = useModalStore()

import { onBeforeMount,onMounted,ref } from "vue";
import { useRouter } from "vue-router";

const { getUserData } = fetchUser();
const userStore = useUserStore()
const accesTokenStore = useAccesTokenStore()

const router = useRouter()

onBeforeMount(async () => {
  const isTokenValid = await accesTokenStore.isTokenExp()
  const isTokenSet = accesTokenStore.isTokenSet()
  const getUrl = accesTokenStore.checkUrl()

if(getUrl){
  accesTokenStore.setAccesToken()
  if(isTokenSet){
    const isTokenValid = await accesTokenStore.isTokenExp()
    if(isTokenValid){
      console.log('token is valid')
      const ID = ref(userStore.user.id)
      const userData = await getUserData(Number(ID.value))
    userData.map((user:any) => {
      userStore.setUser(user)
    })
      router.push('/')
    }else{
      router.push('/')
    }
  }else if(isTokenValid){
    router.push('/')
  }else{
    router.push('/login')
  }
}


})


</script>
<style lang="scss">
@import "./scss/abstract/_variables.scss";
@import "./scss/abstract/_mixins.scss";
@import "./scss/base/_reset.scss";
@import "./scss/base/_typography.scss";
@import "./scss/page/global.scss";
@import "./scss/layout/_navbar_aside.scss";
@import "./scss/layout/_main_container.scss";
</style>
