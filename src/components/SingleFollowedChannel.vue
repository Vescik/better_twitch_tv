<template>

        <transition name="fade">
            <div v-if="channel.profileImg">
                <img :src="channel.profileImg" alt="">
            <p>{{ channel.name }}</p>
            </div>

        </transition>

</template>

<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import { defineProps } from "@/store/UserStore";
import fetchUser from "@/composable/getSingleUser";


const props = defineProps({
    channel: {
        type: Object,
        required: true
    }
})
const { getUserData } = fetchUser();
const channel = ref({
    name: '',
    profileImg: '',

})

onBeforeMount(async () => {
    const x = await getUserData(Number(props.channel.to_id))
    channel.value.name = x[0].display_name
    channel.value.profileImg = x[0].profile_image_url
})


</script>

<style scoped lang="scss" >
.fade-enter-active, .fade-leave-active {
  transition: opacity .1s;
}

.fade-enter, .fade-leave-to {
  opacity: 1;
}
.channel {
    &_container {
        width: 150px;
        height: 150px;
        margin: 10px;

        img {
            width: 100%;
            height: 100%;
            border-radius: 20px;
        }

        p {
            color: white;
            font-size: 20px;
            font-weight: 700;
        }
    }
}
</style>