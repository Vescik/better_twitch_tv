import { ref } from 'vue';
import getAuth from './getAuth';
import getTwitchData from './getTwitchData';
import { useChannels } from '@/store/ChannelStore';

interface TwitchStream {
  id: string;
  user_id: string;
  user_login: string;
  user_name: string;
  game_id: string;
  game_name: string;
  type: string;
  title: string;
  viewer_count: number;
  started_at: string;
  language: string;
  thumbnail_url: string;
  tag_ids: string[];
  tags: string[];
  is_mature: boolean;
}

const fetchChannels = () => {
  const { auth } = getAuth();
  const { fetchTwitchData } = getTwitchData();
  const channels = ref<TwitchStream[]>([]);
  const channelStore = useChannels();


  const getChannelsData = async (SELECTED_LANG:string) => {
    const USER_URL = `https://api.twitch.tv/helix/streams?language=${SELECTED_LANG}`;

    auth()
      .then((token: string) => fetchTwitchData(token, USER_URL))
      .then((data:TwitchStream[]) => {
        channelStore.channelList = data
        console.log(data);
        
      }) 
      .catch((err: string) => console.log(err));
  };
  
  return { channels, getChannelsData };  
};
 
export default fetchChannels; 