import { defineStore } from "pinia";
import { ref } from "vue";
export const useModalStore = defineStore("useModalStore", () => {
    const modal = ref(false);
    const modalData = ref({});
    
    const openModal = (data:string) => {
        modal.value = true;
        modalData.value = data;
    };
    
    const closeModal = () => {
        modal.value = false;
        modalData.value = {};
    };
    
    return { modal, modalData, openModal, closeModal };
    }
);
