<template lang="html">
  <transition name="fade">
    <div class="channel_container is-loading">
      <img :src="props.thumbnailURL" alt="channel thumbnail" class="channel_thumbnail"
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

        <div>

        </div>
      </div>
      <div>
        <button @click="handleAddWatchTogether" class="channel_addMulti">
          <span class="material-symbols-rounded">grid_view</span>
          <p class="channel_addMulti-text">{{ toggleActive }}</p>
        </button>
      </div>
    </div>
  </transition>
</template>
   
<script setup lang="ts">
import { defineProps, ref, onBeforeMount, computed } from 'vue';
import { useModalStore } from '@/store/StreamModalStore';
import { useWatchTogetherStore } from '@/store/WatchTogetherStore';
import { useAlertStore } from "@/store/AlertStore";


const streamModalStore = useModalStore();
const watchTogetherStore = useWatchTogetherStore();
const alertStore = useAlertStore();
function checkChannelName(data, channelName) {
  if (!Array.isArray(data)) {
    return false;
  }

  for (const item of data) {
    if (item.channelName === channelName) {
      return true;
    }
  }

  return false;
}

const toggleActive = computed(() => {
  const isOnList = checkChannelName(watchTogetherStore.watchTogetherList, props.channelName);
  return !isOnList ? "Dodaj do WatchTogether" : "Usuń z WatchTogether"
});

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
    type: Object as () => Promise<string>,
    required: true
  },
  userID: {
    type: Number,
    required: true
  }
});

const handleAddWatchTogether = () => {
  const isOnList = checkChannelName(watchTogetherStore.watchTogetherList, props.channelName);
  if (watchTogetherStore.watchTogetherList.length < 4) {
    if (!isOnList) {
      watchTogetherStore.addWatchTogether(props);
      alertStore.showAlert(`Dodano kanał do listy: ${props.channelName}`, 'success');
    } else if (isOnList) {
      watchTogetherStore.removeWatchTogether(props.channelName);
      alertStore.showAlert(`Usunięto kanał z listy: ${props.channelName}`, 'success');
    } else {
      alertStore.showAlert('Kanał jest już na liście', 'error');
    }
  } else {
    if (isOnList) {
      watchTogetherStore.removeWatchTogether(props.channelName);
      alertStore.showAlert(`Usunięto kanał z listy: ${props.channelName}`, 'success');
    } else {
      alertStore.showAlert('Maksymalna liczba kanałów na liście', 'error');
    }
  }
}

const userAvatar = ref<string | null>(null);
onBeforeMount(async () => {
  try {
    const avatar = await props.userAvatar;
    userAvatar.value = avatar;
  } catch (error) {
    console.error(error);
  }
});



</script>
  
<style lang="scss">
@import "../scss/components/channel_thumbnail";
</style>