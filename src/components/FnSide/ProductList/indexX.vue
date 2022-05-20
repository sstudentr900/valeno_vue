<template>
    <div class="ProductList" :class="{'active':enterShow}">
        <div class="box">
            <a class="close" @click="productOutput"><span></span></a>
            <div class="main" v-show="enterName=='skuInfo'">
                <div class="title">最近瀏覽商品</div>
                <div class="content" v-if="productListDataIf">
                    <ul class="list">
                        <li v-for="(item,index) in productListData" :key="item.id">
                            <div class="left" @click="goProduct(item.id)">
                                <div class="img">
                                    <img :src="item.src"  alt="">
                                </div>
                                <div class="text">
                                    <p class="tit">{{item.ti}}</p>
                                    <p class="sale">{{item.sale}}</p>
                                </div>
                                <div class="price">
                                    <span class="through">{{item.price}}</span><i>|</i><span>{{item.special_price}}</span>
                                </div>
                            </div>
                            <div class="delete" @click="skuDelet(index)"><span></span></div>
                        </li>
                    </ul>
                </div>
                <div class="content" v-else>
                    <div class="noData">
                        <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.002 21.534c5.518 0 9.998-4.48 9.998-9.998s-4.48-9.997-9.998-9.997c-5.517 0-9.997 4.479-9.997 9.997s4.48 9.998 9.997 9.998zm0-8c-.414 0-.75-.336-.75-.75v-5.5c0-.414.336-.75.75-.75s.75.336.75.75v5.5c0 .414-.336.75-.75.75zm-.002 3c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1z" fill-rule="nonzero"/></svg>目前沒有覽商品
                    </div>
                </div>
                <div class="public_buttons">
                    <a @click="goSkuList" class="btns" title="回到購物清單"><span>回到購物清單</span></a>
                </div>
            </div>
            <div class="main" v-show="enterName=='skuList'">
                <div class="title">購物清單</div>
                <div class="content" v-if="productListDataIf">
                    <ul class="list">
                        <li v-for="(item,index) in productListData" :key="item.id">
                            <div class="left">
                                <div class="img">
                                    <img :src="item.src"  alt="">
                                </div>
                                <div class="text">
                                    <p class="tit">{{item.ti}}</p>
                                    <p class="sale">{{item.sale}}</p>
                                </div>
                                <!-- <div class="public_qty">
                                    <div title="減少數量" class="qty-minus link" @click="skuReduce(index)"><span>-</span></div>
                                    <input type="text" data-min="1" :value="item.skuNum" @change="skuChange(index,$event.target.value)">
                                    <div title="增加數量" class="qty-plus link" @click="skuAdd(index)"><span>+</span></div>
                                </div> -->
                                <div class="public_qty">
                                    <div title="減少數量" class="qty-minus link" @click="skuCount('minus',index,1)"><span>-</span></div>
                                    <input type="text" :value="item.skuNum" @change="skuCount('change',index,$event.target.value)">
                                    <div title="增加數量" class="qty-plus link" @click="skuCount('add',index,1)"><span>+</span></div>
                                </div>
                                <div class="price">
                                    <!-- <span class="through">{{item.price}}</span><i>|</i> -->
                                    <span>{{item.special_price}}</span>
                                </div>
                            </div>
                            <div class="delete" @click="skuDelet(index)"><span></span></div>
                        </li>
                    </ul>   
                    <div class="total">
                        <p>訂單總金額</p>
                        <p class="num">NT${{skuTotal}}</p>
                    </div>
                    <div class="public_buttons">
                        <a @click="skuCopyInfo" class="btns white-btn" title="加入追蹤清單"><span>加入追蹤清單</span></a>
                        <a href="flow_cart.html" class="btns" title="我要結帳"><span>我要結帳</span></a>
                    </div>
                </div>
                <div class="content" v-else>
                    <div class="noData">
                        <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.002 21.534c5.518 0 9.998-4.48 9.998-9.998s-4.48-9.997-9.998-9.997c-5.517 0-9.997 4.479-9.997 9.997s4.48 9.998 9.997 9.998zm0-8c-.414 0-.75-.336-.75-.75v-5.5c0-.414.336-.75.75-.75s.75.336.75.75v5.5c0 .414-.336.75-.75.75zm-.002 3c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1z" fill-rule="nonzero"/></svg>目前沒有購物資訊
                    </div>
                    <div class="public_buttons">
                        <a @click="skuCopyInfo" class="btns" title="回到追蹤清單"><span>回到追蹤清單</span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FnProduct from '@/components/FnProduct'
    export default {
        name: 'ProductList',
        props: ['enterShow', 'enterName'],
        // mounted () {
        //     // console.log('ProductList_mounted')
        //     this.getData();
        // },
        components: {
            FnProduct
        },
        data() {
            return {
                productListData: [],
            }
        },
        computed:{
            productListDataIf(){
                // console.log(this.productListData,this.productListData.length)
                return this.productListData?this.productListData.length>0:false;
            },
            skuTotal() {
                let totalValue = 0
                // console.log('skuTotal',this.enterName , this.productListData)
                this.productListData.forEach((el) => {
                    totalValue += el['skuNum'] * el['special_price'].split('$')[1]
                })
                return totalValue;
            },
        },
        methods: {
            getData() {
                this.productListData = JSON.parse(sessionStorage.getItem(this.enterName)) || [];
                // console.log('getData',this.enterName,this.productListData)
            },
            productOutput(){
                this.$emit('productOutput', !this.enterShow);
            },
            skuAdd(index) {
                this.productListData[index]['skuNum'] += 1;
                this.skuSave()
            },
            skuReduce(index) {
                if (this.productListData[index]['skuNum'] > 1) {
                    this.productListData[index]['skuNum'] -= 1;
                } else {
                    this.productListData[index]['skuNum'] = 1;
                }
                this.skuSave()
            },
            skuChange(index, value) {
                value = value * 1;
                if (isNaN(value) || value < 0) {
                    value = 1;
                } else {
                    value = parseInt(value);
                }
                this.productListData[index]['skuNum'] = value;
                this.skuSave()
            },
            skuCount(type, index, value) {
                let skuNum = this.productListData[index]['skuNum'];
                // console.log(type, index, value, skuNum)
                switch (type) {
                    case "add":
                        skuNum += value;
                        break;
                    case "minus":
                        skuNum = skuNum > 1 ? skuNum - value : 1;
                        break;
                    case "change":
                        skuNum = (isNaN(value) || value < 1) ? 1 : parseInt(value)
                }
                this.productListData[index]['skuNum'] = skuNum
                this.skuSave()
            },
            skuDelet(index) {
                // console.log('skuDelet')
                // this.productListData = this.productListData.filter((el,index)=>{
                //     return el['id']!==id;
                //     return el['id']!==id;
                // })
                this.productListData.splice(index, 1);
                this.skuSave();
            },
            skuSave(name = this.enterName, data = this.productListData) {
                sessionStorage.setItem(name, JSON.stringify(data))
                this.getData()
            },
            skuCopyInfo() {
                let skuInfo = JSON.parse(sessionStorage.getItem('skuInfo')) || [];
                this.productListData.forEach((el) => {
                    skuInfo = skuInfo.filter(infoEl => {
                        return el['id'] != infoEl['id'];
                    })
                })
                skuInfo = skuInfo.concat(JSON.parse(JSON.stringify(this.productListData)));
                this.skuSave('skuInfo', skuInfo);
                // sessionStorage.setItem('skuInfo',JSON.stringify(skuInfo))
                
                //skuCopyInfo
                this.$emit('outputInfo')
            },
            goProduct(id) {
                // console.log(this.$emit)
                this.$router.push(`/product_view/${id}`);
                this.productOutput();
            },
            goSkuList(){
                this.$emit('outputList')
            }
        },
        watch: {
            enterShow:{
                handler:function(newValue, oldValue){
                    console.log('enterShow')
                    this.getData()
                },
                // immediate: true
            },
            enterName:{
                handler:function(newValue, oldValue){
                    console.log('enterName')
                    this.getData()
                },
                immediate: true
            }
        }

    }
</script>

<style scoped>
    .ProductList {
        position: fixed;
        z-index: 10000;
        right: 0;
        left: 0;
        top: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.6);
        opacity: 0;
        visibility: hidden;
        transition: .4s ease;
        transition-delay: .6s
    }
    
    .ProductList.active {
        opacity: 1;
        visibility: visible;
        transition: .4s ease;
    }
    
    .ProductList .box {
        position: fixed;
        /* right: -700px; */
        right: 0;
        background: #fff;
        height: 100vh;
        overflow-y: auto;
        width: 700px;
        transition: .6s;
        transform: translateX(100%);
    }
    
    .ProductList.active .box{
        transition-delay: .4s;
        transform: translateX(0);
    }
    
    .ProductList .close {
        display: block;
        width: 25px;
        height: 25px;
        position: absolute;
        left: 50px;
        top: 50px;
        cursor: pointer;
    }
    
    .ProductList .close span {
        width: 100%;
        height: 2px;
        margin: 15px 0;
        display: block;
        background: #666;
    }
    
    .ProductList .close span:before {
        transform: rotate(45deg);
    }
    
    .ProductList .close span:after {
        transform: rotate(-45deg);
        margin-top: -1px;
        margin-right: -1px;
    }
    
    .ProductList .close span:before,
    .ProductList .close span:after {
        content: "";
        width: 13px;
        height: 2px;
        background: #666;
        display: block;
        position: absolute;
        right: 0;
        transform-origin: 100% 100%;
    }
    
    .main {
        padding: 50px;
    }
    
    .main .title {
        border-bottom: 1px solid #e5e5e5;
        text-align: center;
        padding: 30px;
        padding-top: 0;
        font-size: 1.65rem;
        color: #333;
        font-weight: 100;
    }
    
    .main .list>li {
        position: relative;
        border-bottom: 1px solid #e5e5e5;
        padding: 20px;
        /* overflow: hidden; */
        transition: background 0.5s ease;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
    }
    
    .main .list>li:hover {
        background: #f9f9f9;
    }
    
    .main .list>li:hover .text .tit,
    .main .list>li:hover .text .sale,
    .main .list>li:hover .text .en {
        text-decoration: underline;
    }
    
    .main .list .left {
        display: flex;
        align-items: center;
    }
    /* .main .cart-list .img {
        padding-left: 10px;
    } */
    
    .main .img {
        width: 90px;
        /* font-size: 1rem; */
    }
    
    .main .img img {
        width: 100%;
        height: auto;
    }
    
    .main .text {
        width: 210px;
        padding: 0 20px
    }
    /* .main .text .en {
        color: #333;
        font-weight: bold;
        font-size: 0.95rem;
        margin: 0;
        line-height: 1.4;
    } */
    
    .main .text .tit {
        color: #333;
        font-size: 16px;
        line-height: 1.4;
    }
    
    .main .text .sale {
        color: #c1894c;
        font-size: 14px;
        /* margin-top: 5px; */
        line-height: 1.4;
    }
    
    .main .text .color_red {
        color: #eb6877;
        font-size: 0.9rem;
    }
    
    .main .text .match {
        background: #c1894c;
        display: inline-block;
        color: #fff;
        font-size: 0.75rem;
        padding: 3px 10px;
        margin-top: 5px;
    }
    
    .main .price {
        display: flex;
        align-items: center;
        height: 30px;
        color: #555;
        font-size: 1rem;
        text-align: center;
        padding: 0 10px;
        max-width: 150px;
    }
    
    .main .price i {
        opacity: 0.5;
        display: inline-block;
        padding: 0 10px
    }
    
    .main .price span {
        display: inline-block;
        font-family: "Oswald-Light";
        width: 70px
    }
    
    .main .price span.through {
        text-decoration: line-through;
    }
    
    .main .check {
        position: absolute;
        left: 2px;
        top: 50%;
        margin-top: -8px;
    }
    
    .main .total {
        text-align: right;
        padding: 20px;
        color: #333;
    }
    
    .main .total p {
        margin: 0;
        display: inline-block;
    }
    
    .main .total .num {
        font-weight: bold;
        font-size: 1.5rem;
        font-size: 24px;
        font-family: "Oswald-Light";
        padding-left: 15px;
        color: #333;
    }
    
    .main .public_qty {
        padding: 0 20px;
    }
    /* .main .quantity {
        padding: 0 10px;
        height: 30px;
        width: 110px;
        display: flex;
        vertical-align: middle;
        position: relative;
        background: #fff;
        background-clip: content-box;
    }
    
    .main .quantity a {
        color: #000;
        width: 30px;
        font-size: 0;
        cursor: pointer;
    }
    
    .main .quantity input {
        border: none;
        text-align: center;
        width: 50px;
        font-size: 0.85rem;
        overflow: hidden;
    }
    
    .main .quantity a span {
        width: 10px;
        height: 1px;
        background: #333;
        display: block;
        margin: 15px auto;
        position: relative;
    }
    
    .main .quantity a.qty-plus span:after {
        content: "";
        width: 9px;
        height: 1px;
        background: #333;
        display: block;
        position: absolute;
        top: -4px;
        left: 50%;
        transform: rotate(90deg);
        transform-origin: 0% 0%;
    } */
    
    .main .delete {
        cursor: pointer;
        /* left: 25px; */
        position: relative;
        height: 20px;
        width: 20px;
    }
    
    .main .delete span {
        width: 28px;
        height: 1px;
        display: block;
        background: #888;
        font-size: 0;
        transform: rotate(45deg);
        transform-origin: 0 0;
        /* margin-top: 5px; */
    }
    
    .main .delete span:after {
        content: "";
        width: 100%;
        height: 1px;
        display: block;
        background: inherit;
        transform: rotate(-90deg);
    }
    
    .main .noData {
        height: 120px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        border-bottom: 1px solid #e5e5e5;
    }
    
    .main .noData svg {
        width: 24px;
        height: 24px;
        margin-right: 10px;
    }
    
    .main .public_buttons a {
        cursor: pointer;
    }
</style>