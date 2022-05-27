<template>
    <div class="content flow_cart">
        <div class="steps">
            <div class="s-box now"><span>STEP 1</span>購物清單</div>
            <div class="s-box"><span>STEP 2</span>填寫購買資料</div>
            <div class="s-box"><span>STEP 3</span>訂單成立</div>
        </div>
        <form action="flow_consignee.html">
            <div class="cart_box">
                <div class="form">
                    <div class="list list-head">
                        <div class="column pic">商品</div>
                        <div class="column box1">商品編號</div>
                        <div class="column box2">商品名稱</div>
                        <div class="column box3">容量</div>
                        <div class="column box4">金額</div>
                        <div class="column box5">數量</div>
                        <div class="column box6">小計</div>
                        <div class="column option">變更</div>
                    </div>
                    <!-- no-data
                <div class="table-no-data"><i class="fa fa-info-circle" aria-hidden="true"></i>目前查無符合資訊</div>-->
                    <ul class="reset">
                        <li class="list">
                            <div class="column pic">
                                <a href="product_view.html" title=""><img src="img/p01.jpg" alt=""></a>
                            </div>
                            <div class="column box1">900008600</div>
                            <div class="column box2">
                                <a href="product_view.html" title="">
                                    <p class="en">Mistine - Groove complete</p>
                                    <p class="tit">12色完美眼彩盤</p>
                                </a>
                                <div class="color">no2珊瑚橘</div>
                                <div class="match">
                                    <p class="t">符合活動</p>
                                    <a href="product_list.html" title="" class="sale">Mistine周年慶全館85折</a>
                                </div>
                            </div>
                            <div class="column box3">9g</div>
                            <div class="column box4">
                                <span class="p-after">NT$429</span>
                            </div>
                            <div class="column box5">
                                <div class="qty-wrap">
                                    <a href="javascript:;" title="增加數量" class="qty-minus link"><span>-</span></a>
                                    <!-- 可選數量的最小值&最大值 -->
                                    <input type="text" name="" value="1" data-min="1" data-max="15">
                                    <a href="javascript:;" title="減少數量" class="qty-plus link"><span>+</span></a>
                                </div>
                            </div>
                            <div class="column box6">
                                <span class="p-after">NT$429</span>
                            </div>
                            <div class="column option">
                                <a href="" title="移除商品">移除商品</a>
                                <a href="" title="下次再買">下次再買</a>
                            </div>
                        </li>
                    </ul>
                    <div class="coupon">
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
                            <p class="p">NT$ 350</p>
                        </div>
                        <div class="rows">
                            <span class="grey">（消費滿$480免運費）</span>運費小計
                            <p class="p">NT$ 50</p>
                        </div>
                        <div class="rows">
                            購物金折抵
                            <p class="p">NT$ 0</p>
                        </div>
                        <div class="rows">
                            折價券折抵
                            <p class="p">NT$ 0</p>
                        </div>
                        <div class="rows">
                            總計
                            <p class="p pink">NT$ 400</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cart_box delivery">
                <div class="payment">
                    <div class="tit"><i class="fa fa-truck" aria-hidden="true"></i>選擇付款方式</div>
                    <label class="radio">
                    <input type="radio" name="pay_id">
                    <span><i></i></span>
                    線上刷卡
                </label>
                    <label class="radio">
                    <input type="radio" name="pay_id">
                    <span><i></i></span>
                    WebATM
                </label>
                    <label class="radio">
                    <input type="radio" name="pay_id">
                    <span><i></i></span>
                    超商取貨付款
                </label>
                </div>
                <div class="tit"><i class="fa fa-truck" aria-hidden="true"></i>選擇配送方式</div>
                <div class="rows">
                    <div class="type">宅配</div>
                    <div class="choose">
                        <label class="check">
                        <input type="radio" name="pay_id">
                        <span><i class="fa fa-check" aria-hidden="true"></i></span>
                        <p class="word">宅配到府，將收取80元運費，購物滿1000元免運</p>
                    </label>
                    </div>
                </div>
                <div class="rows">
                    <div class="type">統一超商取貨</div>
                    <div class="choose">
                        <label class="check">
                        <input type="radio" name="pay_id">
                        <span><i class="fa fa-check" aria-hidden="true"></i></span>
                        <p class="word">7-11取貨付款，將酌收 50 元物流費。若單筆購物滿 1000 元，即享有免運費優惠。</p>
                    </label>
                        <div class="choose-store">取貨門市<a href="" class="btns" title="請選擇門市"> 請選擇門市</a>
                            <span>  7-11台南新本原店：台南市安南區本原街三段247號1樓</span></div>
                    </div>
                </div>
                <div class="rows">
                    <div class="type">全家超商取貨</div>
                    <div class="choose">
                        <label class="check">
                        <input type="radio" name="pay_id">
                        <span><i class="fa fa-check" aria-hidden="true"></i></span>
                        <p class="word">全家取貨付款，將酌收 50 元物流費。若單筆購物滿 1000元，即享有免運費優惠。</p>
                    </label>
                        <div class="choose-store">取貨門市<a href="" class="btns" title="請選擇門市"> 請選擇門市</a>
                            <span>  全家台南新本原店：台南市安南區本原街三段247號1樓</span></div>
                    </div>
                </div>
            </div>
            <div class="cart_box1">
                <div class="buttons">
                    <a href="" class="btns white-btn" title="繼續選購其他商品"><span>繼續選購其他商品</span></a>
                    <button type="submit" class="btns" title="下一步，填寫購買資料"><span>下一步，填寫購買資料</span></button>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
    // import productImg from './productImg'
    // import productText from './productText'
    // import similars from './similars'
    // import tabs from './tabs'
    // import recommend from './recommend'
    import {
        mapState
    } from 'vuex'
    export default {
        name: 'newView',
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
    .flow_cart {
        /*border: 1px solid #ccc;*/
        background: #fff;
        /*border-radius: 2px;*/
        /*padding: 5px 10px;*/
    }
    .flow_cart .coupon {
        background: #f6f6f6;
        padding: 15px 30px;
    }
    .flow_cart .coupon .typing {
        display: inline-block;
        margin: 0 5px;
    }
    .flow_cart .coupon .typing .input-box{
        width: auto;
        height: inherit;
        font-size: 16px;
    }
    .flow_cart .coupon .btn-use {
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
    .flow_cart .coupon .b {
        margin-top: 10px;
    }
    .flow_cart .coupon .b .input-box {
        width: 50px;
        margin: 0 5px;
    }
    .flow_cart .total {
        text-align: right;
        margin-top: 20px;
    }
    .flow_cart .total .rows {
        margin-bottom: 15px;
    }
    .flow_cart .total .p {
        width: 100px;
        float: right;
    }
</style>