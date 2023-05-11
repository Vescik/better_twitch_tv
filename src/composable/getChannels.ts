import { ref } from 'vue';
import getAuth from './getAuth';
import getTwitchData from './getTwitchData';

const fetchChannels = (langState:string) => {
  const { auth } = getAuth();
  const { fetchTwitchData } = getTwitchData();
  const filterLang = ref(langState);
  const channels = ref([]);

  const USER_URL = `https://api.twitch.tv/helix/streams?language=${filterLang.value}`;

  auth()
    .then((token: string) => fetchTwitchData(token, USER_URL))
    .then((data) => channels.value = data)
    .catch((err: string) => console.log(err));

  return { channels, fetchChannels };
};

export default fetchChannels;