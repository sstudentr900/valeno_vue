<template>
    <div class="swiper" ref="cur">
        <div class="swiper-wrapper">
            <div v-for="(imgSrc,index) in item" :key="index" class="swiper-slide" :class="{active:nowImageIndex==index}" @click="changeImageIndex(index)">
                <!-- <img :src="imgSrc" alt=""> -->
                <!-- <p>{{ imgSrc }}</p>  -->
                <img :src="require(`@/assets/${imgSrc}`)">
            </div>
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
    </div>
</template>
<script>
    import Swiper, {
        Navigation
    } from 'swiper';
    export default {
        name: 'imgSlide',
        props: ["item"],
        data() {
            return {
                nowImageIndex: 0,
            }
        },
        methods: {
            changeImageIndex(index) {
                this.nowImageIndex = index
                //全局
                console.log(this.eventBus)
                this.eventBus.emit('getIndex', index);
            },
        },
        watch:{
            //
            item(newValue,oldValue){
                this.$nextTick(()=>{
                    new Swiper(
                        this.$refs.cur, {
                            modules: [Navigation],
                            // Navigation arrows
                            navigation: {
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            },
                            slidesPerView: 5, //顯示幾個
                            slidesPerGroup: 1, //每次移動
                            // loop: true
                        }
                    )
                })
            }
            
        }
    }
</script>

<style scoped>
    .swiper{
        padding: 0 20px;
        font-size: 0;
    }
    .swiper-button-next,
    .swiper-button-prev{
        background: #ebeaea;
        height: 100%;
        margin-top: 0;
        top: 0;
        width: 20px;
        color: #959595;
        border: 1px solid #eee;
    }
    .swiper-button-next.swiper-button-disabled,
    .swiper-button-prev.swiper-button-disabled{
        opacity: 1;
        background: #f5f5f5;
        color: #eee;
    }
    .swiper-button-next {
        right: 0;
    }
    .swiper-button-prev{
        left: 0;
    }
    .swiper-button-next:after,
    .swiper-button-prev:after{
        font-size: 18px;
        font-weight: bold;
    }
    .swiper .swiper-slide{
        border: 1px solid #eee;
        cursor: pointer;
    }
    .swiper .swiper-slide.active,
    .swiper .swiper-slide:hover{
        border: 1px solid #bbb;
    }
</style>