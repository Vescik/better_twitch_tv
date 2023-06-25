<template lang="">
  <div v-for="channel in user" :key="channel.to_id">
   
  </div>


</template>
<script setup lang="ts">
import fetchFollow from '@/composable/getUserFollow'
import fetchUser from '@/composable/getSingleUser'
import { useUserStore } from '@/store/UserStore'
import { onBeforeMount} from 'vue';

const {getUserData} = fetchUser()
const userStore = useUserStore()

onBeforeMount(async () => {
  console.log( typeof document.cookie);
  const { getFollowData } = fetchFollow();

  const user = await getFollowData(Number(userStore.userID))
  user.forEach(async (user:{to_name:string})=>{
   const x = await getUserData(user.to_name)
   console.log(x[0].display_name);
   
    
  })
  
  
})
</script>
<style lang=""></style>
