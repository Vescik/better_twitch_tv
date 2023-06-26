import getTwitchData from "./getTwitchData";
import {useCategories} from '@/store/CategoryStore';

const fetchCategories =  () => {

    const { fetchTwitchData } = getTwitchData();
    const categoryStore = useCategories();
    const url =  "https://api.twitch.tv/helix/games/top";

    const getCategoriesData = async () => {
        try{
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
