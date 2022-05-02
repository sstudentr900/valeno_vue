<template>
    <div class="products">
        <!--<h2 class="public_title">#NEW ARRIVAL</h2>-->
        <h2 class="public_title">{{title}}</h2>
        <div class="content public_scrollTop">
            <div class="left">
                <img class="lazy" v-for="(item,index) in left" :key="item.id" :src="require(`@/assets/${item.src}`)" alt="">
            </div>
            <div class="right">
                <a v-for="(item,index) in rightList" :key="item.id" :href="item.href" class="public_item">
                    <div class="img">
                        <img class="lazy" :src="require(`@/assets/${item.src}`)" alt="">
                        <!-- <img class="lazy" :src="require(`@/assets/n01.jpg`)" alt=""> -->
                        <!-- <img class="lazy" :src="imgUrl" alt=""> -->
                        <!-- <img class="lazy" :src="getImg" alt=""> -->
                    </div>
                    <div class="info">
                        <div class="en">{{item.text_en}}</div>
                        <div class="tit">{{item.text_ti}}</div>
                        <div class="sale">{{item.text_sale}}</div>
                        <div class="price">
                            <span class="through">{{item.price}}</span>
                            <i>/</i>
                            <span>{{item.special_price}}</span>
                        </div>
                    </div>
                </a>
                <!--<a href="product_view.html" class="public_item">
                    <div class="img">
                        <img class="lazy" src="@/assets/p02.jpg" alt="">
                    </div>
                    <div class="info">
                        <div class="en">Mistine - Groove complete</div>
                        <div class="tit">12色完美眼彩盤</div>
                        <div class="sale">泰國必買</div>
                        <div class="price"><span class="through">NT$429</span><i>/</i><span>NT$429</span></div>
                    </div>
                </a>
                <a href="product_view.html" class="public_item">
                    <div class="img">
                        <img class="lazy" src="@/assets/p03.jpg" alt="" >
                    </div>
                    <div class="info">
                        <div class="en">Mistine - Groove complete</div>
                        <div class="tit">12色完美眼彩盤</div>
                        <div class="sale">泰國必買</div>
                        <div class="price"><span class="through">NT$429</span><i>/</i><span>NT$429</span></div>
                    </div>
                </a>
                <a href="product_view.html" class="public_item">
                    <div class="img">
                        <img class="lazy" src="@/assets/p05.jpg" alt="">
                    </div>
                    <div class="info">
                        <div class="en">Mistine - Groove complete</div>
                        <div class="tit">12色完美眼彩盤</div>
                        <div class="sale">泰國必買</div>
                        <div class="price"><span class="through">NT$429</span><i>/</i><span>NT$429</span></div>
                    </div>
                </a>-->
            </div>
            <div class="bottom">
                <a v-for="(item,index) in bottomList" :key="item.id" :href="item.href" class="public_item">
                    <div class="img">
                        <img class="lazy" :src="require(`@/assets/${item.src}`)" alt="">
                        <!-- <img class="lazy" :src="require(`@/assets/n01.jpg`)" alt=""> -->
                        <!-- <img class="lazy" :src="imgUrl" alt=""> -->
                        <!-- <img class="lazy" :src="getImg" alt=""> -->
                    </div>
                    <div class="info">
                        <div class="en">{{item.text_en}}</div>
                        <div class="tit">{{item.text_ti}}</div>
                        <div class="sale">{{item.text_sale}}</div>
                        <div class="price">
                            <span class="through">{{item.price}}</span>
                            <i>/</i>
                            <span>{{item.special_price}}</span>
                        </div>
                    </div>
                </a>
                <!-- <a href="product_view.html" class="public_item">
                    <div class="img">
                        <img class="lazy" src="@/assets/p04.jpg" alt="">
                    </div>
                    <div class="info">
                        <div class="en">Mistine - Groove complete</div>
                        <div class="tit">12色完美眼彩盤</div>
                        <div class="sale">泰國必買</div>
                        <div class="price"><span class="through">NT$429</span><i>/</i><span>NT$429</span></div>
                    </div>
                </a>
                <a href="product_view.html" class="public_item">
                    <div class="img">
                        <img class="lazy" src="@/assets/p01.jpg" alt="">
                    </div>
                    <div class="info">
                        <div class="en">Mistine - Groove complete</div>
                        <div class="tit">12色完美眼彩盤</div>
                        <div class="sale">泰國必買</div>
                        <div class="price"><span class="through">NT$429</span><i>/</i><span>NT$429</span></div>
                    </div>
                </a>
                <a href="product_view.html" class="public_item">
                    <div class="img">
                        <img class="lazy" src="@/assets/p02.jpg" alt="">
                    </div>
                    <div class="info">
                        <div class="en">Mistine - Groove complete</div>
                        <div class="tit">12色完美眼彩盤</div>
                        <div class="sale">泰國必買</div>
                        <div class="price"><span class="through">NT$429</span><i>/</i><span>NT$429</span></div>
                    </div>
                </a>
                <a href="product_view.html" class="public_item">
                    <div class="img">
                        <img class="lazy" src="@/assets/p05.jpg" alt="">
                    </div>
                    <div class="info">
                        <div class="en">Mistine - Groove complete</div>
                        <div class="tit">12色完美眼彩盤</div>
                        <div class="sale">泰國必買</div>
                        <div class="price"><span class="through">NT$429</span><i>/</i><span>NT$429</span></div>
                    </div>
                </a> -->
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'products',
        props: {
            "title": {
                type: String,
                default: ''
            },
            "left": {
                type: Array,
                default: []
            },
            "right": {
                type: Array,
                default: []
            }
        },
        data() {
            return {
                imgUrl: require("@/assets/n01.jpg"),
                rights: this.right
            }
        },
        computed: {
            // getImg: function() {
            //     // return require('@/assets/n01.jpg')
            //     return require('@/assets/' + 'n01.jpg')
            // },
            rightList: function() {
                return this.right.filter(function(item, index, array) {
                    return index < 4
                });
            },
            bottomList: function() {
                return this.right.filter(function(item, index, array) {
                    return index > 3
                });
            }

        },
        // methods: {
        //     getImg1: function(src) {
        //         console.log(src)
        //             // return require('@/assets/n01.jpg')
        //         return require('@/assets/' + 'n01.jpg')
        //             // return require(src)
        //     }
        // },
    }
</script>

<style scoped>
    .products .right,
    .products .bottom,
    .products .content {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    
    .products .right .public_item,
    .products .right,
    .products .left {
        width: 49%;
    }
    
    .products .bottom {
        width: 100%;
    }
</style>