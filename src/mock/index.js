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
        "src": "p01.jpg",
        "en": "Mistine - Groove complete",
        "ti": "12色完美眼彩盤",
        "sale": "泰國必買",
        "price": "NT$529",
        "special_price": "NT$429",
        "describe": "GROOVE眼影盤集結最常用的12色，一次讓你擁有霧面、亮粉與微光三種眼影質感，都給你超顯色、持久、防水、抗汗的迷人眼妝。",
        "specification": "9G / 1.3G*12色",
        "illustrate": "用途:使眼部色彩豐富<br>使用方式：依照喜好選擇顏色並依序塗抹在眼皮上",
        "element": "GROOVE眼影盤集結最常用的12色，一次讓你擁有霧面、亮粉與微光三種眼影質感，都給你超顯色、持久、防水、抗汗的迷人眼妝。",
        "productImgs": ["p01.jpg", "p02.jpg", "p05.jpg", "p04.jpg", "p03.jpg", "p05.jpg"],
    },
    {
        "id": 2,
        "href": "product_view",
        "src": "p02.jpg",
        "en": "Mistine - Groove complete",
        "ti": "12色完美眼彩盤",
        "sale": "Mistine周年慶全館85折",
        "price": "NT$529",
        "special_price": "NT$429",
        "describe": "GROOVE眼影盤集結最常用的12色，一次讓你擁有霧面、亮粉與微光三種眼影質感，都給你超顯色、持久、防水、抗汗的迷人眼妝。",
        "specification": "9G / 1.3G*12色",
        "illustrate": "用途:使眼部色彩豐富<br>使用方式：依照喜好選擇顏色並依序塗抹在眼皮上",
        "element": "GROOVE眼影盤集結最常用的12色，一次讓你擁有霧面、亮粉與微光三種眼影質感，都給你超顯色、持久、防水、抗汗的迷人眼妝。",
        "productImgs": ["p02.jpg", "p03.jpg", "p05.jpg", "p04.jpg", "p03.jpg", "p05.jpg"],
    },
    {
        "id": 3,
        "href": "product_view",
        "src": "p03.jpg",
        "en": "Mistine - Groove complete",
        "ti": "12色完美眼彩盤",
        "sale": "泰國必買",
        "price": "NT$529",
        "special_price": "NT$429",
        "describe": "GROOVE眼影盤集結最常用的12色，一次讓你擁有霧面、亮粉與微光三種眼影質感，都給你超顯色、持久、防水、抗汗的迷人眼妝。",
        "specification": "9G / 1.3G*12色",
        "illustrate": "用途:使眼部色彩豐富<br>使用方式：依照喜好選擇顏色並依序塗抹在眼皮上",
        "element": "GROOVE眼影盤集結最常用的12色，一次讓你擁有霧面、亮粉與微光三種眼影質感，都給你超顯色、持久、防水、抗汗的迷人眼妝。",
        "productImgs": ["p03.jpg", "p02.jpg", "p05.jpg", "p04.jpg", "p03.jpg", "p05.jpg"],
    },
    {
        "id": 4,
        "href": "product_view",
        "src": "p04.jpg",
        "en": "Mistine - Groove complete",
        "ti": "12色完美眼彩盤",
        "sale": "Mistine周年慶全館85折",
        "price": "NT$529",
        "special_price": "NT$429",
        "describe": "GROOVE眼影盤集結最常用的12色，一次讓你擁有霧面、亮粉與微光三種眼影質感，都給你超顯色、持久、防水、抗汗的迷人眼妝。",
        "specification": "9G / 1.3G*12色",
        "illustrate": "用途:使眼部色彩豐富<br>使用方式：依照喜好選擇顏色並依序塗抹在眼皮上",
        "element": "GROOVE眼影盤集結最常用的12色，一次讓你擁有霧面、亮粉與微光三種眼影質感，都給你超顯色、持久、防水、抗汗的迷人眼妝。",
        "productImgs": ["p04.jpg", "p02.jpg", "p05.jpg", "p04.jpg", "p03.jpg", "p05.jpg"],
    },
    {
        "id": 5,
        "href": "product_view",
        "src": "p05.jpg",
        "en": "Mistine - Groove complete",
        "ti": "12色完美眼彩盤",
        "sale": "Mistine周年慶全館85折",
        "price": "NT$529",
        "special_price": "NT$429",
        "describe": "GROOVE眼影盤集結最常用的12色，一次讓你擁有霧面、亮粉與微光三種眼影質感，都給你超顯色、持久、防水、抗汗的迷人眼妝。",
        "specification": "9G / 1.3G*12色",
        "illustrate": "用途:使眼部色彩豐富<br>使用方式：依照喜好選擇顏色並依序塗抹在眼皮上",
        "element": "GROOVE眼影盤集結最常用的12色，一次讓你擁有霧面、亮粉與微光三種眼影質感，都給你超顯色、持久、防水、抗汗的迷人眼妝。",
        "productImgs": ["p05.jpg", "p02.jpg", "p05.jpg", "p04.jpg", "p03.jpg", "p05.jpg"],
    },
    {
        "id": 6,
        "href": "product_view",
        "src": "p01.jpg",
        "en": "Mistine - Groove complete",
        "ti": "12色完美眼彩盤",
        "sale": "泰國必買",
        "price": "NT$529",
        "special_price": "NT$429",
        "describe": "GROOVE眼影盤集結最常用的12色，一次讓你擁有霧面、亮粉與微光三種眼影質感，都給你超顯色、持久、防水、抗汗的迷人眼妝。",
        "specification": "9G / 1.3G*12色",
        "illustrate": "用途:使眼部色彩豐富<br>使用方式：依照喜好選擇顏色並依序塗抹在眼皮上",
        "element": "GROOVE眼影盤集結最常用的12色，一次讓你擁有霧面、亮粉與微光三種眼影質感，都給你超顯色、持久、防水、抗汗的迷人眼妝。",
        "productImgs": ["p06.jpg", "p02.jpg", "p05.jpg", "p04.jpg", "p03.jpg", "p05.jpg"],
    },
    {
        "id": 7,
        "href": "product_view",
        "src": "p01.jpg",
        "en": "Mistine - Groove complete",
        "ti": "12色完美眼彩盤",
        "sale": "Mistine周年慶全館85折",
        "price": "NT$529",
        "special_price": "NT$429",
        "describe": "GROOVE眼影盤集結最常用的12色，一次讓你擁有霧面、亮粉與微光三種眼影質感，都給你超顯色、持久、防水、抗汗的迷人眼妝。",
        "specification": "9G / 1.3G*12色",
        "illustrate": "用途:使眼部色彩豐富<br>使用方式：依照喜好選擇顏色並依序塗抹在眼皮上",
        "element": "GROOVE眼影盤集結最常用的12色，一次讓你擁有霧面、亮粉與微光三種眼影質感，都給你超顯色、持久、防水、抗汗的迷人眼妝。",
        "productImgs": ["p07.jpg", "p02.jpg", "p05.jpg", "p04.jpg", "p03.jpg", "p05.jpg"],
    },
    {
        "id": 8,
        "href": "product_view",
        "src": "p02.jpg",
        "en": "Mistine - Groove complete",
        "ti": "12色完美眼彩盤",
        "sale": "泰國必買",
        "price": "NT$529",
        "special_price": "NT$429",
        "describe": "GROOVE眼影盤集結最常用的12色，一次讓你擁有霧面、亮粉與微光三種眼影質感，都給你超顯色、持久、防水、抗汗的迷人眼妝。",
        "specification": "9G / 1.3G*12色",
        "illustrate": "用途:使眼部色彩豐富<br>使用方式：依照喜好選擇顏色並依序塗抹在眼皮上",
        "element": "GROOVE眼影盤集結最常用的12色，一次讓你擁有霧面、亮粉與微光三種眼影質感，都給你超顯色、持久、防水、抗汗的迷人眼妝。",
        "productImgs": ["p08.jpg", "p02.jpg", "p05.jpg", "p04.jpg", "p03.jpg", "p05.jpg"],
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
            "slide2": [{
                    "href": "#",
                    "src": "n01.jpg",
                    "id": 1,
                    "text_date": "17",
                    "text_month": "APR",
                    "text_year": "2017",
                    "text": "開架底妝百百款 教妳怎麼聰明挑才能買對不失手！"
                },
                {
                    "href": "#",
                    "src": "n02.jpg",
                    "id": 2,
                    "text_date": "17",
                    "text_month": "APR",
                    "text_year": "2017",
                    "text": "開架底妝百百款 教妳怎麼聰明挑才能買對不失手！"
                },
                {
                    "href": "#",
                    "src": "n03.jpg",
                    "id": 3,
                    "text_date": "17",
                    "text_month": "APR",
                    "text_year": "2017",
                    "text": "開架底妝百百款 教妳怎麼聰明挑才能買對不失手！"
                }
            ],
            "productLeft": [{
                "src": "in01.jpg"
            }],
            "ad": [{
                    "href": "#",
                    "src": "kwankao1.jpg",
                    "id": 1
                },
                {
                    "href": "#",
                    "src": "kwankao2.jpg",
                    "id": 2
                },
                {
                    "href": "#",
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
            "newsList": [{
                    "id": 1,
                    "href": "new_view",
                    "src": "n01.jpg",
                    "data": "JUN 06, 2017",
                    "title": "開架好用美妝品總整理！女明星彩妝師化妝箱都用這些",
                    "text": "對於熱愛時尚、美妝的女孩來說，因為喜歡嘗鮮、什麼都想試試看，使用彩妝品怎麼可能會有忠臣度可言！因此...."
                },
                {
                    "id": 2,
                    "href": "new_view",
                    "src": "n02.jpg",
                    "data": "JUN 06, 2017",
                    "title": "開架好用美妝品總整理！女明星彩妝師化妝箱都用這些",
                    "text": "對於熱愛時尚、美妝的女孩來說，因為喜歡嘗鮮、什麼都想試試看，使用彩妝品怎麼可能會有忠臣度可言！因此...."
                },
                {
                    "id": 3,
                    "href": "new_view",
                    "src": "n03.jpg",
                    "data": "JUN 06, 2017",
                    "title": "開架好用美妝品總整理！女明星彩妝師化妝箱都用這些",
                    "text": "對於熱愛時尚、美妝的女孩來說，因為喜歡嘗鮮、什麼都想試試看，使用彩妝品怎麼可能會有忠臣度可言！因此...."
                },
                {
                    "id": 4,
                    "href": "new_view",
                    "src": "n04.jpg",
                    "data": "JUN 06, 2017",
                    "title": "開架好用美妝品總整理！女明星彩妝師化妝箱都用這些",
                    "text": "對於熱愛時尚、美妝的女孩來說，因為喜歡嘗鮮、什麼都想試試看，使用彩妝品怎麼可能會有忠臣度可言！因此...."
                },
                {
                    "id": 5,
                    "href": "new_view",
                    "src": "n01.jpg",
                    "data": "JUN 06, 2017",
                    "title": "開架好用美妝品總整理！女明星彩妝師化妝箱都用這些",
                    "text": "對於熱愛時尚、美妝的女孩來說，因為喜歡嘗鮮、什麼都想試試看，使用彩妝品怎麼可能會有忠臣度可言！因此...."
                },
                {
                    "id": 6,
                    "href": "new_view",
                    "src": "n01.jpg",
                    "data": "JUN 06, 2017",
                    "title": "開架好用美妝品總整理！女明星彩妝師化妝箱都用這些",
                    "text": "對於熱愛時尚、美妝的女孩來說，因為喜歡嘗鮮、什麼都想試試看，使用彩妝品怎麼可能會有忠臣度可言！因此...."
                },
                {
                    "id": 7,
                    "href": "new_view",
                    "src": "n02.jpg",
                    "data": "JUN 06, 2017",
                    "title": "開架好用美妝品總整理！女明星彩妝師化妝箱都用這些",
                    "text": "對於熱愛時尚、美妝的女孩來說，因為喜歡嘗鮮、什麼都想試試看，使用彩妝品怎麼可能會有忠臣度可言！因此...."
                },
                {
                    "id": 8,
                    "href": "new_view",
                    "src": "n03.jpg",
                    "data": "JUN 06, 2017",
                    "title": "開架好用美妝品總整理！女明星彩妝師化妝箱都用這些",
                    "text": "對於熱愛時尚、美妝的女孩來說，因為喜歡嘗鮮、什麼都想試試看，使用彩妝品怎麼可能會有忠臣度可言！因此...."
                },
                {
                    "id": 9,
                    "href": "new_view",
                    "src": "n04.jpg",
                    "data": "JUN 06, 2017",
                    "title": "開架好用美妝品總整理！女明星彩妝師化妝箱都用這些",
                    "text": "對於熱愛時尚、美妝的女孩來說，因為喜歡嘗鮮、什麼都想試試看，使用彩妝品怎麼可能會有忠臣度可言！因此...."
                }
            ]
        }
    }
});
Mock.mock('/mock/beauty', () => {
    return {
        code: 200,
        data: {
            "beautyList": [{
                    "id": 1,
                    "href": "new_view",
                    "src": "img/ti01.jpg",
                    "data_num": "17",
                    "data_month": "APR",
                    "data_year": "2017",
                    "title": "【美妝】來自泰國的超濃黑眼線─Mistine Maxi Black",
                    "hrefFb": "#",
                    "hrefLine": "",
                    "hrefIg": "",
                    "text": "來自泰國知名彩妝品牌Mistine，是每次使用必被詢問的眉筆！大家喜歡的原因是它的亞麻色調，加上它一組有眉筆、眉粉與染眉膏三個套件，先使用眉筆畫眉，接著以眉粉暈染創造自然眉型，再用染眉膏調整眉色。</br>這隻眼線液的防水持妝效果也是我目前用過最好的， 成功打拜我心中的NO1 Kiss Me，所以幫大家做了防水測試！ 防水效果達到了平常是眼線蠟筆才有的等級， 沖水不掉之外，連用手擦拭都不會掉！ 直接把水珠吸乾可以發現，眼線沒有受到半分的影響喔。"
                },
                {
                    "id": 2,
                    "href": "new_view",
                    "src": "img/ti02.jpg",
                    "data_num": "17",
                    "data_month": "APR",
                    "data_year": "2017",
                    "title": "【美妝】來自泰國的超濃黑眼線─Mistine Maxi Black",
                    "fb_href": "#",
                    "link_href": "",
                    "ig_href": "",
                    "text": "來自泰國知名彩妝品牌Mistine，是每次使用必被詢問的眉筆！大家喜歡的原因是它的亞麻色調，加上它一組有眉筆、眉粉與染眉膏三個套件，先使用眉筆畫眉，接著以眉粉暈染創造自然眉型，再用染眉膏調整眉色。</br>這隻眼線液的防水持妝效果也是我目前用過最好的， 成功打拜我心中的NO1 Kiss Me，所以幫大家做了防水測試！ 防水效果達到了平常是眼線蠟筆才有的等級， 沖水不掉之外，連用手擦拭都不會掉！ 直接把水珠吸乾可以發現，眼線沒有受到半分的影響喔。"
                },
                {
                    "id": 3,
                    "href": "new_view",
                    "src": "img/ti03.jpg",
                    "data_num": "17",
                    "data_month": "APR",
                    "data_year": "2017",
                    "title": "【美妝】來自泰國的超濃黑眼線─Mistine Maxi Black",
                    "fb_href": "#",
                    "link_href": "",
                    "ig_href": "",
                    "text": "來自泰國知名彩妝品牌Mistine，是每次使用必被詢問的眉筆！大家喜歡的原因是它的亞麻色調，加上它一組有眉筆、眉粉與染眉膏三個套件，先使用眉筆畫眉，接著以眉粉暈染創造自然眉型，再用染眉膏調整眉色。</br>這隻眼線液的防水持妝效果也是我目前用過最好的， 成功打拜我心中的NO1 Kiss Me，所以幫大家做了防水測試！ 防水效果達到了平常是眼線蠟筆才有的等級， 沖水不掉之外，連用手擦拭都不會掉！ 直接把水珠吸乾可以發現，眼線沒有受到半分的影響喔。"
                },
                {
                    "id": 4,
                    "href": "new_view",
                    "src": "img/ti01.jpg",
                    "data_num": "17",
                    "data_month": "APR",
                    "data_year": "2017",
                    "title": "【美妝】來自泰國的超濃黑眼線─Mistine Maxi Black",
                    "fb_href": "#",
                    "link_href": "",
                    "ig_href": "",
                    "text": "來自泰國知名彩妝品牌Mistine，是每次使用必被詢問的眉筆！大家喜歡的原因是它的亞麻色調，加上它一組有眉筆、眉粉與染眉膏三個套件，先使用眉筆畫眉，接著以眉粉暈染創造自然眉型，再用染眉膏調整眉色。</br>這隻眼線液的防水持妝效果也是我目前用過最好的， 成功打拜我心中的NO1 Kiss Me，所以幫大家做了防水測試！ 防水效果達到了平常是眼線蠟筆才有的等級， 沖水不掉之外，連用手擦拭都不會掉！ 直接把水珠吸乾可以發現，眼線沒有受到半分的影響喔。"
                }
            ]
        }
    }
});
Mock.mock('/mock/store', { code: 200, data: store });
Mock.mock('/mock/productView', (options) => {
    let body = JSON.parse(options.body)
    console.log(body)
    return {
        code: 200,
        data: {
            "item": productList.filter((item) => item.id == body.id),
            "linkList": productList.filter((item, index) => index < 4),
            "recommendList": productList.filter((item, index) => index > 3 && index < 7)
        }
    }
    // const index = data.list.findIndex(item => item.id === body.id)
    // data.list.splice(index, 1)
    // return {
    //     status: 200,
    //     message: '删除成功',
    //     list: data.list
    // }
});