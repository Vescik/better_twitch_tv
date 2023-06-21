import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("useUserStore", () => {
    const userName = ref("");
    const userImage = ref("");

    const setUserName = (name: string) => {
        userName.value = name;
    }
    const setUserImage = (image: string) => {
        userImage.value = image;
    }
    return { userName, userImage, setUserName, setUserImage }
})
