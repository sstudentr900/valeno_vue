<template>
    <div class="register" v-if="!registerIf">
        <div class="topTitle">
            <h3 class="title">#CREATE AN ACCOUNT</h3>
            <p class="sub-tit">歡迎光臨，如果您是新會員，請填寫下面的表單進行註冊。如果您已經是本站的會員，請直接
                <router-link to="/login" title="登入">登入</router-link>
                <!-- <a href="member_login.html" title="登入">登入</a> -->
            </p>
        </div>
        <div class="cart_box">
            <div class="public_form">
                <div class="half">
                    <div class="form-tit">會員帳號</div>
                    <div class="form-row">
                        <div class="tit"><span class="must">*</span>會員帳號</div>
                        <div class="content">
                            <input name="account" type="text" class="input-box" v-model="account">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="tit"><span class="must">*</span>帳戶密碼</div>
                        <div class="content">
                            <input name="password" type="password" class="input-box" v-model="password">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="tit"><span class="must">*</span>確認密碼</div>
                        <div class="content">
                            <input name="password1" type="password" class="input-box" v-model="password1">
                        </div>
                    </div>
                </div>
                <div class="half">
                    <div class="form-tit">會員基本資料</div>
                    <div class="form-row">
                        <div class="tit"><span class="must">*</span>姓&emsp;&emsp;名</div>
                        <div class="content">
                            <input type="text" name="name" class="input-box" v-model="name">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="tit"><span class="must">*</span>性&emsp;&emsp;別</div>
                        <div class="content">
                            <label class="radio"><input type="radio" value="m" name="sex" v-model="sex"><span><i></i></span>&nbsp;先生</label>
                            <label class="radio"><input type="radio" value="w" name="sex" v-model="sex"><span><i></i></span>&nbsp;小姐</label>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="tit"><span class="must">*</span>生&emsp;&emsp;日</div>
                        <div class="content three-warp">
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
                    <div class="form-row">
                        <div class="tit"><span class="must">*</span>手&emsp;&emsp;機</div>
                        <div class="content">
                            <input type="text" name="phone" class="input-box" v-model="phone">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="tit"><span class="must">*</span>驗證碼</div>
                        <div class="content code_box">
                            <input type="text" name="verificationCode" class="input-box" v-model="verificationCode">
                            <button v-if="!getCodeIf" @click="getCode">獲取驗證碼</button>
                            <button v-if="getCodeIf" disabled="disabled">從新發送({{time}})秒</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="public_form">
                <div class="half">
                    <label class="check"><input type="checkbox" v-model="receiveActivity"><span></span>&nbsp;我要收到IMAKEGO好康活動電子報</label>
                    <label class="check"><input type="checkbox" v-model="checked"><span></span>&nbsp;我已詳細閱讀<a href="#terms" class="terms">會員條款</a></label>
                </div>
                <div class="half">
                    <div class="public_buttons">
                        <button class="btns" title="確認送出" @click='submit'>確認送出</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="register public_flexContent" v-if="registerIf">
        <div class="topTitle">
            <h3 class="title">#您已註冊成功</h3>
            <p class="sub-tit">畫面將在{{time}}秒鐘後自動跳轉....
                <router-link to="/login" title="登入">登入</router-link>
                <!-- <a href="member_login.html" title="登入">登入</a> -->
            </p>
        </div>
    </div>
</template>

<script>
    import {
        mapState,
        mapMutations,
        mapActions
    } from 'vuex'
    export default {
        name: 'register',
        data(){
            return {
                time: 0,
                registerIf: false,
                getCodeIf: false,
                account:'',
                password:'',
                password1:'',
                name:'',
                sex:'m',
                year:'',
                moon:'',
                day:'',
                phone:'',
                receiveActivity: false,
                verificationCode:'',
                checked: false,
            }
        },
        computed: {
            // ...mapState('memberRegister',['codeNumber'])
        },
        methods:{
            countdown(second=5) {
                return new Promise((resolve,reject)=>{
                    var start = null;
                    var limit = second*1000;
                    var count = 0;
                    var number = 0;
                    var self = this;
                    var animation = function(t) {
                        if(start === null) start = t;
                        count = t-start;
                        number = Math.floor(count/1000)
                        if(count < limit) {
                            requestAnimationFrame(animation);
                        } else {
                            number = second;
                            resolve()
                        }
                        self.time = second-number;
                    }
                    requestAnimationFrame(animation);
                })
            },
            getCode(){
                const {phone} = this;
                if(!phone){
                    console.log('電話沒有填')
                }
                phone && this.$store.dispatch('user/getCode',phone)
                .then(()=>{
                    //驗證碼倒數計時
                    this.getCodeIf = true;
                    this.countdown(30).then(()=>{
                        this.getCodeIf = false;
                    })

                    //自動給驗證碼
                    this.verificationCode = this.$store.state.user.codeNumber
                })
            },
            submit(){
                const {account,password,password1,name,sex,year,moon,day,phone,receiveActivity,verificationCode,checked} = this;
                //驗證

                //送出
                this.$store.dispatch('user/registerSubmit',{account:account,password:password,name:name,sex:sex,year:year,moon:moon,day:day,phone:phone,receiveActivity:receiveActivity,verificationCode:verificationCode,checked:checked})
                .then(()=> {
                    this.registerIf = true;
                    return this.countdown(5);
                })
                .then(()=>{
                    //跳轉
                    this.$router.push('/login');
                })
            }
        }
    }
</script>
<style scoped>
    .public_flexContent{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .register{
        min-height: 620px;
    }
    .register .topTitle{
        text-align: center;
    }
    .register .topTitle .title{
        padding: 15px 0;
        font-size: 42px;
        margin: 40px 0 0;
        text-align: center;
        font-weight: bold;
    }
    .register .topTitle .sub-tit{
        font-size: 16px;
    }
    .register .topTitle .sub-tit a{
        font-size: 16px;
        text-decoration: underline;
        color: #c1894c;
        display: inline-block;
    }
    .register .cart_box{
        border: none;
        padding: 30px 40px;
    }
    .register .public_form{
        border-top: 1px solid #eee;
        margin-top: 20px;
        padding-top: 20px;
    }
    
    .public_form{
        display: flex;
        flex-wrap: wrap;
        flex-basis: 100%;
        justify-content: space-between;
    }
    
    .public_form .tit {
        width: 130px;
        color: #666;
    }
    .public_form .tit,
    .public_form .content {
        font-size: 16px;
    }
    .public_form .content{
        width: 100%;
        /* padding: 7px 0; */
        display: flex;
        align-items: center;
        position: relative;
    }
    /* .public_form .input-box {
        border: 1px solid #ccc;
        background: #fff;
        border-radius: 2px;
        padding: 5px 10px;
        width: 100%;
        height: 35px;
    } */
    .public_form .code_box .input-box {
        width: 60%;
        margin-right: 10px;
    }
    .public_form .code_box button{
        width: 40%;
        padding: 5px 10px;
        height: 35px;
        cursor: pointer;
    }
    .public_form .form-tit {
        margin-top: 20px;
        margin-bottom: 20px;
        font-size: 1.25rem;
        position: relative;
        flex-basis: 100%;
        color: #333;
    }
    .public_form .half{
        flex-basis: 46%;
        /* padding-right: 30px; */
    }
    .public_form .three-warp{
        display: flex;
        flex-wrap: wrap;
        flex-basis: 100%;
    }
    .public_form .three-warp>div{
        flex-basis: 33.3333%;
        padding: 0 5px;
    }
    .public_form .three-warp>div:first-child{
        padding-left: 0;
    }
    .public_form .three-warp>div:last-child{
        padding-right: 0;
    }
    .public_form .check{
        font-size: 14px;
        line-height: 1.4;
        color: #666;
        display: flex;
        align-items: center;
    }
    .public_form .check:first-child{
        margin-bottom: 10px;
    }
    .public_form .check a{
        color: #000;
        text-decoration: underline;
        font-size: 14px;
        display: inline-block;
    }
    .public_form .check input {
        display: none;
    }
    .public_form .check input + span {
        display: inline-block;
        vertical-align: middle;
        border: 1px solid #ccc;
        background: #fff;
        width: 15px;
        height: 15px;
        position: relative;
    }
    .public_form .check input + span:after{
        content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' x='0px' y='0px' viewBox='0 0 469.184 469.185' style='enable-background:new 0 0 469.184 469.185;' xml:space='preserve'%3E%3Cpath d='M462.5,96.193l-21.726-21.726c-8.951-8.95-23.562-8.95-32.59,0L180.368,302.361l-119.34-119.34 c-8.95-8.951-23.562-8.951-32.589,0L6.712,204.747c-8.95,8.951-8.95,23.562,0,32.589L163.997,394.62 c4.514,4.514,10.327,6.809,16.218,6.809s11.781-2.295,16.219-6.809L462.27,128.783C471.45,119.68,471.45,105.145,462.5,96.193z'/%3E%3C/svg%3E");
        transform: scale(0);
        transition: ease 0.3s;
        width: 12px;
        height: 12px;
        position: absolute;
        top: -1px;
        left: 1px;
    } 
    .public_form .check input:checked + span:after{
        transform: scale(1);
    }
    .public_form .public_buttons {
        text-align: right;
        border: none;
        padding-top: 0;
    }
    .public_form .radio {
        margin: 0;
        margin-right: 5px;
        color: #333;
        background: #f5f5f5;
        padding: 8px;
        border-radius: 5px;
        cursor: pointer;
    }
    .public_form .radio input[type=radio]{
        display: none;
    }
    .public_form .radio input + span {
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
    .public_form .radio input + span i {
        display: block;
        width: 100%;
        height: 100%;
        background: #000;
        border-radius: 50%;
        transform: scale(0);
    }
    .public_form .radio input:checked + span i {
        transform: scale(1);
        transition: ease 0.3s;
    }
</style>