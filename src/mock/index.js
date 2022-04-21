//引入mockjs
import Mock from 'mockjs';

//把JSON數據引入
import homeSlide from './homeSlide.json';
import homeAd from './homeAd.json';

//使用mockjs模拟数据 第一個請求網址 第二個請求數據
Mock.mock('/mock/homeSlide',{code:200,data:homeSlide});
Mock.mock('/mock/homeAd',{code:200,data:homeAd});