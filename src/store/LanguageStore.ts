import { defineStore } from "pinia";
import { ref } from 'vue'

export const useLanguagesStore = defineStore('langStore', () => {
    const selectedLang = ref('en')
    const langs = ref([
        { name: "Wszyscy", code: "all", icon: "all" },
        { name: "Polski", code: "pl", icon: "pl" },
        { name: "Angielski", code: "en", icon: "🇬🇧" },
        { name: "Niemiecki", code: "de", icon: "🇩🇪" },
        { name: "Francuski", code: "fr", icon: "🇫🇷" },
        { name: "Hiszpański", code: "es", icon: "🇪🇸" },
        { name: "Portugalski", code: "pt", icon: "🇵🇹" },
    ]);


    return { selectedLang, langs }
})