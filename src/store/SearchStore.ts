import { defineStore } from "pinia";
import { ref } from "vue";

export const useSearchStore = defineStore("useSearchStore", () => {
    const searchName = ref("");
    return { searchName };
})