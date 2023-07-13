import { defineStore } from "pinia";
import { ref } from "vue";

export const useAlertStore = defineStore("useAlertStore", () => {
    const alert = ref({
        show: false,
        message: "",
        type: "",
    });
    


    const showAlert = (message: string, type: string) => {
        alert.value.show = true;
        alert.value.message = message;
        alert.value.type = type;

        setTimeout(() => {
            alert.value.show = false;
        }
        , 1000);
    };
    return { alert, showAlert };
    })