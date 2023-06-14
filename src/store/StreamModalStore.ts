import { defineStore } from "pinia";
import { ref } from "vue";


export const useModalStore = defineStore("useModalStore", () => {
    const showModal = ref(false);
    const channelData = ref(null);
     
    const openModal = (data:any) => {
        showModal.value = true;
        channelData.value = data;
        console.log(channelData.value);
        

        
    };
    
    const closeModal = () => {
        showModal.value = false;
    };
    
    return { showModal,channelData, openModal, closeModal };
    }
);
