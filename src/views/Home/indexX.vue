<template>
    <div class="home">
        <slide :items="home.slide"></slide>
        <!-- <ad v-for="(item,index) in ad" :key="index" :list="item"></ad> -->
        <!--<ad :list="ad"></ad>-->
        <ad :items="home.ad"></ad>
        <products :title="home.productTitle" :right="home.productRight" :left="home.productLeft"></products>
        <news :slides="home.newSlide" :title="home.newTitle"></news>
    </div>
</template>
<script>
    import slide from './slide'
    import ad from './ad'
    import products from './products'
    import news from './news'
    import {
        mapState
    } from 'vuex'
    export default {
        name: 'home',
        components: {
            slide,
            ad,
            products,
            news,
        },
        mounted() {
            // this.$store.dispatch('home/ad')
            this.$store.dispatch('home/home')
        },
        computed: {
            // ...mapState('home',['ad'])
            ...mapState('home', ['home'])
        }
    }
</script>

<style>

</style>