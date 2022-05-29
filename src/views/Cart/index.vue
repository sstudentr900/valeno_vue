<template>
    <div class="cart">
        <FnCartSteps :selected="1"></FnCartSteps>
        <FnCarList :isCoupon=true></FnCarList>
        <div class="public_box">
            <div class="public_form">
                <div class="payment">
                    <div class="form-tit"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 3c0 .55.45 1 1 1h1l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.67-1.43c-.16-.35-.52-.57-.9-.57H2c-.55 0-1 .45-1 1zm16 15c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>選擇付款方式</div>
                    <div class="rows">
                        <label class="radio"><input type="radio" value="1" v-model="payment"><span><i></i></span>&nbsp;線上刷卡</label>
                        <label class="radio"><input type="radio" value="2" v-model="payment"><span><i></i></span>&nbsp;WebATM</label>
                        <label class="radio"><input type="radio" value="3" v-model="payment"><span><i></i></span>&nbsp;超商取貨付款</label>
                    </div>
                </div>
                <div class="delivery">
                    <div class="form-tit"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path fill="none" d="M0 0h48v48h-48z"/><path d="M40 16h-6v-8h-28c-2.21 0-4 1.79-4 4v22h4c0 3.31 2.69 6 6 6s6-2.69 6-6h12c0 3.31 2.69 6 6 6s6-2.69 6-6h4v-10l-6-8zm-28 21c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm27-18l3.93 5h-8.93v-5h5zm-3 18c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/></svg>選擇配送方式</div>
                    <div class="rows">
                        <div class="type">宅配</div>
                        <label class="check">
                            <input type="radio" v-model="delivery"  value="1">
                            <span></span>
                            &nbsp;宅配到府，將收取80元運費，購物滿1000元免運
                        </label>
                    </div>
                    <div class="rows">
                        <div class="type">統一超商取貨</div>
                        <div class="choose">
                            <label class="check">
                                <input type="radio" v-model="delivery"  value="2">
                                <span></span>
                                &nbsp;7-11取貨付款，將酌收 50 元物流費。若單筆購物滿 1000 元，即享有免運費優惠。
                            </label>
                            <div class="choose-store">
                                取貨門市<a href="" class="btns" title="請選擇門市">請選擇門市</a>
                                <span> 7-11台南新本原店：台南市安南區本原街三段247號1樓</span>
                            </div>
                        </div>
                    </div>
                    <div class="rows">
                        <div class="type">全家超商取貨</div>
                        <div class="choose">
                            <label class="check">
                                <input type="radio" v-model="delivery" value="3">
                                <span></span>
                                &nbsp;全家取貨付款，將酌收 50 元物流費。若單筆購物滿 1000元，即享有免運費優惠。
                            </label>
                            <div class="choose-store">取貨門市<a href="" class="btns" title="請選擇門市">請選擇門市</a>
                                <span>全家台南新本原店：台南市安南區本原街三段247號1樓</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="public_buttons2">
                <router-link to="/product" class="btns2 white-btn" title="繼續選購其他商品">繼續選購其他商品</router-link>
                <router-link to="/cartFill" class="btns2" title="下一步，填寫購買資料">下一步，填寫購買資料</router-link>
            </div>
        </div>
    </div>
</template>
<script>
    import FnCartSteps from '@/components/FnCartSteps'
    import FnCarList from '@/components/FnCarList'
    export default {
        name: 'cart',
        components: {
            FnCartSteps,
            FnCarList,
        },
        data() {
            return {
                payment: 1,
                delivery: 1
            }
        }
    }
</script>

<style scoped>
    .public_box .form-tit {
        border-bottom: 1px solid #ccc;
        padding: 5px 8px 8px 0;
    }
    
    .payment {
        margin-bottom: 30px;
    }
    
    .delivery .rows {
        padding: 20px 10px;
        display: flex;
        align-items: flex-start;
    }
    
    .delivery .type {
        width: 200px;
    }
    
    .delivery .choose {
        flex: 1;
        font-size: 0.95rem;
    }
    
    .delivery .check {
        display: flex;
        align-items: center;
        margin-bottom: 0;
    }
    
    .delivery .check span {
        margin-right: 10px;
    }
    
    .delivery .choose-store {
        display: flex;
        align-items: center;
        margin-top: 0;
        line-height: 30px;
        color: #666;
    }
    
    .delivery .choose-store .btns {
        color: #fff;
        background: #c1894c;
        padding: 6px 10px;
        box-shadow: 1px 1px 1px rgba(255, 255, 255, 0.5) inset, -1px -1px 1px rgba(0, 0, 0, 0.1) inset;
        border-radius: 2px;
        margin: 5px;
        font-size: 0.85rem;
    }
</style>