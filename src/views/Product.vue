<template>
    <div class="product">
        <div class="left">
            <div class="nav">
                <h4 class="public_title">#PRODUCT</h4>
                <ul>
                    <li v-for="item in productData.nav" :key="item.id" :class="{active:item.id==customParams.category1Id}">
                        <div @click="nav1(item.child,item.id,item.name)">{{item.name}}<span v-if="item.child" class="icon"></span></div>
                        <ul v-if="item.child">
                            <li v-for="(item2) in item.child" :key="item2.id" :class="{active:item2.id==customParams.category2Id}">
                                <a @click="nav2(item2.id,item2.name)">{{item2.name}}</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <div class="right">
            <slide :items="productData.slide"></slide>
            <div>
                <h4 class="public_title">{{productListData.title}}</h4>
                <div class="public_items public_scrollTop" >
                    <FnProduct v-for="productList in productListData.productList" :key="productList.id" :item="productList"></FnProduct>
                    <!-- <a v-for="list in productData.productList" :key="list.id" :href="list.href" class="public_item">
                        <div class="img">
                            <img class="lazy" :src="require(`@/assets/${list.src}`)" alt="">
                        </div>
                        <div class="info">
                            <div class="en">{{list.text_en}}</div>
                            <div class="tit">{{list.text_ti}}</div>
                            <div class="sale">{{list.text_sale}}</div>
                            <div class="price">
                                <span class="through">{{list.price}}</span>
                                <i>/</i>
                                <span>{{list.special_price}}</span>
                            </div>
                        </div>
                    </a> -->
                </div>
                <FnPagers></FnPagers>
            </div>
        </div>
    </div>
</template>
<script>
    import FnProduct from '@/components/FnProduct'
    import FnPagers from '@/components/FnPagers'
    import slide from '@/components/FnSlide'
    import {
        mapState
    } from 'vuex'
    export default {
        name: 'product',
        components: {
            slide,
            FnProduct,
            FnPagers
        },
        computed: {
            ...mapState('product', ['productData', 'productListData'])
        },
        data() {
            return {
                keyword: '',
                customParams: {
                    categoryId: '', //類id
                    category1Id: '', //1級分類
                    category2Id: '', //2級分類
                    categoryName: '', //類別名稱
                    keyword: '', //關鍵字
                    order: '', //順序
                    pageNo: 1, //當前頁
                    pageSize: 8, //顯示數量
                    // props: [], //參數
                    // trademark: '', //品牌
                }
            }
        },
        beforeMount() {
            // return {
            //     customParams.category1Id: this.$route.query ? this.$route.query.customParams.category1Id : 0,
            //     customParams.category2Id: this.$route.query ? this.$route.query.customParams.category2Id : 0,
            // }
        },
        methods: {
            nav1(child, id, name) {
                if (this.customParams.category1Id != id) {
                    this.customParams.category1Id = id
                }
                if (!child) {
                    this.nav2(id, name)
                }
            },
            nav2(id, name) {
                // console.log(id, name, this.customParams.category1Id)
                this.customParams.category2Id = id
                    // console.log('110',id1,id2)
                this.$router.push({
                    name: 'product',
                    // params: {
                    //     id: id
                    // },
                    query: {
                        categoryId: id, //類id
                        categoryName: name, //類別名稱
                    }
                })
            },
        },
        watch: {
            //監聽路由改變執行product
            $route(newValue, oldValue) {
                Object.assign(this.customParams, this.$route.query, this.$route.params)
                    // console.log(this.customParams)
                this.$store.dispatch('product/productListAc', this.customParams)
            }
        }

    }
</script>

<style scoped>
    .product {
        display: flex;
        justify-content: space-between;
        margin-top: 30px;
    }
    
    .product>.left {
        width: 19%;
    }
    
    .product>.right {
        width: 80%;
    }
    /*nav*/
    
    .nav>.public_title {
        text-align: left;
        margin-top: 0;
        margin-bottom: 20px;
    }
    
    .nav>ul {
        padding: 0 15px;
    }
    
    .nav>ul>li.active>div,
    .nav>ul>li.active>a {
        opacity: 1;
        font-weight: bold;
    }
    
    .nav>ul>li.active>div:after,
    .nav>ul>li.active>a:after {
        content: "";
        height: 5px;
        width: 5px;
        border-top: 1px solid #000;
        border-right: 1px solid #000;
        position: absolute;
        right: 100%;
        top: 50%;
        margin-right: 8px;
        margin-top: -3px;
        transform: rotate(45deg);
    }
    
    .nav>ul>li.active>div .icon:after {
        content: "";
        transform: rotate(0deg);
    }
    
    .nav>ul>li>div,
    .nav>ul>li>a {
        color: #000;
        opacity: 0.7;
        padding: 8px 0;
        display: block;
        position: relative;
        transition: opacity 0.3s;
        font-size: 16px;
        cursor: pointer;
    }
    
    .nav>ul>li:hover div,
    .nav>ul>li:hover a {
        opacity: 1;
    }
    
    .nav>ul>li>div .icon {
        position: absolute;
        right: 0;
        top: 50%;
        width: 10px;
        height: 1px;
        background: #000;
    }
    
    .nav>ul>li>div .icon:after {
        content: "";
        width: 100%;
        height: 100%;
        background: #000;
        display: block;
        transform: rotate(90deg);
        transition: .3s;
    }
    
    .nav>ul>li ul {
        font-size: 0.9rem;
        /* margin-bottom: 10px; */
        /* display: none; */
        max-height: 0;
        transition: max-height .2s ease;
        overflow: hidden;
    }
    
    .nav>ul>li.active ul {
        /* display: block; */
        max-height: 300px;
        transition: max-height .6s .1s ease;
    }
    
    .nav>ul>li ul li {
        border-bottom: 1px solid #eee;
    }
    
    .nav>ul>li ul li:last-child {
        margin-bottom: 10px;
    }
    
    .nav>ul>li ul li:hover {
        background: #f9f9f9;
    }
    
    .nav>ul>li ul li a {
        padding: 10px 0;
        color: #666;
        display: block;
        font-size: 0.9rem;
        cursor: pointer;
    }
    
    .nav>ul>li ul li.active a {
        color: #c1894c;
    }
    /*right*/
    /*     
    .right .content {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    } */
</style>