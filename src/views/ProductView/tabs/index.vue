<template>
    <div class="tabs" v-if="item">
        <ul>
            <li @click="menu(1)" v-bind:class="{active:itemIndex==1}">詳細介紹</li>
            <li @click="menu(2)" v-bind:class="{active:itemIndex==2}">使用說明</li>
            <li @click="menu(3)" v-bind:class="{active:itemIndex==3}">成分說明</li>
        </ul>
        <div class="items">
            <div class="item" v-bind:class="{active:itemIndex==1}">
                <!-- <img src="img/pv01.jpg" alt=""> -->
                <img :src="item.introduce" alt="">
            </div>
            <div class="item" v-bind:class="{active:itemIndex==2}">
                <div v-html="item.illustrate"></div>
                <!-- {{item.illustrate}} -->
            </div>
            <div class="item" v-bind:class="{active:itemIndex==3}">
                <div v-html="item.element"></div>
                <!-- {{item.element}} -->
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'tabs',
        data(){
            return{
                'itemIndex': 1
            }
        },
        props: ["item"],
        methods:{
            menu(value){
                console.log(value)
                this.itemIndex = value
            }
        }
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
    
    .tabs ul li {
        color: #000;
        padding: 10px 20px;
        min-width: 200px;
        text-align: center;
        border-bottom: 1px solid #000;
        line-height: 1.4;
        height: 45px;
        cursor: pointer;
    }
    
    .tabs ul li.active {
        color: #000;
        border: 1px solid #000;
        border-top: 2px solid #000;
        border-bottom: none;
        background: #fff;
    }
    
    .tabs ul li:hover {
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