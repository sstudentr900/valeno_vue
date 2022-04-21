<template>
    <div class="home">
        <slide></slide>
        <!-- <ad v-for="(item,index) in ad" :key="index" :list="item"></ad> -->
        <ad :list="ad"></ad>
        <products></products>
        <news></news>
    </div>
</template>
<script>
import slide from './slide'
import ad from './ad'
import products from './products'
import news from './news'
import { mapState } from 'vuex'
export default {
    name:'home',
    components:{
        slide,
        ad,
        products,
        news,
    },
    mounted(){
        this.$store.dispatch('home/ad')
    },
    computed:{
        ...mapState('home',['ad'])
    }
}
</script>

<style>
</style>

