<template>
    <div class="slide" v-if="item">
        <div class="top">
            <img :src="item.productImgs[nowImageIndex]" alt="">
        </div>
        <div class="bottom">
            <div class="content">
                <ul v-bind:style="{transform:'translateX('+slideUl+'%)'}">                
                    <li v-for="(item,index) in item.productImgs" :key="index" :class="{active:nowImageIndex==index}" @click="clickImg(index)">
                        <img :src="item" alt="">
                    </li>
                </ul>
            </div>
            <div class="ctrl">
                <div class="prev" @click="slideCtrl(1)"></div>
                <div class="next" @click="slideCtrl(-1)"></div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'productImg',
        props: ["item"],
        data() {
            return {
                slideUl: 0,
                nowImageIndex: 0,
                imglength: 6
            }
        },
        mounted() {
            // this.imglength = this.item.length
        },
        methods: {
            slideCtrl(slidesToShow = 1) {
                console.log(this.item)
                    // console.log(slidesToShow, this.nowImageIndex, this.nowImageIndex >= 1, this.imglength - this.nowImageIndex > 4)
                if (slidesToShow > 0 && this.nowImageIndex >= 1) {
                    console.log(12)
                    this.nowImageIndex--;
                    this.slideUl = this.nowImageIndex * -1 * 25
                    console.log('pre', this.nowImageIndex, this.imglength)
                    return;
                }
                if (slidesToShow < 0 && this.imglength - this.nowImageIndex > 4) {
                    this.nowImageIndex++;
                    this.slideUl = this.nowImageIndex * -1 * 25
                    console.log('nex', this.nowImageIndex, this.imglength)
                }
            },
            clickImg(index) {
                this.nowImageIndex = index
                    // if (this.imglength - index >= 4) {
                    //     this.slideUl = this.nowImageIndex * -1 * 25
                    // }
            }
        },
    }
</script>

<style scoped>
    .slide {
        flex: 0 0 300px;
    }
    
    .slide .top {
        font-size: 0;
        /* border: 1px solid #eee; */
    }
    
    .slide .bottom {
        /* width: 100%; */
        position: relative;
    }
    
    .slide .ctrl>div {
        background: #ebeaea;
        height: 100%;
        position: absolute;
        top: 0;
        width: 20px;
        padding: 3px 0;
        background-clip: content-box;
    }
    
    .slide .ctrl>div.next {
        right: 0;
    }
    
    .slide .ctrl>div:after {
        content: '';
        cursor: pointer;
        position: absolute;
        top: 50%;
        left: 7px;
        width: 8px;
        height: 8px;
        border: 0;
        border-left: 2px solid #fff;
        border-bottom: 2px solid #fff;
        transform: translateY(-50%) rotate(45deg);
    }
    
    .slide .ctrl>div.next:after {
        left: auto;
        right: 7px;
        transform: translateY(-50%) rotate(-135deg);
    }
    
    .slide .content {
        margin: 5px 20px 0;
        overflow: hidden;
    }
    
    .slide ul {
        display: flex;
        list-style-type: none;
        padding: 0;
        font-size: 0;
        position: relative;
    }
    
    .slide ul li {
        flex: calc(100% / 4) 0 0;
        height: 100%;
        box-sizing: border-box;
        cursor: pointer;
        padding: 3px
    }
    
    .slide ul li img {
        border: 1px solid #eee;
    }
    /* .slide ul li.active img, */
    
    .slide ul li:hover img {
        border: 1px solid #222;
    }
</style>