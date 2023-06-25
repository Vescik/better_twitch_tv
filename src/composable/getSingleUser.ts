import { ref } from 'vue';
import getTwitchData from './getTwitchData';

const fetchUser = () => {
  const { fetchTwitchData } = getTwitchData();
  const user = ref([]);

  const getUserData = async (param: string | number) => {
    const USER_ID_URL = `https://api.twitch.tv/helix/users?id=${param}`;
    const USER_NAME_URL = `https://api.twitch.tv/helix/users?login=${param}`;
    const setURL = typeof param === 'string' ? USER_NAME_URL : USER_ID_URL;

    try {
      const data = await fetchTwitchData(setURL);      
      user.value = data
    } catch (err) {
      console.log(err);
    }
    return user.value
  };

  return { getUserData };
};

export default fetchUser;