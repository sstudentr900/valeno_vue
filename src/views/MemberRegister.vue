<template>
    <div class="member_register">
        <div class="topTitle">
            <h3 class="title">#CREATE AN ACCOUNT</h3>
            <p class="sub-tit">歡迎光臨，如果您是新會員，請填寫下面的表單進行註冊。如果您已經是本站的會員，請直接
                <router-link to="/member" title="登入">登入</router-link>
                <!-- <a href="member_login.html" title="登入">登入</a> -->
            </p>
        </div>
        <form action="member_register_finish.html">
            <div class="cart_box">
                <div class="form-style">
                    <div class="half left">
                        <div class="form-tit">會員帳號</div>
                        <div class="f-row">
                            <div class="tit"><span class="must">*</span>會員帳號</div>
                            <div class="content">
                                <input name="account" type="text" class="input-box" v-model="account">
                            </div>
                        </div>
                        <div class="f-row">
                            <div class="tit"><span class="must">*</span>帳戶密碼</div>
                            <div class="content">
                                <input name="password" type="password" class="input-box" v-model="password">
                            </div>
                        </div>
                        <div class="f-row">
                            <div class="tit"><span class="must">*</span>確認密碼</div>
                            <div class="content">
                                <input name="password1" type="password" class="input-box" v-model="password1">
                            </div>
                        </div>
                    </div>
                    <div class="half right">
                        <div class="form-tit">會員基本資料</div>
                        <div class="f-row">
                            <div class="tit"><span class="must">*</span>姓&emsp;&emsp;名</div>
                            <div class="content">
                                <input type="text" name="name" class="input-box" v-model="name">
                            </div>
                        </div>
                        <div class="f-row clearfix">
                            <div class="tit"><span class="must">*</span>性&emsp;&emsp;別</div>
                            <div class="content">
                                <label class="radio"><input type="radio" value="m" name="sex" v-model="sex"><span><i></i></span>&nbsp;先生</label>
                                <label class="radio"><input type="radio" value="w" name="sex" v-model="sex"><span><i></i></span>&nbsp;小姐</label>
                            </div>
                        </div>
                        <div class="f-row">
                            <div class="tit"><span class="must">*</span>生&emsp;&emsp;日</div>
                            <div class="content block">
                                <div class="three-warp">
                                    <div class="three">
                                        <select name="year" class="input-box" v-model="year">
                                        <option>年</option>
                                    </select>
                                    </div>
                                    <div class="three">
                                        <select name="moon" class="input-box" v-model="moon">
                                        <option>月</option>
                                    </select>
                                    </div>
                                    <div class="three">
                                        <select name="day" class="input-box" v-model="day">
                                        <option>日</option>
                                    </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="f-row">
                            <div class="tit"><span class="must">*</span>手機號碼</div>
                            <div class="content">
                                <input type="text" name="phone" class="input-box" v-model="phone">
                            </div>
                        </div>
                        <div class="f-row">
                            <div class="tit"><span class="must">*</span>驗證碼</div>
                            <div class="content code_box">
                                <input type="text" name="verificationCode" class="input-box" v-model="verificationCode">
                                <button>獲取驗證碼</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form-style">
                    <div class="half left">
                        <p>
                            <label class="check"><input type="checkbox" v-model="receiveActivity"><span></span>&nbsp;我要收到IMAKEGO好康活動電子報</label>
                        </p>
                        <p>
                            <label class="check"><input type="checkbox" v-model="checked"><span></span>&nbsp;我已詳細閱讀<a href="#terms" class="terms">會員條款</a></label>
                        </p>
                    </div>
                    <div class="half right">
                        <div class="buttons">
                            <button type="submit" class="btns" title="確認送出">確認送出</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import {
        mapState
    } from 'vuex'
    export default {
        name: 'MemberRegister',
        data(){
            return {
                account:'',
                password:'',
                password1:'',
                name:'',
                sex:'m',
                year:'',
                moon:'',
                day:'',
                phone:'',
                code:'',
                receiveActivity:'',
                checked:'',
            }
        },
        computed: {
            // ...mapState({
            //     storeData: state => state.store.storeData
            // })
        }
    }
</script>
<style scoped>
    .member_register .topTitle{
        text-align: center;
    }
    .member_register .topTitle .title{
        padding: 15px 0;
        font-size: 42px;
        margin: 30px 0 0;
        text-align: center;
        font-weight: bold;
    }
    .member_register .topTitle .sub-tit{
        font-size: 16px;
    }
    .member_register .topTitle .sub-tit a{
        font-size: 16px;
        text-decoration: underline;
        color: #c1894c;
        display: inline-block;
    }
    .member_register .cart_box{
        border: none;
        padding: 30px 40px;
    }
    .member_register .cart_box .form-style{
        border-top: 1px solid #eee;
        margin-top: 20px;
        padding-top: 20px;
    }
    .member_register .cart_box .left p{
        font-size: 14px;
        line-height: 1.4;
        color: #666;
    }
    .member_register .cart_box .left p:first-child{
        margin-bottom: 10px;
    }
    .member_register .cart_box .form-style:last-child .check a{
        color: #000;
        text-decoration: underline;
        font-size: 14px;
        display: inline-block;
    }
    .check{
        display: flex;
        align-items: center;
    }
    .check input {
        display: none;
    }
    .check input + span {
        display: inline-block;
        vertical-align: middle;
        border: 1px solid #ccc;
        background: #fff;
        width: 15px;
        height: 15px;
        /* transition: ease 0.3s; */
        position: relative;
    }
    .check input + span:after{
        content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' x='0px' y='0px' viewBox='0 0 469.184 469.185' style='enable-background:new 0 0 469.184 469.185;' xml:space='preserve'%3E%3Cpath d='M462.5,96.193l-21.726-21.726c-8.951-8.95-23.562-8.95-32.59,0L180.368,302.361l-119.34-119.34 c-8.95-8.951-23.562-8.951-32.589,0L6.712,204.747c-8.95,8.951-8.95,23.562,0,32.589L163.997,394.62 c4.514,4.514,10.327,6.809,16.218,6.809s11.781-2.295,16.219-6.809L462.27,128.783C471.45,119.68,471.45,105.145,462.5,96.193z'/%3E%3C/svg%3E");
        transform: scale(0);
        transition: ease 0.3s;
        width: 12px;
        height: 12px;
        position: absolute;
        top: -1px;
        left: 1px;
    } 
    .check input:checked + span:after{
        transform: scale(1);
    }

    .radio {
        margin: 0;
        margin-right: 5px;
        color: #333;
        background: #f5f5f5;
        padding: 8px;
        border-radius: 5px;
        cursor: pointer;
    }
    .radio input[type=radio]{
        display: none;
    }
    .radio input + span {
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
    .radio input + span i {
        display: block;
        width: 100%;
        height: 100%;
        background: #000;
        border-radius: 50%;
        transform: scale(0);
    }
    .radio input:checked + span i {
        transform: scale(1);
        transition: ease 0.3s;
    }
    .form-style{
        display: flex;
        flex-wrap: wrap;
        flex-basis: 100%;
        justify-content: space-between;
    }
    .form-style .f-row {
        display: flex;
        align-items: baseline;
        width: 100%;
    }
    .form-style .f-row .tit {
        width: 100px;
        color: #666;
    }
    .form-style .f-row .tit,
    .form-style .f-row .content {
        font-size: 1rem;
    }
    .form-style .f-row .content{
        width: 100%;
        padding: 7px 0;
        display: flex;
        align-items: center;
    }
    .form-style .code_box .input-box {
        width: 70%;
        margin-right: 10px;
    }
    .form-style .code_box button {
        width: 30%;
        padding: 5px 10px;
        height: 35px;
        cursor: pointer;
    }
    .form-style .form-tit {
        margin-bottom: 20px;
        font-size: 1.25rem;
        position: relative;
        flex-basis: 100%;
        color: #333;
    }
    /* .form-style .form-tit .icon {
        padding: 0 10px;
        display: inline-block;
    }
    .form-style .form-tit .icon i{
        font-size: 20px;
    } */
    .form-style .half{
        flex-basis: 46%;
        /* padding-right: 30px; */
    }
    /* .form-style .half.right{
        padding-left: 30px;
        padding-right: 0;
    } */
    .form-style .three-warp{
        display: flex;
        flex-wrap: wrap;
        flex-basis: 100%;
    }
    .form-style .three-warp .three{
        flex-basis: 33.3333%;
        padding: 0 5px;
    }
    .form-style .three-warp .three:first-child{
        padding-left: 0;
    }
    .form-style .three-warp .three:last-child{
        padding-right: 0;
    }
    /* .form-style .f-row .content.block{
        display: block;
    } */
    /* .form-style .f-row .content.block .three-warp{
        margin-bottom: 10px;
    } */
    /* .form-style .form-tit .check {
        float: right;
        margin: 10px;
        font-size: 0.85rem;
        position: relative;
        z-index: 1;
    }
    .form-style .form-tit .check span {
        margin-right: 5px;
        background: none;
    } */
    /* .form-style .f-row .content.contentForm{
        flex-wrap: wrap;
    }
    .form-style .f-row .content.contentForm label{
        flex-basis: 48%;
    }
    .form-style .f-row .content.contentForm .invoice-box{
        flex-basis: 60%;
        margin-top: 10px;
    }
    .form-style .f-row .content.contentForm .invoice-box input:first-child{
        margin-bottom: 5px;
    } */
    .form-style .input-box {
        border: 1px solid #ccc;
        background: #fff;
        border-radius: 2px;
        padding: 5px 10px;
        width: 100%;
        height: 35px;
    }
    
    .cart_box .buttons {
        text-align: right;
        border: none;
        padding-top: 0;
    }
    .buttons .btns {
        text-transform: uppercase;
        font-size: 1.2rem;
        min-width: 200px;
        text-align: center;
        display: inline-block;
        vertical-align: top;
        margin: 3px;
        padding: 10px;
        background: #222;
        border: 1px solid #222;
        color: #fff;
        position: relative;
        z-index: 2;
        -moz-transition: color 0.5s linear;
        -o-transition: color 0.5s linear;
        -webkit-transition: color 0.5s linear;
        transition: color 0.5s linear;
        min-height: 45px;
    }
    .buttons .btns:hover {
        color: #fff;
        border-color: #c1894c;
    }
    .buttons .btns:before, .buttons .btns:after {
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
    .buttons .btns:before {
        left: 0;
    }
    .buttons .btns:after {
        right: 0;
    }
    .buttons .btns:hover:before, .buttons .btns:hover:after {
        width: 50%;
    }
</style>