//引入mockjs
import Mock from 'mockjs';

//把JSON數據引入
import home from './home.json';
import product from './product.json';
import productView from './product_view.json';
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

//自訂JSON
// const data = Mock.mock({
//     "list|20-60": [
//         {
//             "id": '@increment(1)',
//             "title": "@ctitle",
//             "content": "@cparagraph",
//             "add_time": "@date(yyyy-MM-dd hh:mm:ss)"
//         }
//     ]
// })
Mock.mock('/mock/productView', (options) => {
    let body = JSON.parse(options.body)
    console.log(body)
    return {
        code: 200,
        data: productView
    }
    // const index = data.list.findIndex(item => item.id === body.id)
    // data.list.splice(index, 1)
    // return {
    //     status: 200,
    //     message: '删除成功',
    //     list: data.list
    // }
})
// Mock.mock('/mock/homeSlide',{code:200,data:homeSlide});
// Mock.mock('/mock/homeAd',{code:200,data:homeAd});