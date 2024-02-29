<template>
    <div class="login_container" >
        <div class="login_left">
            <CanvasModel />
        </div>
        <div class="login_right">
            <div class="login_right_panel" >
        <h1>Zaloguj</h1>
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
import CanvasModel from '@/components/CanvasModel.vue'

const client_id = "bkh1n11ohrua2vuej6snus4q6l6bk1"
//const redirect_uri = "http://localhost:8080/"
const redirect_uri = "https://twitchsimplified.netlify.app/"
const url = `https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=${client_id}&redirect_uri=${redirect_uri}&scope=channel%3Amanage%3Apolls+channel%3Aread%3Apolls+user%3Aread%3Afollows&state=c3ab8aa609ea11e793ae92361f002671`;


</script>

<style lang="scss" scoped>
.login{
    &_container{
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;

        height: 80vh;
        

    
        h1{
            text-align: center;
            font-size: 3rem;
            margin-bottom: 1rem;
            border-bottom: #9292aa 5px solid;
           
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
      
    }
    &_right{
        align-items: center;
        
        &_panel{
        width: clamp(350px, 50%, 500px);
        margin: 20px;
        height: 400px;
        padding: 2rem;



        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;

        background-color: #262629;
        border-radius: 20px;

        button{
            padding: 15px 20px;
        }

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