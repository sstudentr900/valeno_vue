<template>
    <div class="shoppingList">
        <div class="listHead">
            <div class="list">
                <div>商品</div>
                <div>商品名稱</div>
                <div>規格</div>
                <div>數量</div>
                <div>金額</div>
            </div>
        </div>
        <!-- <div class="table-no-data"><i class="fa fa-info-circle" aria-hidden="true"></i>目前查無符合資訊</div> -->
        <div class="listContent">
            <ul class="">
                <li class="list">
                    <div>
                        <img src="img/p01.jpg" alt="">
                    </div>
                    <div>
                        <p>Mistine - Groove complete</p>
                    </div>
                    <div>
                        <p>Mistine - Groove complete</p>
                    </div>
                    <div>
                        <p>1</p>
                    </div>
                    <div>
                        <p>NT$429</p>
                    </div>
                </li>
            </ul>
            <div class="coupon" v-if="isCoupon">
                <div>
                    我要使用折價券
                    <div class="typing">
                        <input type="text" class="input-box" name="coupon_sn" placeholder="請填寫折價券序號">
                        <button type="button" class="btn-use">確認使用</button>
                    </div>
                </div>
                <div class="b">
                    您共有<span class="pink">50點</span>購物金，本筆訂單最多可使用<span class="pink">100點</span>，您將使用<input type="text" class="input-box" name="">點。
                    <button type="button" class="btn-use">確認使用</button>
                </div>
            </div>
            <div class="total">
                <div class="rows">
                    共 4 件商品 商品金額
                    <p>NT$ 350</p>
                </div>
                <!-- <div class="rows">
                    <span class="grey">（消費滿$480免運費）</span>運費小計
                    <p>NT$ 50</p>
                </div> -->
                <div class="rows">
                    購物金折抵
                    <p>NT$ 0</p>
                </div>
                <div class="rows">
                    折價券折抵
                    <p>NT$ 0</p>
                </div>
                <div class="rows">
                    總計
                    <p class="public_text_pink">NT$ 400</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {
        mapState
    } from 'vuex'
    export default {
        name: 'shoppingList',
        props: ['isCoupon']
            // mounted() {
            //     this.$store.dispatch('productView/productViewAc', this.$route.params)
            // },
            // components: {
            //     productImg,
            //     productText,
            //     similars,
            //     tabs,
            //     recommend,
            // },
            // computed: {
            //     ...mapState('productView', ['productViewData'])
            // },
    }
</script>

<style scoped>
    .shoppingList {
        border: 1px solid #ccc;
        padding: 30px 40px;
        margin-top: 40px;
    }
    
    .shoppingList .coupon {
        background: #f6f6f6;
        padding: 15px 30px;
    }
    
    .shoppingList .coupon .typing {
        display: inline-block;
        margin: 0 5px;
    }
    
    .shoppingList .coupon .input-box {
        border: 1px solid #ccc;
        background: #fff;
        border-radius: 2px;
        padding: 5px 10px;
        width: 100%;
        height: 35px;
    }
    
    .shoppingList .coupon .typing .input-box {
        width: auto;
        height: inherit;
        font-size: 16px;
    }
    
    .shoppingList .coupon .btn-use {
        background: #222;
        border: none;
        border-radius: 2px;
        padding: 6px 15px;
        color: #fff;
        margin-left: 5px;
        -moz-transition: ease 0.3s;
        -o-transition: ease 0.3s;
        -webkit-transition: ease 0.3s;
        transition: ease 0.3s;
    }
    
    .shoppingList .coupon .b {
        margin-top: 10px;
    }
    
    .shoppingList .coupon .b .input-box {
        width: 50px;
        margin: 0 5px;
    }
    
    .shoppingList .coupon+.total {
        border-top: none;
    }
    
    .shoppingList .total {
        border-top: 1px solid #e5e5e5;
        text-align: right;
        padding-top: 20px;
    }
    
    .shoppingList .total .rows {
        margin-bottom: 15px;
        color: #666;
        display: flex;
        justify-content: end;
    }
    
    .shoppingList .total p {
        width: 200px;
    }
    
    .shoppingList .list {
        display: flex;
        align-items: center;
        text-align: center;
    }
    
    .shoppingList .list>div {
        /* flex-basis: 10%; */
        flex: 1 1;
        padding: 10px;
        color: #555;
    }
    
    .shoppingList .list>div:nth-child(2) {
        flex: 2 2;
    }
    
    .shoppingList .listHead .list {
        border-bottom: 1px solid #ccc;
        padding: 10px 0;
    }
    
    .shoppingList .listContent .list {
        padding: 10px 0;
    }
    
    .shoppingList .listContent .list:not(:last-child) {
        border-bottom: 1px solid #e5e5e5;
    }
</style>