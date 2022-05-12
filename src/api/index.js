import requests from './request';
import requestMock from './requestMock';
// export const reqHomeSlide2 = () => requests({ url: '/api', method: 'get' });
export const reqHome = () => requestMock.get('/home');
export const productReq = () => requestMock.get('/product');
export const productListReq = (params) => requestMock({ url: '/productList', data: params });
export const productViewReq = (params) => requestMock({ url: '/productView', data: params });
export const addOrUpdateShopCartReq = (params) => requestMock({ url: '/addToCart', data: params});
export const newsReq = (params) => requestMock({ url: '/news', data: params });
// export const newsReq = () => requestMock.get('/news');
export const newsViewReq = () => requestMock.get('/newsView');
export const beautyReq = (params) => requestMock({ url: '/beauty', data: params });
// export const beautyReq = () => requestMock.get('/beauty');
export const storeReq = () => requestMock({ url: '/store', method: 'get' });
export const contactReq = () => requestMock.get('/contact');
export const contactOkReq = () => requestMock.get('/contactOk');
export const memberReq = () => requestMock.get('/member');
export const memberRegisterReq = () => requestMock.get('/memberRegister');
export const memberRegisterOkReq = () => requestMock.get('/memberRegisterOk');
export const memberModifyReq = () => requestMock.get('/memberModify');
export const memberPasswordReq = () => requestMock.get('/memberPassword');
export const memberOrderReq = () => requestMock.get('/memberOrder');
export const memberCouponReq = () => requestMock.get('/memberCoupon');
export const memberTrackReq = () => requestMock.get('/memberTrack');
export const checkoutReq = () => requestMock.get('/checkout');
export const checkoutEnterReq = () => requestMock.get('/checkoutEnter');
export const checkoutOkReq = () => requestMock.get('/checkoutOk');
export const faqReq = () => requestMock.get('/faq');



//要給空對象
export const reqHomeAdPost = (params) => requests({ url: '/api', method: 'post', data: params });