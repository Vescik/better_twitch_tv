<template lang="html">
    <div  v-if="categFilterStore.filterState === 'channels'" class="streams">
        <div 
        v-for="channel in channelStore.channelList" 
        :key="channel.user_id" 
        class="streams_single"
        >
            <SingleChannel
                :userID="Number(channel.user_id)"
                :userAvatar="getAvatar(Number(channel.user_id))"
                :thumbnailURL="formatThumbnail(channel)"
                :channelName="channel.user_name"
                :channelTitleShorted="formatTtile(channel)"
                :channelTitle="channel.title"
                :channelCategory="channel.game_name"
                :channelViewers="channel.viewer_count"
            />
        </div>
    </div>
    <div class="streams" v-else>
        <SingleCategory
        v-for="categ in categoryStore.categoryList"
        :key="categ.id"
        :gameId="categ.id"
        :categoryName="categ.name"
        :categoryImg="categ.box_art_url"
        />
    </div>

</template>
<script setup lang="ts">
    import SingleChannel from './SingleChannel.vue';
    import SingleCategory from './SingleCategory.vue';
    import { useChannels } from '@/store/ChannelStore'
    import { useCategories } from '@/store/CategoryStore'
    import fetchUser from '@/composable/getSingleUser'
    import {computed} from 'vue'; 
    import { useCategFilter } from '@/store/CategFilterStore';

 
    const categFilterStore = useCategFilter()
    const categoryStore = useCategories()

    const { getUserData } = fetchUser();
    const channelStore = useChannels()

    const getAvatar = computed(()=>{
        return async (userID:number)=>{
            let user:{profile_image_url:string}[] = await getUserData(userID)            
            return user[0].profile_image_url
            
        }
    })
    const formatThumbnail = computed( () => {
        return  ( channel:{thumbnail_url:string}) => {
           return  channel.thumbnail_url.replace("{width}x{height}", "320x180");
      };
    }); 
    const formatTtile = computed(() => { 
        return (channel:{title:string}) => {
           return channel.title.slice(0, 25) + "...";
      };
    });
    



</script>
<style lang="scss">
    .streams{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        &_single{
            margin: 5px;
            width: clamp(290px, 15%, 400px);
        }

       
    }
 

    

</style>