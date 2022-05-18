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
            // this.$store.dispatch('productView/productViewAc', this.$route.params)
            this.getData()
            this.addshopInfo()
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
            ...mapGetters('productView', ['itemData', 'linkListData', 'recommendListData'])
        },
        methods: {
            getData() {
                this.$store.dispatch('productView/productViewAc', this.$route.params)
            },
            addshopInfo() {
                let items = [this.$route.params.id]
                if (sessionStorage.getItem('skuInfo')) {
                    items = JSON.parse(sessionStorage.getItem('skuInfo')).concat(items).filter((el, index, arr) => {
                        return arr.indexOf(el) === index && index >= 6;
                    })
                }
                sessionStorage.setItem('skuInfo', JSON.stringify(items))
                console.log(JSON.parse(sessionStorage.getItem('skuInfo')))
            }
        },
        watch: {
            //監聽路由改變執行product
            $route(newValue, oldValue) {
                console.log('route')
                this.getData()
                this.addshopInfo()
            }
        }

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