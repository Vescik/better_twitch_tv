import { defineStore } from "pinia";
import { ref } from "vue";

interface Channel {
    thumbnailURL: string;
    channelTitle: string;
    channelName: string;
    channelViewers: number;
    channelCategory: string;
    channelTitleShorted: string;
    userAvatar: string;
    userID: string;
}

export const useWatchTogetherStore = defineStore("useWatchTogetherStore", () => {
        const watchTogetherList = ref<Channel[]>([]);
        const showMultiModal = ref(false);


        const addWatchTogether = (channel:Channel) => {
            watchTogetherList.value.push(channel);
        }

        const removeWatchTogether = (channel:string) => {
            const index = watchTogetherList.value.findIndex((item) => item.channelName === channel);
            watchTogetherList.value.splice(index, 1);
            return watchTogetherList.value
        }
        const toggleMultiModal = () => {
            showMultiModal.value = !showMultiModal.value;
        }
        return {
            watchTogetherList,
            addWatchTogether,
            removeWatchTogether,
            showMultiModal,
            toggleMultiModal
        };
    });