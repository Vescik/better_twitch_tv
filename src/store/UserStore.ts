import { defineStore } from "pinia";
import { ref } from "vue";

interface User {
    display_name: string;
    avatar: string;
    id: number | string;
    following: Array<any>;
}
export const useUserStore = defineStore("useUserStore", () => {
    const user = ref<User>({
        display_name: "",
        avatar: "",
        id: 0,
        following: []
    })
    const userFollowed = ref([])
 

   const setUserData = (id:number|string) => {
        user.value.id = id;
    }
    const setUser = (data:User) => {
        user.value = data
    }

    const setFollowData = async (param: string ) => {
         userFollowed.value = param
    }  

    return { user, setUserData,setUser,userFollowed,setFollowData }
})
