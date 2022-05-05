<template>
    <div class="tabs" v-if="item">
        <ul>
            <li><a href="#menu1" class="active">詳細介紹</a></li>
            <li><a href="#menu2">使用說明</a></li>
            <li><a href="#menu3">成分說明</a></li>
        </ul>
        <div class="items">
            <div class="item">
                <!-- <img src="img/pv01.jpg" alt=""> -->
                <img :src="item.introduce" alt="">
            </div>
            <div class="item active">
                {{item.illustrate}}
            </div>
            <div class="item">
                {{item.element}}
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'tabs',
        props: ["item"]
    }
</script>

<style scoped>
    .tabs {
        margin-top: 50px;
    }
    
    .tabs ul {
        height: 45px;
        border-bottom: 1px solid #000;
        background: #f7f7f7;
        display: flex;
        /* font-size: 0; */
    }
    
    .tabs ul a {
        color: #000;
        padding: 10px 20px;
        min-width: 200px;
        text-align: center;
        border-bottom: 1px solid #000;
        line-height: 1.4;
        height: 45px;
    }
    
    .tabs ul a.active {
        color: #000;
        border: 1px solid #000;
        border-top: 2px solid #000;
        border-bottom: none;
        background: #fff;
    }
    
    .tabs ul a:hover {
        background: #000;
        color: #fff;
    }
    
    .tabs .items {
        padding: 50px 0;
        line-height: 30px;
    }
    
    .tabs .item {
        display: none;
    }
    
    .tabs .item.active {
        display: block;
    }
</style>