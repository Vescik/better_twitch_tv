<template>
  <div class="hero_container">
    <CategoryFilter />
    <ContentContainer />

  </div>
</template>

<script lang="ts" setup >
import { onBeforeMount, ref } from "vue";
import CategoryFilter from "../components/CategoryFilter.vue";
import ContentContainer from "@/components/ContentContainer.vue";
import { useLanguagesStore } from '@/store/LanguageStore'
import fetchChannels from '@/composable/getChannels'
import { useCategories } from "@/store/CategoryStore";
import { useAccesTokenStore } from "@/store/AccesTokenStore";
import validateToken from "@/composable/getValid";
import fetchUser from '@/composable/getSingleUser'
import { useUserStore } from "@/store/UserStore";
import router from "@/router";






const langStore = useLanguagesStore()
const accesTokenStore = useAccesTokenStore()
const { getUserData } = fetchUser();
const userStore = useUserStore()

const { getChannelsData } = fetchChannels()
onBeforeMount(async () => {
  const getUrl = accesTokenStore.checkUrl()
  const isTokenSet = accesTokenStore.isTokenSet()

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
        router.push('/home')
      }else{
        router.push('/')
      }
    }
  }
    
  

  getChannelsData(langStore.selectedLang)

})

</script>
<style  lang="scss">
@import "../scss/abstract/_variables.scss";
</style>
