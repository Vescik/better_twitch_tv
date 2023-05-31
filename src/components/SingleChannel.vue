<template lang="html">
    <div class="channel_container">
      <img :src="props.thumbnailURL" alt="channel thumbnail">
      <div class="channel_info">
          <!-- <img :src="user.display_name" alt="channel avatar" class="channel_avatar"> -->
        <div class="channel_details">
          <p :title="channelTitle" class="channel_title">{{ props.channelTitleShorted }}</p>
          <p class="channel_name">{{ props.channelName }}</p>
          <div class="channel_data">
            <p class="channel_viewers">{{ props.channelViewers }}</p>
            <p class="channel_category">{{ props.channelCategory }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps, ref,onBeforeMount,watch } from 'vue';
  import fetchUser from '@/composable/getSingleUser';
  import { useUserStore } from '@/store/UserStore';
  
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
    user: { 
      type: String,
      required: true
    }
  });
  
  const { getUserData } = fetchUser();
  const userStore = useUserStore()

  
    const {user } = getUserData(props.user)
  user.forEach(element => {
    console.log(element);
    
  });
    



  </script>
  
  <style lang="css">
      
  </style>