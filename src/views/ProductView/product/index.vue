<template>
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
            <div class="right" v-if="item">
                <h2 class="title">{{item.en}}</h2>
                <ul>
                    <li>
                        <div class="t">商品描述</div>
                        <div class="c">{{item.describe}}</div>
                    </li>
                    <li>
                        <div class="public_flex">
                            <div class="t">規格</div>
                            <div class="c">{{item.specification}}</div>
                        </div>
                        <div class="public_flex">
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
                        <div class="public_flex">
                            <div class="t">顏色名稱</div>
                            <div class="c">蜜桃色</div>
                        </div>
                        <div class="public_flex">
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
                        <div class="public_flex">
                            <div class="t">促銷價</div>
                            <div class="c price">
                                <span class="p-after">{{item.special_price}}</span>
                                <p class="before">
                                    原價
                                    <span class="p-before">{{item.price}}</span>
                                </p>
                            </div>
                        </div>
                        <div class="public_flex">
                            <a href="" class="add-cart">加入購物車<span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z"/></svg></span></a>
                            <!-- <p class="outOfStock">缺貨中</p> -->
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'product',
        props: ["item"]
    }
</script>

<style scoped>
    .product {
        margin-top: 30px;
    }
    
    .product .left {
        flex: 0 0 360px;
    }
    
    .product .right {
        flex: 1 1;
    }
    
    .product .right .title {
        margin: 0;
        font-size: 1.5em;
        font-weight: bold;
        padding: 10px 0;
        margin-bottom: 25px;
        text-align: left;
    }
    
    .product .right ul {
        border-top: 1px solid #e9e9e9;
    }
    
    .product .right li {
        padding: 20px 15px;
        border-bottom: 1px solid #e9e9e9;
        display: flex;
        align-items: center;
    }
    
    .product .right li .t {
        flex: 0 90px;
        font-weight: bold;
        color: #000;
    }
    
    .product .right li .c {
        color: #666;
        flex: 1;
        line-height: 1.4;
    }
    
    .product .right li .public_flex {
        flex: 0 50%;
        align-items: center;
    }
    
    .product .right .qty-wrap {
        height: 30px;
        width: 120px;
        display: flex;
        align-items: center;
    }
    
    .product .right .qty-wrap a {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        color: #000;
        width: 50%;
        position: relative;
        border-top: 0;
        border-bottom: 0;
        border: 1px solid #ddd;
    }
    
    .product .right .qty-wrap input {
        background: #fff;
        border: 1px solid #ddd;
        border-left: none;
        border-right: none;
        text-align: center;
        height: 100%;
        width: 100%;
        font-size: 0.85rem;
    }
    
    .product .right .color-choose a.selected {
        border: 2px solid #555;
    }
    
    .product .right .color-choose a {
        width: 30px;
        height: 30px;
        display: inline-block;
        vertical-align: top;
        margin: 3px;
        border: 1px solid #ccc;
    }
    
    .product .right .color-choose a:first-child {
        background: #ffb6b6;
    }
    
    .product .right .color-choose a:nth-child(2) {
        background: #000;
    }
    
    .product .right .color-choose a:nth-child(3) {
        background: #fff;
    }
    
    .product .right .price {
        display: flex;
        align-items: center;
    }
    
    .product .right .price .p-after {
        font-size: 24px;
        font-weight: bold;
        font-family: "Oswald-Light";
        color: #000;
    }
    
    .product .right .price .before {
        margin: 0;
        display: inline-block;
        vertical-align: middle;
        padding-left: 5px;
        font-size: 12px;
    }
    
    .product .right .price .before span {
        font-size: 12px;
        text-decoration: line-through;
    }
    
    .product .right .add-cart {
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
    
    .product .right .add-cart .icon {
        background: #fff;
        color: #222;
        float: right;
        padding: 16px;
        line-height: 0;
    }
    
    .product .right .add-cart .icon svg {
        width: 16px;
        height: auto;
    }
    
    .product .right .add-cart:hover {
        background: #c1894c;
        box-shadow: 0 0 0 2px #c1894c inset;
        border-color: #c1894c;
        transform: scale(1.05, 1.05);
    }
    
    .product .right .add-cart:hover .icon svg {
        fill: #c1894c;
        animation: pump 0.8s 0.3s ease infinite;
    }
    
    @keyframes pump {
        0% {
            transform: scale(0.9, 0.9);
        }
        50% {
            transform: scale(1.15, 1.15);
        }
        100% {
            transform: scale(0.9, 0.9);
        }
    }
</style>