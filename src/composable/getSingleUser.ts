import { ref } from 'vue';
import getAuth from './getAuth';
import getTwitchData from './getTwitchData';

const fetchUser = () => {
  const { auth } = getAuth();
  const { fetchTwitchData } = getTwitchData();


  const user = ref([]);

  const getUserData = async (userID:string) => {

    const USER_URL = `https://api.twitch.tv/helix/users?id=${userID}` ;

    auth()
    .then((token: string) => fetchTwitchData(token, USER_URL))
    .then((data) => {
                
      user.value = data
    }) 
    .catch((err: string) => console.log(err));
    return {user}
  };
   
  return {getUserData };  
}; 
  
export default fetchUser;