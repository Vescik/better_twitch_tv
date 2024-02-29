import { ref } from 'vue';
import getTwitchData from './getTwitchData';
import { useChannels } from '@/store/ChannelStore';
import { useLanguagesStore } from '@/store/LanguageStore';
import { useCategories } from '@/store/CategoryStore';

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
  const { fetchTwitchData } = getTwitchData();
  const channels = ref<TwitchStream[]>([]);
  const channelStore = useChannels();
  const langStore = useLanguagesStore();
  const categoryStore = useCategories();


  const handleChoice = (choice: string) => {
    if (choice === 'byLang') {
      if (langStore.selectedLang === 'all') {
        return `https://api.twitch.tv/helix/streams?first=24`
      } else {
        return `https://api.twitch.tv/helix/streams?language=${langStore.selectedLang}&first=24`
      }
    } else if (choice === 'byGame') {
      if (langStore.selectedLang === 'all') {
        return `https://api.twitch.tv/helix/streams?game_id=${categoryStore.gameID}&first=24`
      } else {
        return `https://api.twitch.tv/helix/streams?game_id=${categoryStore.gameID}&language=${langStore.selectedLang}&first=24`
      }
    } else {
      return `https://api.twitch.tv/helix/streams?first=24&language=${langStore.selectedLang}`
    }
  }

  const getChannelsData = async (METHOD: string) => {
    const URL = handleChoice(METHOD);
    try {
      const data = await fetchTwitchData(URL);
      channelStore.channelList = data
    } catch (err) {
      console.log(err);
    }

  };

  return { channels, getChannelsData };
};

export default fetchChannels; 