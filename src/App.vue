<template>
    <div class="fn">
        <FnSide></FnSide>
        <div class="wrapper">
            <div class="wrapper_top">
                <FnNav></FnNav>
                <router-view/>
            </div>
            <FnFooter></FnFooter>
        </div>
    </div>
</template>
<script>
    import FnNav from './components/FnNav'
    import FnFooter from './components/FnFooter'
    import FnSide from './components/FnSide'
    export default {
        name: 'fn',
        components: {
            FnNav,
            FnFooter,
            FnSide,
        },
        mounted() {
            console.log('app');
            this.$store.dispatch('home/home')
            this.$store.dispatch('product/productAc')
                // this.$store.dispatch('product/productListAc', {
                //     pageNo: 1, //當前頁
                //     pageSize: 3, //顯示數量
                // })
                // this.$store.dispatch('news/newsAc')
                // this.$store.dispatch('beauty/beautyAc')
            this.$store.dispatch('store/storeAc')
        },
    }
</script>
<style>
    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    font,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        font-weight: inherit;
        font-style: inherit;
        font-size: 100%;
        font-family: inherit;
        vertical-align: baseline;
        box-sizing: border-box;
    }
    
    input {
        box-sizing: border-box;
    }
    
     :focus {
        outline: 0;
    }
    
    ol,
    ul {
        list-style: none;
    }
    
    table {
        border-collapse: separate;
        border-spacing: 0;
    }
    
    caption,
    th,
    td {
        text-align: left;
        font-weight: normal;
    }
    
    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
        content: "";
    }
    
    blockquote,
    q {
        quotes: "" "";
    }
    
    a {
        text-decoration: none;
        display: block;
    }
    
    body {
        line-height: 1;
        color: black;
        background: white;
        overflow-x: hidden;
        user-select: none;
    }
    
    .public_title {
        color: #000;
        font-weight: bold;
        text-align: center;
    }
    
    h2.public_title {
        font-size: 60px;
        margin: 60px 0 40px;
    }
    
    h3.public_title {
        font-size: 42px;
        margin: 40px 0;
    }
    
    h4.public_title {
        font-size: 28px;
        margin: 40px 0;
    }
    
    img {
        width: 100%;
        height: auto;
    }
    
    .public_flex {
        display: flex;
        flex-wrap: wrap;
    }
    
    .flex {
        display: flex;
    }
    
    .public_text_grey {
        color: #666!important;
    }
    
    .public_text_pink {
        color: #eb6877!important;
    }
    /* .public_scrollTop{
            opacity: 0;
            transform: translateY(100px);
            transition: 0.3s;
        }
        .public_scrollTop.active{
            opacity: 1;
            transform: translateY(0);
        } */
    
    .public_col-3 {
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
    }
    
    .public_col-3>div {
        width: 32%;
        position: relative;
    }
    
    .public_col-2 {
        display: flex;
        justify-content: space-between;
        /* margin-bottom: 15px; */
    }
    
    .public_col-2>div {
        width: 48%;
    }
    /*public_item*/
    
    .public_items {
        margin-left: -10px;
        margin-right: -10px;
        display: flex;
        flex-wrap: wrap;
    }
    
    .public_item {
        margin-bottom: 20px;
        transition: ease 0.3s;
        width: 25%;
        /* flex: 1 0 25%; */
        padding: 0 10px;
    }
    
    .public_item:hover {
        background: #f9f9f9;
    }
    
    .public_item img {
        position: relative;
        overflow: hidden;
        transition: transform 0.3s ease;
    }
    
    .public_item:hover img {
        transform: scale(0.8, 0.8);
    }
    
    .public_item .info {
        font-size: 1rem;
        text-align: center;
        padding: 15px 0;
        position: relative;
        top: 0;
        transition: top 0.3s ease;
    }
    
    .public_item:hover .info {
        top: -10px;
    }
    
    .public_item .info .en {
        font-size: 1.05rem;
        font-weight: bold;
        color: #000;
        line-height: 1.42857143;
    }
    
    .public_item .info .tit {
        margin: 5px 0;
        font-size: 1.02rem;
        color: #000;
    }
    
    .public_item .info .sale {
        margin: 10px 0;
        color: #c1894c;
        display: block;
        font-size: 16px;
    }
    
    .public_item .info .price {
        color: #555;
        font-family: "Oswald-Light";
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .public_item .info .price span {
        display: inline-block;
        vertical-align: text-top;
    }
    
    .public_item .info .price i {
        padding: 0 10px;
        opacity: 0.5;
        display: inline-block;
    }
    
    .public_item .info .price .through {
        text-decoration: line-through;
    }
    /*public_box*/
    
    .public_box {
        border: 1px solid #ccc;
        padding: 30px 40px;
        margin-top: 40px;
    }
    /*public_form*/
    
    .public_form .form-row {
        display: flex;
        align-items: baseline;
        width: 100%;
        margin-bottom: 25px;
    }
    
    .public_form .input-box,
    .public_form select,
    .public_form textarea,
    .public_form input[type="password"],
    .public_form input[type="text"] {
        border: 1px solid #ccc;
        background: #fff;
        border-radius: 2px;
        padding: 5px 10px;
        flex: 1;
        height: 35px;
        font-size: 1rem;
        width: 100%;
        color: #666;
        box-sizing: border-box;
    }
    
    .public_form .tit {
        width: 90px;
        flex: 0 0 90px;
        color: #000;
        font-weight: 800;
        /* padding-right: 20px; */
        font-size: 16px;
        display: flex;
    }
    
    .public_form .tit span {
        color: red;
        font-size: 12px;
    }
    
    .public_form .form-tit {
        background: none;
        font-size: 1.3rem;
        margin-bottom: 20px;
        /* padding: 5px 8px 8px 8px; */
        width: 100%;
        color: #666;
        display: flex;
        align-items: center;
        font-weight: bold;
    }
    
    .public_form .form-tit svg {
        margin-right: 5px;
        width: 24px;
        height: 24px;
        fill: #666;
    }
    /*check*/
    
    .public_form .check {
        font-size: 14px;
        line-height: 1.4;
        color: #666;
        display: flex;
        align-items: center;
    }
    
    .public_form .check+.check {
        margin-top: 10px;
    }
    
    .public_form .check a {
        color: #000;
        text-decoration: underline;
        font-size: 14px;
        display: inline-block;
    }
    
    .public_form .check input {
        display: none;
    }
    
    .public_form .check input+span {
        display: inline-block;
        vertical-align: middle;
        border: 1px solid #ccc;
        background: #fff;
        width: 16px;
        height: 16px;
        position: relative;
        margin-right: 5px;
    }
    
    .public_form .check input+span:after {
        content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' x='0px' y='0px' viewBox='0 0 469.184 469.185' style='enable-background:new 0 0 469.184 469.185;' xml:space='preserve'%3E%3Cpath d='M462.5,96.193l-21.726-21.726c-8.951-8.95-23.562-8.95-32.59,0L180.368,302.361l-119.34-119.34 c-8.95-8.951-23.562-8.951-32.589,0L6.712,204.747c-8.95,8.951-8.95,23.562,0,32.589L163.997,394.62 c4.514,4.514,10.327,6.809,16.218,6.809s11.781-2.295,16.219-6.809L462.27,128.783C471.45,119.68,471.45,105.145,462.5,96.193z'/%3E%3C/svg%3E");
        transform: scale(0);
        transition: ease 0.3s;
        width: 12px;
        height: 12px;
        position: absolute;
        top: -1px;
        left: 1px;
    }
    
    .public_form .check input:checked+span:after {
        transform: scale(1);
    }
    /*radio*/
    
    .public_form .radio {
        margin: 0;
        margin-right: 10px;
        color: #666;
        background: #f5f5f5;
        padding: 8px;
        border-radius: 5px;
        cursor: pointer;
        display: inline-block;
    }
    
    .public_form .radio input[type=radio] {
        display: none;
    }
    
    .public_form .radio input+span {
        display: inline-block;
        vertical-align: middle;
        border: 1px solid #ccc;
        background: #fff;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        margin-right: 2px;
        padding: 3px;
        transition: ease 0.3s;
    }
    
    .public_form .radio input+span i {
        display: block;
        width: 100%;
        height: 100%;
        background: #000;
        border-radius: 50%;
        transform: scale(0);
    }
    
    .public_form .radio input:checked+span i {
        transform: scale(1);
        transition: ease 0.3s;
    }
    
    .public_form .radios .radio {
        margin-right: 0;
        margin-left: 10px;
    }
    /*public_buttons*/
    
    .public_buttons {
        text-align: right;
        margin-top: 20px;
        display: flex;
        justify-content: flex-end;
    }
    
    .public_buttons .btns {
        font-size: 1.2rem;
        margin: 3px;
        padding: 10px;
        background: #222;
        border: 1px solid #222;
        color: #fff;
        position: relative;
        z-index: 2;
        transition: color 0.5s linear;
        min-height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 200px;
        cursor: pointer;
    }
    
    .public_buttons .btns.white-btn {
        background: #fff;
        color: #222;
    }
    
    .public_buttons .btns:before,
    .public_buttons .btns:after {
        content: "";
        width: 0;
        height: 100%;
        top: 0;
        position: absolute;
        background: #c1894c;
        z-index: -1;
        -moz-transition: linear 0.3s;
        -o-transition: linear 0.3s;
        -webkit-transition: linear 0.3s;
        transition: linear 0.3s;
    }
    
    .public_buttons .btns:after {
        right: 0;
    }
    
    .public_buttons .btns:before {
        left: 0;
    }
    
    .public_buttons .btns:hover {
        color: #fff;
        border-color: #c1894c;
    }
    
    .public_buttons .btns:hover:before,
    .public_buttons .btns:hover:after {
        width: 50%;
    }
    
    .public_buttons2 {
        display: flex;
        justify-content: center;
        margin-top: 40px;
        margin-bottom: 20px;
    }
    
    .public_buttons2 .btns2 {
        padding: 15px 5px;
        display: block;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.42857;
        text-align: center;
        vertical-align: middle;
        -ms-touch-action: manipulation;
        touch-action: manipulation;
        cursor: pointer;
        background-image: none;
        background: #000;
        text-decoration: none;
        color: #fff;
        border: none;
        text-decoration: none;
        border: 1px solid #000;
        transition: linear 0.3s;
        min-width: 200px;
    }
    
    .public_buttons2 .btns2+.btns2 {
        margin-left: 10px;
    }
    /* .public_buttons2 .btns2:hover {
            background-color: #fff;
            color: #000;
            border: 1px solid #000;
        } */
    /* .public_btn.fb {
            background: #39579b;
            border-color: #39579b;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .public_btn.fb svg {
            width: 16px;
            height: auto;
            margin-right: 5px;
            fill: #fff;
            margin-top: -1px;
            transition: linear 0.3s;
        }
        
        .public_btn.fb:hover {
            color: #39579b;
            background: #fff;
        }
        
        .public_btn.fb:hover svg {
            fill: #39579b;
        } */
    
    .public_buttons2 .btns2.white-btn {
        background: #fff;
        border-color: #222;
        color: #222;
    }
    
    .public_buttons2 .btns2.white-btn:hover {
        background: #000;
        color: #fff;
    }
    /*public_qty*/
    
    .public_qty {
        height: 35px;
        width: 130px;
        display: flex;
        align-items: center;
    }
    
    .public_qty .link {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        color: #000;
        width: 50%;
        position: relative;
        border-top: 0;
        border-bottom: 0;
        border: 1px solid #ddd;
        cursor: pointer;
        width: 90px;
        user-select: none;
        background: #fff;
    }
    
    .public_qty span {
        font-size: 22px;
    }
    
    .public_qty input {
        background: #fff;
        border: 1px solid #ddd;
        border-left: none;
        border-right: none;
        text-align: center;
        height: 100%;
        width: 100%;
        font-size: 0.85rem;
    }
    /*contact*/
    
    .contact .inputObj,
    .contact .public_form input[type="text"].inputObj {
        border: none;
        border-radius: 0;
        border-bottom: 1px solid #ccc;
        background: #fff;
        padding: 5px 10px;
        width: 100%;
        box-sizing: border-box;
    }
    
    .content .error {
        color: red;
        font-size: 12px;
        position: absolute;
        bottom: -15px;
        left: 0;
    }
    
    .contact .txtarea {
        height: 130px;
    }
    
    .contact .code_box {
        display: flex;
        align-items: center;
        width: 300px;
    }
    
    .contact .code_box .inputObj {
        /* padding: 8px 10px;
            width: 130px; */
        margin-right: 10px;
    }
    /*fn*/
    
    .fn {
        font-family: Helvetica, Arila, "LiHei Pro", "Microsoft JhengHei", "新細明體", serif;
        min-height: 100vh;
        padding: 60px 0;
        background: url(./assets/bg01.jpg) repeat;
    }
    
    @media (max-width: 1200px) {
        .fn {
            padding: 20px;
        }
    }
    
    @media (max-width: 768px) {
        .fn {
            padding: 0;
        }
    }
    
    .fn>.wrapper {
        box-shadow: 2px 10px 20px #4d4d4d;
        padding: 0;
        width: 100%;
        max-width: 1200px;
        margin-left: auto;
        margin-right: auto;
        background-color: #fff;
    }
    
    .fn>.wrapper>.wrapper_top {
        background-color: #fff;
        padding: 50px 60px;
    }
    
    @media (max-width: 1200px) {
        .fn>.wrapper>.wrapper_top {
            padding: 30px;
        }
    }
    
    @media (max-width: 768px) {
        .fn>.wrapper>.wrapper_top {
            padding: 20px 15px 0;
            background-color: rgba(255, 255, 255, 0.95);
        }
    }
</style>