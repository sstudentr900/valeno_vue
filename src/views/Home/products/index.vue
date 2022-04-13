<template>
    <div class="products">
        <h2 class="public_title">#NEW ARRIVAL</h2>
        <div class="content public_scrollTop">
            <div class="left">
                <img class="lazy" src="@/assets/in01.jpg" alt="">
            </div>
            <div class="right">
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
            </div>
            <div class="bottom">
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
        </div>
    </div>
</template>
<script>
export default {
    name:'products',
}
</script>

<style scoped>

.products .right,
.products .bottom,
.products .content{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.products .right .public_item,
.products .right,
.products .left{
    width: 49%;
}
.products .bottom{
    width: 100%;
}


</style>
