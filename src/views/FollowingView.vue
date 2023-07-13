<template>
  <transition name="fade">
    <div class="followed_container" v-if="userStore.userFollowed.length">
      <div class="followed_channel" v-for="channel in userStore.userFollowed" :key="channel.to_id">
        <SingleFollowedChannel :channel="channel" />
      </div>

    </div>

  </transition>
</template>
<script setup lang="ts">
import fetchFollow from '@/composable/getUserFollow'
import SingleFollowedChannel from '@/components/SingleFollowedChannel.vue';
import fetchUser from '@/composable/getSingleUser'
import { useUserStore } from '@/store/UserStore'
import { onBeforeMount, ref } from 'vue';

const { getUserData } = fetchUser()
const userStore = useUserStore()
const url = ref(``)
const setUrl = (ID: string) => {
  url.value = `https://api.twitch.tv/helix/users?id=${ID}`
  url.value += `&user_id=${ID}`
}
onBeforeMount(async () => {
  console.log(typeof document.cookie);
  const { getFollowData, getFollowedChannels } = fetchFollow();

  const user = await getFollowData(userStore.user.id)
  userStore.setFollowData(user)



})
</script>
<style lang="scss">
.followed {
  &_container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  &_channel {
    width: 150px;
    height: 150px;
    margin: 10px;
    padding: 10px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 20px;
    }

    p {
      display: block;
    }
  }
}
</style>
