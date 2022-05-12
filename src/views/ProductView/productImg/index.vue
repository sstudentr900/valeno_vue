<template>
    <div class="slide" v-if="item">
        <div class="top">
            <img :src="item.productImgs[nowImageIndex]" alt="">
        </div>
        <div class="bottom">
            <div class="swiper" ref="cur">
                <div class="swiper-wrapper">
                    <div v-for="(item,index) in item.productImgs" :key="index" class="swiper-slide" :class="{active:nowImageIndex==index}" @click="changeImageIndex(index)">
                        <img :src="item" alt="">
                    </div>
                </div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </div>
        </div>
    </div>
</template>
<script>
    import Swiper, {
        Navigation
    } from 'swiper';
    export default {
        name: 'productImg',
        props: ["item"],
        data() {
            return {
                nowImageIndex: 0,
            }
        },
        methods: {
            changeImageIndex(index) {
                this.nowImageIndex = index
            },
        },
        watch:{
            //
            item(newValue,oldValue){
                this.$nextTick(()=>{
                    // new Swiper("swiper-container", {
                    new Swiper(
                        // ".mySwiper", 同下
                        this.$refs.cur, {
                            modules: [Navigation],
                            // If we need pagination
                            // pagination: {
                            //     el: '.swiper-pagination',
                            //     clickable: true //pagination click
                            // },

                            // Navigation arrows
                            navigation: {
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            },
                            slidesPerView: 4, //顯示幾個
                            slidesPerGroup: 1, //每次移動
                            // autoplay: {
                            //     delay: 1000,
                            // },
                            // loop: true
                        }
                    )
                })
            }
            
        }
    }
</script>

<style scoped>
    .slide {
        flex: 0 0 300px;
        width: 300px;
    }
    
    .slide .top
    .slide .bottom {
        position: relative;
        font-size: 0;
    }
    .slide .top {
        border: 1px solid #eee;
        border-bottom: none;
    }
    .slide .swiper{
        padding: 0 20px;
        font-size: 0;
    }
    .slide .swiper-button-next,
    .slide .swiper-button-prev{
        background: #ebeaea;
        height: 100%;
        margin-top: 0;
        top: 0;
        width: 20px;
        color: #959595;
        border: 1px solid #eee;
    }
    .slide .swiper-button-next.swiper-button-disabled,
    .slide .swiper-button-prev.swiper-button-disabled{
        opacity: 1;
        background: #f5f5f5;
        color: #eee;
    }
    .slide .swiper-button-next {
        right: 0;
    }
    .slide .swiper-button-prev{
        left: 0;
    }
    .slide .swiper-button-next:after,
    .slide .swiper-button-prev:after{
        font-size: 18px;
        font-weight: bold;
    }
    .slide .swiper .swiper-slide{
        border: 1px solid #eee;
        cursor: pointer;
    }
    .slide .swiper .swiper-slide.active,
    .slide .swiper .swiper-slide:hover{
        border: 1px solid #bbb;
    }
</style>