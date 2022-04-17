import requests from './request';
export const reqHomeSlide = () => requests({ url: '/api', method: 'get' });