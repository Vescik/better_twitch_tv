<template lang="html">
    <div class="channel_container is-loading">
      <img :src="props.thumbnailURL" 
            alt="channel thumbnail" 
            class="channel_thumbnail"
            @click="streamModalStore.openModal(props)">
      <div class="channel_info">
        <div class="test">
          <img :src="userAvatar" alt="channel avatar" class="channel_avatar">

        </div>
        <div class="channel_details">
          <p :title="channelTitle" class="channel_title">{{ props.channelTitleShorted }}</p>
          <div class="channel_data">
            <p class="channel_name">{{ props.channelName }}</p>
            <p class="channel_viewers">{{ props.channelViewers }}</p>
          </div>
          <p class="channel_category">{{ props.channelCategory }}</p>
        </div>
      </div>
    </div>
  </template>
   
  <script setup lang="ts">
  import { defineProps, ref,onBeforeMount } from 'vue';
  import { useModalStore } from '@/store/StreamModalStore';
  
  const streamModalStore = useModalStore();
  const props = defineProps({
    thumbnailURL: {
      type: String,
      required: true
    },
    channelTitle: {
      type: String,
      required: true
    },
    channelName: {
      type: String,
      required: true
    },
    channelViewers: {
      type: Number,
      required: true
    },
    channelCategory: {
      type: String,
      required: true
    },
    channelTitleShorted: {
      type: String,
      required: true
    },
    userAvatar: { 
      type: Object as () => Promise<string>, // Declare it as Promise<TwitchUser>
      required: true
    },
    userID:{
      type: Number,
      required: true
    }
  });
  
  const userAvatar = ref<string | null>(null); // Use a ref to hold the userAvatar value
onBeforeMount(async () => {
  try {
    const avatar = await props.userAvatar; // Await the userAvatar promise
    userAvatar.value = avatar; // Assign the resolved value to the ref
  } catch (error) {
    console.error(error);
  }
});


  
  </script>
  
  <style lang="scss">
      @import "../scss/components/channel_thumbnail";
     
  </style>