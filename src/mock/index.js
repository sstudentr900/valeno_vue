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
        "introduce": "https://imgur.com/Rkfy1Ze.jpg",
        "illustrate": "用途:使眼部色彩豐富<br>使用方式：依照喜好選擇顏色並依序塗抹在眼皮上",
        "element": "容量：9g<br>成分: 如包裝所標示<br>保存期限：3年<br>產地：泰國<br> 高市衛廣字第10505018號",
        "productImgs": ["https://imgur.com/eJEZuLC.jpg", "https://imgur.com/nDjOWZU.jpg", "https://imgur.com/ULKIm2M.jpg", "https://imgur.com/1Q7xtcu.jpg", "https://imgur.com/QLM7KBM.jpg", "https://imgur.com/ULKIm2M.jpg"],
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
        "introduce": "https://imgur.com/Rkfy1Ze.jpg",
        "illustrate": "用途:使眼部色彩豐富<br>使用方式：依照喜好選擇顏色並依序塗抹在眼皮上",
        "element": "容量：9g<br>成分: 如包裝所標示<br>保存期限：3年<br>產地：泰國<br> 高市衛廣字第10505018號",
        "productImgs": ["https://imgur.com/nDjOWZU.jpg", "https://imgur.com/QLM7KBM.jpg", "https://imgur.com/ULKIm2M.jpg", "https://imgur.com/1Q7xtcu.jpg", "https://imgur.com/QLM7KBM.jpg", "https://imgur.com/ULKIm2M.jpg"],
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
        "introduce": "https://imgur.com/Rkfy1Ze.jpg",
        "illustrate": "用途:使眼部色彩豐富<br>使用方式：依照喜好選擇顏色並依序塗抹在眼皮上",
        "element": "容量：9g<br>成分: 如包裝所標示<br>保存期限：3年<br>產地：泰國<br> 高市衛廣字第10505018號",
        "productImgs": ["https://imgur.com/QLM7KBM.jpg", "https://imgur.com/nDjOWZU.jpg", "https://imgur.com/ULKIm2M.jpg", "https://imgur.com/1Q7xtcu.jpg", "https://imgur.com/QLM7KBM.jpg", "https://imgur.com/ULKIm2M.jpg"],
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
        "introduce": "https://imgur.com/Rkfy1Ze.jpg",
        "illustrate": "用途:使眼部色彩豐富<br>使用方式：依照喜好選擇顏色並依序塗抹在眼皮上",
        "element": "容量：9g<br>成分: 如包裝所標示<br>保存期限：3年<br>產地：泰國<br> 高市衛廣字第10505018號",
        "productImgs": ["https://imgur.com/1Q7xtcu.jpg", "https://imgur.com/nDjOWZU.jpg", "https://imgur.com/ULKIm2M.jpg", "https://imgur.com/1Q7xtcu.jpg", "https://imgur.com/QLM7KBM.jpg", "https://imgur.com/ULKIm2M.jpg"],
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
        "introduce": "https://imgur.com/Rkfy1Ze.jpg",
        "illustrate": "用途:使眼部色彩豐富<br>使用方式：依照喜好選擇顏色並依序塗抹在眼皮上",
        "element": "容量：9g<br>成分: 如包裝所標示<br>保存期限：3年<br>產地：泰國<br> 高市衛廣字第10505018號",
        "productImgs": ["https://imgur.com/ULKIm2M.jpg", "https://imgur.com/nDjOWZU.jpg", "https://imgur.com/ULKIm2M.jpg", "https://imgur.com/1Q7xtcu.jpg", "https://imgur.com/QLM7KBM.jpg", "https://imgur.com/ULKIm2M.jpg"],
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
        "introduce": "https://imgur.com/Rkfy1Ze.jpg",
        "illustrate": "用途:使眼部色彩豐富<br>使用方式：依照喜好選擇顏色並依序塗抹在眼皮上",
        "element": "容量：9g<br>成分: 如包裝所標示<br>保存期限：3年<br>產地：泰國<br> 高市衛廣字第10505018號",
        "productImgs": ["https://imgur.com/eJEZuLC.jpg", "https://imgur.com/nDjOWZU.jpg", "https://imgur.com/ULKIm2M.jpg", "https://imgur.com/1Q7xtcu.jpg", "https://imgur.com/QLM7KBM.jpg", "https://imgur.com/ULKIm2M.jpg"],
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
        "introduce": "https://imgur.com/Rkfy1Ze.jpg",
        "illustrate": "用途:使眼部色彩豐富<br>使用方式：依照喜好選擇顏色並依序塗抹在眼皮上",
        "element": "容量：9g<br>成分: 如包裝所標示<br>保存期限：3年<br>產地：泰國<br> 高市衛廣字第10505018號",
        "productImgs": ["https://imgur.com/nDjOWZU.jpg", "https://imgur.com/ULKIm2M.jpg", "https://imgur.com/1Q7xtcu.jpg", "https://imgur.com/1Q7xtcu.jpg", "https://imgur.com/QLM7KBM.jpg", "https://imgur.com/ULKIm2M.jpg"],
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
        "introduce": "https://imgur.com/Rkfy1Ze.jpg",
        "illustrate": "用途:使眼部色彩豐富<br>使用方式：依照喜好選擇顏色並依序塗抹在眼皮上",
        "element": "容量：9g<br>成分: 如包裝所標示<br>保存期限：3年<br>產地：泰國<br> 高市衛廣字第10505018號",
        "productImgs": ["https://imgur.com/eJEZuLC.jpg", "https://imgur.com/1Q7xtcu.jpg", "https://imgur.com/nDjOWZU.jpg", "https://imgur.com/ULKIm2M.jpg", "https://imgur.com/1Q7xtcu.jpg", "https://imgur.com/QLM7KBM.jpg", "https://imgur.com/ULKIm2M.jpg"],
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
        "introduce": "https://imgur.com/Rkfy1Ze.jpg",
        "illustrate": "用途:使眼部色彩豐富<br>使用方式：依照喜好選擇顏色並依序塗抹在眼皮上",
        "element": "容量：9g<br>成分: 如包裝所標示<br>保存期限：3年<br>產地：泰國<br> 高市衛廣字第10505018號",
        "productImgs": ["https://imgur.com/eJEZuLC.jpg", "https://imgur.com/nDjOWZU.jpg", "https://imgur.com/ULKIm2M.jpg", "https://imgur.com/1Q7xtcu.jpg", "https://imgur.com/QLM7KBM.jpg", "https://imgur.com/ULKIm2M.jpg"],
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
        "introduce": "https://imgur.com/Rkfy1Ze.jpg",
        "illustrate": "用途:使眼部色彩豐富<br>使用方式：依照喜好選擇顏色並依序塗抹在眼皮上",
        "element": "容量：9g<br>成分: 如包裝所標示<br>保存期限：3年<br>產地：泰國<br> 高市衛廣字第10505018號",
        "productImgs": ["https://imgur.com/nDjOWZU.jpg", "https://imgur.com/QLM7KBM.jpg", "https://imgur.com/ULKIm2M.jpg", "https://imgur.com/1Q7xtcu.jpg", "https://imgur.com/QLM7KBM.jpg", "https://imgur.com/ULKIm2M.jpg"],
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
        "introduce": "https://imgur.com/Rkfy1Ze.jpg",
        "illustrate": "用途:使眼部色彩豐富<br>使用方式：依照喜好選擇顏色並依序塗抹在眼皮上",
        "element": "容量：9g<br>成分: 如包裝所標示<br>保存期限：3年<br>產地：泰國<br> 高市衛廣字第10505018號",
        "productImgs": ["https://imgur.com/QLM7KBM.jpg", "https://imgur.com/nDjOWZU.jpg", "https://imgur.com/ULKIm2M.jpg", "https://imgur.com/1Q7xtcu.jpg", "https://imgur.com/QLM7KBM.jpg", "https://imgur.com/ULKIm2M.jpg"],
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
        "introduce": "https://imgur.com/Rkfy1Ze.jpg",
        "illustrate": "用途:使眼部色彩豐富<br>使用方式：依照喜好選擇顏色並依序塗抹在眼皮上",
        "element": "容量：9g<br>成分: 如包裝所標示<br>保存期限：3年<br>產地：泰國<br> 高市衛廣字第10505018號",
        "productImgs": ["https://imgur.com/1Q7xtcu.jpg", "https://imgur.com/nDjOWZU.jpg", "https://imgur.com/ULKIm2M.jpg", "https://imgur.com/1Q7xtcu.jpg", "https://imgur.com/QLM7KBM.jpg", "https://imgur.com/ULKIm2M.jpg"],
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
        "introduce": "https://imgur.com/Rkfy1Ze.jpg",
        "illustrate": "用途:使眼部色彩豐富<br>使用方式：依照喜好選擇顏色並依序塗抹在眼皮上",
        "element": "容量：9g<br>成分: 如包裝所標示<br>保存期限：3年<br>產地：泰國<br> 高市衛廣字第10505018號",
        "productImgs": ["https://imgur.com/ULKIm2M.jpg", "https://imgur.com/nDjOWZU.jpg", "https://imgur.com/ULKIm2M.jpg", "https://imgur.com/1Q7xtcu.jpg", "https://imgur.com/QLM7KBM.jpg", "https://imgur.com/ULKIm2M.jpg"],
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
Mock.mock('/mock/login', (options) => {
    let body = JSON.parse(options.body)
        //save
        // user.push(body)
    console.log(body)
    return {
        code: 200,
        data: {
            userId: 1,
            name: body.account,
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
        }
    }
});