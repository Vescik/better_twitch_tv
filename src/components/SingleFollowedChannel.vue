<template>

        <transition name="fade">
            <div @click="streamModalStore.openModal(props)" >
            <img :src="channel.profileImg" alt="">
            <p>{{ props.channel.broadcaster_name }}</p>
            </div>

        </transition>

</template>

<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import { defineProps } from "@/store/UserStore";
import fetchUser from "@/composable/getSingleUser";
import { useModalStore } from '@/store/StreamModalStore';

const streamModalStore = useModalStore();

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
onBeforeMount(() =>{
    console.log(props)
}) 
 onBeforeMount(async () => {
   const x = await getUserData(Number(props.channel.broadcaster_id))
   console.log(x)
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