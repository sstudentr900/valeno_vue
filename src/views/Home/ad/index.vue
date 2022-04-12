<template>
    <div class="ad">
        <a href="#">
            <img src="@/assets/kwankao1.jpg" alt="">
        </a>
        <a href="#">
            <img src="@/assets/kwankao2.jpg" alt="">
        </a>
        <a href="#">
            <img src="@/assets/kwankao3.jpg" alt="">
        </a>
    </div>
</template>
<script>
export default {
    name:'ad',
}
</script>

<style scoped>
.ad {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
}
.ad a{
    width: 32.5%;
    margin-bottom: 10px
}
.ad a img{
    transition: ease 0.3s;
}
.ad a img:hover{
    box-shadow: 3px 3px 0 #000;
}
</style>
