import { ref } from 'vue'

const count = ref(0)

import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js';

createApp(App).use(router).mount('#app')

