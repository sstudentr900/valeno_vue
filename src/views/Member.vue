<template>
    <div class="member">
        <div class="menu">
            <h3 class="title">#MEMBER</h3>
            <ul>
                <li class="active"><a href="member_center.html" title="修改會員資料">修改會員資料</a></li>
                <li><a href="member_chgpwd.html" title="修改密碼">修改密碼</a></li>
                <li><a href="member_order_list.html" title="訂單查詢">訂單查詢</a></li>
                <li><a href="member_bonus.html" title="購物金查詢">購物金查詢</a></li>
                <li><a href="member_coupon.html" title="折價券查詢">折價券查詢</a></li>
                <li><a href="member_track.html" title="下次再買清單">下次再買清單</a></li>
                <li><a title="登出" @click="signOutMe">登出</a></li>
            </ul>
        </div>
        <div class="content">
            <h3 class="title">#修改會員資料</h3>
            <div class="public_form">
                <div class="form-row">
                    <div class="tit"><span class="must"></span>會員帳號</div>
                    <div class="content public_text_grey">grnet@grnet.com.tw</div>
                </div>
                <div class="form-row">
                    <div class="tit"><span class="must"></span>姓&emsp;&emsp;名</div>
                    <div class="content public_text_grey">吳大為 先生</div>
                </div>
                <div class="form-row">
                    <div class="tit">生&emsp;&emsp;日</div>
                    <div class="content public_text_grey">
                        2017年1月1日
                    </div>
                </div>
                <div class="form-row">
                    <div class="tit">手機號碼<span class="must">*</span></div>
                    <div class="content"><input type="text" name="mobile" value="0912345678" class="input-box"></div>
                </div>
                <div class="form-row">
                    <div class="tit">聯絡地址<span class="must">*</span></div>
                    <div class="content">
                        <div class="public_col-3">
                            <div>
                                <input name="zipcode" type="text" class="input-box" placeholder="郵遞區號">
                            </div>
                            <div>
                                <select name="city_id" class="input-box">
                                    <option>請選擇縣市</option>
                                </select>
                            </div>
                            <div>
                                <select name="dist_id" class="input-box">
                                    <option>請選擇區域</option>
                                </select>
                            </div>
                        </div>
                        <input type="text" name="address" class="input-box">
                    </div>
                </div>
                <div class="info">
                    <div class="half">
                        <label class="check"><input type="checkbox"><span><i class="fa fa-check" aria-hidden="true"></i></span>&nbsp;我要收到IMAKEGO好康活動電子報</label>
                    </div>
                    <div class="half">
                        <div class="public_buttons">
                            <button class="btns" title="儲存修改">儲存修改</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState,mapMutations} from 'vuex'
    export default {
        name: 'member',
        data() {
            return {
            }
        },
        methods: {
            ...mapMutations('user',{signOut:'signOutMu'}),
            signOutMe(){
                this.signOut();
                this.$router.push("/");
            }
        }
    }
</script>
<style scoped>
    .member{
        padding-top: 30px;
        display: flex;
    }
    .member .menu{
        flex: 0 0 240px;
    }   
    .member .menu .title {
        font-size: 28px;
        text-align: left;
        font-weight: bold;
        padding-bottom: 15px;
    }
    .member .menu ul{
        padding: 0 15px;
    }
    .member .menu li a{
        padding: 12px 0;
        cursor: pointer;
    }
    .member .menu li > div, 
    .member .menu li > a {
        color: #000;
        opacity: 0.7;
        padding: 12px 0;
        display: block;
        position: relative;
        transition: opacity 0.3s;
        font-size: 16px;
        cursor: pointer;
    }
    .member .menu li.active > div, 
    .member .menu li.active > a {
        opacity: 1;
        font-weight: bold;
    }
    .member .menu li.active > div:after, 
    .member .menu li.active > a:after {
        content: "";
        height: 5px;
        width: 5px;
        border-top: 1px solid #000;
        border-right: 1px solid #000;
        position: absolute;
        right: 100%;
        top: 50%;
        margin-right: 8px;
        margin-top: -3px;
        transform: rotate(45deg);
    }
    .member .menu li:hover > div, 
    .member .menu li:hover > a  {
        opacity: 1;
    }
    .member .content{
        flex: 1 1;
    }
    /* .member .content .content{
        max-width: 640px;
    } */
    .member .content .title {
        border-bottom: 1px solid #eee;
        padding-bottom: 20px;
        margin-top: 10px;
        margin-bottom: 20px;
        position: relative;
        color: #000;
        font-weight: bold;
        font-size: 22px;
    }
    .member .content .title:after {
        content: "";
        width: 150px;
        height: 2px;
        background: #000;
        display: block;
        position: absolute;
        bottom: -1px;
    }
    .member .content .public_form {
        padding: 30px 0;
        /* max-width: 640px; */
    }
    .member .content .info {
        margin-top: 50px;
        border-top: 1px solid #eee;
        padding-top: 20px;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .member .content .half{
        flex-basis: 46%;
    }
    .member .content .check{
        margin-top: 20px;
        margin-bottom: 0;
    }
    .public_col-3{
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
    }
    .public_col-3>div{
        width: 32%;
    }
    .public_text_grey{
        color: #666;
    }
    .public_text_pink {
        color: #eb6877;
    }
</style>