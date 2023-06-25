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
            'Client-ID': "bkh1n11ohrua2vuej6snus4q6l6bk1",
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