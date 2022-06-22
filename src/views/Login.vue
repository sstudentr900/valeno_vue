<template>
    <div class="login">
        <div class="left">
            <div class="title_main">SIGN IN</div>
            <p class="title_sub">如您已經加入過會員，帳號即為您註冊的E-mail。</p>
            <div class="public_form">
                <div class="form-row">
                    <div class="tit">會員帳號<span class="must">*</span></div>
                    <div class="input">
                        <input type="text" name="account" v-model="account" placeholder="請輸入帳號" :class="{ 'is-invalid': accountErrMsg?true:false }" @blur="accountFn">
                        <div class="invalid-feedback">
                            {{ accountErrMsg }}
                        </div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="tit">會員密碼<span class="must">*</span></div>
                    <div class="input">
                    <input type="password" name="password" v-model="password" placeholder="請輸入密碼" :class="{'is-invalid': passErrMsg?true:false}" @blur="passwordFn">
                        <div class="invalid-feedback">
                            {{ passErrMsg }}
                        </div>
                    </div>
                </div>
                <!-- <div class="form-row">
                    <div class="tit">驗證碼</div>
                    <div class="code">
                        <input type="text" name="captcha" v-model="captcha">
                        <a title="更換驗證碼" @click="chageCaptcha"><img src="https://imgur.com/IKAg6jr.jpg" alt=""></a>
                    </div>
                </div> -->
                <div class="form-row forget">
                    <!-- <div class="tit"></div> -->
                    <!-- <div class="forget"> -->
                    <a href="member_getpwd.html" title="忘記密碼">忘記密碼?</a>
                    <!-- </div> -->
                </div>
                <hr>
                <div class="form-row">
                    <!-- <div class="tit"></div> -->
                    <label class="check">
                        <input type="checkbox" name="remember"  v-model="remember">
                        <span></span>
                        &nbsp;記住密碼
                    </label>
                    <div class="public_buttons">
                        <!-- <a class="public_btn fb" title="facebook 快速登入"><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px"><path d="M 21.800781 0 L 2.199219 0 C 1 0 0 1 0 2.199219 L 0 21.800781 C 0 23 1 24 2.199219 24 L 12 24 L 12 14 L 9 14 L 9 11 L 12 11 L 12 8 C 12 5.5 13 4 16 4 L 19 4 L 19 7 L 17.699219 7 C 16.800781 7 16 7.800781 16 8.699219 L 16 11 L 20 11 L 19.5 14 L 16 14 L 16 24 L 21.800781 24 C 23 24 24 23 24 21.800781 L 24 2.199219 C 24 1 23 0 21.800781 0 Z"/></svg>快速登入</a> -->
                        <button  class="btns" title="登入" @click="login">登入</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="right">
            <div class="title_main">REGISTER</div>
            <p class="title_sub">您還未成為會員嗎? <br> 加入會員後可享有更快捷的購物，可隨時查看訂單狀態和訂購紀錄，以及更多的會員專屬服務。</p>
            <div class="public_buttons">
                <!-- <button  class="btns" title="前往結帳" @click="submit">前往結帳</button> -->
                <router-link to="/register" class="btns" title="立即加入網站會員">立即加入會員</router-link>
            </div>
            <!-- <a href="member_register.html" class="public_btn white" title="立即加入網站會員">立即加入會員</a> -->
            <div class="shopping">
                <p class="title_sub">
                    將喜愛的商品放入購物車完成訂購步驟， 最後留下個人資料，系統將自動為您升級為會員。
                    <br> 立即享受，如此輕鬆的快速線上購物
                </p>
                <div class="public_buttons">
                    <button  class="btns" title="前往結帳" @click="cart">前往結帳</button>
                    <!-- <a href="flow_cart.html" class="btns" title="前往結帳">前往結帳</a>
                    <router-link to="/cart" class="btns" title="前往結帳">前往結帳</router-link> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'login',
        data() {
            return {
                account: '',
                accountErrMsg: '',
                password: '',
                passErrMsg: '',
                remember: true
            }
        },
        methods: {
            login() {
                if (this.validate()) return;
                const {
                    account,
                    password
                } = this;
                this.$store.dispatch('user/login', {
                    account: account,
                    password: password
                }).then(() => {
                    this.$router.push('/member');
                })
            },
            cart() {
                // console.log('cart');
                // console.log(this.$store.state.shopCar.shopCarList.length)
                if (this.$store.state.shopCar.shopCarList.length) {
                    this.$router.push('/cart')
                } else {
                    // ElNotification({
                    //     title: '訊息通知',
                    //     message: '目前沒有商品可以結帳',
                    //     type: 'info',
                    //     duration: 0,
                    // })
                    this.$notify({
                        title: '訊息通知',
                        message: '目前沒有商品可以結帳',
                        type: 'info',
                    })
                }
            },
            passwordFn() {
                // console.log(this.password)
                var isText = /^[a-zA-Z0-9]+$/;
                var inclde = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/;
                if (!isText.test(this.password)) {
                    this.passErrMsg = '請勿包含特殊字元';
                } else if (this.password.length < 6) {
                    this.passErrMsg = '請勿少於6個字';
                } else if (this.password.length > 15) {
                    this.passErrMsg = '請勿超過15個字';
                } else if (!inclde.test(this.password)) {
                    this.passErrMsg = '至少包括一個大小寫字母或數字';
                } else {
                    this.passErrMsg = '';
                }
            },
            accountFn() {
                // var isText = /^[a-zA-Z0-9]+$/;
                // if (!isText.test(this.account)) {
                //     this.accountError = true;
                //     this.userErrMsg = '請勿包含特殊字元';
                // }
                // else if (this.account.length > 10) {
                //     this.accountError = true;
                //     this.userErrMsg = '請勿超過10個字';
                // }
                // else {
                //     this.accountError = false;
                // }
                // var isMail = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
                var isMail = /\S+@\S+\.\S+/;
                if (!isMail.test(this.account)) {
                    this.accountErrMsg = '格式錯誤';
                } else {
                    this.accountErrMsg = '';
                }
                // console.log(this.account)
            },
            validate() {
                this.passwordFn();
                this.accountFn();
                if (this.passErrMsg || this.accountErrMsg) {
                    return true;
                } else {
                    return false;
                }
            }
        },
    }
</script>
<style scoped>
    .login {
        display: flex;
        min-height: 580px;
        align-items: center;
        justify-content: space-around;
    }
    
    .login .left,
    .login .right {
        padding: 0 50px;
        width: 45%;
    }
    /* .login .left {
        width: 55%;
    } */
    
    .login .title_main {
        font-size: 2rem;
        font-family: "Oswald-Light", "Microsoft JhengHei", sans-serif;
        font-weight: bold;
        position: relative;
        text-transform: uppercase;
        color: #000;
        margin-bottom: 30px;
    }
    
    .login .title_main:before {
        content: "";
        width: 15px;
        height: 5px;
        background: #000;
        position: absolute;
        right: 100%;
        top: 50%;
        margin-right: 10px;
        margin-top: -2px;
    }
    
    .right .public_buttons .btns {
        width: 100%;
        padding: 15px;
    }
    
    .login .title_sub {
        padding: 10px 0;
        color: #666;
        font-size: 14px;
        line-height: 1.4;
    }
    
    .login .left .title_sub {
        padding-bottom: 25px;
    }
    
    .login .right .public_btn {
        margin-top: 15px;
    }
    
    .login .right .shopping {
        margin-top: 30px;
    }
    
    .public_form .tit {
        /* font-size: 16px;
        flex: 0 0 90px; */
        color: #666;
        /* display: flex;
        align-items: center; */
    }
    
    .public_form .input {
        flex: 1 1;
    }
    
    .public_form .input .is-invalid {
        border: 1px solid red;
    }
    
    .public_form .input .invalid-feedback {
        color: red;
        padding-top: 4px;
        font-size: 12px;
    }
    
    .public_form .code {
        display: flex;
    }
    
    .public_form .code input {
        width: 50%;
    }
    
    .public_form .code a {
        flex: 0 0 110px;
        margin-left: 10px;
    }
    
    .public_form .forget {
        display: flex;
        font-family: "Oswald-Light";
        font-weight: bold;
        color: #000;
        font-size: 14px;
        align-items: center;
        justify-content: end;
    }
    /* .public_form .forget .check {
        display: flex;
        align-items: center;
        border-right: 1px solid #c3c3c3;
        margin-right: 10px;
        padding-right: 10px;
    }
    
    .public_form .forget .check input {
        margin: 0;
        margin-right: 5px;
    } */
    
    .public_form .forget a {
        color: #666;
    }
    
    .public_form .forget a:hover {
        color: #c1894c;
    }
    
    .public_form hr {
        margin-bottom: 30px;
        opacity: 0.2;
    }
    
    .public_form hr+.form-row {
        justify-content: space-between;
    }
    
    .public_form .public_buttons .btns {
        width: 120px;
    }
</style>