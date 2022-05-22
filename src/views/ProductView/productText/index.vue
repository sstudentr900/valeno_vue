<template>
    <div class="productText" v-if="item">
        <h2 class="title">{{item.ti}}</h2>
        <ul>
            <li>
                <div class="t">商品描述</div>
                <div class="c">{{item.describe}}</div>
            </li>
            <li>
                <div class="public_flex">
                    <div class="t">規格</div>
                    <!-- <div class="c">{{item.specification}}</div> -->
                    <div class="c">
                        <div class="specs" v-if="item.specification">
                            <div v-for="(spec,index) in item.specification.list" :key='index' :class="{active:index==specIndex}" @click="specIndexChange(index)">{{spec.name}}</div>
                        </div>
                    </div>
                </div>
                <div class="public_flex">
                    <div class="t">數量</div>
                    <div class="c">
                        <div class="public_qty">
                            <!-- <div title="減少數量" class="qty-minus link" @click="skuNum>1?skuNum--:skuNum=1"><span>-</span></div>
                            <input type="text" data-min="1" v-model="skuNum" @change="skuChange">
                            <div title="增加數量" class="qty-plus link" @click="skuNum++"><span>+</span></div> -->
                            <div title="減少數量" class="qty-minus link" @click="skuReduce"><span>-</span></div>
                            <input type="text" data-min="1" v-model="skuNum" @change="skuChange">
                            <div title="增加數量" class="qty-plus link" @click="skuAdd"><span>+</span></div>
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
                    <div class="c price" v-if="item.specification">
                        <span class="p-after">{{price}}</span>
                        <p class="before" v-if="item.specification">
                            原價
                            <span class="p-before">{{special_price}}</span>
                        </p>
                    </div>
                </div>
                <div class="public_flex">
                    <div @click="addShopcar" class="addCartButton">加入購物車
                        <span class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z"/></svg>
                        </span>
                    </div>
                    <!-- <p class="outOfStock">缺貨中</p> -->
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    import {
        mapState,
        mapGetters,
        mapMutations
    } from 'vuex'
    export default {
        name: 'productText',
        props: ["item"],
        data() {
            return {
                skuNum: 1,
                specIndex: 0,
            }
        },
        computed: {
            // specList() {
            //     return this.item.specification.list || []
            // },
            price() {
                return this.item.specification.list[this.specIndex].price || ''
            },
            special_price() {
                return this.item.specification.list[this.specIndex].special_price || ''
            }
        },
        methods: {
            specIndexChange(index) {
                this.specIndex = index;
            },
            skuAdd(index) {
                this.skuNum += 1;
            },
            skuReduce(index) {
                if (this.skuNum > 1) {
                    this.skuNum -= 1;
                } else {
                    this.skuNum = 1;
                }
            },
            skuChange(event) {
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
            ...mapMutations('shopCar', {
                listAdd: 'listAddMu'
            }),
            addShopcar() {
                // try {
                //vuex+sessionStorage
                let items = {...this.item,
                    skuNum: this.skuNum,
                };
                items['specification']['specIndex'] = this.specIndex;
                // this.$store.dispatch('shopCar/listAdd', items);
                this.listAdd(items);
                this.$emit('promptIfValue', true);
                // } catch (error) {
                //     console.log(error.message)
                // }
            },
            addShopcarXX() {
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


                //本地儲存sessionStorage
                let items = [{...this.item,
                    skuNum: this.skuNum
                }];
                if (sessionStorage.getItem('skuList')) {
                    let skuListArry = JSON.parse(sessionStorage.getItem('skuList')).map((el) => {
                        if (el['id'] == items[0]['id']) {
                            el['skuNum'] += items[0]['skuNum'];
                            items = false
                        }
                        return el
                    })
                    if (items) {
                        items = skuListArry.concat(items);
                    } else {
                        items = skuListArry;
                    }
                }
                sessionStorage.setItem('skuList', JSON.stringify(items));
                this.$emit('promptIfValue', true);
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
    
    .productText li .specs {
        display: flex;
    }
    
    .productText li .specs>div {
        height: 28px;
        padding: 6px 12px 3px;
        border: 1px solid #ddd;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    
    .productText li .specs>div.active {
        border: 1px solid #222;
        color: #222;
    }
    
    .productText li .specs>div.active:after {
        content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' enable-background='new 0 0 12 12' viewBox='0 0 12 12' x='0' y='0' fill='white'%3E%3Cpath d='m5.2 10.9c-.2 0-.5-.1-.7-.2l-4.2-3.7c-.4-.4-.5-1-.1-1.4s1-.5 1.4-.1l3.4 3 5.1-7c .3-.4 1-.5 1.4-.2s.5 1 .2 1.4l-5.7 7.9c-.2.2-.4.4-.7.4 0-.1 0-.1-.1-.1z'%3E%3C/path%3E%3C/svg%3E");
        position: absolute;
        bottom: 8px;
        right: 0;
        width: 8px;
        height: 8px;
    }
    
    .productText li .specs>div.active:before {
        content: '';
        border: 14px solid transparent;
        border-bottom: 14px solid #222;
        position: absolute;
        bottom: 0;
        right: -14px;
    }
    
    .productText li .specs>div+div {
        margin-left: 10px
    }
    
    .productText li .public_flex {
        flex: 0 50%;
        align-items: center;
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
    
    .productText .addCartButton {
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
        user-select: none;
    }
    
    .productText .addCartButton .icon {
        background: #fff;
        color: #222;
        float: right;
        padding: 16px;
        line-height: 0;
    }
    
    .productText .addCartButton .icon svg {
        width: 16px;
        height: auto;
    }
    /* .productText .addCartButton:hover {
        background: #c1894c;
        box-shadow: 0 0 0 2px #c1894c inset;
        border-color: #c1894c;
        transform: scale(1.05, 1.05);
    }
    
    .productText .addCartButton:hover .icon svg {
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
    } */
</style>