import axios from "axios";
import { useAccesTokenStore } from "@/store/AccesTokenStore";

const getTwitchData = () => {
   const fetchTwitchData = async (URL:string) =>{
        const tokenStore = useAccesTokenStore();
        const token = tokenStore.accesToken;
        const config = {
          url: URL,
          method: 'GET',
          headers: {
            'Client-ID': process.env.VUE_APP_CLIENT_ID,
            'Authorization': `Bearer ${document.cookie}`,
          }
        };
        return axios.get(config.url, config)
          .then((res) => {
            return res.data.data;
          })
          .catch((err:string) => {
            console.log(err);
          }); 
      
      }
      return {fetchTwitchData}
}
export default getTwitchData