<template>
  <header class="header_conteiner">
    <NavbarMain></NavbarMain>
  </header>
  <div class="container">
    <aside v-if="userStore.user.display_name" class="aside_menu">
      <NavbarMenu></NavbarMenu>
    </aside>
    <main class="main_container">
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

import { onBeforeMount} from "vue";
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
    console.log('token is set');
    router.push('/')
  }else if( !isTokenSet || !isTokenValid){
    router.push('/login')
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
