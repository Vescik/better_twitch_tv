<template lang="html">
 <div class="channel_container">
    <img :src="thumbnailURL" alt="channel thumbnail">
    <div class="channel_info">
        <!-- <img :src="channelAvatar" alt="channel avatar" class="channel_avatar"> -->
        <div class="channel_details">
            <p :title="channelTitle" class="channel_title">{{ channelTitleShorted }}</p>
            <p class="channel_name">{{ channelName }}</p>
            <div class="channel_data">
                <p class="channel_viewers">{{ channelViewers }}</p>
                <p class="channel_category">{{ channelCategory }}</p>
            </div>
        </div>
    </div>
 </div>
</template>
<script lang="ts">

export default {
            props:{
                thumbnailURL:{
                    type:String,
                    required:true
                },
                channelTitle:{
                    type:String,
                    required:true
                },
                channelName:{
                    type:String,
                    required:true
                },
                channelViewers:{
                    type:Number,
                    required:true
                },
                channelCategory:{
                    type:String,
                    required:true
                }, channelTitleShorted:{
                    type:String,
                    required:true
                },
            },
    setup() {
        return {}
    }
}
</script>
<style lang="css">
    
</style>