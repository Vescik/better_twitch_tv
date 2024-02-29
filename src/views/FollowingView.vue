<template>
  <div class="followed_container" v-if="userStore.userFollowed.length">
    <div class="followed_channel" v-for="channel in userStore.userFollowed" :key="channel.to_id">
      <SingleFollowedChannel :channel="channel" />
    </div>

  </div>
</template>
<script setup lang="ts">
import SingleFollowedChannel from '@/components/SingleFollowedChannel.vue';
import { useUserStore } from '@/store/UserStore'
import { onMounted, ref } from 'vue';
import fetchFollows from '@/composable/getUserFollow'

const userStore = useUserStore()
const { getFollowedChannels } = fetchFollows()

onMounted(async () => {
  getFollowedChannels()
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
