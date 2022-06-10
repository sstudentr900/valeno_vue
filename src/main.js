import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/mock'; //引入JSON
import * as api from '@/api/customApi.js'; //引入自訂API
import 'swiper/css'; //引入swiper.css
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import FnPagers from "@/components/FnPagers"; //引入自訂頁碼
import mitt from "mitt"; //引入全局跨元件通訊
// const eventBus = mitt();
import ElementPlus from 'element-plus' //引入ElementPlus
import 'element-plus/dist/index.css';
import vueLazyload from 'vue-lazyload'; //圖片加載
import VeeValidate from "vee-validate"; //驗證
// newsReq();
const app = createApp(App);
app.config.globalProperties.eventBus = mitt(); //引入全局跨元件通訊
app.config.globalProperties.$api = api; //引入自訂API
app.component('FnPagers', FnPagers); //引入自訂頁碼
app.use(store).use(router).use(ElementPlus).use(vueLazyload).use(VeeValidate).mount('#app');
// createApp(App).use(store).use(router).mount('#app')