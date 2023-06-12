<template lang="html">
    <div 
    
    class="category_box">
        <img
        :src="formatAvatar" alt="catrgory img" class="category_img">
        <p class="category_title">{{ props.categoryName }}</p>
        <span class="category_tags"></span>
    </div>
</template>
<script setup lang="ts">
import { ref,defineProps,computed,onBeforeMount } from "vue";
import { useCategories } from "@/store/CategoryStore";
import { def } from "@vue/shared";

const categoryStore = useCategories()
const props = defineProps({
    categoryName: {
        type: String,
        required: true
    },
    categoryImg: {
        type: String,
        required: true
    }
})
const userAvatar = ref<string | null>(
null); // Use a ref to hold the userAvatar value

onBeforeMount(async () => {
  try {
    const avatar = await props.categoryImg; // Await the userAvatar promise
    userAvatar.value = avatar; // Assign the resolved value to the ref
  } catch (error) {
    console.error(error);
  }
});
const formatAvatar = computed(() => {
    return userAvatar.value?.replace("{width}x{height}", "150x200");
  });


</script>
<style lang="scss">

</style>