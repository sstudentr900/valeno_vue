//引入mockjs
import Mock from 'mockjs';
//把JSON數據引入
import store from './store.json';

//自訂JSON
const slide = [{
        "src": "ban1.jpg",
        "id": 1
    },
    {
        "src": "ban2.jpg",
        "id": 2
    },
    {
        "src": "ban1.jpg",
        "id": 3
    }
];
const productList = [{
        "id": 1,
        "href": "product_view",
        "src": "https://imgur.com/eJEZuLC.jpg",
        "en": "Mistine - Groove complete",
        "ti": "12色完美眼彩盤",
        "sale": "泰國必買",
        "price": "NT$529",
        "special_price": "NT$429",
        "describe": "GROOVE眼影盤集結最常用的12色，一次讓你擁有霧面、亮粉與微光三種眼影質感，都給你超顯色、持久、防水、抗汗的迷人眼妝。",
        "specification": "9G / 1.3G*12色",
        "introduce": "https://imgur.com/Rkfy1Ze.jpg",
        "illustrate": "用途:使眼部色彩豐富<br>使用方式：依照喜好選擇顏色並依序塗抹在眼皮上",
        "element": "容量：9g<br>成分: 如包裝所標示<br>保存期限：3年<br>產地：泰國<br> 高市衛廣字第10505018號",
        "productImgs": ["https://imgur.com/eJEZuLC.jpg", "https://imgur.com/nDjOWZU.jpg", "https://imgur.com/ULKIm2M.jpg", "https://imgur.com/1Q7xtcu.jpg", "https://imgur.com/QLM7KBM.jpg", "https://imgur.com/ULKIm2M.jpg"],
    },
    {
        "id": 2,
        "href": "product_view",
        "src": "https://imgur.com/nDjOWZU.jpg",
        "en": "Mistine - Groove complete",
        "ti": "12色完美眼彩盤",
        "sale": "Mistine周年慶全館85折",
        "price": "NT$529",
        "special_price": "NT$429",
        "describe": "GROOVE眼影盤集結最常用的12色，一次讓你擁有霧面、亮粉與微光三種眼影質感，都給你超顯色、持久、防水、抗汗的迷人眼妝。",
        "specification": "9G / 1.3G*12色",
        "introduce": "https://imgur.com/Rkfy1Ze.jpg",
        "illustrate": "用途:使眼部色彩豐富<br>使用方式：依照喜好選擇顏色並依序塗抹在眼皮上",
        "element": "容量：9g<br>成分: 如包裝所標示<br>保存期限：3年<br>產地：泰國<br> 高市衛廣字第10505018號",
        "productImgs": ["https://imgur.com/nDjOWZU.jpg", "https://imgur.com/QLM7KBM.jpg", "https://imgur.com/ULKIm2M.jpg", "https://imgur.com/1Q7xtcu.jpg", "https://imgur.com/QLM7KBM.jpg", "https://imgur.com/ULKIm2M.jpg"],
    },
    {
        "id": 3,
        "href": "product_view",
        "src": "https://imgur.com/QLM7KBM.jpg",
        "en": "Mistine - Groove complete",
        "ti": "12色完美眼彩盤",
        "sale": "泰國必買",
        "price": "NT$529",
        "special_price": "NT$429",
        "describe": "GROOVE眼影盤集結最常用的12色，一次讓你擁有霧面、亮粉與微光三種眼影質感，都給你超顯色、持久、防水、抗汗的迷人眼妝。",
        "specification": "9G / 1.3G*12色",
        "introduce": "https://imgur.com/Rkfy1Ze.jpg",
        "illustrate": "用途:使眼部色彩豐富<br>使用方式：依照喜好選擇顏色並依序塗抹在眼皮上",
        "element": "容量：9g<br>成分: 如包裝所標示<br>保存期限：3年<br>產地：泰國<br> 高市衛廣字第10505018號",
        "productImgs": ["https://imgur.com/QLM7KBM.jpg", "https://imgur.com/nDjOWZU.jpg", "https://imgur.com/ULKIm2M.jpg", "https://imgur.com/1Q7xtcu.jpg", "https://imgur.com/QLM7KBM.jpg", "https://imgur.com/ULKIm2M.jpg"],
    },
    {
        "id": 4,
        "href": "product_view",
        "src": "https://imgur.com/1Q7xtcu.jpg",
        "en": "Mistine - Groove complete",
        "ti": "12色完美眼彩盤",
        "sale": "Mistine周年慶全館85折",
        "price": "NT$529",
        "special_price": "NT$429",
        "describe": "GROOVE眼影盤集結最常用的12色，一次讓你擁有霧面、亮粉與微光三種眼影質感，都給你超顯色、持久、防水、抗汗的迷人眼妝。",
        "specification": "9G / 1.3G*12色",
        "introduce": "https://imgur.com/Rkfy1Ze.jpg",
        "illustrate": "用途:使眼部色彩豐富<br>使用方式：依照喜好選擇顏色並依序塗抹在眼皮上",
        "element": "容量：9g<br>成分: 如包裝所標示<br>保存期限：3年<br>產地：泰國<br> 高市衛廣字第10505018號",
        "productImgs": ["https://imgur.com/1Q7xtcu.jpg", "https://imgur.com/nDjOWZU.jpg", "https://imgur.com/ULKIm2M.jpg", "https://imgur.com/1Q7xtcu.jpg", "https://imgur.com/QLM7KBM.jpg", "https://imgur.com/ULKIm2M.jpg"],
    },
    {
        "id": 5,
        "href": "product_view",
        "src": "https://imgur.com/ULKIm2M.jpg",
        "en": "Mistine - Groove complete",
        "ti": "12色完美眼彩盤",
        "sale": "Mistine周年慶全館85折",
        "price": "NT$529",
        "special_price": "NT$429",
        "describe": "GROOVE眼影盤集結最常用的12色，一次讓你擁有霧面、亮粉與微光三種眼影質感，都給你超顯色、持久、防水、抗汗的迷人眼妝。",
        "specification": "9G / 1.3G*12色",
        "introduce": "https://imgur.com/Rkfy1Ze.jpg",
        "illustrate": "用途:使眼部色彩豐富<br>使用方式：依照喜好選擇顏色並依序塗抹在眼皮上",
        "element": "容量：9g<br>成分: 如包裝所標示<br>保存期限：3年<br>產地：泰國<br> 高市衛廣字第10505018號",
        "productImgs": ["https://imgur.com/ULKIm2M.jpg", "https://imgur.com/nDjOWZU.jpg", "https://imgur.com/ULKIm2M.jpg", "https://imgur.com/1Q7xtcu.jpg", "https://imgur.com/QLM7KBM.jpg", "https://imgur.com/ULKIm2M.jpg"],
    },
    {
        "id": 6,
        "href": "product_view",
        "src": "https://imgur.com/eJEZuLC.jpg",
        "en": "Mistine - Groove complete",
        "ti": "12色完美眼彩盤",
        "sale": "泰國必買",
        "price": "NT$529",
        "special_price": "NT$429",
        "describe": "GROOVE眼影盤集結最常用的12色，一次讓你擁有霧面、亮粉與微光三種眼影質感，都給你超顯色、持久、防水、抗汗的迷人眼妝。",
        "specification": "9G / 1.3G*12色",
        "introduce": "https://imgur.com/Rkfy1Ze.jpg",
        "illustrate": "用途:使眼部色彩豐富<br>使用方式：依照喜好選擇顏色並依序塗抹在眼皮上",
        "element": "容量：9g<br>成分: 如包裝所標示<br>保存期限：3年<br>產地：泰國<br> 高市衛廣字第10505018號",
        "productImgs": ["p06.jpg", "https://imgur.com/nDjOWZU.jpg", "https://imgur.com/ULKIm2M.jpg", "https://imgur.com/1Q7xtcu.jpg", "https://imgur.com/QLM7KBM.jpg", "https://imgur.com/ULKIm2M.jpg"],
    },
    {
        "id": 7,
        "href": "product_view",
        "src": "https://imgur.com/nDjOWZU.jpg",
        "en": "Mistine - Groove complete",
        "ti": "12色完美眼彩盤",
        "sale": "Mistine周年慶全館85折",
        "price": "NT$529",
        "special_price": "NT$429",
        "describe": "GROOVE眼影盤集結最常用的12色，一次讓你擁有霧面、亮粉與微光三種眼影質感，都給你超顯色、持久、防水、抗汗的迷人眼妝。",
        "specification": "9G / 1.3G*12色",
        "introduce": "https://imgur.com/Rkfy1Ze.jpg",
        "illustrate": "用途:使眼部色彩豐富<br>使用方式：依照喜好選擇顏色並依序塗抹在眼皮上",
        "element": "容量：9g<br>成分: 如包裝所標示<br>保存期限：3年<br>產地：泰國<br> 高市衛廣字第10505018號",
        "productImgs": ["p07.jpg", "https://imgur.com/nDjOWZU.jpg", "https://imgur.com/ULKIm2M.jpg", "https://imgur.com/1Q7xtcu.jpg", "https://imgur.com/QLM7KBM.jpg", "https://imgur.com/ULKIm2M.jpg"],
    },
    {
        "id": 8,
        "href": "product_view",
        "src": "https://imgur.com/eJEZuLC.jpg",
        "en": "Mistine - Groove complete",
        "ti": "12色完美眼彩盤",
        "sale": "泰國必買",
        "price": "NT$529",
        "special_price": "NT$429",
        "describe": "GROOVE眼影盤集結最常用的12色，一次讓你擁有霧面、亮粉與微光三種眼影質感，都給你超顯色、持久、防水、抗汗的迷人眼妝。",
        "specification": "9G / 1.3G*12色",
        "introduce": "https://imgur.com/Rkfy1Ze.jpg",
        "illustrate": "用途:使眼部色彩豐富<br>使用方式：依照喜好選擇顏色並依序塗抹在眼皮上",
        "element": "容量：9g<br>成分: 如包裝所標示<br>保存期限：3年<br>產地：泰國<br> 高市衛廣字第10505018號",
        "productImgs": ["p08.jpg", "https://imgur.com/nDjOWZU.jpg", "https://imgur.com/ULKIm2M.jpg", "https://imgur.com/1Q7xtcu.jpg", "https://imgur.com/QLM7KBM.jpg", "https://imgur.com/ULKIm2M.jpg"],
    }
];
const newsList = [{
        "href": "news_view",
        "src": "n01.jpg",
        "id": 1,
        "day": "17",
        "month": "APR",
        "year": "2017",
        "title": "開架好用美妝品總整理！女明星彩妝師化妝箱都用這些",
        "text": "開架底妝百百款 教妳怎麼聰明挑才能買對不失手！"
    },
    {
        "href": "news_view",
        "src": "n02.jpg",
        "id": 2,
        "day": "06",
        "month": "JUN",
        "year": "2017",
        "title": "開架好用美妝品總整理！女明星彩妝師化妝箱都用這些",
        "text": "對於熱愛時尚、美妝的女孩來說，因為喜歡嘗鮮、什麼都想試試看，使用彩妝品怎麼可能會有忠臣度可言！因此...."
    },
    {
        "href": "news_view",
        "src": "n03.jpg",
        "id": 3,
        "day": "17",
        "month": "APR",
        "year": "2017",
        "title": "開架好用美妝品總整理！女明星彩妝師化妝箱都用這些",
        "text": "開架底妝百百款 教妳怎麼聰明挑才能買對不失手！"
    },
    {
        "href": "news_view",
        "src": "n04.jpg",
        "id": 4,
        "day": "06",
        "month": "JUN",
        "year": "2017",
        "title": "開架好用美妝品總整理！女明星彩妝師化妝箱都用這些",
        "text": "對於熱愛時尚、美妝的女孩來說，因為喜歡嘗鮮、什麼都想試試看，使用彩妝品怎麼可能會有忠臣度可言！因此...."
    },
    {
        "href": "news_view",
        "src": "n01.jpg",
        "id": 5,
        "day": "17",
        "month": "APR",
        "year": "2017",
        "title": "開架好用美妝品總整理！女明星彩妝師化妝箱都用這些",
        "text": "開架底妝百百款 教妳怎麼聰明挑才能買對不失手！"
    },
    {
        "href": "news_view",
        "src": "n02.jpg",
        "id": 6,
        "day": "06",
        "month": "JUN",
        "year": "2017",
        "title": "開架好用美妝品總整理！女明星彩妝師化妝箱都用這些",
        "text": "對於熱愛時尚、美妝的女孩來說，因為喜歡嘗鮮、什麼都想試試看，使用彩妝品怎麼可能會有忠臣度可言！因此...."
    },
    {
        "href": "news_view",
        "src": "n03.jpg",
        "id": 7,
        "day": "17",
        "month": "APR",
        "year": "2017",
        "title": "開架好用美妝品總整理！女明星彩妝師化妝箱都用這些",
        "text": "開架底妝百百款 教妳怎麼聰明挑才能買對不失手！"
    },
    {
        "href": "news_view",
        "src": "n04.jpg",
        "id": 8,
        "day": "06",
        "month": "JUN",
        "year": "2017",
        "title": "開架好用美妝品總整理！女明星彩妝師化妝箱都用這些",
        "text": "對於熱愛時尚、美妝的女孩來說，因為喜歡嘗鮮、什麼都想試試看，使用彩妝品怎麼可能會有忠臣度可言！因此...."
    },
    {
        "href": "news_view",
        "src": "n01.jpg",
        "id": 9,
        "day": "17",
        "month": "APR",
        "year": "2017",
        "title": "開架好用美妝品總整理！女明星彩妝師化妝箱都用這些",
        "text": "開架底妝百百款 教妳怎麼聰明挑才能買對不失手！"
    }
];
// const data = Mock.mock({
//     "list|20-60": [{
//         "id": '@increment(1)',
//         "title": "@ctitle",
//         "content": "@cparagraph",
//         "add_time": "@date(yyyy-MM-dd hh:mm:ss)"
//     }]
// });
//使用mockjs模拟数据 第一個請求網址 第二個請求數據
Mock.mock('/mock/home', () => {
    return {
        code: 200,
        data: {
            "slide": slide,
            "productList": productList,
            "newsList": newsList.filter(item => item.id < 4),
            "productLeft": [{
                "src": "in01.jpg"
            }],
            "ad": [{
                    "href": "news_view",
                    "src": "kwankao1.jpg",
                    "id": 1
                },
                {
                    "href": "news_view",
                    "src": "kwankao2.jpg",
                    "id": 2
                },
                {
                    "href": "news_view",
                    "src": "kwankao3.jpg",
                    "id": 3
                }
            ]
        }
    }
});
Mock.mock('/mock/product', () => {
    return {
        code: 200,
        data: {
            "slide": slide,
            "productList": productList,
            "nav": [{
                    "id": 1,
                    "class_id": 0,
                    "name": "臉部彩妝",
                    "child": [{
                            "id": 7,
                            "class_id": 1,
                            "name": "妝前修飾乳"
                        },
                        {
                            "id": 8,
                            "class_id": 1,
                            "name": "BB/CC霜"
                        },
                        {
                            "id": 9,
                            "class_id": 1,
                            "name": "氣墊式粉底"
                        }
                    ]
                },
                {
                    "id": 2,
                    "class_id": 0,
                    "name": "眼部彩妝",
                    "child": [{
                            "id": 10,
                            "class_id": 1,
                            "name": "遮瑕霜"
                        },
                        {
                            "id": 12,
                            "class_id": 1,
                            "name": "腮紅 / 修容"
                        }
                    ]
                },
                {
                    "id": 3,
                    "class_id": 0,
                    "name": "唇部彩妝",
                    "child": [{
                        "id": 11,
                        "class_id": 1,
                        "name": "蜜粉"
                    }]
                },
                {
                    "id": 4,
                    "class_id": 0,
                    "name": "美髮保養",
                    "child": [{
                        "id": 7,
                        "class_id": 1,
                        "name": "妝前修飾乳"
                    }]
                },
                {
                    "id": 5,
                    "class_id": 0,
                    "name": "身體乳液"
                },
                {
                    "id": 6,
                    "class_id": 0,
                    "name": "其他"
                }
            ],
        }
    }
});
Mock.mock('/mock/news', () => {
    return {
        code: 200,
        data: {
            "newsList": newsList
        }
    }
});
Mock.mock('/mock/beauty', () => {
    return {
        code: 200,
        data: {
            "beautyList": [{
                    "id": 1,
                    "href": "news_view",
                    "src": "img/ti01.jpg",
                    "data_num": "17",
                    "data_month": "APR",
                    "data_year": "2017",
                    "title": "【美妝】來自泰國的超濃黑眼線─Mistine Maxi Black",
                    "hrefFb": "#",
                    "hrefLine": "#",
                    "hrefIg": "#",
                    "text": "來自泰國知名彩妝品牌Mistine，是每次使用必被詢問的眉筆！大家喜歡的原因是它的亞麻色調，加上它一組有眉筆、眉粉與染眉膏三個套件，先使用眉筆畫眉，接著以眉粉暈染創造自然眉型，再用染眉膏調整眉色。</br>這隻眼線液的防水持妝效果也是我目前用過最好的， 成功打拜我心中的NO1 Kiss Me，所以幫大家做了防水測試！ 防水效果達到了平常是眼線蠟筆才有的等級， 沖水不掉之外，連用手擦拭都不會掉！ 直接把水珠吸乾可以發現，眼線沒有受到半分的影響喔。"
                },
                {
                    "id": 2,
                    "href": "news_view",
                    "src": "img/ti02.jpg",
                    "data_num": "17",
                    "data_month": "APR",
                    "data_year": "2017",
                    "title": "【美妝】來自泰國的超濃黑眼線─Mistine Maxi Black",
                    "fb_href": "#",
                    "link_href": "#",
                    "ig_href": "#",
                    "text": "來自泰國知名彩妝品牌Mistine，是每次使用必被詢問的眉筆！大家喜歡的原因是它的亞麻色調，加上它一組有眉筆、眉粉與染眉膏三個套件，先使用眉筆畫眉，接著以眉粉暈染創造自然眉型，再用染眉膏調整眉色。</br>這隻眼線液的防水持妝效果也是我目前用過最好的， 成功打拜我心中的NO1 Kiss Me，所以幫大家做了防水測試！ 防水效果達到了平常是眼線蠟筆才有的等級， 沖水不掉之外，連用手擦拭都不會掉！ 直接把水珠吸乾可以發現，眼線沒有受到半分的影響喔。"
                },
                {
                    "id": 3,
                    "href": "news_view",
                    "src": "img/ti03.jpg",
                    "data_num": "17",
                    "data_month": "APR",
                    "data_year": "2017",
                    "title": "【美妝】來自泰國的超濃黑眼線─Mistine Maxi Black",
                    "fb_href": "#",
                    "link_href": "#",
                    "ig_href": "#",
                    "text": "來自泰國知名彩妝品牌Mistine，是每次使用必被詢問的眉筆！大家喜歡的原因是它的亞麻色調，加上它一組有眉筆、眉粉與染眉膏三個套件，先使用眉筆畫眉，接著以眉粉暈染創造自然眉型，再用染眉膏調整眉色。</br>這隻眼線液的防水持妝效果也是我目前用過最好的， 成功打拜我心中的NO1 Kiss Me，所以幫大家做了防水測試！ 防水效果達到了平常是眼線蠟筆才有的等級， 沖水不掉之外，連用手擦拭都不會掉！ 直接把水珠吸乾可以發現，眼線沒有受到半分的影響喔。"
                },
                {
                    "id": 4,
                    "href": "news_view",
                    "src": "img/ti01.jpg",
                    "data_num": "17",
                    "data_month": "APR",
                    "data_year": "2017",
                    "title": "【美妝】來自泰國的超濃黑眼線─Mistine Maxi Black",
                    "fb_href": "#",
                    "link_href": "#",
                    "ig_href": "#",
                    "text": "來自泰國知名彩妝品牌Mistine，是每次使用必被詢問的眉筆！大家喜歡的原因是它的亞麻色調，加上它一組有眉筆、眉粉與染眉膏三個套件，先使用眉筆畫眉，接著以眉粉暈染創造自然眉型，再用染眉膏調整眉色。</br>這隻眼線液的防水持妝效果也是我目前用過最好的， 成功打拜我心中的NO1 Kiss Me，所以幫大家做了防水測試！ 防水效果達到了平常是眼線蠟筆才有的等級， 沖水不掉之外，連用手擦拭都不會掉！ 直接把水珠吸乾可以發現，眼線沒有受到半分的影響喔。"
                }
            ]
        }
    }
});
Mock.mock('/mock/store', { code: 200, data: store });
Mock.mock('/mock/productView', (options) => {
    let body = JSON.parse(options.body)
        // const index = productList.findIndex(item => item.id === body.id)
        // console.log(body)
        // console.log(index)
        // console.log(productList.filter(item => item.id > 2 && item.id < 7))
    return {
        code: 200,
        data: {
            "item": productList.filter(item => item.id == body.id)[0],
            "linkList": productList.filter(item => item.id < 3),
            "recommendList": productList.filter(item => item.id > 2 && item.id < 7),
        }
    }
});