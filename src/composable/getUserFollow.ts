import { ref } from 'vue';
import getTwitchData from './getTwitchData';
import { useUserStore } from '../store/UserStore'

const fetchFollows = () => {
  const { fetchTwitchData } = getTwitchData();
  const userStore = useUserStore()
  const userFollowed = ref([])

  const getFollowData = async (param: string | number) => {
    const setURL = `https://api.twitch.tv/helix/users/follows?from_id=${param}&first=50`

    try {
      const data = await fetchTwitchData(setURL);
      userFollowed.value = data


    } catch (err) {
      console.log(err);
    }
    return userFollowed.value
  };

  const getFollowedChannels = async (param:any) => {
    const setURL = `https://api.twitch.tv/helix/streams?${param}`
    try {
      const data = await fetchTwitchData(setURL);
      
      userStore.setFollowData(data)
    } catch (err) {
      console.log(err);
    }
  }

  return { getFollowData, getFollowedChannels };
};

export default fetchFollows;