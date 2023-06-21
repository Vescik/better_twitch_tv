import { ref } from 'vue';
import getAuth from './getAuth';
import getTwitchData from './getTwitchData';

const fetchUser = () => {
  const { auth } = getAuth();
  const { fetchTwitchData } = getTwitchData();

  const user = ref([]);

  const getUserData = async (userID:string) => {
    const USER_ID_URL = `https://api.twitch.tv/helix/users?id=${userID}` ;
    const USER_NAME_URL = `https://api.twitch.tv/helix/users?id=${userID}` ;
    try{
      const token = await auth();
      const data = await fetchTwitchData(USER_ID_URL);
      user.value = data
    }catch(err){
      console.log(err);
    }
    return user.value
  };
   
  return {getUserData };  
}; 
  
export default fetchUser;