<template lang="html">
  <div class="category_box" >
    <img @click="handleCategoryClick" :src="formatAvatar" alt="catrgory img" class="category_img">
    <p class="category_title">{{ props.categoryName }}</p>
    <span class="category_tags"></span>
  </div>
</template>
<script setup lang="ts">
import { ref, defineProps, computed, onBeforeMount } from "vue";
import { useCategories } from "@/store/CategoryStore";
import { useCategFilter } from "@/store/CategFilterStore";
import { useChannels } from "@/store/ChannelStore";
const categFilterStore = useCategFilter()

const categoryStore = useCategories()
const channelStore = useChannels()

const props = defineProps({
  categoryName: {
    type: String,
    required: true
  },
  categoryImg: {
    type: String,
    required: true
  },
  gameId: {
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
const setGameId = () => {
  const gameId = props.gameId
  categoryStore.gameID = gameId
  channelStore.getChannelsData('byGame')
  categFilterStore.filterState = 'channels'
}
const handleCategoryClick = () => {
  setGameId()
  const category = props.categoryName
  categFilterStore.setUsedFilters(category)
}



</script>
<style lang="scss">
@import "../scss/components/single-category";
</style>