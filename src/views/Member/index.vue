<template>
    <div class="member">
        <div class="menu">
            <h3 class="title">#MEMBER</h3>
            <ul>
                <!-- <li class="active"><a href="member_center.html" title="修改會員資料">修改會員資料</a></li>
                <li><a href="member_chgpwd.html" title="修改密碼">修改密碼</a></li>
                <li><a href="member_order_list.html" title="訂單查詢">訂單查詢</a></li>
                <li><a href="member_bonus.html" title="購物金查詢">購物金查詢</a></li>
                <li><a href="member_coupon.html" title="折價券查詢">折價券查詢</a></li>
                <li><a href="member_track.html" title="下次再買清單">下次再買清單</a></li> -->
                <li><router-link to='/member/info' title="修改會員資料">修改會員資料</router-link></li>
                <li><router-link to='/member/changePassword' title="修改密碼">修改密碼</router-link></li>
                <li><router-link to='/member/orderList' title="訂單查詢">訂單查詢</router-link></li>
                <li><router-link to='/member/coupon' title="折價券查詢">折價券查詢</router-link></li>
                <li><a title="登出" @click="signOutFn">登出</a></li>
            </ul>
        </div>
        <div class="memberContent">
            <router-view/>
        </div>
    </div>
</template>

<script>
    import {
        mapState,
        mapMutations
    } from 'vuex'
    export default {
        name: 'member',
        data() {
            return {}
        },
        methods: {
            ...mapMutations('user', ['signOutMu']),
            signOutFn() {
                this.signOutMu();
                this.$router.push("/");
            }
        }
    }
</script>
<style>
    .member {
        padding-top: 30px;
        display: flex;
    }
    
    .member .menu {
        flex: 0 0 240px;
    }
    
    .member .menu .title {
        font-size: 28px;
        text-align: left;
        font-weight: bold;
        padding-bottom: 15px;
    }
    
    .member .menu ul {
        padding: 0 15px;
    }
    
    .member .menu li a {
        padding: 12px 0;
        cursor: pointer;
    }
    
    .member .menu li>div,
    .member .menu li>a {
        color: #000;
        opacity: 0.7;
        padding: 12px 0;
        display: block;
        position: relative;
        transition: opacity 0.3s;
        font-size: 16px;
        cursor: pointer;
    }
    
    .member .menu li>div.router-link-active,
    .member .menu li>a.router-link-active {
        opacity: 1;
        font-weight: bold;
    }
    
    .member .menu li>div.router-link-active:after,
    .member .menu li>a.router-link-active:after {
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
    
    .member .menu li:hover>div,
    .member .menu li:hover>a {
        opacity: 1;
    }
    
    .member .memberContent {
        flex: 1 1;
        min-height: 480px;
    }
    
    .memberContent .title {
        border-bottom: 1px solid #eee;
        padding-bottom: 20px;
        /* margin-top: 10px; */
        margin-bottom: 20px;
        position: relative;
        color: #000;
        font-weight: bold;
        font-size: 22px;
    }
    
    .memberContent .title:after {
        content: "";
        width: 150px;
        height: 2px;
        background: #000;
        display: block;
        position: absolute;
        bottom: -1px;
    }
    
    .memberContent .content {
        flex: 1 1;
    }
    
    .memberContent .public_form {
        padding: 30px 0;
    }
    
    .memberContent .send {
        margin-top: 50px;
        border-top: 1px solid #eee;
        padding-top: 20px;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    
    .memberContent .send .half {
        flex-basis: 46%;
    }
    .public_table .thead {
        background: #222;
        color: #fff;
    }
    
    .public_table .tr {
        display: flex;
        align-items: center;
    }
    
    .public_table .td {
        flex: 1 1;
        padding: 15px 10px;
        text-align: center;
    }
    .public_table .tbody .tr{
        border-bottom: 1px solid #ddd;
    }
    .public_table .tbody .td{
        color: #666;
    }
    .public_text_grey {
        color: #666!important;
    }
    .public_text_pink {
        color: #eb6877!important;
    }
</style>