<template>
    <div class="slide">
        <ul>
            <li class="active">
                <img src="@/assets/ban1.jpg" alt="">
            </li>
            <li>
                <img src="@/assets/ban2.jpg" alt="">
            </li>
            <li>
                <img src="@/assets/ban1.jpg" alt="">
            </li>
        </ul>
        <div class="dotdiv">
            <div class="pre"></div>
            <div class="next"></div>
            <!-- <div class="dots"></div> -->
        </div>
    </div>
</template>
<script>
export default {
    name:'slide',
}
</script>

<style scoped>
.slide {
    position: relative;
    overflow: hidden;
}
.slide li {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    padding: 0;
    opacity: 0;
    visibility: hidden;
    transition: all 0.4s ease-out;
}
.slide li.active {
    opacity: 1;
    visibility: visible;
    position: relative;
}
.slide img{
    width: 100%;
}
.slide .pre, .slide .next {
    cursor: pointer;
    position: absolute;
    top: 0;
    width: 100px;
    height: 100%;
    opacity: 0;
    transition: opacity .5s ease;
    background: linear-gradient(to left, transparent 0%, rgba(0, 0, 0, 0.18) 100%);
}
.slide .next {
    background: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.18) 100%);
    right: 0;
}
.slide .pre:hover, .slide .next:hover {
    opacity: 1;
}
.slide .pre:hover:after,.slide .next:hover:after{
    content:"";
    position: absolute;
    top: 50%;
    right: 15px;
    z-index: 10;
    margin-top: -30px;
    width: 60px;
    height: 60px;
    border: 0;
    border-left: 1px solid #fff;
    border-bottom: 1px solid #fff;
    transform: rotate(45deg);
}
.slide .next:hover:after{
    right: auto;
    left: 15px;
    transform: rotate(-135deg);
}
.slide .dot {
    cursor: pointer;
    margin: 0 5px;
    border: 1px solid #fff;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    display: inline-block;
}
</style>
