import { ref } from 'vue';
import getTwitchData from './getTwitchData';
import {useUserStore} from '../store/UserStore'

const fetchFollows = () => {
  const { fetchTwitchData } = getTwitchData();
  const userStore = useUserStore()
  const userFollows = ref([])

  const getFollowData = async (param: string | number) => {
    const setURL = `https://api.twitch.tv/helix/users/follows?from_id=69315705&first=100`
     



    try {
      const data = await fetchTwitchData(setURL);
      userFollows.value = data
      console.log(userFollows.value);
      
      
    } catch (err) {
      console.log(err);
    }
    return userFollows.value
  };

  return { getFollowData };
};

export default fetchFollows;