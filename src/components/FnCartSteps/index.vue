<template>
    <div class="steps">
        <div :class="{active:selected==1}"><span>STEP 1</span>購物清單</div>
        <div :class="{active:selected==2}"><span>STEP 2</span>填寫購買資料</div>
        <div :class="{active:selected==3}"><span>STEP 3</span>訂單成立</div>
    </div>
</template>
<script>
    export default {
        name: 'steps',
        props: ['selected'],
    }
</script>

<style scoped>
    .steps {
        text-align: center;
        font-size: 0;
        padding: 30px 0 0;
    }
    
    .steps>div.active {
        background: #222;
        color: #fff;
        position: relative;
    }
    
    .steps>div {
        width: 300px;
        font-size: 1rem;
        display: inline-block;
        vertical-align: top;
        color: #999;
        margin: 0;
        padding: 10px;
        border-radius: 3px;
        background: #f4f4f4;
    }
    
    .steps>div.active:before {
        content: "";
        position: absolute;
        top: 50%;
        right: -7px;
        width: 14px;
        height: 14px;
        background: #222;
        border-radius: 2px;
        margin-top: -7px;
        transform: rotate(45deg);
    }
    
    .steps>div span {
        font-family: "Oswald-Light";
        font-weight: bold;
        font-size: 1.3rem;
        margin-right: 5px;
    }
</style>