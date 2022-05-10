<template>
    <div class="product">
        <div class="left">
            <div class="nav">
                <h4 class="public_title">#PRODUCT</h4>
                <ul v-if="productData">
                    <li v-for="item in productData.nav" :key="item.id" :class="{active:item.id==category1Id}">
                        <div @click="nav1(item.child,item.id,item.name)">{{item.name}}<span v-if="item.child" class="icon"></span></div>
                        <ul v-if="item.child">
                            <li v-for="(item2) in item.child" :key="item2.id" :class="{active:item2.id==category2Id}">
                                <a @click="nav2(item2.id,item2.name)">{{item2.name}}</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <div class="right">
            <slide v-if="productData" :items="productData.slide"></slide>
            <div v-if="productListData">
                <h4 class="public_title">
                    <span v-if="productListData.productList && !productListData.productList.length">查找找不到...</span>
                    {{productListData.title}}
                </h4>
                <div class="public_items public_scrollTop" >
                    <FnProduct v-for="productList in productListData.productList" :key="productList.id" :item="productList"></FnProduct>
                </div>
                <!-- <FnPagers :pageNo="productListData.pageNo" :pageSize="productListData.pageSize" :total='productListData.total' :continues='5' @pageNo="getPageNo"></FnPagers> -->
                <FnPagers 
                v-if="productListData.total > customParams.pageSize"
                :pageNo="customParams.pageNo" 
                :pageSize="customParams.pageSize" 
                :continues='customParams.continues' 
                :total='productListData.total'
                @pageNo="getPageNo">
                </FnPagers>
            </div>
        </div>
    </div>
</template>
<script>
    import FnProduct from '@/components/FnProduct'
    // import FnPagers from '@/components/FnPagers'
    import slide from '@/components/FnSlide'
    import {
        mapState
    } from 'vuex'
    export default {
        name: 'product',
        components: {
            slide,
            FnProduct,
            // FnPagers
        },
        computed: {
            // ...mapState('product', ['productData'])
            ...mapState('product', ['productData', 'productListData'])
        },
        data() {
            return {
                // keyword: '',
                category1Id: '', //1級分類
                category2Id: '', //2級分類
                customParams: {
                    continues: 5, //頁碼顯示
                    keyword: '', //關鍵字
                    pageNo: 1, //當前頁
                    pageSize: 8, //顯示數量
                    categoryId: '', //類id
                    categoryName: '', //類別名稱
                    // order: '', //順序
                    // props: [], //參數
                    // trademark: '', //品牌
                }
            }
        },
        beforeMount() {
            this.getData()
        },
        mounted(){
            // this.category1Id = undefined
            // this.category2Id = undefined
        },
        methods: {
            // noDataFn(){
            //     console.log(this.productListData.productList.length)
            //     if(this.productListData.productList.length==0){
            //         return true
            //     }else{
            //         return false
            //     }
            // },
            nav1(child, id, name) {
                if (this.category1Id != id) {
                    this.category1Id = id
                }
                if (!child) {
                    this.nav2(id, name)
                }
            },
            nav2(id, name) {
                this.category2Id = id
                this.$router.push({
                    name: 'product',
                    // params: {
                    //     id: id
                    // },
                    query: {
                        categoryId: id, //類id
                        categoryName: name, //類別名稱
                        pageNo: 1, //當前頁
                    }
                })
            },
            getData(){
                // console.log(this.customParams, this.$route.query, this.$route.params)
                Object.assign(this.customParams, this.$route.query, this.$route.params)
                this.$store.dispatch('product/productListAc', this.customParams)
                this.customParams.keyword = undefined
                this.customParams.categoryId = undefined
                this.customParams.categoryName = undefined
                // this.category1Id = undefined
                // this.category2Id = undefined
                // this.customParams.pageNo = 1
            },
            getPageNo(pageNo){
                // this.category1Id = ''
                // this.category2Id = ''
                // console.log('category1Id',this.category1Id, this.category2Id)
                this.$router.push({
                    name: 'product',
                    query: {
                        categoryId: this.$route.query.categoryId, //類id
                        categoryName: this.$route.query.categoryName, //類id
                        pageNo: pageNo, //類id
                    }
                })
            }
        },
        watch: {
            //監聽路由改變執行product
            $route(newValue, oldValue) {
                // console.log('watch',newValue, oldValue)
                //路由是搜尋或/product則關閉選單
                if(newValue.params.keyword || newValue.fullPath=='/product'){
                    this.category1Id = undefined
                    this.category2Id = undefined
                }
                this.getData()
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