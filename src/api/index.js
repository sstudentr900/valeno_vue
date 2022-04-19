import requests from './request';
import mockrequests from './mockAjax';
export const reqHomeSlide2 = () => requests({ url: '/api', method: 'get' });
export const reqHomeSlide = () => mockrequests.get('/homeSlide');