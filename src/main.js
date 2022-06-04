import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/mock';//引入JSON
import 'swiper/css';//引入swiper.css
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import FnPagers from "@/components/FnPagers"; //引入自訂頁碼
import mitt from "mitt"; //引入全局跨元件通訊
// const eventBus = mitt();
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css';

const app = createApp(App);
app.config.globalProperties.eventBus = mitt(); //引入全局跨元件通訊
app.component('FnPagers', FnPagers); //引入自訂頁碼
app.use(store).use(router).use(ElementPlus).mount('#app');
// createApp(App).use(store).use(router).mount('#app')
