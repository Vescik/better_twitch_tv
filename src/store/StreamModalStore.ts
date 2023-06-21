import { defineStore } from "pinia";
import { ref } from "vue";

interface ChannelDataInterface {
    [key: string]: string | number;
    userID: string;
    userAvatar: string;
    thumbnailURL: string;
    channelName: string;
    channelTitleShorted: string;
    channelTitle: string;
    channelCategory: string;
    channelViewers: number;
  }

export const useModalStore = defineStore("useModalStore", () => {
    const showModal = ref(false);
    const channelData = ref<ChannelDataInterface>();

     function processChannelData  (data: ChannelDataInterface): ChannelDataInterface {
        const processedData: ChannelDataInterface = {
          userID: '',
          userAvatar: '',
          thumbnailURL: '',
          channelName: '',
          channelTitleShorted: '',
          channelTitle: '',
          channelCategory: '',
          channelViewers: 0
        };
        for (const key in data) {
          processedData[key] =  data[key];
        }
        
        return processedData;
      }

    const openModal = (data:ChannelDataInterface) => {
        showModal.value = true;
        const dataProcessed = processChannelData(data);
        channelData.value = dataProcessed;
        console.log(channelData.value);
        
    };
    
    const closeModal = () => {
        showModal.value = false;
    };
    
    return { showModal, openModal, closeModal,channelData };
    }
);
