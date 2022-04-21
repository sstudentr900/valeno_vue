<template>
    <div class="ad">
        <!-- <a href="#">
            <img src="@/assets/kwankao1.jpg" alt="">
        </a>
        <a href="#">
            <img src="@/assets/kwankao2.jpg" alt="">
        </a>
        <a href="#">
            <img src="@/assets/kwankao3.jpg" alt="">
        </a> -->
        <!-- <a v-for="(item,index) in ad" :href="item.href" :key="index">
            <img :src="require(`@/assets/${item.src}`)">
        </a> -->
        <a v-for="(item,index) in list" :href="item.href" :key="index">
            <img :src="require(`@/assets/${item.src}`)">
        </a>
        <!-- <p>{{list}}</p> -->
    </div>
</template>
<script>
// import { mapState } from 'vuex'
export default {
    name:'ad',
    props:['list'],
    mounted(){
        //執行store
        // this.$store.dispatch('home/ad')
    },
    computed:{
        // ...mapState('home',['ad'])
    }
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
