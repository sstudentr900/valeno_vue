import requests from './request';
import mockrequests from './mockAjax';
export const reqHomeSlide2 = () => requests({ url: '/api', method: 'get' });
export const reqHomeSlide = () => mockrequests.get('/homeSlide');
export const reqHomeAd = () => mockrequests.get('/homeAd');

//要給空對象
export const reqHomeAdPost = (params) => requests({ url: '/api', method: 'post',data:params});