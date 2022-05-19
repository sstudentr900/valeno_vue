<template>
    <div class="product_view">
        <div class="public_prompt" :class="{active:promptIf}">
            <div class="box">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1 17l-5-5.299 1.399-1.43 3.574 3.736 6.572-7.007 1.455 1.403-8 8.597z"/></svg>
                <p>商品已加入購物車</p>
            </div>
        </div>
        <div class="product">
            <div class="public_flex">
                <div class="slideDiv">
                    <imgZoom :item="itemData.productImgs"></imgZoom>
                    <imgSlide :item="itemData.productImgs"></imgSlide>
                </div>
                <productText :item="itemData" @promptIfValue="promptUpdata"></productText>
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
        data(){
            return{
                promptIf: false,
                timeId: null
            }
        },
        mounted() {
            // this.$store.dispatch('productView/productViewAc', this.$route.params)
            this.getData()
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
            shopInfoAdd() {
                //1.
                // let items = [this.$route.params.id]
                // if (sessionStorage.getItem('skuInfo')) {
                //     items = JSON.parse(sessionStorage.getItem('skuInfo')).concat(items).filter((el, index, arr) => {
                //         return arr.indexOf(el) === index && index >= 6;
                //     })
                // }
                // sessionStorage.setItem('skuInfo', JSON.stringify(items))
                // console.log(JSON.parse(sessionStorage.getItem('skuInfo')))

                //2.
                // console.log(this.itemData)
                let items = [{...this.itemData}];
                if(sessionStorage.getItem('skuInfo')){
                    let updataCount = true;
                    let skuInfoArry = JSON.parse(sessionStorage.getItem('skuInfo')).map((element,index,array) => {
                        if (items[0]['id'] == element['id']) {
                            updataCount = false;
                        }
                        return element
                    });
                    if (updataCount) {
                        items = skuInfoArry.concat(items)
                        if(items.length>6){
                            items.shift()
                        }
                    } else {
                        items = skuInfoArry
                    }
                }
                sessionStorage.setItem('skuInfo', JSON.stringify(items))
            },
            promptUpdata(value){
                // console.log(value)
                this.promptIf = value;
                // clearTimeout(this.timeId);
                this.timeId = setTimeout(()=>{
                    this.promptIf = ! this.promptIf
                }, 600)
            }
        },
        watch: {
            //監聽路由改變執行product
            $route(newValue, oldValue) {
                console.log('route')
                this.getData()
            },
            itemData(newValue, oldValue){
                this.shopInfoAdd()
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

    .public_prompt{
        position: fixed;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
        top: 0;
        left: 0;
        z-index: 9;
        display: none;
        user-select: none;
    }
    .public_prompt.active{
        display: flex;
    }
    .public_prompt .box{
        width: 300px;
        padding: 40px;
        background: rgba(0,0,0,.8);
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .public_prompt .box svg{
        width: 60px;
        height: auto;
        fill: #97cf34;
    }
    .public_prompt .box p{
        font-size: 16px;
        margin-top: 25px;
        color: #fff;
    }
</style>