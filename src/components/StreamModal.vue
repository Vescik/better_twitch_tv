<template>
  <Transition name="fade">
    <div v-if="streamModalStore.showModal" class="modal-wrapper">
      <div class="stream-modal_box">
        <div id="twitch-player">
          <div class="stream-modal_details">
            <img :src="userAvatar" alt="">
            <div>
              <p class="channel_title">{{ streamModalStore.channelData?.channelTitle }}</p>
              <p class="channel_name">{{ streamModalStore.channelData?.channelName }}</p>
              <span class="channel_viewer">{{ streamModalStore.channelData?.channelViewers }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
  <transition name="fade">
    <div v-if="streamModalStore.showModal" @click="streamModalStore.closeModal" class="backdrop"></div>
  </transition>
</template>

<script setup lang="ts">
import { useModalStore } from "@/store/StreamModalStore";
import * as Twitch from 'twitch-player';
import { onMounted, ref, onBeforeMount, onUnmounted } from 'vue'
const streamModalStore = useModalStore();

const userAvatar = ref<string | null>(null); // Use a ref to hold the userAvatar value
onBeforeMount(async () => {
  
  try {
    const avatar = await streamModalStore.channelData?.userAvatar; // Await the userAvatar promise
    userAvatar.value = avatar; // Assign the resolved value to the ref
  } catch (error) {
    console.error(error);
  }
});
onMounted(() => {
  const embed = new Twitch.TwitchEmbed('twitch-player', {
    width: "100%",
    height: 600,
    channel: streamModalStore.channelData?.channelName,
    layout: Twitch.TwitchEmbedLayout.VIDEO_WITH_CHAT,
    theme: Twitch.TwitchEmbedTheme.DARK,
  });
})
onUnmounted(() => {
  console.log('unmounted');
})
</script>

<style scoped lang="scss">
@import "../scss/components/stream_modal";
@import "../scss/components/channel_thumbnail";

.channel{
  &_name{
    background-color: grey;
    padding: 1px 10px;
    border-radius: 5px;
    display: inline-block;
  }
  &_viewer{
    background-color: red;
    padding: 5px 10px;
    border-radius: 5px;

  }
}

#twitch-player {

  margin: 20px;
  display: flex;
  flex-direction: column-reverse;
}

img {
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 20px;

}

</style>