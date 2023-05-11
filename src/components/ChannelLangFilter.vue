<template lang="html">
    <select name="languages" >
        <option v-for="lang in languages" :key="lang.code" 
        :value="lang.code">{{ lang.name }}</option>
    </select>
</template>
<script>
import { ref } from "vue";
export default {
    setup() {
        const languages = ref([
            {name: "Polski", code: "pl",icon: "🇵🇱"},
            {name: "Angielski", code: "en",icon: "🇬🇧"},
            {name: "Niemiecki", code: "de",icon: "🇩🇪"},
            {name: "Francuski", code: "fr",icon: "🇫🇷"},
            {name: "Hiszpański", code: "es",icon: "🇪🇸"},
            {name: "Portugalski", code: "pt",icon: "🇵🇹"},
        ]);
        return {languages};
    },
}
</script>
<style lang="scss">
    
</style>