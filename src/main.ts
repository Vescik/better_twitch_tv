import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import Tres from '@tresjs/core'

createApp(App).use(router).use(createPinia()).use(Tres).mount('#app')
