<template>
    <div class="productText" v-if="item">
        <!-- {{item}} -->
        <h2 class="title">{{item.ti}}</h2>
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
                            <div title="增加數量" class="qty-minus link" @click="skuNum>1?skuNum--:skuNum=1"><span>-</span></div>
                            <input id="quantity" type="text" name="email"  data-min="1" data-max="15" v-model="skuNum" @change="changeSkuNum">
                            <div title="減少數量" class="qty-plus link" @click="skuNum++"><span>+</span></div>
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
                    <a @click="addShopcar" class="add-cart">加入購物車
                        <span class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z"/></svg>
                        </span>
                    </a>
                    <!-- <p class="outOfStock">缺貨中</p> -->
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'productText',
        props: ["item"],
        data() {
            return {
                skuNum: 1,
            }
        },
        methods: {
            changeSkuNum(event) {
                //console.log(event)
                let value = event.target.value * 1;
                // console.log(value)
                //不是數字或小於0變1
                if (isNaN(value) || value < 0) {
                    this.skuNum = 1
                } else {
                    //不能有小數
                    this.skuNum = parseInt(value)
                }
            },
            addShopcar() {
                //請求
                // try {
                //     await this.$store.dispatch('productView/addOrUpdateShopCart', {
                //             skuId: this.$route.params.id,
                //             skuNum: this.skuNum
                //         })
                //         //路由跳轉
                //         // this.$router.push({name:'addCartSuccess',query:{skuId:this.$route.params.id,skuNum:this.skuNum}})               
                // } catch (error) {
                //     alert(error.message)
                // }
                // console.log('addShopcar')


                //本地儲存
                let items = [{
                    skuId: this.$route.params.id,
                    skuNum: this.skuNum
                }]
                if (sessionStorage.getItem('skuList')) {
                    let updataCount = true;
                    let skuListArry = JSON.parse(sessionStorage.getItem('skuList')).map((el, index) => {
                        //相同ID更新數量
                        if (items[0]['skuId'] == el['skuId']) {
                            updataCount = false;
                            return {
                                skuId: el['skuId'],
                                skuNum: el['skuNum'] + items[0]['skuNum']
                            };
                        } else {
                            return el;
                        }
                    })
                    if (updataCount) {
                        items = skuListArry.concat(items)
                    } else {
                        items = skuListArry
                    }
                }
                sessionStorage.setItem('skuList', JSON.stringify(items))
                console.log(JSON.parse(sessionStorage.getItem('skuList')))


                //store
                // this.$store.dispatch('productView/addOrUpdateShopCart', {
                //     skuId: this.$route.params.id,
                //     skuNum: this.skuNum
                // })
            },
        }
    }
</script>

<style scoped>
    .productText {
        flex: 1 1;
        padding-left: 30px
    }
    
    .productText .title {
        margin: 0;
        font-size: 32px;
        font-weight: bold;
        padding: 10px 0;
        margin-bottom: 20px;
        text-align: left;
    }
    
    .productText ul {
        border-top: 1px solid #e9e9e9;
    }
    
    .productText li {
        padding: 20px 15px;
        border-bottom: 1px solid #e9e9e9;
        display: flex;
        align-items: center;
    }
    
    .productText li .t {
        flex: 0 90px;
        font-weight: bold;
        color: #000;
    }
    
    .productText li .c {
        color: #666;
        flex: 1;
        line-height: 1.4;
    }
    
    .productText li .public_flex {
        flex: 0 50%;
        align-items: center;
    }
    
    .productText .qty-wrap {
        height: 35px;
        width: 130px;
        display: flex;
        align-items: center;
    }
    
    .productText .qty-wrap .link {
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
        cursor: pointer;
        width: 90px;
        user-select: none;
    }
    
    .productText .qty-wrap span {
        font-size: 22px;
    }
    
    .productText .qty-wrap input {
        background: #fff;
        border: 1px solid #ddd;
        border-left: none;
        border-right: none;
        text-align: center;
        height: 100%;
        width: 100%;
        font-size: 0.85rem;
    }
    
    .productText .color-choose a.selected {
        border: 2px solid #555;
    }
    
    .productText .color-choose a {
        width: 30px;
        height: 30px;
        display: inline-block;
        vertical-align: top;
        margin: 3px;
        border: 1px solid #ccc;
    }
    
    .productText .color-choose a:first-child {
        background: #ffb6b6;
    }
    
    .productText .color-choose a:nth-child(2) {
        background: #000;
    }
    
    .productText .color-choose a:nth-child(3) {
        background: #fff;
    }
    
    .productText .price {
        display: flex;
        align-items: center;
    }
    
    .productText .price .p-after {
        font-size: 24px;
        font-weight: bold;
        font-family: "Oswald-Light";
        color: #000;
    }
    
    .productText .price .before {
        margin: 0;
        display: inline-block;
        vertical-align: middle;
        padding-left: 5px;
        font-size: 12px;
    }
    
    .productText .price .before span {
        font-size: 12px;
        text-decoration: line-through;
    }
    
    .productText .add-cart {
        margin: 10px;
        background: #222;
        border: 1px solid #222;
        color: #fff;
        text-align: center;
        font-size: 1rem;
        display: block;
        border-radius: 3px;
        overflow: hidden;
        line-height: 48px;
        transition: ease 0.3s;
        width: 65%;
        cursor: pointer;
    }
    
    .productText .add-cart .icon {
        background: #fff;
        color: #222;
        float: right;
        padding: 16px;
        line-height: 0;
    }
    
    .productText .add-cart .icon svg {
        width: 16px;
        height: auto;
    }
    
    .productText .add-cart:hover {
        background: #c1894c;
        box-shadow: 0 0 0 2px #c1894c inset;
        border-color: #c1894c;
        transform: scale(1.05, 1.05);
    }
    
    .productText .add-cart:hover .icon svg {
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