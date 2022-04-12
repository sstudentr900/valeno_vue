<template>
    <div class="fn">
        <!--<FnSideProduct></FnSideProduct>-->
        <FnSide></FnSide>
        <!--<FnSeach></FnSeach>-->
        <div class="wrapper">
            <div class="wrapper_top">
                <FnNav></FnNav>
                <router-view/>
            </div>
            <FnFooter></FnFooter>
        </div>
    </div>
    <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    </nav>
    <router-view/> -->
</template>
<script>
import FnFooter  from './components/FnFooter'
import FnNav  from './components/FnNav'
import FnSeach  from './components/FnSearch'
import FnSide  from './components/FnSide'
import FnSideProduct  from './components/FnSideProduct'

export default {
    // name:'',
    components:{
        FnNav,
        FnFooter,
        FnSeach,
        FnSide,
        FnSideProduct,
    },
}
</script>

<style>
    .fn{
        font-family: Helvetica, Arila, "LiHei Pro", "Microsoft JhengHei", "新細明體", serif;
        height: 100vh;
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
    .fn .wrapper {
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
        .fn .wrapper {
            width: 100%;
        }
    }
    .fn .wrapper_top {
        background-color: #fff;
        padding: 60px;
    }
    @media (max-width: 1200px) {
        .fn .wrapper_top {
            padding: 30px;
        }
    }
    @media (max-width: 768px) {
        .fn .wrapper_top {
            padding: 20px 15px 0;
            background-color: rgba(255, 255, 255, 0.95);
        }
    }
    

    /* #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    }

    nav {
    padding: 30px;
    }

    nav a {
    font-weight: bold;
    color: #2c3e50;
    }

    nav a.router-link-exact-active {
    color: #42b983;
    } */
</style>
