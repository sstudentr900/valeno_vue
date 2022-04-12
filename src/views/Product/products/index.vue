<template>
    <div class="products">
        <h4 class="puplic_title">#臉部彩妝</h4>
        <div class="content public_scrollTop">
            <a href="product_view.html" class="public_item">
                <div class="img">
                    <img class="lazy" src="@/assets/p01.jpg" alt="">
                </div>
                <div class="info">
                    <div class="en">Mistine - Groove complete</div>
                    <div class="tit">12色完美眼彩盤</div>
                    <div class="sale">泰國必買</div>
                    <div class="price">
                        <span class="through">NT$429</span>
                        <i>/</i>
                        <span>NT$429</span>
                    </div>
                </div>
            </a>
            <a href="product_view.html" class="public_item">
                <div class="img">
                    <img class="lazy" src="@/assets/p02.jpg" alt="">
                </div>
                <div class="info">
                    <div class="en">Mistine - Groove complete</div>
                    <div class="tit">12色完美眼彩盤</div>
                    <div class="sale">泰國必買</div>
                    <div class="price"><span class="through">NT$429</span><i>/</i><span>NT$429</span></div>
                </div>
            </a>
            <a href="product_view.html" class="public_item">
                <div class="img">
                    <img class="lazy" src="@/assets/p03.jpg" alt="" >
                </div>
                <div class="info">
                    <div class="en">Mistine - Groove complete</div>
                    <div class="tit">12色完美眼彩盤</div>
                    <div class="sale">泰國必買</div>
                    <div class="price"><span class="through">NT$429</span><i>/</i><span>NT$429</span></div>
                </div>
            </a>
            <a href="product_view.html" class="public_item">
                <div class="img">
                    <img class="lazy" src="@/assets/p05.jpg" alt="">
                </div>
                <div class="info">
                    <div class="en">Mistine - Groove complete</div>
                    <div class="tit">12色完美眼彩盤</div>
                    <div class="sale">泰國必買</div>
                    <div class="price"><span class="through">NT$429</span><i>/</i><span>NT$429</span></div>
                </div>
            </a>
            <a href="product_view.html" class="public_item">
                <div class="img">
                    <img class="lazy" src="@/assets/p04.jpg" alt="">
                </div>
                <div class="info">
                    <div class="en">Mistine - Groove complete</div>
                    <div class="tit">12色完美眼彩盤</div>
                    <div class="sale">泰國必買</div>
                    <div class="price"><span class="through">NT$429</span><i>/</i><span>NT$429</span></div>
                </div>
            </a>
            <a href="product_view.html" class="public_item">
                <div class="img">
                    <img class="lazy" src="@/assets/p01.jpg" alt="">
                </div>
                <div class="info">
                    <div class="en">Mistine - Groove complete</div>
                    <div class="tit">12色完美眼彩盤</div>
                    <div class="sale">泰國必買</div>
                    <div class="price"><span class="through">NT$429</span><i>/</i><span>NT$429</span></div>
                </div>
            </a>
            <a href="product_view.html" class="public_item">
                <div class="img">
                    <img class="lazy" src="@/assets/p02.jpg" alt="">
                </div>
                <div class="info">
                    <div class="en">Mistine - Groove complete</div>
                    <div class="tit">12色完美眼彩盤</div>
                    <div class="sale">泰國必買</div>
                    <div class="price"><span class="through">NT$429</span><i>/</i><span>NT$429</span></div>
                </div>
            </a>
            <a href="product_view.html" class="public_item">
                <div class="img">
                    <img class="lazy" src="@/assets/p05.jpg" alt="">
                </div>
                <div class="info">
                    <div class="en">Mistine - Groove complete</div>
                    <div class="tit">12色完美眼彩盤</div>
                    <div class="sale">泰國必買</div>
                    <div class="price"><span class="through">NT$429</span><i>/</i><span>NT$429</span></div>
                </div>
            </a>
        </div>
        <FnPagers></FnPagers>
    </div>
</template>
<script>
import FnPagers from '@/components/FnPagers'
export default {
    name:'products',
    components:{
        FnPagers,
    },
}
</script>

<style scoped>
.products .content{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>
