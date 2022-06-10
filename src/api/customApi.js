import requestMock from './requestMock';
export const newsReq = ({ pageNo, pageSize }) => requestMock({ url: `/news/${pageNo}/${pageSize}`, method: 'get' });