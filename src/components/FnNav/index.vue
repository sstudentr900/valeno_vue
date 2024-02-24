<template>
    <div class="navObj">
        <div class="top">
            <div class="left">
                <router-link to="/">
                  <!-- <img src="https://imgur.com/DPfIHjk.jpg" alt="" /> -->
                  <img :src="require(`@/assets/logo.jpg`)">
                </router-link>
            </div>
            <div class="right">
                <h2>0800-000-070</h2>
                <p>周一到周日 9:00-18:00</p>
            </div>
        </div>
        <div class="bottom">
            <ul>
                <li>
                    <!-- <router-link :to="{ name: 'product', params: { id1: 1, id2: 1 }}" data-title="商品專區"><span>PRODUCT</span></router-link> -->
                    <router-link to="/product" data-title="商品專區"><span>PRODUCT</span></router-link>
                </li>
                <li>
                    <router-link to="/news" data-title="最新消息"><span>NEWS</span></router-link>
                </li>
                <li>
                    <router-link to="/beauty" data-title="美妝分享"><span>BEAUTY</span></router-link>
                </li>
                <li>
                    <!-- <router-link to="/store" data-title="門市位置"><span>STORE</span></router-link> -->
                </li>
                <li>
                    <router-link to="/contact" data-title="聯絡我們"><span>CONTACT</span></router-link>
                </li>
            </ul>
            <div class="btns">

                <router-link to="/login" title="登入會員"><svg viewBox="0 0 24 24"><path d="M12 2c2.757 0 5 2.243 5 5.001 0 2.756-2.243 5-5 5s-5-2.244-5-5c0-2.758 2.243-5.001 5-5.001zm0-2c-3.866 0-7 3.134-7 7.001 0 3.865 3.134 7 7 7s7-3.135 7-7c0-3.867-3.134-7.001-7-7.001zm6.369 13.353c-.497.498-1.057.931-1.658 1.302 2.872 1.874 4.378 5.083 4.972 7.346h-19.387c.572-2.29 2.058-5.503 4.973-7.358-.603-.374-1.162-.811-1.658-1.312-4.258 3.072-5.611 8.506-5.611 10.669h24c0-2.142-1.44-7.557-5.631-10.647z"/></svg></router-link>
                <!-- <router-link to="/member" title="會員專區" v-if="loginIf"><svg viewBox="0 0 24 24"><path d="M12 2c2.757 0 5 2.243 5 5.001 0 2.756-2.243 5-5 5s-5-2.244-5-5c0-2.758 2.243-5.001 5-5.001zm0-2c-3.866 0-7 3.134-7 7.001 0 3.865 3.134 7 7 7s7-3.135 7-7c0-3.867-3.134-7.001-7-7.001zm6.369 13.353c-.497.498-1.057.931-1.658 1.302 2.872 1.874 4.378 5.083 4.972 7.346h-19.387c.572-2.29 2.058-5.503 4.973-7.358-.603-.374-1.162-.811-1.658-1.312-4.258 3.072-5.611 8.506-5.611 10.669h24c0-2.142-1.44-7.557-5.631-10.647z"/></svg></router-link> -->
                <!-- <router-link to="question" title="購物常見問題"><svg viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1.25 17c0 .69-.559 1.25-1.25 1.25-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25c.691 0 1.25.56 1.25 1.25zm1.393-9.998c-.608-.616-1.515-.955-2.551-.955-2.18 0-3.59 1.55-3.59 3.95h2.011c0-1.486.829-2.013 1.538-2.013.634 0 1.307.421 1.364 1.226.062.847-.39 1.277-.962 1.821-1.412 1.343-1.438 1.993-1.432 3.468h2.005c-.013-.664.03-1.203.935-2.178.677-.73 1.519-1.638 1.536-3.022.011-.924-.284-1.719-.854-2.297z"/></svg></router-link> -->
                <a title="搜尋" @click="fnSeachIf=!fnSeachIf">
                    <svg viewBox="0 0 24 24"><path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"/></svg>
                </a>
            </div>
        </div>
    </div>
    <!--<FnSeach :show="FnSeachIf" @updateShow="updateShowFn"></FnSeach>-->
    <FnSeach :enterShow="fnSeachIf" @updateShow="value=>fnSeachIf=value"></FnSeach>
</template>

<script>
    import {
        mapState
    } from 'vuex'
    import FnSeach from './search'
    export default {
        data() {
            return {
                fnSeachIf: false
            }
        },
        components: {
            FnSeach,
        },
        computed: {
            // ...mapState('user',['token']),
            // loginIf(){
            //     //登入判斷
            //     console.log('loginIf',this.token);
            //     return this.token;
            // }
        },
        props: {

        },
        methods: {
            // updateShowFn(event) {
            //     this.fnSeachIf = event
            //     console.log('3', event, this.fnSeachIf)
            // }

        },

    }
</script>

<style scoped>
    .navObj .top {
        display: flex;
        justify-content: space-between;
    }
    
    .navObj .top .left img {
        width: 260px;
    }
    
    .navObj .top .right {
        text-align: right;
    }
    
    .navObj .top .right h2 {
        font-size: 2.625rem;
        color: #000;
    }
    
    .navObj .top .right p {
        font-size: 14px;
        line-height: 1.4;
        color: #666;
    }
    
    @media (max-width: 576px) {
        .navObj .top .left img {
            width: 200px;
        }
        .navObj .top .right {
            display: none;
        }
    }
    
    .navObj .bottom {
        display: flex;
        padding: 15px 6px;
        border: 1px solid #000;
        border-left: none;
        border-right: none;
        margin: 15px 0;
        justify-content: space-between;
    }
    
    .navObj .bottom ul {
        display: flex;
        font-size: 0;
    }
    
    .navObj .bottom ul li {
        padding: 0;
        position: relative;
    }
    
    .navObj .bottom ul li a {
        font-size: 1.125rem;
        color: #000;
        padding: 0 20px;
        font-weight: bold;
    }
    
    .navObj .bottom ul li a:before {
        content: attr(data-title);
        display: block;
        font-size: 1.125rem;
        opacity: 0;
        transform: translateY(-50%) scale(0.5);
        transition: ease 0.5s;
    }
    
    .navObj .bottom ul li a span {
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(1);
        transition: ease 0.5s;
        color: #000;
        font-size: 1.125rem;
    }
    
    .navObj .bottom ul li:hover a:before,
    .navObj .bottom ul li.active a:before {
        opacity: 1;
        transform: translateY(0%) scale(1);
    }
    
    .navObj .bottom ul li:hover a span,
    .navObj .bottom ul li.active a span {
        transform: translate(-50%, 50%) scale(0.5);
        opacity: 0;
        visibility: hidden;
    }
    
    .navObj .bottom ul li a:hover {
        color: #000;
    }
    
    .navObj .bottom ul li:first-child a {
        padding-left: 0;
    }
    
    .navObj .bottom .btns {
        transition: ease 0.6s;
        display: flex;
    }
    
    .navObj .bottom .btns a {
        margin-left: 10px;
        font-size: 0;
        cursor: pointer;
    }
    
    .navObj .bottom .btns a svg {
        fill: #7c7c7c;
        height: 18px;
    }
    
    .navObj .bottom .btns a:hover svg {
        fill: #000;
    }
</style>