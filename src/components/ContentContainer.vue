<template lang="html">
    <div class="content_container">
        <h1 class="content_heading">Twórcy nażywo</h1>
        <ChannelLangFilter/>
    </div>
    <div v-if="channels.length">
        <div v-for="channel in channels" :key="channel.user_id">
            <SingleChannel
            :thumbnailURL="formatThumbnail(channel)"
            :channelName="channel.user_name"
            :channelTitleShorted="formatTtile(channel)"
            :channelTitle="channel.title"
            :channelCategory="channel.game_name"
            :channelViewers="channel.viewer_count"
            />
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent,ref, computed,onBeforeMount } from "vue";
import getChannels from "@/composable/getChannels";
import SingleChannel from "@/components/SingleChannel.vue";
import ChannelLangFilter from "@/components/ChannelLangFilter.vue";

export default defineComponent({
    components: {
      SingleChannel,  
      ChannelLangFilter,
    },
    props: {
      filterState: {
        type: String,
        required: true,
      },  
    },
    setup() {
        const {channels,fetchChannels} = getChannels();   
        onBeforeMount(() => {
            //fetchChannels();`
    });
    
    const formatThumbnail = computed(() => {
        return (channel:{thumbnail_url:string}) => {
           return channel.thumbnail_url.replace("{width}x{height}", "320x180");
      };
    });
    const formatTtile = computed(() => {
        return (channel:{title:string}) => {
           return channel.title.slice(0, 32) + " . . .";
      };
    });
    return {channels,fetchChannels,formatThumbnail,formatTtile};
    }
});
</script>
<style lang="scss">
    
</style>