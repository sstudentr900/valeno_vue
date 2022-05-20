<template>
    <div class="preview">
        <!-- <img :src="imgObj[0]" alt=""> -->
        <img class="mainImg" v-if="item" :src="item[nowImageIndex]" alt="">
        <div class="event" @mousemove="handler"></div>
        <div class="big">
            <img v-if="item" :src="item[nowImageIndex]" alt="" ref="bigImg">
        </div>
        <div class="mask" ref="mask"></div>
    </div>
</template>
<script>
    export default {
        name: 'imgZoom',
        props: ["item"],
        data() {
            return {
                nowImageIndex: 0,
            }
        },
        beforeUnmount() {
            // 銷毁監聽
            this.eventBus.off("getIndex");
        },
        mounted(){
            this.eventBus.on('getIndex', (msg) => {
                this.nowImageIndex = msg
                // console.log(msg)
            });
        },
        computed:{
            // imgObj(){
            //     return this.item || {}
            // }
        },
        methods: {
            handler(event){
                let mask = this.$refs.mask;
                let big = this.$refs.bigImg;
                let left = event.offsetX-mask.offsetWidth/2;
                let top = event.offsetY-mask.offsetHeight/2;
                //範圍約束
                if(left<=0)left = 0;
                if(left>=mask.offsetWidth)left = mask.offsetWidth;
                if(top<=0)top =0;
                if(top>=mask.offsetHeight)top = mask.offsetWidth;
                //屬性修改
                mask.style.left = left+'px';
                mask.style.top = top+'px';
                big.style.left=-2*left+'px'
                big.style.top=-2*top+'px'
            }
        }
    }
</script>

<style scoped>
    .preview{
        position: relative;
        font-size: 0;
    }
    .preview .mainImg{
        border: 1px solid #eee;
        border-bottom: 1px solid transparent;
    }
    .preview .big,
    .preview .mask,
    .preview .event{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
    .preview .event{
        /* background: #555; */
        z-index: 9;
    }
    .preview .mask{
        width: 50%;
        height: 50%;
        z-index: 4;
        background: #f7cccc;
        opacity: .4;
        display: none;
    }
    .preview:hover .mask{
        display: block;
    }
    .preview .big{
        border: 1px solid #c3c3c3;
        /* position: absolute; */
        /* top: 0; */
        left: 100%;
        overflow: hidden;
        display: none;
        background: #fff;
    }
    .preview .big img{
        width: 200%;
        max-width: 200%;
        height: 200%;
        position: absolute;
        left: 0;
        top: 0;
    }
    .preview:hover .big{
        display: block;
    }
</style>