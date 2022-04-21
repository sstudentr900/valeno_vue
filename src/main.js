import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/mock';//引入JSON
import 'swiper/css';//引入swiper.css
import 'swiper/css/navigation';
import 'swiper/css/pagination';
createApp(App).use(store).use(router).mount('#app')
