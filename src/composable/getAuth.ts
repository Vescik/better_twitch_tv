import axios from "axios";
const getAuth = () => {
    const auth = async () => {
        const GET_TOKEN = "https://id.twitch.tv/oauth2/token";
          const data = {
            client_id: process.env.VUE_APP_CLIENT_ID,
            client_secret: process.env.VUE_APP_KEY,
            grant_type: 'client_credentials'
          };
          const config = {
            headers: {
              'Content-Type': 'application/json'
            }
    };
  
    return axios.post(GET_TOKEN, data, config)
      .then((res) => {
        return res.data.access_token;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return { auth }
}
export default getAuth