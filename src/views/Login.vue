<template>
    <div class="login">
        <div class="left">
            <div class="title_main">SIGN IN</div>
            <p class="title_sub">如您已經加入過會員，帳號即為您註冊的E-mail。</p>
            <form action="member_center.html" name="form_login">
                <div class="public_form">
                    <div class="form-row">
                        <div class="tit">帳號</div>
                        <input type="text" name="account">
                    </div>
                    <div class="form-row">
                        <div class="tit">密碼</div>
                        <input type="text" name="pwd">
                    </div>
                    <div class="form-row">
                        <div class="tit">驗證碼</div>
                        <div class="code">
                            <input type="text" name="captcha">
                            <a href="" title="更換驗證碼"><img src="https://imgur.com/IKAg6jr.jpg" alt=""></a>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="tit"></div>
                        <div class="forget">
                            <label class="check">
                                <input type="checkbox" name="shipping_id">記住我
                            </label>
                            <a href="member_getpwd.html" title="忘記密碼">Forgot Your Password?</a>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="tit"></div>
                        <div class="buttons">
                            <a href="#" class="public_btn fb" title="facebook 快速登入"><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px"><path d="M 21.800781 0 L 2.199219 0 C 1 0 0 1 0 2.199219 L 0 21.800781 C 0 23 1 24 2.199219 24 L 12 24 L 12 14 L 9 14 L 9 11 L 12 11 L 12 8 C 12 5.5 13 4 16 4 L 19 4 L 19 7 L 17.699219 7 C 16.800781 7 16 7.800781 16 8.699219 L 16 11 L 20 11 L 19.5 14 L 16 14 L 16 24 L 21.800781 24 C 23 24 24 23 24 21.800781 L 24 2.199219 C 24 1 23 0 21.800781 0 Z"/></svg>快速登入</a>
                            <button type="submit" class="public_btn" title="登入">SIGN IN</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <div class="right">
            <div class="title_main">REGISTER</div>
            <p class="title_sub">您還未成為會員嗎? <br> 加入會員後可享有更快捷的購物，可隨時查看訂單狀態和訂購紀錄，以及更多的會員專屬服務。</p>
            <router-link to="/register" class="public_btn white" title="立即加入網站會員">立即加入會員</router-link>
            <!-- <a href="member_register.html" class="public_btn white" title="立即加入網站會員">立即加入會員</a> -->
            <div class="shopping">
                <p class="title_sub">
                    將喜愛的商品放入購物車完成訂購步驟， 最後留下個人資料，系統將自動為您升級為會員。
                    <br> 立即享受，如此輕鬆的快速線上購物
                </p>
                <a href="flow_cart.html" class="public_btn" title="前往結帳">前往結帳</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'login',
}
</script>
<style scoped>
    .login{
        display: flex;
        min-height: 580px;
        align-items: center;
        justify-content: space-between;
    }
    .login .left,
    .login .right{
        padding: 0 50px;
        width: 45%;
    }
    .login .left{
        width: 55%;
    }
    .login .title_main{
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
    .login .title_sub {
        padding: 10px 0;
        color: #666;
        font-size: 14px;
        line-height: 1.4;
    }
    .login .right .public_btn {
        margin-top: 15px;
    }
    .login .right .shopping{
        margin-top: 30px;
    }

    .public_form .tit {
        font-size: 16px;
        flex: 0 0 90px;
        color: #666;
        display: flex;
        align-items: center;
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
    }
    
    .public_form .forget .check {
        display: flex;
        align-items: center;
        border-right: 1px solid #c3c3c3;
        margin-right: 10px;
        padding-right: 10px;
    }
    
    .public_form .forget .check input {
        margin: 0;
        margin-right: 5px;
    }
    
    .public_form .forget a {
        color: inherit;
    }
    
    .public_form .forget a:hover {
        color: #c1894c;
    }
    .public_form .buttons {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
    
    .public_form .buttons .public_btn {
        width: 49%;
    }
</style>
