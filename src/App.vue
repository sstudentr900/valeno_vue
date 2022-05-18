<template>
    <div class="fn">
        <FnSide></FnSide>
        <div class="wrapper">
            <div class="wrapper_top">
                <FnNav></FnNav>
                <router-view/>
            </div>
            <FnFooter></FnFooter>
        </div>
    </div>
</template>
<script>
    import FnNav from './components/FnNav'
    import FnFooter from './components/FnFooter'
    import FnSide from './components/FnSide'

    export default {
        name: 'fn',
        components: {
            FnNav,
            FnFooter,
            FnSide,
            // FnSideProduct,
        },
        mounted() {
            console.log('app');
            this.$store.dispatch('home/home')
            this.$store.dispatch('product/productAc')
                // this.$store.dispatch('product/productListAc', {
                //     pageNo: 1, //當前頁
                //     pageSize: 3, //顯示數量
                // })
                // this.$store.dispatch('news/newsAc')
                // this.$store.dispatch('beauty/beautyAc')
            this.$store.dispatch('store/storeAc')
        },
    }
</script>

<style>
    .fn {
        font-family: Helvetica, Arila, "LiHei Pro", "Microsoft JhengHei", "新細明體", serif;
        min-height: 100vh;
        padding: 60px 0;
        background: url(./assets/bg01.jpg) repeat;
    }
    
    @media (max-width: 1200px) {
        .fn {
            padding: 20px;
        }
    }
    
    @media (max-width: 768px) {
        .fn {
            padding: 0;
        }
    }
    
    .fn>.wrapper {
        box-shadow: 2px 10px 20px #4d4d4d;
        padding: 0;
        width: 100%;
        max-width: 1200px;
        margin-left: auto;
        margin-right: auto;
        background-color: #fff;
    }
    
    .fn>.wrapper>.wrapper_top {
        background-color: #fff;
        padding: 50px 60px;
    }
    
    @media (max-width: 1200px) {
        .fn>.wrapper>.wrapper_top {
            padding: 30px;
        }
    }
    
    @media (max-width: 768px) {
        .fn>.wrapper>.wrapper_top {
            padding: 20px 15px 0;
            background-color: rgba(255, 255, 255, 0.95);
        }
    }
</style>