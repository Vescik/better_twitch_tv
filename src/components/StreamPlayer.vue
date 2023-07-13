<template>
   <div class="stream-modal_box">
        <div id="twitch-player">
         
        </div>
      </div>
</template>

<script setup lang="ts">
import { useModalStore } from "@/store/StreamModalStore";
import * as Twitch from 'twitch-player';
import { onMounted, ref, onBeforeMount, onUnmounted,defineProps } from 'vue'
import getTwitchData  from '@/composable/getTwitchData';


  const { fetchTwitchData } = getTwitchData();
   const channel = ref({})
  const user = ref({})

const getStream = async () =>{
  const URL = `https://api.twitch.tv/helix/streams?user_login=${props.channelName}`;
  try {
    const data = await fetchTwitchData(URL);
    console.log(data);
    channel.value = data
  } catch (error) {
    console.error(error);
  }
}
const getChannel = async () =>{
  const URL = `https://api.twitch.tv/helix/users?login=${props.channelName}`;
 
 try {
    const data = await fetchTwitchData(URL);
    console.log(data);
    
    user.value = data
  } catch (error) {
    console.error(error);
  }
}

const props = defineProps({
  channelName: {
    type: String,
    required: true,
  },
})

const streamModalStore = useModalStore();

const userAvatar = ref<string | null>(null); // Use a ref to hold the userAvatar value
onBeforeMount(async () => {
  await getStream()
  await getChannel()
});
onMounted(() => {
  console.log('mounted');
  
  const embed = new Twitch.TwitchEmbed('twitch-player', {
    width: "800px",
    height: "400px",
    channel: props.channelName,
    layout: Twitch.TwitchEmbedLayout.VIDEO_WITH_CHAT,
    theme: Twitch.TwitchEmbedTheme.DARK,
    muted: true,
  });
})
onUnmounted(() => {
  console.log('unmounted');
})
</script>

<style scoped>

.stream-modal_box{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;


}
#twitch-player{
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

}

</style>