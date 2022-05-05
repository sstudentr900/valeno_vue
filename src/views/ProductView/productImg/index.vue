<template>
    <div class="left" v-if="item">
        <ul class="top">
            <li v-for="(img,index) in item.productImgs" :key="index" v-bind:class="{active:index==imgIndex}"><img :src="img" alt=""></li>
            <!-- <li><img src="img/p02.jpg" alt=""></li>
            <li><img src="img/p03.jpg" alt=""></li>
            <li><img src="img/p04.jpg" alt=""></li>
            <li><img src="img/p05.jpg" alt=""></li> -->
        </ul>
        <div class="bottom">
            <div class="prev control"></div>
            <div class="content">
                <ul class="flex">
                    <li v-for="(img,index) in item.productImgs" :key="index" v-bind:class="{active:index==imgIndex}"><img :src="img" alt=""></li>
                    <!-- <li class="active"><img src="img/p01.jpg" alt=""></li>
                    <li><img src="img/p02.jpg" alt=""></li>
                    <li><img src="img/p03.jpg" alt=""></li>
                    <li><img src="img/p04.jpg" alt=""></li>
                    <li><img src="img/p05.jpg" alt=""></li> -->
                </ul>
            </div>
            <div class="next control"></div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'productImg',
        props: ["item"],
        data(){
            return{
                imgIndex: 0
            }
        },
    }
</script>

<style scoped>
    .left {
        flex: 1 1 30%;
    }
    .top{
        border: 1px solid #ddd;
    }
    .top li{
        display: none;
    }
    .top li.active{
        display: block;
    }
    .bottom{
        display: flex;
        position: relative;
        margin: 20px 40px;
        border: 1px solid #ddd;
    }
    .bottom .content{
        width: 100%;
        overflow: hidden;
    }
    .bottom ul{
        font-size: 0;
    }
    .bottom ul li{
        width: 25%;
    }
    .bottom .control{
        cursor: pointer;
        position: absolute;
        top: 50%;
        left: 0;
        margin-top: -8px;
        margin-left: -30px;
        width: 16px;
        height: 16px;
        border: 0;
        border-left: 2px solid #222;
        border-bottom: 2px solid #222;
        transform: rotate(45deg);
        opacity: .4;
        transition: opacity .5s ease;
    }
    .bottom .control.next{
        left: auto;
        right: 0;
        margin-left: auto;
        margin-right: -30px;
        transform: rotate(-135deg);
    }
</style>