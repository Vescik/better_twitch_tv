import axios from "axios";
import { useUserStore } from "@/store/UserStore";

const validateToken = async (token: string) => {
    const userStore = useUserStore();
    const config = {
        url: "https://id.twitch.tv/oauth2/validate",
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
    return axios.get(config.url, config)
        .then((res) => {
            userStore.setUserData(res.data.user_id);
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        }
        )
}
export default validateToken;