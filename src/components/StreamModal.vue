
<template>
    
    <div class="stream-modal_box">
        <div id="twitch-player"></div>
    </div>
    <div @click="streamModalStore.closeModal" class="backdrop"></div>
</template>

<script setup lang="ts">
import { useModalStore } from "@/store/StreamModalStore";
import * as Twitch from 'twitch-player';
import{onMounted} from 'vue'
const streamModalStore = useModalStore();

onMounted(()=> {

    const embed = new Twitch.TwitchEmbed('twitch-player', {
        width: 854,
        height: 480,
        channel: "monstercat",
        layout: Twitch.TwitchEmbedLayout.VIDEO_WITH_CHAT
      });
})

</script>


<style scoped lang="scss">
@import "../scss/components/stream_modal"
</style>