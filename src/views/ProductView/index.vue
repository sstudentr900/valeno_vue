<template>
    <div class="product_view">
        <div class="product">
            <div class="public_flex">
                <productImg :item="productViewData.item"></productImg>
                <productText :item="productViewData.item"></productText>
            </div>
        </div>
        <similars :items="productViewData.linkList"></similars>
        <tabs :item="productViewData.item"></tabs>
        <recommend :items="productViewData.recommendList"></recommend>
    </div>
</template>
<script>
    import productImg from './productImg'
    import productText from './productText'
    import similars from './similars'
    import tabs from './tabs'
    import recommend from './recommend'
    import {
        mapState
    } from 'vuex'
    export default {
        name: 'productView',
        mounted() {
            this.$store.dispatch('productView/productViewAc', this.$route.params)
        },
        components: {
            productImg,
            productText,
            similars,
            tabs,
            recommend,
        },
        computed: {
            ...mapState('productView', ['productViewData'])
        },
    }
</script>

<style scoped>
.product {
    margin-top: 30px;
}
</style>