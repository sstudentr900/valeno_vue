<template>
    <div class="product_view">
        <product :item="productViewData.item"></product>
        <similars :items="productViewData.linkList"></similars>
        <tabs :item="productViewData.item"></tabs>
        <recommend :items="productViewData.recommendList"></recommend>
    </div>
</template>
<script>
    import product from './product'
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
            product,
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

</style>