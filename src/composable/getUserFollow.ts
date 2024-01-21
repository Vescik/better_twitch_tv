import { ref } from 'vue';
import getTwitchData from './getTwitchData';
import { useUserStore } from '../store/UserStore'
import { useAccesTokenStore } from '../store/AccesTokenStore'



const fetchFollows = () => {
  const { fetchTwitchData } = getTwitchData();
  const userStore = useUserStore()
  const userID = useUserStore().user.id

  
  const getFollowedChannels = async () => {
    const url = `https://api.twitch.tv/helix/channels/followed?user_id=${userID}&first=100`
    try {
      const data = await fetchTwitchData(url);
      console.log(data);
      userStore.setFollowData(data)

    } catch (err) {
      console.log(err);
    }
  }

  return { getFollowedChannels };
};

export default fetchFollows;