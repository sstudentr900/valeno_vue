<template>
    <div class="fn">
        <FnSideProduct></FnSideProduct>
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
import FnNav  from './components/FnNav'
import FnFooter  from './components/FnFooter'
import FnSide  from './components/FnSide'
import FnSideProduct  from './components/FnSideProduct'

export default {
    // name:'',
    components:{
        FnNav,
        FnFooter,
        FnSide,
        FnSideProduct,
    },
    // mounted(){
    //     //執行store
    //     // this.$store.dispatch('home/slide')
    // },
}
</script>

<style>
    .fn{
        font-family: Helvetica, Arila, "LiHei Pro", "Microsoft JhengHei", "新細明體", serif;
        min-height: 100vh;
        padding: 60px 0;
        background: url(@/assets/bg01.jpg) repeat;
    }
    @media (max-width: 1200px) {
        .fn {
            padding: 30px;
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
        /*width: 1140px;*/
        width: 85%;
        max-width: 1600px;
        max-width: 100%;
        margin-left: auto;
        margin-right: auto;
        background-color: #fff;
    }
    @media (max-width: 1200px) {
        .fn>.wrapper {
            width: 100%;
        }
    }
    .fn>.wrapper>.wrapper_top {
        background-color: #fff;
        padding: 60px;
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
