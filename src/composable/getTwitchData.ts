import axios from "axios";
const getTwitchData = () => {
   const fetchTwitchData = async (TOKEN:string,URL:string) =>{
        const config = {
          url: URL,
          method: 'GET',
          headers: {
            'Client-ID': process.env.VUE_APP_CLIENT_ID,
            'Authorization': `Bearer ${TOKEN}`,
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