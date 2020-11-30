import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import store from '@/store';
import axios from 'axios';


createApp(App).use(router, store, axios).mount('#app');
