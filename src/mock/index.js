//引入mockjs
import Mock from 'mockjs';

//把JSON數據引入
import home from './home.json';
import product from './product.json';
import news from './news.json';
import beauty from './beauty.json';
import store from './store.json';
// import homeAd from './homeAd.json';


//使用mockjs模拟数据 第一個請求網址 第二個請求數據
Mock.mock('/mock/home', { code: 200, data: home });
Mock.mock('/mock/product', { code: 200, data: product });
Mock.mock('/mock/news', { code: 200, data: news });
Mock.mock('/mock/beauty', { code: 200, data: beauty });
Mock.mock('/mock/store', { code: 200, data: store });
// Mock.mock('/mock/homeSlide',{code:200,data:homeSlide});
// Mock.mock('/mock/homeAd',{code:200,data:homeAd});