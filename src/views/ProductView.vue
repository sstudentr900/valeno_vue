<template>
    <div class="product_view">
        <div class="product">
            <div class="public_flex">
                <div class="left">
                    <!-- <div id="slideshow03">
                        <ul>
                            <li class="active"><img src="img/p01.jpg" alt=""></li>
                            <li><img src="img/p02.jpg" alt=""></li>
                            <li><img src="img/p03.jpg" alt=""></li>
                            <li><img src="img/p04.jpg" alt=""></li>
                            <li><img src="img/p05.jpg" alt=""></li>
                        </ul>
                        <div class="bottom" style="height: 50px;">
                            <div class="content">
                                <ul style="width: 600px;">
                                    <li class="active" style="width: 60px;"><img src="img/p01.jpg" alt=""></li>
                                    <li style="width: 60px;"><img src="img/p02.jpg" alt=""></li>
                                    <li style="width: 60px;"><img src="img/p03.jpg" alt=""></li>
                                    <li style="width: 60px;"><img src="img/p04.jpg" alt=""></li>
                                    <li style="width: 60px;"><img src="img/p05.jpg" alt=""></li>
                                </ul>
                            </div>
                            <div class="prev control"></div>
                            <div class="next control"></div>
                        </div>
                    </div> -->
                </div>
                <div class="right" v-for="item in productViewData.item" :key="item.id">
                    <h2 class="title">{{item.en}}</h2>
                    <ul>
                        <li>
                            <div class="t">商品描述</div>
                            <div class="c">{{item.describe}}</div>
                        </li>
                        <li>
                            <div class="half">
                                <div class="t">規格</div>
                                <div class="c">{{item.specification}}</div>
                            </div>
                            <div class="half">
                                <div class="t">數量</div>
                                <div class="c">
                                    <div class="qty-wrap">
                                        <a href="javascript:;" title="增加數量" class="qty-minus link"><span>-</span></a>
                                        <!-- 可選數量的最小值&最大值 -->
                                        <input id="quantity" type="text" name="email" value="1" data-min="1" data-max="15">
                                        <a href="javascript:;" title="減少數量" class="qty-plus link"><span>+</span></a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <!-- <li>
                            <div class="half">
                                <div class="t">顏色名稱</div>
                                <div class="c">蜜桃色</div>
                            </div>
                            <div class="half">
                                <div class="t">顏色</div>
                                <div class="c">
                                    <div class="color-choose">
                                        <a href="javascript:;" class="selected" title="蜜桃色"></a>
                                        <a href="javascript:;" title="黑色"></a>
                                        <a href="javascript:;" title="白色"></a>
                                    </div>
                                </div>
                            </div>
                        </li> -->
                        <li>
                            <div class="half">
                                <div class="t">促銷價</div>
                                <div class="c price">
                                    <span class="p-after">{{item.special_price}}</span>
                                    <p class="before">
                                        原價
                                        <span class="p-before">{{item.price}}</span>
                                    </p>
                                </div>
                            </div>
                            <div class="half">
                                <a href="" class="add-cart">加入購物車<span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z"/></svg></span></a>
                                <!-- <p class="outOfStock">缺貨中</p> -->
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="similars">
            <div class="title"><span>YOU MAY ALSO LIKE</span>同類商品</div>
            {{productViewData.linkList}}
            <ul>
                <li v-for="item in productViewData.linkList" :key="item.id">
                    <div class="pic">
                        <a href="" title="">
                            <!-- <img :src="requer(`@/assets/${item.src}`)" alt=""> -->
                        </a>
                    </div>
                    <div class="column">
                        <a href="" title="">
                            <p class="en">{{item.en}}</p>
                            <p class="tit">{{item.ti}}</p>
                        </a>
                        <a href="product_discount_list.html" class="sale">
                            {{item.sale}}
                        </a>
                    </div>
                    <div class="column">
                        <!-- <span class="p-before">{{item.price}}</span> -->
                        <span class="line">|</span>
                        <!-- <span class="p-after">{{item.special_price}}</span> -->
                    </div>
                </li>
                <li>
                    <div class="pic">
                        <!-- <a href="" title=""><img src="img/p03.jpg" alt=""></a> -->
                    </div>
                    <div class="column">
                        <a href="" title="">
                            <p class="en">Mistine - Maya air Crusion </p>
                            <p class="tit">水感粉底霜</p>
                        </a>
                        <a href="product_discount_list.html" title="" class="sale">Mistine周年慶全館85折</a>
                    </div>
                    <div class="column">
                        <span class="p-before">NT$429</span>
                        <span class="line">|</span>
                        <span class="p-after">NT$429</span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="tabs">
            <ul>
                <li><a href="#menu1" class="active">詳細介紹</a></li>
                <li><a href="#menu2">使用說明</a></li>
                <li><a href="#menu3">成分說明</a></li>
            </ul>
            <div class="items">
                <div class="item">
                    <!-- <img src="img/pv01.jpg" alt=""> -->
                </div>
                <div class="item active">
                    用途:使眼部色彩豐富<br> 
                    使用方式：依照喜好選擇顏色並依序塗抹在眼皮上<br>
                </div>
                <div class="item">
                    容量：9g<br> 
                    成分: 如包裝所標示<br> 
                    保存期限：3年<br> 
                    產地：泰國<br> 
                    高市衛廣字第10505018號
                </div>
            </div>
        </div>
        <div class="recommend">
            <h3 class="title">#RECOMMEND</h3>
            <div class="public_flex">
                <div class="item">
                    <div class="img">
                        <!-- <a href="product_view.html" title=""><img class="lazy" src="img/p01.jpg" alt="" style="display: inline;"></a> -->
                    </div>
                    <div class="info">
                        <a href="product_view.html" title="">
                            <div class="en">Mistine - Groove complete</div>
                            <h3 class="tit">12色完美眼彩盤</h3>
                        </a>
                        <a href="product_list.html" title="" class="sale">泰國必買</a>
                        <div class="price"><span class="p-before">NT$429</span><i class="line">/</i><span class="p-after">NT$429</span></div>
                    </div>
                </div>
                <div class="item">
                    <div class="img">
                        <!-- <a href="product_view.html" title=""><img class="lazy" src="img/p04.jpg" alt="" style="display: inline;"></a> -->
                    </div>
                    <div class="info">
                        <a href="product_view.html" title="">
                            <div class="en">Mistine - Groove complete</div>
                            <h3 class="tit">12色完美眼彩盤</h3>
                        </a>
                        <a href="product_list.html" title="" class="sale">泰國必買</a>
                        <div class="price"><span class="p-before">NT$429</span><i class="line">/</i><span class="p-after">NT$429</span></div>
                    </div>
                </div>
                <div class="item">
                    <div class="img">
                        <!-- <a href="product_view.html" title=""><img class="lazy" src="img/p04.jpg" alt="" style="display: inline;"></a> -->
                    </div>
                    <div class="info">
                        <a href="product_view.html" title="">
                            <div class="en">Mistine - Groove complete</div>
                            <h3 class="tit">12色完美眼彩盤</h3>
                        </a>
                        <a href="product_list.html" title="" class="sale">泰國必買</a>
                        <div class="price"><span class="p-before">NT$429</span><i class="line">/</i><span class="p-after">NT$429</span></div>
                    </div>
                </div>
                <div class="item">
                    <div class="img">
                        <!-- <a href="product_view.html" title=""><img class="lazy" src="img/p04.jpg" alt="" style="display: inline;"></a> -->
                    </div>
                    <div class="info">
                        <a href="product_view.html" title="">
                            <div class="en">Mistine - Groove complete</div>
                            <h3 class="tit">12色完美眼彩盤</h3>
                        </a>
                        <a href="product_list.html" title="" class="sale">泰國必買</a>
                        <div class="price"><span class="p-before">NT$429</span><i class="line">/</i><span class="p-after">NT$429</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    // import FnProduct from '@/components/FnProduct'
    // import FnPagers from '@/components/FnPagers'
    // import slide from '@/components/FnSlide'
    import {
        mapState
    } from 'vuex'
    export default {
        name: 'productView',
        mounted() {
            this.$store.dispatch('productView/productViewAc', this.$route.params)
        },
        // components: {
        //     slide,
        //     FnProduct,
        //     FnPagers
        // },
        computed: {
            ...mapState('productView', ['productViewData'])
        },
        // data() {
        //     return {
        //         nav1Id: this.$route.params ? this.$route.params.id : 0,
        //         nav2Id: this.$route.params ? this.$route.params.id : 0,
        //     }
        // },
        // methods: {
        //     nav1(child, id) {
        //         if (this.nav1Id == id) {
        //             this.nav1Id = 0
        //         } else {
        //             this.nav1Id = id
        //         }
        //         if (!child) {
        //             this.nav2(id)
        //         }
        //         // console.log('107',id)
        //     },
        //     nav2(id) {
        //         this.nav2Id = id
        //             // console.log('110',id1,id2)
        //         this.$router.push({
        //             name: 'product',
        //             params: {
        //                 id: id
        //             }
        //         })
        //     },
        // }

    }
</script>

<style scoped>
    .product_view .product {
        margin-top: 30px;
    }
    
    .product .left {
        flex: 0 0 360px;
    }
    
    .product .right {
        flex: 1 1;
    }
    
    .product .title {
        margin: 0;
        font-size: 1.5em;
        font-weight: bold;
        padding: 10px 0;
        margin-bottom: 25px;
        text-align: left;
    }
    
    .product ul {
        border-top: 1px solid #e9e9e9;
    }
    
    .product ul li {
        padding: 20px 15px;
        border-bottom: 1px solid #e9e9e9;
        display: flex;
        align-items: center;
    }
    
    .product ul li .t {
        flex: 0 90px;
        font-weight: bold;
        color: #000;
    }
    
    .product ul li .c {
        color: #666;
        flex: 1;
        line-height: 1.4;
    }
    
    .product ul li .half {
        flex: 0 50%;
        display: flex;
        align-items: center;
    }
    
    .product .qty-wrap {
        height: 30px;
        width: 120px;
        display: flex;
        align-items: center;
    }
    
    .product .qty-wrap a {
        border-top: 0;
        border-bottom: 0;
        border: 1px solid #ddd;
    }
    
    .product .qty-wrap a {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        color: #000;
        width: 50%;
        position: relative;
    }
    
    .product .qty-wrap input {
        background: #fff;
        border: 1px solid #ddd;
        border-left: none;
        border-right: none;
        text-align: center;
        height: 100%;
        width: 100%;
        font-size: 0.85rem;
    }
    
    .product .color-choose a.selected {
        border: 2px solid #555;
    }
    
    .product .color-choose a {
        width: 30px;
        height: 30px;
        display: inline-block;
        vertical-align: top;
        margin: 3px;
        border: 1px solid #ccc;
    }
    
    .product .color-choose a:first-child {
        background: #ffb6b6;
    }
    
    .product .color-choose a:nth-child(2) {
        background: #000;
    }
    
    .product .color-choose a:nth-child(3) {
        background: #fff;
    }
    
    .product .price {
        display: flex;
        align-items: center;
    }
    
    .product .price .p-after {
        font-size: 24px;
        font-weight: bold;
        font-family: "Oswald-Light";
        color: #000;
    }
    
    .product .price .before {
        margin: 0;
        display: inline-block;
        vertical-align: middle;
        padding-left: 5px;
        font-size: 12px;
    }
    
    .product .price .before span {
        font-size: 12px;
        text-decoration: line-through;
    }
    
    .product .add-cart {
        margin: 10px;
        background: #222;
        border: 1px solid #222;
        color: #fff;
        text-align: center;
        font-size: 1rem;
        display: block;
        border-radius: 3px;
        overflow: hidden;
        line-height: 45px;
        -moz-transition: ease 0.3s;
        -o-transition: ease 0.3s;
        -webkit-transition: ease 0.3s;
        transition: ease 0.3s;
        width: 65%;
    }
    
    .product .add-cart .icon {
        background: #fff;
        color: #222;
        float: right;
        padding: 16px;
        line-height: 0;
    }
    
    .product .add-cart .icon svg {
        width: 16px;
        height: auto;
    }
    
    .product .add-cart:hover {
        background: #c1894c;
        box-shadow: 0 0 0 2px #c1894c inset;
        border-color: #c1894c;
        transform: scale(1.05, 1.05);
    }
    
    .product .add-cart:hover .icon svg {
        fill: #c1894c;
        animation: pump 0.8s 0.3s ease infinite;
    }
    
    @-webkit-keyframes pump {
        0% {
            -moz-transform: scale(0.9, 0.9);
            -ms-transform: scale(0.9, 0.9);
            -webkit-transform: scale(0.9, 0.9);
            transform: scale(0.9, 0.9);
        }
        50% {
            -moz-transform: scale(1.15, 1.15);
            -ms-transform: scale(1.15, 1.15);
            -webkit-transform: scale(1.15, 1.15);
            transform: scale(1.15, 1.15);
        }
        100% {
            -moz-transform: scale(0.9, 0.9);
            -ms-transform: scale(0.9, 0.9);
            -webkit-transform: scale(0.9, 0.9);
            transform: scale(0.9, 0.9);
        }
    }
    
    @-moz-keyframes pump {
        0% {
            -moz-transform: scale(0.9, 0.9);
            -ms-transform: scale(0.9, 0.9);
            -webkit-transform: scale(0.9, 0.9);
            transform: scale(0.9, 0.9);
        }
        50% {
            -moz-transform: scale(1.15, 1.15);
            -ms-transform: scale(1.15, 1.15);
            -webkit-transform: scale(1.15, 1.15);
            transform: scale(1.15, 1.15);
        }
        100% {
            -moz-transform: scale(0.9, 0.9);
            -ms-transform: scale(0.9, 0.9);
            -webkit-transform: scale(0.9, 0.9);
            transform: scale(0.9, 0.9);
        }
    }
    
    @keyframes pump {
        0% {
            -moz-transform: scale(0.9, 0.9);
            -ms-transform: scale(0.9, 0.9);
            -webkit-transform: scale(0.9, 0.9);
            transform: scale(0.9, 0.9);
        }
        50% {
            -moz-transform: scale(1.15, 1.15);
            -ms-transform: scale(1.15, 1.15);
            -webkit-transform: scale(1.15, 1.15);
            transform: scale(1.15, 1.15);
        }
        100% {
            -moz-transform: scale(0.9, 0.9);
            -ms-transform: scale(0.9, 0.9);
            -webkit-transform: scale(0.9, 0.9);
            transform: scale(0.9, 0.9);
        }
    }
    /*similars */
    
    .similars {
        margin-top: 40px;
    }
    
    .similars .title {
        background: #f1f1f1;
        color: #000;
        padding: 15px;
        font-size: 1.1rem;
    }
    
    .similars .title span {
        font-weight: bold;
        font-size: 1.2rem;
        padding-right: 10px;
    }
    
    .similars ul li {
        border-bottom: 1px solid #e5e5e5;
        position: relative;
        padding: 10px 20px;
        overflow: hidden;
        display: flex;
        align-items: center;
        transition: background 0.5s ease;
        /* justify-content: space-between; */
    }
    
    .similars ul li:hover {
        background: #f9f9f9;
    }
    
    .similars .pic {
        flex: 0 0 90px;
        font-size: 1rem;
    }
    
    .similars .en,
    .similars .tit {
        color: #333;
        font-size: 14px;
    }
    
    .similars .en {
        font-weight: bold;
        margin: 0;
    }
    
    .similars .sale {
        color: #c1894c;
        font-size: 0.95rem;
        margin-top: 5px;
    }
    
    .similars .p-before,
    .similars .p-after {
        display: inline-block;
        font-family: "Oswald-Light";
        vertical-align: top;
        padding: 0 10px;
    }
    
    .similars .p-before {
        text-decoration: line-through;
        color: #555;
    }
    
    .similars .line {
        opacity: 0.5;
    }
    
    .similars .column {
        padding: 10px;
        flex: 1 1;
    }
    /*tabs*/
    
    .tabs {
        margin-top: 50px;
    }
    
    .tabs ul {
        height: 45px;
        border-bottom: 1px solid #000;
        background: #f7f7f7;
        display: flex;
        /* font-size: 0; */
    }
    
    .tabs ul a {
        color: #000;
        padding: 10px 20px;
        min-width: 200px;
        text-align: center;
        border-bottom: 1px solid #000;
        line-height: 1.4;
        height: 45px;
    }
    
    .tabs ul a.active {
        color: #000;
        border: 1px solid #000;
        border-top: 2px solid #000;
        border-bottom: none;
        background: #fff;
    }
    
    .tabs ul a:hover {
        background: #000;
        color: #fff;
    }
    
    .tabs .items {
        padding: 50px 0;
        line-height: 30px;
    }
    
    .tabs .item {
        display: none;
    }
    
    .tabs .item.active {
        display: block;
    }
    
    .recommend {
        background: #f8f8f8;
        margin-left: -60px;
        margin-right: -60px;
        margin-bottom: -60px;
        padding: 60px;
    }
    
    .recommend .title {
        color: #000;
        font-size: 28px;
        margin: 30px 0 40px;
        text-align: center;
        font-weight: bold;
    }
    
    .recommend .public_flex {
        justify-content: space-between;
    }
    
    .recommend .item {
        background: #fff;
        width: 22%;
    }
</style>