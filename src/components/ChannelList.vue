<template lang="html">
    <div >
        <div v-for="channel in channelStore.channelList" :key="channel.user_id">
            <SingleChannel
                :user="channel.user_id"
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
<script setup lang="ts">
    import SingleChannel from './SingleChannel.vue';
    import { useChannels } from '@/store/ChannelStore'
    import fetchUser from '@/composable/getSingleUser'
    import {ref,computed,} from 'vue'; 

   
    const {getUserData} = fetchUser()

    const channelStore = useChannels()
    
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



</script>
<style lang="scss">
    
</style>