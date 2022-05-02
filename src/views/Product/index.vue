<template>
    <div class="product">
        <div class="left">
            <navs :items="productData.nav"></navs>
        </div>
        <div class="right">
            <slide :items="productData.banner"></slide>
            <products :title="productData.productTitle" :lists="productData.productList"></products>
        </div>
    </div>
</template>
<script>
    import navs from './nav'
    import slide from './slide'
    import products from './products'
    import {
        mapState
    } from 'vuex'
    export default {
        name: 'product',
        components: {
            slide,
            navs,
            products,
        },
        computed: {
            ...mapState('product', ['productData'])
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
</style>