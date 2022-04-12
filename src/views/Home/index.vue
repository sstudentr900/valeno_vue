<template>
    <div class="home">
        <slide></slide>
        <ad></ad>
        <products></products>
        <news></news>
    </div>
</template>
<script>
import slide from './slide'
import ad from './ad'
import products from './products'
import news from './news'

export default {
    name:'home',
    components:{
        slide,
        ad,
        products,
        news,
    },
}
</script>

<style>
</style>

