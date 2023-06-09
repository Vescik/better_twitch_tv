<template lang="html">
    <div class="channel_container">
      <img :src="props.thumbnailURL" alt="channel thumbnail">
      <div class="channel_info">
            <img :src="userAvatar" alt="channel avatar" class="channel_avatar">

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
  interface TwitchUser {
  id: string;
  login: string;
  display_name: string;
  type: string;
  broadcaster_type: string;
  description: string;
  profile_image_url: string;
  offline_image_url: string;
  view_count: number;
  created_at: string;
}

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
      type: Object as () => Promise<TwitchUser>, // Declare it as Promise<TwitchUser>
      required: true
    }
  });
  console.log(props.userAvatar);
  
  const userAvatar = ref<TwitchUser | null>(
null); // Use a ref to hold the userAvatar value

onBeforeMount(async () => {
  try {
    const avatar = await props.userAvatar; // Await the userAvatar promise
    userAvatar.value = avatar; // Assign the resolved value to the ref
  } catch (error) {
    console.error(error);
  }
});

watch(userAvatar, (newAvatar) => {
  console.log(newAvatar); // Log the newAvatar value when it changes
});
  
  </script>
  
  <style lang="css">
      
  </style>