<template>
    <div class="slide puplic_scrollTop">
        <transition-group name="flip-list" tag="ul">
            <li v-for="item in slideData" :key="item.ref">
                <router-link :to="`/${item.href}/${item.id}`">
                <!-- <a :href="item.href"> -->
                    <div class="img">
                        <img :src="require(`@/assets/${item.src}`)">
                    </div>
                    <div class="info">
                        <div class="date">
                            <div class="day">{{item.day}}</div>
                            <div class="right">
                                <div class="month">{{item.month}}</div>
                                <div class="year">{{item.year}}</div>
                            </div>
                        </div>
                        <!-- <div class="text">{{ textLen(item.text) }}</div> -->
                        <textLen :str="item.text"></textLen>
                    </div>
                <!-- </a> -->
                </router-link>
            </li>
        </transition-group>
        <div class="control prev" @click="controlFn(1)"></div>
        <div class="control next" @click="controlFn(-1)"></div>
    </div>
</template>
<script>
    import textLen from '@/components/textLen'
    export default {
        name: 'news',
        props: ["items"],
        components:{
            textLen
        },
        data() {
            return {
                slideData: [],
                clickWait: false,
                timer: {},
            }
        },
        mounted() {
            let length = this.items.length
            for (let i = 0; i < length * 3; i++) {
                let number = i % length
                let obj = JSON.parse(JSON.stringify(this.items[number]));
                obj.ref = i;
                this.slideData.push(obj)
            }
        },
        computed:{
        },
        methods: {
            textLen(str,len=40){
                // let text2 = "ASVCF"
                // let text3 = "控制"
                // let text4 = "ASVCF控制"
                // console.log( "ASVCF",'length',text2.length,'replace',text2.replace(/[^\x00-\xff]/g, '01').length)
                // console.log("控制",'length',text3.length,'replace',text3.replace(/[^\x00-\xff]/g, '01').length)
                // console.log("ASVCF控制",'length',text4.length,'replace',text4.replace(/[^\x00-\xff]/g, '01').length)
                if(str.replace(/[^\x00-\xff]/g, '01').length <= len){
                    return text
                }
                for (let i = Math.floor(len / 2); i < str.length; i++) {
                    if (str.substr(0, i).replace(/[^\x00-\xff]/g, '01').length >= len) {
                        // Math.floor(i / 2) * 这里是控制特殊情况的显示
                        // 如 '一二aaa一二三四'，显示的结果就是 '一二aaa一...'
                        return str.substr(0, Math.floor(i / 2) * 2) + '...'
                    }
                }
            },
            controlFn(slidesToShow = 1) {
                if (this.clickWait) {
                    return;
                }
                this.stopTime();
                this.clickWait = true;
                if (slidesToShow > 0) {
                    const shiftItem = this.slideData.shift();
                    this.slideData.push(shiftItem);
                    this.setTime();
                    return;
                }
                if (slidesToShow < 0) {
                    const shiftItem = this.slideData.pop();
                    this.slideData.unshift(shiftItem);
                    this.setTime();
                }
            },
            setTime() {
                this.timer = setTimeout(() => {
                    this.clickWait = false;
                }, 500);
            },
            stopTime() {
                clearInterval(this.timer);
            },
        }
    }
</script>

<style>
    .slide {
        position: relative;
        overflow: hidden;
    }
    
    .slide ul {
        display: flex;
        align-items: center;
        list-style-type: none;
        font-size: 0;
    }
    
    .slide li {
        /* float: left;
        width: 33%; */
        padding: 20px 50px;
        /* 設定每一個要輪播的項目寬度 */
        flex: calc(100% / 3) 0 0;
        /* 
        為了達成上述圖片示意，因此除了往前推 2 個項目的距離外，
        還要再多推 0.5 個輪播項目的距離，呈現露出半個輪播項目的樣式
        */
        /* left: calc(-100% / 3); */
        left: -66.66%;
        position: relative;
    }
    
    .slide li:first-child,
    .slide li:last-child {
        z-index: -1;
        opacity: 0;
    }
    
    .slide li .img {
        position: relative;
        overflow: hidden;
        transition: ease 0.5s;
    }
    
    .slide li:nth-child(4) .img {
        transform: translateY(5px) scale(1.2);
    }
    
    .slide li .img:before {
        content: "";
        pointer-events: none;
        position: absolute;
        left: 8px;
        top: 8px;
        right: 8px;
        bottom: 8px;
        border: 4px solid #fff;
        opacity: 0.5;
        z-index: 2;
    }
    
    .slide li .img img {
        transition: ease 0.3s;
    }
    
    .slide li:hover .img img {
        transform: scale(1.1, 1.1);
    }
    
    .slide li .info {
        padding: 20px 0;
        font-size: 0;
        display: flex;
        align-items: center;
        transition: ease 0.5s;
    }
    
    .slide li:nth-child(4) .info {
        transform: translateY(20px);
    }
    
    .slide li .info .date {
        font-family: "PTSerif-Regular";
        color: #000;
        display: flex;
        align-items: center;
        width: 70px;
        margin-right: 10px;
    }
    
    .slide li .info .date .day {
        font-size: 36px;
    }
    
    .slide li .info .date .month {
        margin: 0;
        font-size: 14px;
    }
    
    .slide li .info .date .year {
        margin: 0;
        font-size: 12px;
    }
    
    .slide li .info .date+.text {
        color: #5f5f5f;
        margin: 0;
        font-size: 16px;
    }
    
    .slide .control {
        position: absolute;
        top: 50%;
        z-index: 10;
        margin-top: -20px;
        border: 0;
        border-left: 4px solid #999;
        border-bottom: 4px solid #999;
        -moz-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        width: 25px;
        height: 25px;
        opacity: 0.6;
        cursor: pointer;
    }
    
    .slide .control:hover {
        opacity: 1;
    }
    
    .slide .control.prev {
        left: 50%;
        margin-left: -18%;
    }
    
    .slide .control.next {
        right: 50%;
        margin-right: -18%;
        transform: rotate(-135deg);
    }
    /* 動畫樣式設定 */
    
    .flip-list-move {
        transition: transform 0.8s;
    }
</style>