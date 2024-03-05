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
        "en": "TEINT FLUIDE ÉCLAT MAT",
        "ti": "恆霧光潤粉凝露1",
        "sale": "韓國網紅界熱銷",
        "price": "NT$429",
        "special_price": "NT$329",
        "describe": "持久無瑕型微霧光粉凝露，新添加光感賦活強化&光采智能複合物，長達24H無瑕般持妝，同時享珠寶級保養成分呵護。",
        "specification": { specIndex: 0, list: [{ id: 1, name: '內容物50ml', price: 'NT$429', special_price: 'NT$329' }, { id: 2, name: '內容物125ml', price: 'NT$529', special_price: 'NT$429' }] },
        "introduce": "pv01.jpg",
        "illustrate": "用途:使眼部色彩豐富<br>使用方式：依照喜好選擇顏色並依序塗抹在眼皮上",
        "element": "容量：9g<br>成分: 如包裝所標示<br>保存期限：3年<br>產地：泰國<br> 高市衛廣字第10505018號",
        "productImgs": ["p01.jpg", "p02.jpg", "p03.jpg", "p04.jpg", "p05.jpg", "p03.jpg"],
        "categoryId": 7,
        "isChecked": 0
    },
    {
        "id": 2,
        "href": "product_view",
        "src": "p02.jpg",
        "en": "crème fortifiante protectrice ",
        "ti": "精萃光采防護精華霜",
        "sale": "周年慶全館85折",
        "price": "NT$629",
        "special_price": "NT$529",
        "describe": "GROOVE眼影盤集結最常用的12色，一次讓你擁有霧面、亮粉與微光三種眼影質感，都給你超顯色、持久、防水、抗汗的迷人眼妝。",
        "specification": { specIndex: 0, list: [{ id: 1, name: '內容物50ml', price: 'NT$529', special_price: 'NT$429' }, { id: 2, name: '內容物125ml', price: 'NT$629', special_price: 'NT$529' }] },
        "introduce": "pv01.jpg",
        "illustrate": "用途:使眼部色彩豐富<br>使用方式：依照喜好選擇顏色並依序塗抹在眼皮上",
        "element": "容量：9g<br>成分: 如包裝所標示<br>保存期限：3年<br>產地：泰國<br> 高市衛廣字第10505018號",
        "productImgs": ["p02.jpg", "p05.jpg", "p03.jpg", "p04.jpg", "p05.jpg", "p03.jpg"],
        "categoryId": 7,
        "isChecked": 0
    },
    {
        "id": 3,
        "href": "product_view",
        "src": "p03.jpg",
        "en": "TEINT FLUIDE ÉCLAT NATUREL",
        "ti": "恆潤光采粉凝露",
        "sale": "母檔寵愛限定",
        "price": "NT$829",
        "special_price": "NT$799",
        "describe": "日間保養使用「肌膚之鑰精萃光采防護精華霜」，為肌膚同時做好補水與防曬，以提高肌膚自動修復智慧。使用後的光滑感以及增強後續粉底對於肌膚表面的附著力。",
        "specification": { specIndex: 0, list: [{ id: 1, name: '內容物50ml', price: 'NT$529', special_price: 'NT$429' }, { id: 2, name: '內容物125ml', price: 'NT$629', special_price: 'NT$529' }] },
        "introduce": "pv01.jpg",
        "illustrate": "用途:使眼部色彩豐富<br>使用方式：依照喜好選擇顏色並依序塗抹在眼皮上",
        "element": "容量：9g<br>成分: 如包裝所標示<br>保存期限：3年<br>產地：泰國<br> 高市衛廣字第10505018號",
        "productImgs": ["p05.jpg", "p02.jpg", "p03.jpg", "p04.jpg", "p05.jpg", "p03.jpg"],
        "categoryId": 5,
        "isChecked": 0
    },
    {
        "id": 4,
        "href": "product_view",
        "src": "p04.jpg",
        "en": "ÉMULSION FORTIFIANTE",
        "ti": "恆潤絲緞光采粉霜",
        "sale": "周年慶全館85折",
        "price": "NT$799",
        "special_price": "NT$699",
        "describe": "日間保養使用「肌膚之鑰精萃光采防護精華乳」，為肌膚同時做好補水與防曬，以提升肌膚智能。使用後的光滑感以及增強後續粉底對於肌膚表面的附著力。",
        "specification": { specIndex: 0, list: [{ id: 1, name: '內容物50ml', price: 'NT$629', special_price: 'NT$529' }, { id: 2, name: '內容物125ml', price: 'NT$729', special_price: 'NT$629' }] },
        "introduce": "pv01.jpg",
        "illustrate": "用途:使眼部色彩豐富<br>使用方式：依照喜好選擇顏色並依序塗抹在眼皮上",
        "element": "容量：9g<br>成分: 如包裝所標示<br>保存期限：3年<br>產地：泰國<br> 高市衛廣字第10505018號",
        "productImgs": ["p04.jpg", "p02.jpg", "p03.jpg", "p04.jpg", "p05.jpg", "p03.jpg"],
        "categoryId": 10,
        "isChecked": 0
    },
    {
        "id": 5,
        "href": "product_view",
        "src": "p05.jpg",
        "en": "teint poudre éclat FORTIFIANTE",
        "ti": "裸紗光采粉餅蕊",
        "sale": "母檔寵愛限定",
        "price": "NT$529",
        "special_price": "NT$429",
        "describe": "經滋養的肌膚智能，可立即且全面地幫肌膚補水，同時積極去除老廢角質、促進肌膚新生，呈現乾淨無暇飽水狀態；瞬間拋光後的肌膚，精緻清新的觸感宛若新生。",
        "specification": { specIndex: 0, list: [{ id: 1, name: '內容物50ml', price: 'NT$429', special_price: 'NT$329' }, { id: 2, name: '內容物125ml', price: 'NT$529', special_price: 'NT$429' }] },
        "introduce": "pv01.jpg",
        "illustrate": "用途:使眼部色彩豐富<br>使用方式：依照喜好選擇顏色並依序塗抹在眼皮上",
        "element": "容量：9g<br>成分: 如包裝所標示<br>保存期限：3年<br>產地：泰國<br> 高市衛廣字第10505018號",
        "productImgs": ["p03.jpg", "p02.jpg", "p03.jpg", "p04.jpg", "p05.jpg", "p03.jpg"],
        "categoryId": 10,
        "isChecked": 0
    },
    {
        "id": 6,
        "href": "product_view",
        "src": "p01.jpg",
        "en": "LOTION HYDRO-ADOUCISSANTE N",
        "ti": "精萃光采柔潤保濕露",
        "sale": "韓國網紅界熱銷",
        "price": "NT$529",
        "special_price": "NT$429",
        "describe": "經滋養的肌膚智能，可立即且密集地幫肌膚補水，同時積極預防肌膚出現粗糙與乾燥。重整後的肌膚紋理，看起來更光滑細緻，重現活力光采。",
        "specification": { specIndex: 0, list: [{ id: 1, name: '內容物50ml', price: 'NT$429', special_price: 'NT$329' }, { id: 2, name: '內容物125ml', price: 'NT$529', special_price: 'NT$429' }] },
        "introduce": "pv01.jpg",
        "illustrate": "用途:使眼部色彩豐富<br>使用方式：依照喜好選擇顏色並依序塗抹在眼皮上",
        "element": "容量：9g<br>成分: 如包裝所標示<br>保存期限：3年<br>產地：泰國<br> 高市衛廣字第10505018號",
        "productImgs": ["p01.jpg", "p02.jpg", "p03.jpg", "p04.jpg", "p05.jpg", "p03.jpg"],
        "categoryId": 11,
        "isChecked": 0
    },
    {
        "id": 7,
        "href": "product_view",
        "src": "p02.jpg",
        "en": "ÉMULSION FORTIFIANTE",
        "ti": "精萃光采修護精華乳",
        "sale": "周年慶全館85折",
        "price": "NT$529",
        "special_price": "NT$429",
        "describe": "使用夜間保養精華乳來進行過夜長效保濕並提升肌膚智能，幫助肌膚由內而外進行淨白、拉提緊緻、打造緊緻彈性，以及防止紫外線和水分流失對肌膚造成的日常傷害。",
        "specification": { specIndex: 0, list: [{ id: 1, name: '內容物50ml', price: 'NT$529', special_price: 'NT$429' }, { id: 2, name: '內容物125ml', price: 'NT$629', special_price: 'NT$529' }] },
        "introduce": "pv01.jpg",
        "illustrate": "用途:使眼部色彩豐富<br>使用方式：依照喜好選擇顏色並依序塗抹在眼皮上",
        "element": "容量：9g<br>成分: 如包裝所標示<br>保存期限：3年<br>產地：泰國<br> 高市衛廣字第10505018號",
        "productImgs": ["p02.jpg", "p03.jpg", "p04.jpg", "p04.jpg", "p05.jpg", "p03.jpg"],
        "categoryId": 7,
        "isChecked": 0
    },
    {
        "id": 8,
        "href": "product_view",
        "src": "p03.jpg",
        "en": "teint poudre éclat FORTIFIANTE",
        "ti": "裸紗光采粉餅蕊",
        "sale": "韓國網紅界熱銷",
        "price": "NT$529",
        "special_price": "NT$429",
        "describe": "不斷革新並追求粉底粉末的細緻,演繹如同光暈纏繞般的光澤感。 打造能持續呈現「美麗光輝」妝感的新形態粉餅。",
        "specification": { specIndex: 0, list: [{ id: 1, name: '內容物50ml', price: 'NT$429', special_price: 'NT$329' }, { id: 2, name: '內容物125ml', price: 'NT$529', special_price: 'NT$429' }] },
        "introduce": "pv01.jpg",
        "illustrate": "用途:使眼部色彩豐富<br>使用方式：依照喜好選擇顏色並依序塗抹在眼皮上",
        "element": "容量：9g<br>成分: 如包裝所標示<br>保存期限：3年<br>產地：泰國<br> 高市衛廣字第10505018號",
        "productImgs": ["p01.jpg", "p04.jpg", "p02.jpg", "p03.jpg", "p04.jpg", "p05.jpg", "p03.jpg"],
        "categoryId": 5,
        "isChecked": 0
    },
    {
        "id": 9,
        "href": "product_view",
        "src": "p04.jpg",
        "en": "Mistine - Groove complete",
        "ti": "12色完美眼彩盤",
        "sale": "韓國網紅界熱銷",
        "price": "NT$529",
        "special_price": "NT$429",
        "describe": "GROOVE眼影盤集結最常用的12色，一次讓你擁有霧面、亮粉與微光三種眼影質感，都給你超顯色、持久、防水、抗汗的迷人眼妝。",
        "specification": { specIndex: 0, list: [{ id: 1, name: '內容物50ml', price: 'NT$529', special_price: 'NT$429' }, { id: 2, name: '內容物125ml', price: 'NT$629', special_price: 'NT$529' }] },
        "introduce": "pv01.jpg",
        "illustrate": "用途:使眼部色彩豐富<br>使用方式：依照喜好選擇顏色並依序塗抹在眼皮上",
        "element": "容量：9g<br>成分: 如包裝所標示<br>保存期限：3年<br>產地：泰國<br> 高市衛廣字第10505018號",
        "productImgs": ["p01.jpg", "p02.jpg", "p03.jpg", "p04.jpg", "p05.jpg", "p03.jpg"],
        "categoryId": 6,
        "isChecked": 0
    },
    {
        "id": 10,
        "href": "product_view",
        "src": "p05.jpg",
        "en": "Mistine - Groove complete",
        "ti": "超激長捲翹電眼睫毛膏",
        "sale": "母檔寵愛限定",
        "price": "NT$529",
        "special_price": "NT$429",
        "describe": "GROOVE眼影盤集結最常用的12色，一次讓你擁有霧面、亮粉與微光三種眼影質感，都給你超顯色、持久、防水、抗汗的迷人眼妝。",
        "specification": { specIndex: 0, list: [{ id: 1, name: '內容物50ml', price: 'NT$429', special_price: 'NT$329' }, { id: 2, name: '內容物125ml', price: 'NT$529', special_price: 'NT$429' }] },
        "introduce": "pv01.jpg",
        "illustrate": "用途:使眼部色彩豐富<br>使用方式：依照喜好選擇顏色並依序塗抹在眼皮上",
        "element": "容量：9g<br>成分: 如包裝所標示<br>保存期限：3年<br>產地：泰國<br> 高市衛廣字第10505018號",
        "productImgs": ["p02.jpg", "p05.jpg", "p03.jpg", "p04.jpg", "p05.jpg", "p03.jpg"],
        "categoryId": 12,
        "isChecked": 0
    },
    {
        "id": 11,
        "href": "product_view",
        "src": "p01.jpg",
        "en": "Mistine - Groove complete",
        "ti": "美肌修修無痕",
        "sale": "韓國網紅界熱銷",
        "price": "NT$529",
        "special_price": "NT$429",
        "describe": "GROOVE眼影盤集結最常用的12色，一次讓你擁有霧面、亮粉與微光三種眼影質感，都給你超顯色、持久、防水、抗汗的迷人眼妝。",
        "specification": { specIndex: 0, list: [{ id: 1, name: '內容物50ml', price: 'NT$529', special_price: 'NT$429' }, { id: 2, name: '內容物125ml', price: 'NT$629', special_price: 'NT$529' }] },
        "introduce": "pv01.jpg",
        "illustrate": "用途:使眼部色彩豐富<br>使用方式：依照喜好選擇顏色並依序塗抹在眼皮上",
        "element": "容量：9g<br>成分: 如包裝所標示<br>保存期限：3年<br>產地：泰國<br> 高市衛廣字第10505018號",
        "productImgs": ["p05.jpg", "p02.jpg", "p03.jpg", "p04.jpg", "p05.jpg", "p03.jpg"],
        "categoryId": 8,
        "isChecked": 0
    },
    {
        "id": 12,
        "href": "product_view",
        "src": "p02.jpg",
        "en": "Mistine - Groove complete",
        "ti": "氣墊式粉底",
        "sale": "周年慶全館85折",
        "price": "NT$529",
        "special_price": "NT$429",
        "describe": "GROOVE眼影盤集結最常用的12色，一次讓你擁有霧面、亮粉與微光三種眼影質感，都給你超顯色、持久、防水、抗汗的迷人眼妝。",
        "specification": { specIndex: 0, list: [{ id: 1, name: '內容物50ml', price: 'NT$429', special_price: 'NT$329' }, { id: 2, name: '內容物125ml', price: 'NT$529', special_price: 'NT$429' }] },
        "introduce": "pv01.jpg",
        "illustrate": "用途:使眼部色彩豐富<br>使用方式：依照喜好選擇顏色並依序塗抹在眼皮上",
        "element": "容量：9g<br>成分: 如包裝所標示<br>保存期限：3年<br>產地：泰國<br> 高市衛廣字第10505018號",
        "productImgs": ["p04.jpg", "p02.jpg", "p03.jpg", "p04.jpg", "p05.jpg", "p03.jpg"],
        "categoryId": 9,
        "isChecked": 0
    },
    {
        "id": 13,
        "href": "product_view",
        "src": "p03.jpg",
        "en": "Mistine - Groove complete",
        "ti": "美髮保養",
        "sale": "母檔寵愛限定",
        "price": "NT$529",
        "special_price": "NT$429",
        "describe": "GROOVE眼影盤集結最常用的12色，一次讓你擁有霧面、亮粉與微光三種眼影質感，都給你超顯色、持久、防水、抗汗的迷人眼妝。",
        "specification": { specIndex: 0, list: [{ id: 1, name: '內容物50ml', price: 'NT$529', special_price: 'NT$429' }, { id: 2, name: '內容物125ml', price: 'NT$629', special_price: 'NT$529' }] },
        "introduce": "pv01.jpg",
        "illustrate": "用途:使眼部色彩豐富<br>使用方式：依照喜好選擇顏色並依序塗抹在眼皮上",
        "element": "容量：9g<br>成分: 如包裝所標示<br>保存期限：3年<br>產地：泰國<br> 高市衛廣字第10505018號",
        "productImgs": ["p03.jpg", "p02.jpg", "p03.jpg", "p04.jpg", "p05.jpg", "p03.jpg"],
        "categoryId": 13,
        "isChecked": 0
    },
];
const newsList = [{
        "href": "news_view",
        "src": "n01.jpg",
        "id": 1,
        "day": "01",
        "month": "APR",
        "year": "2017",
        "title": "開架好用美妝品總整理！女明星彩妝師化妝箱都用這些",
        "text": "開架底妝百百款 教妳怎麼聰明挑才能買對不失手！"
    },
    {
        "href": "news_view",
        "src": "n02.jpg",
        "id": 2,
        "day": "02",
        "month": "JUN",
        "year": "2017",
        "title": "開架好用美妝品總整理！女明星彩妝師化妝箱都用這些",
        "text": "對於熱愛時尚、美妝的女孩來說，因為喜歡嘗鮮、什麼都想試試看，使用彩妝品怎麼可能會有忠臣度可言！因此...."
    },
    {
        "href": "news_view",
        "src": "n03.jpg",
        "id": 3,
        "day": "03",
        "month": "APR",
        "year": "2017",
        "title": "開架好用美妝品總整理！女明星彩妝師化妝箱都用這些",
        "text": "開架底妝百百款 教妳怎麼聰明挑才能買對不失手！"
    },
    {
        "href": "news_view",
        "src": "n04.jpg",
        "id": 4,
        "day": "04",
        "month": "JUN",
        "year": "2017",
        "title": "開架好用美妝品總整理！女明星彩妝師化妝箱都用這些",
        "text": "對於熱愛時尚、美妝的女孩來說，因為喜歡嘗鮮、什麼都想試試看，使用彩妝品怎麼可能會有忠臣度可言！因此...."
    },
    {
        "href": "news_view",
        "src": "n01.jpg",
        "id": 5,
        "day": "05",
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
        "day": "07",
        "month": "APR",
        "year": "2017",
        "title": "開架好用美妝品總整理！女明星彩妝師化妝箱都用這些",
        "text": "開架底妝百百款 教妳怎麼聰明挑才能買對不失手！"
    },
    {
        "href": "news_view",
        "src": "n04.jpg",
        "id": 8,
        "day": "08",
        "month": "JUN",
        "year": "2017",
        "title": "開架好用美妝品總整理！女明星彩妝師化妝箱都用這些",
        "text": "對於熱愛時尚、美妝的女孩來說，因為喜歡嘗鮮、什麼都想試試看，使用彩妝品怎麼可能會有忠臣度可言！因此...."
    },
    {
        "href": "news_view",
        "src": "n01.jpg",
        "id": 9,
        "day": "09",
        "month": "APR",
        "year": "2017",
        "title": "開架好用美妝品總整理！女明星彩妝師化妝箱都用這些",
        "text": "開架底妝百百款 教妳怎麼聰明挑才能買對不失手！"
    },
    {
        "href": "news_view",
        "src": "n02.jpg",
        "id": 10,
        "day": "10",
        "month": "JUN",
        "year": "2017",
        "title": "開架好用美妝品總整理！女明星彩妝師化妝箱都用這些",
        "text": "對於熱愛時尚、美妝的女孩來說，因為喜歡嘗鮮、什麼都想試試看，使用彩妝品怎麼可能會有忠臣度可言！因此...."
    },
    {
        "href": "news_view",
        "src": "n03.jpg",
        "id": 11,
        "day": "11",
        "month": "APR",
        "year": "2017",
        "title": "開架好用美妝品總整理！女明星彩妝師化妝箱都用這些",
        "text": "開架底妝百百款 教妳怎麼聰明挑才能買對不失手！"
    },
    {
        "href": "news_view",
        "src": "n04.jpg",
        "id": 12,
        "day": "12",
        "month": "JUN",
        "year": "2017",
        "title": "開架好用美妝品總整理！女明星彩妝師化妝箱都用這些",
        "text": "對於熱愛時尚、美妝的女孩來說，因為喜歡嘗鮮、什麼都想試試看，使用彩妝品怎麼可能會有忠臣度可言！因此...."
    },
    {
        "href": "news_view",
        "src": "n01.jpg",
        "id": 13,
        "day": "13",
        "month": "APR",
        "year": "2017",
        "title": "開架好用美妝品總整理！女明星彩妝師化妝箱都用這些",
        "text": "開架底妝百百款 教妳怎麼聰明挑才能買對不失手！"
    },
    {
        "href": "news_view",
        "src": "n04.jpg",
        "id": 14,
        "day": "14",
        "month": "JUN",
        "year": "2017",
        "title": "開架好用美妝品總整理！女明星彩妝師化妝箱都用這些",
        "text": "對於熱愛時尚、美妝的女孩來說，因為喜歡嘗鮮、什麼都想試試看，使用彩妝品怎麼可能會有忠臣度可言！因此...."
    },
    {
        "href": "news_view",
        "src": "n01.jpg",
        "id": 15,
        "day": "15",
        "month": "APR",
        "year": "2017",
        "title": "開架好用美妝品總整理！女明星彩妝師化妝箱都用這些",
        "text": "開架底妝百百款 教妳怎麼聰明挑才能買對不失手！"
    },
    {
        "href": "news_view",
        "src": "n02.jpg",
        "id": 16,
        "day": "16",
        "month": "JUN",
        "year": "2017",
        "title": "開架好用美妝品總整理！女明星彩妝師化妝箱都用這些",
        "text": "對於熱愛時尚、美妝的女孩來說，因為喜歡嘗鮮、什麼都想試試看，使用彩妝品怎麼可能會有忠臣度可言！因此...."
    },
    {
        "href": "news_view",
        "src": "n03.jpg",
        "id": 17,
        "day": "17",
        "month": "APR",
        "year": "2017",
        "title": "開架好用美妝品總整理！女明星彩妝師化妝箱都用這些",
        "text": "開架底妝百百款 教妳怎麼聰明挑才能買對不失手！"
    },
    {
        "href": "news_view",
        "src": "n04.jpg",
        "id": 18,
        "day": "18",
        "month": "JUN",
        "year": "2017",
        "title": "開架好用美妝品總整理！女明星彩妝師化妝箱都用這些",
        "text": "對於熱愛時尚、美妝的女孩來說，因為喜歡嘗鮮、什麼都想試試看，使用彩妝品怎麼可能會有忠臣度可言！因此...."
    },
    {
        "href": "news_view",
        "src": "n01.jpg",
        "id": 19,
        "day": "19",
        "month": "APR",
        "year": "2017",
        "title": "開架好用美妝品總整理！女明星彩妝師化妝箱都用這些",
        "text": "開架底妝百百款 教妳怎麼聰明挑才能買對不失手！"
    }
];
const beautyList = [{
        "id": 1,
        "href": "news_view",
        "src": "img/ti01.jpg",
        "data_num": "01",
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
        "data_num": "02",
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
        "data_num": "03",
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
        "data_num": "04",
        "data_month": "APR",
        "data_year": "2017",
        "title": "【美妝】來自泰國的超濃黑眼線─Mistine Maxi Black",
        "fb_href": "#",
        "link_href": "#",
        "ig_href": "#",
        "text": "來自泰國知名彩妝品牌Mistine，是每次使用必被詢問的眉筆！大家喜歡的原因是它的亞麻色調，加上它一組有眉筆、眉粉與染眉膏三個套件，先使用眉筆畫眉，接著以眉粉暈染創造自然眉型，再用染眉膏調整眉色。</br>這隻眼線液的防水持妝效果也是我目前用過最好的， 成功打拜我心中的NO1 Kiss Me，所以幫大家做了防水測試！ 防水效果達到了平常是眼線蠟筆才有的等級， 沖水不掉之外，連用手擦拭都不會掉！ 直接把水珠吸乾可以發現，眼線沒有受到半分的影響喔。"
    },
    {
        "id": 5,
        "href": "news_view",
        "src": "img/ti01.jpg",
        "data_num": "05",
        "data_month": "APR",
        "data_year": "2017",
        "title": "【美妝】來自泰國的超濃黑眼線─Mistine Maxi Black",
        "hrefFb": "#",
        "hrefLine": "#",
        "hrefIg": "#",
        "text": "來自泰國知名彩妝品牌Mistine，是每次使用必被詢問的眉筆！大家喜歡的原因是它的亞麻色調，加上它一組有眉筆、眉粉與染眉膏三個套件，先使用眉筆畫眉，接著以眉粉暈染創造自然眉型，再用染眉膏調整眉色。</br>這隻眼線液的防水持妝效果也是我目前用過最好的， 成功打拜我心中的NO1 Kiss Me，所以幫大家做了防水測試！ 防水效果達到了平常是眼線蠟筆才有的等級， 沖水不掉之外，連用手擦拭都不會掉！ 直接把水珠吸乾可以發現，眼線沒有受到半分的影響喔。"
    },
    {
        "id": 6,
        "href": "news_view",
        "src": "img/ti02.jpg",
        "data_num": "06",
        "data_month": "APR",
        "data_year": "2017",
        "title": "【美妝】來自泰國的超濃黑眼線─Mistine Maxi Black",
        "fb_href": "#",
        "link_href": "#",
        "ig_href": "#",
        "text": "來自泰國知名彩妝品牌Mistine，是每次使用必被詢問的眉筆！大家喜歡的原因是它的亞麻色調，加上它一組有眉筆、眉粉與染眉膏三個套件，先使用眉筆畫眉，接著以眉粉暈染創造自然眉型，再用染眉膏調整眉色。</br>這隻眼線液的防水持妝效果也是我目前用過最好的， 成功打拜我心中的NO1 Kiss Me，所以幫大家做了防水測試！ 防水效果達到了平常是眼線蠟筆才有的等級， 沖水不掉之外，連用手擦拭都不會掉！ 直接把水珠吸乾可以發現，眼線沒有受到半分的影響喔。"
    },
    {
        "id": 7,
        "href": "news_view",
        "src": "img/ti03.jpg",
        "data_num": "07",
        "data_month": "APR",
        "data_year": "2017",
        "title": "【美妝】來自泰國的超濃黑眼線─Mistine Maxi Black",
        "fb_href": "#",
        "link_href": "#",
        "ig_href": "#",
        "text": "來自泰國知名彩妝品牌Mistine，是每次使用必被詢問的眉筆！大家喜歡的原因是它的亞麻色調，加上它一組有眉筆、眉粉與染眉膏三個套件，先使用眉筆畫眉，接著以眉粉暈染創造自然眉型，再用染眉膏調整眉色。</br>這隻眼線液的防水持妝效果也是我目前用過最好的， 成功打拜我心中的NO1 Kiss Me，所以幫大家做了防水測試！ 防水效果達到了平常是眼線蠟筆才有的等級， 沖水不掉之外，連用手擦拭都不會掉！ 直接把水珠吸乾可以發現，眼線沒有受到半分的影響喔。"
    },
    {
        "id": 8,
        "href": "news_view",
        "src": "img/ti01.jpg",
        "data_num": "08",
        "data_month": "APR",
        "data_year": "2017",
        "title": "【美妝】來自泰國的超濃黑眼線─Mistine Maxi Black",
        "fb_href": "#",
        "link_href": "#",
        "ig_href": "#",
        "text": "來自泰國知名彩妝品牌Mistine，是每次使用必被詢問的眉筆！大家喜歡的原因是它的亞麻色調，加上它一組有眉筆、眉粉與染眉膏三個套件，先使用眉筆畫眉，接著以眉粉暈染創造自然眉型，再用染眉膏調整眉色。</br>這隻眼線液的防水持妝效果也是我目前用過最好的， 成功打拜我心中的NO1 Kiss Me，所以幫大家做了防水測試！ 防水效果達到了平常是眼線蠟筆才有的等級， 沖水不掉之外，連用手擦拭都不會掉！ 直接把水珠吸乾可以發現，眼線沒有受到半分的影響喔。"
    },
    {
        "id": 9,
        "href": "news_view",
        "src": "img/ti03.jpg",
        "data_num": "09",
        "data_month": "APR",
        "data_year": "2017",
        "title": "【美妝】來自泰國的超濃黑眼線─Mistine Maxi Black",
        "fb_href": "#",
        "link_href": "#",
        "ig_href": "#",
        "text": "來自泰國知名彩妝品牌Mistine，是每次使用必被詢問的眉筆！大家喜歡的原因是它的亞麻色調，加上它一組有眉筆、眉粉與染眉膏三個套件，先使用眉筆畫眉，接著以眉粉暈染創造自然眉型，再用染眉膏調整眉色。</br>這隻眼線液的防水持妝效果也是我目前用過最好的， 成功打拜我心中的NO1 Kiss Me，所以幫大家做了防水測試！ 防水效果達到了平常是眼線蠟筆才有的等級， 沖水不掉之外，連用手擦拭都不會掉！ 直接把水珠吸乾可以發現，眼線沒有受到半分的影響喔。"
    },
    {
        "id": 10,
        "href": "news_view",
        "src": "img/ti01.jpg",
        "data_num": "10",
        "data_month": "APR",
        "data_year": "2017",
        "title": "【美妝】來自泰國的超濃黑眼線─Mistine Maxi Black",
        "fb_href": "#",
        "link_href": "#",
        "ig_href": "#",
        "text": "來自泰國知名彩妝品牌Mistine，是每次使用必被詢問的眉筆！大家喜歡的原因是它的亞麻色調，加上它一組有眉筆、眉粉與染眉膏三個套件，先使用眉筆畫眉，接著以眉粉暈染創造自然眉型，再用染眉膏調整眉色。</br>這隻眼線液的防水持妝效果也是我目前用過最好的， 成功打拜我心中的NO1 Kiss Me，所以幫大家做了防水測試！ 防水效果達到了平常是眼線蠟筆才有的等級， 沖水不掉之外，連用手擦拭都不會掉！ 直接把水珠吸乾可以發現，眼線沒有受到半分的影響喔。"
    },
    {
        "id": 11,
        "href": "news_view",
        "src": "img/ti01.jpg",
        "data_num": "11",
        "data_month": "APR",
        "data_year": "2017",
        "title": "【美妝】來自泰國的超濃黑眼線─Mistine Maxi Black",
        "hrefFb": "#",
        "hrefLine": "#",
        "hrefIg": "#",
        "text": "來自泰國知名彩妝品牌Mistine，是每次使用必被詢問的眉筆！大家喜歡的原因是它的亞麻色調，加上它一組有眉筆、眉粉與染眉膏三個套件，先使用眉筆畫眉，接著以眉粉暈染創造自然眉型，再用染眉膏調整眉色。</br>這隻眼線液的防水持妝效果也是我目前用過最好的， 成功打拜我心中的NO1 Kiss Me，所以幫大家做了防水測試！ 防水效果達到了平常是眼線蠟筆才有的等級， 沖水不掉之外，連用手擦拭都不會掉！ 直接把水珠吸乾可以發現，眼線沒有受到半分的影響喔。"
    },
    {
        "id": 12,
        "href": "news_view",
        "src": "img/ti02.jpg",
        "data_num": "12",
        "data_month": "APR",
        "data_year": "2017",
        "title": "【美妝】來自泰國的超濃黑眼線─Mistine Maxi Black",
        "fb_href": "#",
        "link_href": "#",
        "ig_href": "#",
        "text": "來自泰國知名彩妝品牌Mistine，是每次使用必被詢問的眉筆！大家喜歡的原因是它的亞麻色調，加上它一組有眉筆、眉粉與染眉膏三個套件，先使用眉筆畫眉，接著以眉粉暈染創造自然眉型，再用染眉膏調整眉色。</br>這隻眼線液的防水持妝效果也是我目前用過最好的， 成功打拜我心中的NO1 Kiss Me，所以幫大家做了防水測試！ 防水效果達到了平常是眼線蠟筆才有的等級， 沖水不掉之外，連用手擦拭都不會掉！ 直接把水珠吸乾可以發現，眼線沒有受到半分的影響喔。"
    },
    {
        "id": 13,
        "href": "news_view",
        "src": "img/ti03.jpg",
        "data_num": "13",
        "data_month": "APR",
        "data_year": "2017",
        "title": "【美妝】來自泰國的超濃黑眼線─Mistine Maxi Black",
        "fb_href": "#",
        "link_href": "#",
        "ig_href": "#",
        "text": "來自泰國知名彩妝品牌Mistine，是每次使用必被詢問的眉筆！大家喜歡的原因是它的亞麻色調，加上它一組有眉筆、眉粉與染眉膏三個套件，先使用眉筆畫眉，接著以眉粉暈染創造自然眉型，再用染眉膏調整眉色。</br>這隻眼線液的防水持妝效果也是我目前用過最好的， 成功打拜我心中的NO1 Kiss Me，所以幫大家做了防水測試！ 防水效果達到了平常是眼線蠟筆才有的等級， 沖水不掉之外，連用手擦拭都不會掉！ 直接把水珠吸乾可以發現，眼線沒有受到半分的影響喔。"
    },
]
const districts = [{
        "districts": [{
                "zip": "100",
                "name": "中正區"
            },
            {
                "zip": "103",
                "name": "大同區"
            },
            {
                "zip": "104",
                "name": "中山區"
            },
            {
                "zip": "105",
                "name": "松山區"
            },
            {
                "zip": "106",
                "name": "大安區"
            },
            {
                "zip": "108",
                "name": "萬華區"
            },
            {
                "zip": "110",
                "name": "信義區"
            },
            {
                "zip": "111",
                "name": "士林區"
            },
            {
                "zip": "112",
                "name": "北投區"
            },
            {
                "zip": "114",
                "name": "內湖區"
            },
            {
                "zip": "115",
                "name": "南港區"
            },
            {
                "zip": "116",
                "name": "文山區"
            }
        ],
        "name": "臺北市"
    },
    {
        "districts": [{
                "zip": "200",
                "name": "仁愛區"
            },
            {
                "zip": "201",
                "name": "信義區"
            },
            {
                "zip": "202",
                "name": "中正區"
            },
            {
                "zip": "203",
                "name": "中山區"
            },
            {
                "zip": "204",
                "name": "安樂區"
            },
            {
                "zip": "205",
                "name": "暖暖區"
            },
            {
                "zip": "206",
                "name": "七堵區"
            }
        ],
        "name": "基隆市"
    },
    {
        "districts": [{
                "zip": "207",
                "name": "萬里區"
            },
            {
                "zip": "208",
                "name": "金山區"
            },
            {
                "zip": "220",
                "name": "板橋區"
            },
            {
                "zip": "221",
                "name": "汐止區"
            },
            {
                "zip": "222",
                "name": "深坑區"
            },
            {
                "zip": "223",
                "name": "石碇區"
            },
            {
                "zip": "224",
                "name": "瑞芳區"
            },
            {
                "zip": "226",
                "name": "平溪區"
            },
            {
                "zip": "227",
                "name": "雙溪區"
            },
            {
                "zip": "228",
                "name": "貢寮區"
            },
            {
                "zip": "231",
                "name": "新店區"
            },
            {
                "zip": "232",
                "name": "坪林區"
            },
            {
                "zip": "233",
                "name": "烏來區"
            },
            {
                "zip": "234",
                "name": "永和區"
            },
            {
                "zip": "235",
                "name": "中和區"
            },
            {
                "zip": "236",
                "name": "土城區"
            },
            {
                "zip": "237",
                "name": "三峽區"
            },
            {
                "zip": "238",
                "name": "樹林區"
            },
            {
                "zip": "239",
                "name": "鶯歌區"
            },
            {
                "zip": "241",
                "name": "三重區"
            },
            {
                "zip": "242",
                "name": "新莊區"
            },
            {
                "zip": "243",
                "name": "泰山區"
            },
            {
                "zip": "244",
                "name": "林口區"
            },
            {
                "zip": "247",
                "name": "蘆洲區"
            },
            {
                "zip": "248",
                "name": "五股區"
            },
            {
                "zip": "249",
                "name": "八里區"
            },
            {
                "zip": "251",
                "name": "淡水區"
            },
            {
                "zip": "252",
                "name": "三芝區"
            },
            {
                "zip": "253",
                "name": "石門區"
            }
        ],
        "name": "新北市"
    },
    {
        "districts": [{
                "zip": "209",
                "name": "南竿鄉"
            },
            {
                "zip": "210",
                "name": "北竿鄉"
            },
            {
                "zip": "211",
                "name": "莒光鄉"
            },
            {
                "zip": "212",
                "name": "東引鄉"
            }
        ],
        "name": "連江縣"
    },
    {
        "districts": [{
                "zip": "260",
                "name": "宜蘭市"
            },
            {
                "zip": "263",
                "name": "壯圍鄉"
            },
            {
                "zip": "261",
                "name": "頭城鎮"
            },
            {
                "zip": "262",
                "name": "礁溪鄉"
            },
            {
                "zip": "264",
                "name": "員山鄉"
            },
            {
                "zip": "265",
                "name": "羅東鎮"
            },
            {
                "zip": "266",
                "name": "三星鄉"
            },
            {
                "zip": "267",
                "name": "大同鄉"
            },
            {
                "zip": "268",
                "name": "五結鄉"
            },
            {
                "zip": "269",
                "name": "冬山鄉"
            },
            {
                "zip": "270",
                "name": "蘇澳鎮"
            },
            {
                "zip": "272",
                "name": "南澳鄉"
            },
            {
                "zip": "290",
                "name": "釣魚臺"
            }
        ],
        "name": "宜蘭縣"
    },
    {
        "districts": [{
            "zip": "290",
            "name": "釣魚臺"
        }],
        "name": "釣魚臺"
    },
    {
        "districts": [{
                "zip": "300",
                "name": "東區"
            },
            {
                "zip": "300",
                "name": "北區"
            },
            {
                "zip": "300",
                "name": "香山區"
            }
        ],
        "name": "新竹市"
    },
    {
        "districts": [{
                "zip": "308",
                "name": "寶山鄉"
            },
            {
                "zip": "302",
                "name": "竹北市"
            },
            {
                "zip": "303",
                "name": "湖口鄉"
            },
            {
                "zip": "304",
                "name": "新豐鄉"
            },
            {
                "zip": "305",
                "name": "新埔鎮"
            },
            {
                "zip": "306",
                "name": "關西鎮"
            },
            {
                "zip": "307",
                "name": "芎林鄉"
            },
            {
                "zip": "310",
                "name": "竹東鎮"
            },
            {
                "zip": "311",
                "name": "五峰鄉"
            },
            {
                "zip": "312",
                "name": "橫山鄉"
            },
            {
                "zip": "313",
                "name": "尖石鄉"
            },
            {
                "zip": "314",
                "name": "北埔鄉"
            },
            {
                "zip": "315",
                "name": "峨眉鄉"
            }
        ],
        "name": "新竹縣"
    },
    {
        "districts": [{
                "zip": "320",
                "name": "中壢區"
            },
            {
                "zip": "324",
                "name": "平鎮區"
            },
            {
                "zip": "325",
                "name": "龍潭區"
            },
            {
                "zip": "326",
                "name": "楊梅區"
            },
            {
                "zip": "327",
                "name": "新屋區"
            },
            {
                "zip": "328",
                "name": "觀音區"
            },
            {
                "zip": "330",
                "name": "桃園區"
            },
            {
                "zip": "333",
                "name": "龜山區"
            },
            {
                "zip": "334",
                "name": "八德區"
            },
            {
                "zip": "335",
                "name": "大溪區"
            },
            {
                "zip": "336",
                "name": "復興區"
            },
            {
                "zip": "337",
                "name": "大園區"
            },
            {
                "zip": "338",
                "name": "蘆竹區"
            }
        ],
        "name": "桃園市"
    },
    {
        "districts": [{
                "zip": "350",
                "name": "竹南鎮"
            },
            {
                "zip": "351",
                "name": "頭份市"
            },
            {
                "zip": "352",
                "name": "三灣鄉"
            },
            {
                "zip": "353",
                "name": "南庄鄉"
            },
            {
                "zip": "354",
                "name": "獅潭鄉"
            },
            {
                "zip": "356",
                "name": "後龍鎮"
            },
            {
                "zip": "357",
                "name": "通霄鎮"
            },
            {
                "zip": "358",
                "name": "苑裡鎮"
            },
            {
                "zip": "360",
                "name": "苗栗市"
            },
            {
                "zip": "361",
                "name": "造橋鄉"
            },
            {
                "zip": "362",
                "name": "頭屋鄉"
            },
            {
                "zip": "363",
                "name": "公館鄉"
            },
            {
                "zip": "364",
                "name": "大湖鄉"
            },
            {
                "zip": "365",
                "name": "泰安鄉"
            },
            {
                "zip": "366",
                "name": "銅鑼鄉"
            },
            {
                "zip": "367",
                "name": "三義鄉"
            },
            {
                "zip": "368",
                "name": "西湖鄉"
            },
            {
                "zip": "369",
                "name": "卓蘭鎮"
            }
        ],
        "name": "苗栗縣"
    },
    {
        "districts": [{
                "zip": "400",
                "name": "中區"
            },
            {
                "zip": "401",
                "name": "東區"
            },
            {
                "zip": "402",
                "name": "南區"
            },
            {
                "zip": "403",
                "name": "西區"
            },
            {
                "zip": "404",
                "name": "北區"
            },
            {
                "zip": "406",
                "name": "北屯區"
            },
            {
                "zip": "407",
                "name": "西屯區"
            },
            {
                "zip": "408",
                "name": "南屯區"
            },
            {
                "zip": "411",
                "name": "太平區"
            },
            {
                "zip": "412",
                "name": "大里區"
            },
            {
                "zip": "413",
                "name": "霧峰區"
            },
            {
                "zip": "414",
                "name": "烏日區"
            },
            {
                "zip": "420",
                "name": "豐原區"
            },
            {
                "zip": "421",
                "name": "后里區"
            },
            {
                "zip": "422",
                "name": "石岡區"
            },
            {
                "zip": "423",
                "name": "東勢區"
            },
            {
                "zip": "424",
                "name": "和平區"
            },
            {
                "zip": "426",
                "name": "新社區"
            },
            {
                "zip": "427",
                "name": "潭子區"
            },
            {
                "zip": "428",
                "name": "大雅區"
            },
            {
                "zip": "429",
                "name": "神岡區"
            },
            {
                "zip": "432",
                "name": "大肚區"
            },
            {
                "zip": "433",
                "name": "沙鹿區"
            },
            {
                "zip": "434",
                "name": "龍井區"
            },
            {
                "zip": "435",
                "name": "梧棲區"
            },
            {
                "zip": "436",
                "name": "清水區"
            },
            {
                "zip": "437",
                "name": "大甲區"
            },
            {
                "zip": "438",
                "name": "外埔區"
            },
            {
                "zip": "439",
                "name": "大安區"
            }
        ],
        "name": "臺中市"
    },
    {
        "districts": [{
                "zip": "500",
                "name": "彰化市"
            },
            {
                "zip": "502",
                "name": "芬園鄉"
            },
            {
                "zip": "503",
                "name": "花壇鄉"
            },
            {
                "zip": "504",
                "name": "秀水鄉"
            },
            {
                "zip": "505",
                "name": "鹿港鎮"
            },
            {
                "zip": "506",
                "name": "福興鄉"
            },
            {
                "zip": "507",
                "name": "線西鄉"
            },
            {
                "zip": "508",
                "name": "和美鎮"
            },
            {
                "zip": "509",
                "name": "伸港鄉"
            },
            {
                "zip": "510",
                "name": "員林市"
            },
            {
                "zip": "511",
                "name": "社頭鄉"
            },
            {
                "zip": "512",
                "name": "永靖鄉"
            },
            {
                "zip": "513",
                "name": "埔心鄉"
            },
            {
                "zip": "514",
                "name": "溪湖鎮"
            },
            {
                "zip": "515",
                "name": "大村鄉"
            },
            {
                "zip": "516",
                "name": "埔鹽鄉"
            },
            {
                "zip": "520",
                "name": "田中鎮"
            },
            {
                "zip": "521",
                "name": "北斗鎮"
            },
            {
                "zip": "522",
                "name": "田尾鄉"
            },
            {
                "zip": "523",
                "name": "埤頭鄉"
            },
            {
                "zip": "524",
                "name": "溪州鄉"
            },
            {
                "zip": "525",
                "name": "竹塘鄉"
            },
            {
                "zip": "526",
                "name": "二林鎮"
            },
            {
                "zip": "527",
                "name": "大城鄉"
            },
            {
                "zip": "528",
                "name": "芳苑鄉"
            },
            {
                "zip": "530",
                "name": "二水鄉"
            }
        ],
        "name": "彰化縣"
    },
    {
        "districts": [{
                "zip": "540",
                "name": "南投市"
            },
            {
                "zip": "541",
                "name": "中寮鄉"
            },
            {
                "zip": "542",
                "name": "草屯鎮"
            },
            {
                "zip": "544",
                "name": "國姓鄉"
            },
            {
                "zip": "545",
                "name": "埔里鎮"
            },
            {
                "zip": "546",
                "name": "仁愛鄉"
            },
            {
                "zip": "551",
                "name": "名間鄉"
            },
            {
                "zip": "552",
                "name": "集集鎮"
            },
            {
                "zip": "553",
                "name": "水里鄉"
            },
            {
                "zip": "555",
                "name": "魚池鄉"
            },
            {
                "zip": "556",
                "name": "信義鄉"
            },
            {
                "zip": "557",
                "name": "竹山鎮"
            },
            {
                "zip": "558",
                "name": "鹿谷鄉"
            }
        ],
        "name": "南投縣"
    },
    {
        "districts": [{
                "zip": "600",
                "name": "西區"
            },
            {
                "zip": "600",
                "name": "東區"
            }
        ],
        "name": "嘉義市"
    },
    {
        "districts": [{
                "zip": "602",
                "name": "番路鄉"
            },
            {
                "zip": "603",
                "name": "梅山鄉"
            },
            {
                "zip": "604",
                "name": "竹崎鄉"
            },
            {
                "zip": "605",
                "name": "阿里山鄉"
            },
            {
                "zip": "606",
                "name": "中埔鄉"
            },
            {
                "zip": "607",
                "name": "大埔鄉"
            },
            {
                "zip": "608",
                "name": "水上鄉"
            },
            {
                "zip": "611",
                "name": "鹿草鄉"
            },
            {
                "zip": "612",
                "name": "太保市"
            },
            {
                "zip": "613",
                "name": "朴子市"
            },
            {
                "zip": "614",
                "name": "東石鄉"
            },
            {
                "zip": "615",
                "name": "六腳鄉"
            },
            {
                "zip": "616",
                "name": "新港鄉"
            },
            {
                "zip": "621",
                "name": "民雄鄉"
            },
            {
                "zip": "622",
                "name": "大林鎮"
            },
            {
                "zip": "623",
                "name": "溪口鄉"
            },
            {
                "zip": "624",
                "name": "義竹鄉"
            },
            {
                "zip": "625",
                "name": "布袋鎮"
            }
        ],
        "name": "嘉義縣"
    },
    {
        "districts": [{
                "zip": "630",
                "name": "斗南鎮"
            },
            {
                "zip": "631",
                "name": "大埤鄉"
            },
            {
                "zip": "632",
                "name": "虎尾鎮"
            },
            {
                "zip": "633",
                "name": "土庫鎮"
            },
            {
                "zip": "634",
                "name": "褒忠鄉"
            },
            {
                "zip": "635",
                "name": "東勢鄉"
            },
            {
                "zip": "636",
                "name": "臺西鄉"
            },
            {
                "zip": "637",
                "name": "崙背鄉"
            },
            {
                "zip": "638",
                "name": "麥寮鄉"
            },
            {
                "zip": "640",
                "name": "斗六市"
            },
            {
                "zip": "643",
                "name": "林內鄉"
            },
            {
                "zip": "646",
                "name": "古坑鄉"
            },
            {
                "zip": "647",
                "name": "莿桐鄉"
            },
            {
                "zip": "648",
                "name": "西螺鎮"
            },
            {
                "zip": "649",
                "name": "二崙鄉"
            },
            {
                "zip": "651",
                "name": "北港鎮"
            },
            {
                "zip": "652",
                "name": "水林鄉"
            },
            {
                "zip": "653",
                "name": "口湖鄉"
            },
            {
                "zip": "654",
                "name": "四湖鄉"
            },
            {
                "zip": "655",
                "name": "元長鄉"
            }
        ],
        "name": "雲林縣"
    },
    {
        "districts": [{
                "zip": "700",
                "name": "中西區"
            },
            {
                "zip": "701",
                "name": "東區"
            },
            {
                "zip": "702",
                "name": "南區"
            },
            {
                "zip": "704",
                "name": "北區"
            },
            {
                "zip": "708",
                "name": "安平區"
            },
            {
                "zip": "709",
                "name": "安南區"
            },
            {
                "zip": "710",
                "name": "永康區"
            },
            {
                "zip": "711",
                "name": "歸仁區"
            },
            {
                "zip": "712",
                "name": "新化區"
            },
            {
                "zip": "713",
                "name": "左鎮區"
            },
            {
                "zip": "714",
                "name": "玉井區"
            },
            {
                "zip": "715",
                "name": "楠西區"
            },
            {
                "zip": "716",
                "name": "南化區"
            },
            {
                "zip": "717",
                "name": "仁德區"
            },
            {
                "zip": "718",
                "name": "關廟區"
            },
            {
                "zip": "719",
                "name": "龍崎區"
            },
            {
                "zip": "720",
                "name": "官田區"
            },
            {
                "zip": "721",
                "name": "麻豆區"
            },
            {
                "zip": "722",
                "name": "佳里區"
            },
            {
                "zip": "723",
                "name": "西港區"
            },
            {
                "zip": "724",
                "name": "七股區"
            },
            {
                "zip": "725",
                "name": "將軍區"
            },
            {
                "zip": "726",
                "name": "學甲區"
            },
            {
                "zip": "727",
                "name": "北門區"
            },
            {
                "zip": "730",
                "name": "新營區"
            },
            {
                "zip": "731",
                "name": "後壁區"
            },
            {
                "zip": "732",
                "name": "白河區"
            },
            {
                "zip": "733",
                "name": "東山區"
            },
            {
                "zip": "734",
                "name": "六甲區"
            },
            {
                "zip": "735",
                "name": "下營區"
            },
            {
                "zip": "736",
                "name": "柳營區"
            },
            {
                "zip": "737",
                "name": "鹽水區"
            },
            {
                "zip": "741",
                "name": "善化區"
            },
            {
                "zip": "744",
                "name": "新市區"
            },
            {
                "zip": "742",
                "name": "大內區"
            },
            {
                "zip": "743",
                "name": "山上區"
            },
            {
                "zip": "745",
                "name": "安定區"
            }
        ],
        "name": "臺南市"
    },
    {
        "districts": [{
                "zip": "800",
                "name": "新興區"
            },
            {
                "zip": "801",
                "name": "前金區"
            },
            {
                "zip": "802",
                "name": "苓雅區"
            },
            {
                "zip": "803",
                "name": "鹽埕區"
            },
            {
                "zip": "804",
                "name": "鼓山區"
            },
            {
                "zip": "805",
                "name": "旗津區"
            },
            {
                "zip": "806",
                "name": "前鎮區"
            },
            {
                "zip": "807",
                "name": "三民區"
            },
            {
                "zip": "811",
                "name": "楠梓區"
            },
            {
                "zip": "812",
                "name": "小港區"
            },
            {
                "zip": "813",
                "name": "左營區"
            },
            {
                "zip": "814",
                "name": "仁武區"
            },
            {
                "zip": "815",
                "name": "大社區"
            },
            {
                "zip": "817",
                "name": "東沙群島"
            },
            {
                "zip": "819",
                "name": "南沙群島"
            },
            {
                "zip": "820",
                "name": "岡山區"
            },
            {
                "zip": "821",
                "name": "路竹區"
            },
            {
                "zip": "822",
                "name": "阿蓮區"
            },
            {
                "zip": "823",
                "name": "田寮區"
            },
            {
                "zip": "824",
                "name": "燕巢區"
            },
            {
                "zip": "825",
                "name": "橋頭區"
            },
            {
                "zip": "826",
                "name": "梓官區"
            },
            {
                "zip": "827",
                "name": "彌陀區"
            },
            {
                "zip": "828",
                "name": "永安區"
            },
            {
                "zip": "829",
                "name": "湖內區"
            },
            {
                "zip": "830",
                "name": "鳳山區"
            },
            {
                "zip": "831",
                "name": "大寮區"
            },
            {
                "zip": "832",
                "name": "林園區"
            },
            {
                "zip": "833",
                "name": "鳥松區"
            },
            {
                "zip": "840",
                "name": "大樹區"
            },
            {
                "zip": "842",
                "name": "旗山區"
            },
            {
                "zip": "843",
                "name": "美濃區"
            },
            {
                "zip": "844",
                "name": "六龜區"
            },
            {
                "zip": "845",
                "name": "內門區"
            },
            {
                "zip": "846",
                "name": "杉林區"
            },
            {
                "zip": "847",
                "name": "甲仙區"
            },
            {
                "zip": "848",
                "name": "桃源區"
            },
            {
                "zip": "849",
                "name": "那瑪夏區"
            },
            {
                "zip": "851",
                "name": "茂林區"
            },
            {
                "zip": "852",
                "name": "茄萣區"
            }
        ],
        "name": "高雄市"
    },
    {
        "districts": [{
                "zip": "817",
                "name": "東沙群島"
            },
            {
                "zip": "819",
                "name": "南沙群島"
            }
        ],
        "name": "南海島"
    },
    {
        "districts": [{
                "zip": "880",
                "name": "馬公市"
            },
            {
                "zip": "881",
                "name": "西嶼鄉"
            },
            {
                "zip": "882",
                "name": "望安鄉"
            },
            {
                "zip": "883",
                "name": "七美鄉"
            },
            {
                "zip": "884",
                "name": "白沙鄉"
            },
            {
                "zip": "885",
                "name": "湖西鄉"
            }
        ],
        "name": "澎湖縣"
    },
    {
        "districts": [{
                "zip": "890",
                "name": "金沙鎮"
            },
            {
                "zip": "891",
                "name": "金湖鎮"
            },
            {
                "zip": "892",
                "name": "金寧鄉"
            },
            {
                "zip": "893",
                "name": "金城鎮"
            },
            {
                "zip": "894",
                "name": "烈嶼鄉"
            },
            {
                "zip": "896",
                "name": "烏坵鄉"
            }
        ],
        "name": "金門縣"
    },
    {
        "districts": [{
                "zip": "900",
                "name": "屏東市"
            },
            {
                "zip": "901",
                "name": "三地門鄉"
            },
            {
                "zip": "902",
                "name": "霧臺鄉"
            },
            {
                "zip": "903",
                "name": "瑪家鄉"
            },
            {
                "zip": "904",
                "name": "九如鄉"
            },
            {
                "zip": "905",
                "name": "里港鄉"
            },
            {
                "zip": "906",
                "name": "高樹鄉"
            },
            {
                "zip": "907",
                "name": "鹽埔鄉"
            },
            {
                "zip": "908",
                "name": "長治鄉"
            },
            {
                "zip": "909",
                "name": "麟洛鄉"
            },
            {
                "zip": "911",
                "name": "竹田鄉"
            },
            {
                "zip": "912",
                "name": "內埔鄉"
            },
            {
                "zip": "913",
                "name": "萬丹鄉"
            },
            {
                "zip": "920",
                "name": "潮州鎮"
            },
            {
                "zip": "921",
                "name": "泰武鄉"
            },
            {
                "zip": "922",
                "name": "來義鄉"
            },
            {
                "zip": "923",
                "name": "萬巒鄉"
            },
            {
                "zip": "924",
                "name": "崁頂鄉"
            },
            {
                "zip": "925",
                "name": "新埤鄉"
            },
            {
                "zip": "926",
                "name": "南州鄉"
            },
            {
                "zip": "927",
                "name": "林邊鄉"
            },
            {
                "zip": "928",
                "name": "東港鎮"
            },
            {
                "zip": "929",
                "name": "琉球鄉"
            },
            {
                "zip": "931",
                "name": "佳冬鄉"
            },
            {
                "zip": "932",
                "name": "新園鄉"
            },
            {
                "zip": "940",
                "name": "枋寮鄉"
            },
            {
                "zip": "941",
                "name": "枋山鄉"
            },
            {
                "zip": "942",
                "name": "春日鄉"
            },
            {
                "zip": "943",
                "name": "獅子鄉"
            },
            {
                "zip": "944",
                "name": "車城鄉"
            },
            {
                "zip": "945",
                "name": "牡丹鄉"
            },
            {
                "zip": "946",
                "name": "恆春鎮"
            },
            {
                "zip": "947",
                "name": "滿州鄉"
            }
        ],
        "name": "屏東縣"
    },
    {
        "districts": [{
                "zip": "950",
                "name": "臺東市"
            },
            {
                "zip": "951",
                "name": "綠島鄉"
            },
            {
                "zip": "952",
                "name": "蘭嶼鄉"
            },
            {
                "zip": "953",
                "name": "延平鄉"
            },
            {
                "zip": "954",
                "name": "卑南鄉"
            },
            {
                "zip": "955",
                "name": "鹿野鄉"
            },
            {
                "zip": "956",
                "name": "關山鎮"
            },
            {
                "zip": "957",
                "name": "海端鄉"
            },
            {
                "zip": "958",
                "name": "池上鄉"
            },
            {
                "zip": "959",
                "name": "東河鄉"
            },
            {
                "zip": "961",
                "name": "成功鎮"
            },
            {
                "zip": "962",
                "name": "長濱鄉"
            },
            {
                "zip": "963",
                "name": "太麻里鄉"
            },
            {
                "zip": "964",
                "name": "金峰鄉"
            },
            {
                "zip": "965",
                "name": "大武鄉"
            },
            {
                "zip": "966",
                "name": "達仁鄉"
            }
        ],
        "name": "臺東縣"
    },
    {
        "districts": [{
                "zip": "970",
                "name": "花蓮市"
            },
            {
                "zip": "971",
                "name": "新城鄉"
            },
            {
                "zip": "972",
                "name": "秀林鄉"
            },
            {
                "zip": "973",
                "name": "吉安鄉"
            },
            {
                "zip": "974",
                "name": "壽豐鄉"
            },
            {
                "zip": "975",
                "name": "鳳林鎮"
            },
            {
                "zip": "976",
                "name": "光復鄉"
            },
            {
                "zip": "977",
                "name": "豐濱鄉"
            },
            {
                "zip": "978",
                "name": "瑞穗鄉"
            },
            {
                "zip": "979",
                "name": "萬榮鄉"
            },
            {
                "zip": "981",
                "name": "玉里鎮"
            },
            {
                "zip": "982",
                "name": "卓溪鄉"
            },
            {
                "zip": "983",
                "name": "富里鄉"
            }
        ],
        "name": "花蓮縣"
    }
]
const custom = {
    "categoryId": '', //類id
    "category1Id": '', //1級分類
    "category2Id": '', //2級分類
    "categoryName": '', //類別名稱
    "keyword": '', //關鍵字
    "order": '', //順序
    "pageNo": '', //當前頁
    "pageSize": '', //顯示數量
    "props": '', //參數
    "trademark": '', //品牌
};
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
            "productList": productList.slice(0, 8),
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
                            "name": "眼影盤"
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
                            "name": "腮紅"
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
                        "id": 13,
                        "class_id": 1,
                        "name": "美髮保養"
                    }]
                },
                {
                    "id": 5,
                    "class_id": 0,
                    "name": "眼線筆"
                },
                {
                    "id": 6,
                    "class_id": 0,
                    "name": "全部"
                }
            ],
        }
    }
});
Mock.mock('/mock/productList', (options) => {
    //json 
    // console.log(options.body)
    //json變物件
    // console.log(JSON.parse(options.body), JSON.parse(options.body).categoryName)

    let body = JSON.parse(options.body)
        // console.log('body',body)
    let categoryName = body.categoryName
    let categoryId = body.categoryId
    let pageNo = body.pageNo
    let pageSize = body.pageSize
    let keyword = body.keyword
    let title = ''
    let total = productList.length
    let productListData = productList.filter((item, index) => {
        let end = pageNo * pageSize;
        let start = end - pageSize + 1;
        let number = index + 1
            // console.log('number',number,'start',start,'end',end,number>=start,number<=end)
        return number >= start && number <= end
    })
    if (categoryName) {
        title = '#' + categoryName
    }
    if (categoryName == '全部') {
        // console.log('全部')
        total = productList.length
        productListData = productList.filter((item, index) => {
            let end = pageNo * pageSize;
            let start = end - pageSize + 1;
            let number = index + 1
                // console.log('number',number,'start',start,'end',end,number>=start,number<=end)
            return number >= start && number <= end
        })
    }
    if (categoryId && categoryName != '全部') {
        // console.log('類別',categoryId)
        productListData = productList.filter(item => item.categoryId == categoryId)
        total = productListData.length
        productListData = productListData.filter((item, index) => {
            let end = pageNo * pageSize;
            let start = end - pageSize + 1;
            let number = index + 1
                // console.log('number',number,'start',start,'end',end,number>=start,number<=end)
            return number >= start && number <= end
        })
    }
    if (keyword) {
        // console.log('查詢',keyword)
        title = '#' + keyword
        productListData = productList.filter(item => {
            // console.log(item.ti.indexOf(keyword),item.id,item.ti,keyword)
            return item.ti.indexOf(keyword) >= 0
        })
        total = productListData.length
        productListData = productListData.filter((item, index) => {
                let end = pageNo * pageSize;
                let start = end - pageSize + 1;
                let number = index + 1
                    // console.log('number',number,'start',start,'end',end,number>=start,number<=end)
                return number >= start && number <= end
            })
            // if(list.length){
            //     productListData =  list
            // }else{
            //     productListData = ''
            // }
    }
    // console.log(pageNo,pageSize,productListData.length)
    return {
        code: 200,
        data: {
            "title": title,
            "productList": productListData,
            "total": total,
        }
    }
});
/*Mock.mock('/mock/news', (options) => {
    let body = JSON.parse(options.body)
    let pageNo = body.pageNo
    let pageSize = body.pageSize
    let total = newsList.length
    let newsListData = newsList.filter((item, index) => {
        let end = pageNo * pageSize;
        let start = end - pageSize + 1;
        let number = index + 1
        return number >= start && number <= end
    })
    return {
        code: 200,
        data: {
            "newsList": newsListData,
            "total": total,
        }
    }
});*/
Mock.mock(/^\/mock\/news/, (options) => {
    //console.log(options.url.split('/'));
    let array = options.url.split('/');
    let pageSize = array.pop();
    let pageNo = array.pop();
    let total = newsList.length
    let newsListData = newsList.filter((item, index) => {
        let end = pageNo * pageSize;
        let start = end - pageSize + 1;
        let number = index + 1
        return number >= start && number <= end
    })
    return {
        code: 200,
        data: {
            "newsList": newsListData,
            "total": total,
        }
    }
});
Mock.mock('/mock/beauty', (options) => {
    // console.log(options.body)
    let body = JSON.parse(options.body)
        // console.log('body',body)
    let pageNo = body.pageNo
    let pageSize = body.pageSize
    let total = beautyList.length
    let beautyListData = beautyList.filter((item, index) => {
        let end = pageNo * pageSize;
        let start = end - pageSize + 1;
        let number = index + 1
        return number >= start && number <= end
    })
    return {
        code: 200,
        data: {
            "beautyList": beautyListData,
            "total": total,
        }
    }
});
Mock.mock('/mock/store', { code: 200, data: store });
Mock.mock('/mock/productView', (options) => {
    // console.log(options)
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
Mock.mock('/mock/userCode', (options) => {
    // console.log(options)
    // let body = JSON.parse(options.body)
    // console.log(body)
    return {
        code: 200,
        codeNumber: 9865
    }
});
Mock.mock('/mock/register', (options) => {
    // let body = JSON.parse(options.body)
    //save
    // user.push(body)
    // console.log(user)
    return {
        code: 200,
    }
});
Mock.mock('/mock/registerDistricts', () => {
    return {
        code: 200,
        data: districts
    }
});
Mock.mock('/mock/login', (options) => {
    let body = JSON.parse(options.body)
        //save
        // user.push(body)
        // console.log(body)
    return {
        code: 200,
        data: {
            userId: 1,
            name: body.account,
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
        }
    }
});