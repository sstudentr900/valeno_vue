<template>
    <div class="product_view">
        <div class="product">
            <div class="public_flex">
                <div class="slideDiv">
                    <imgZoom :item="itemData.productImgs"></imgZoom>
                    <imgSlide :item="itemData.productImgs"></imgSlide>
                </div>
                <productText :item="itemData"></productText>
            </div>
        </div>
        <similars :items="linkListData"></similars>
        <tabs :item="itemData"></tabs>
        <recommend :items="recommendListData"></recommend>
    </div>
</template>
<script>
    import imgZoom from './imgZoom'
    import imgSlide from './imgSlide'
    // import productImg from './productImg'
    import productText from './productText'
    import similars from './similars'
    import tabs from './tabs'
    import recommend from './recommend'
    import {
        mapGetters,
        mapState
    } from 'vuex'
    export default {
        name: 'productView',
        mounted() {
            this.$store.dispatch('productView/productViewAc', this.$route.params)
        },
        components: {
            imgSlide,
            imgZoom,
            // productImg,
            productText,
            similars,
            tabs,
            recommend,
        },
        computed: {
            // ...mapState('productView', ['productViewData']),
            ...mapGetters('productView', ['itemData','linkListData','recommendListData'])
        },
    }
</script>

<style scoped>
.product {
    margin-top: 30px;
}
.slideDiv {
    flex: 0 0 300px;
    width: 300px;
}
</style>