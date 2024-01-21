<template>
    <div class="login_container" >
        <div class="login_left">
            <img src="@/assets/shapes.png" alt="">
        </div>
        <div class="login_right">
            <div class="login_right_panel" >
        <h1>Zaloguj</h1>
        <input v-model="accesTokenStore.accesToken" type="text" placeholder="Podaj token użytkownika"> 
        <button >
            <a :href="url">
                Połącz konto z Twitch
            </a>   
        </button>

    </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { onBeforeMount, onUnmounted, onBeforeUnmount,onMounted } from 'vue'
import { useAccesTokenStore } from '@/store/AccesTokenStore'
import { useRouter } from 'vue-router'

const accesTokenStore = useAccesTokenStore()
//
const moveMouse = (e) => {
    const bg = document.querySelector('.login_left img')
        const x = e.clientX / window.innerWidth
        const y = e.clientY / window.innerHeight
        bg.style.transform = `translate(-${x * 20}px, -${y * 20}px)`
    } 

   
onMounted(() => {
    window.addEventListener('mousemove', moveMouse)
})
onUnmounted(() => {
    window.removeEventListener('mousemove', moveMouse)
})


const client_id = "bkh1n11ohrua2vuej6snus4q6l6bk1"
const redirect_uri = "http://localhost:8080/"
//const redirect_uri = "https://twitchsimplified.netlify.app/"
const url = `https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=${client_id}&redirect_uri=${redirect_uri}&scope=channel%3Amanage%3Apolls+channel%3Aread%3Apolls+user%3Aread%3Afollows&state=c3ab8aa609ea11e793ae92361f002671`;



</script>

<style lang="scss" scoped>
.login{
    &_container{
        position: absolute;
        min-height: 400px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #18181b;
        border-radius: 20px;
        padding: 40px 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        flex-wrap: wrap;
        color: white;
        h1{
            text-align: center;
            font-size: 3rem;
            margin-bottom: 1rem;
        }
        & button{
            background-color: #9147ff;
            border: none;
            padding: .5rem 1rem;
            border-radius: 5px;
            a{
                color: white;
                text-decoration: none;
                font-size: 1.2rem;
            }
        }
        
    }
    &_left{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        img{
            width: 100%;
            margin: 20px;

        }
    }
    &_right{
        align-items: center;
        
        &_panel{
        width: clamp(300px, 50%, 500px);
        margin: 20px;
        height: 100%;
        padding: 2rem;



        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        background-color: #262629;
        border-radius: 20px;


        input{
            border: #9147ff 2px solid;
            border-radius: 10px;
            padding: 8px 12px;
            margin-bottom: 10px;
        }
        
    }
    }

   
}

</style>