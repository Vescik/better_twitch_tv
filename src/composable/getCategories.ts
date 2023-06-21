import getAuth from "./getAuth";
import getTwitchData from "./getTwitchData";
import {useCategories} from '@/store/CategoryStore';

const fetchCategories =  () => {

    const { auth } = getAuth();
    const { fetchTwitchData } = getTwitchData();
    const categoryStore = useCategories();
    const url =  "https://api.twitch.tv/helix/games/top";

    const getCategoriesData = async () => {
        try{
            const token = await auth();
            const data = await fetchTwitchData(url);
            categoryStore.categoryList = data;
            console.log(data);
             
        }catch(err){
            console.log(err);
        }
    }
    return { getCategoriesData };
}
export default fetchCategories;
