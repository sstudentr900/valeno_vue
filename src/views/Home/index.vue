<template>
    <div class="home">
        <slide v-if="home.slide" :items="home.slide"></slide>
        <div class="ad">
            <a v-for="(item,index) in home.ad" :href="item.href" :key="index">
                <img :src="require(`@/assets/${item.src}`)">
            </a>
        </div>
        <div class="products">
            <h2 class="public_title">#NEW ARRIVAL</h2>
            <div class="content public_scrollTop">
                <div class="left">
                    <img class="lazy" v-for="item in home.productLeft" :key="item.id" :src="require(`@/assets/${item.src}`)" alt="">
                </div>
                <div class="right">
                    <FnProduct v-for="productList in homeProductListRight" :key="productList.id" :item="productList"></FnProduct>
                </div>
                <div class="bottom">
                    <FnProduct v-for="productList in homeProductListBottom" :key="productList.id" :item="productList"></FnProduct>
                </div>
            </div>
        </div>
        <div class="news">
            <h2 class="public_title">#LATEST NEWS</h2>
            <news v-if="home.newsList" :items="home.newsList"></news>
        </div>
    </div>
</template>
<script>
    import slide from '@/components/FnSlide'
    import FnProduct from '@/components/FnProduct'
    import news from './news'
    import {
        mapState,
        mapGetters
    } from 'vuex'
    export default {
        name: 'home',
        components: {
            slide,
            FnProduct,
            news,
        },
        computed: {
            ...mapState('home', ['home']),
            ...mapGetters('home', ['homeProductListRight', 'homeProductListBottom'])
        },
        methods: {},
    }
</script>
<style scoped>
    /*ad*/
    
    .ad {
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
    }
    
    .ad a {
        width: 32.5%;
        margin-bottom: 10px
    }
    
    .ad a img {
        transition: ease 0.3s;
    }
    
    .ad a img:hover {
        box-shadow: 3px 3px 0 #000;
    }
    /*products*/
    
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