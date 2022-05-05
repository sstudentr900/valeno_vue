<template>
    <!-- <a :href="`/${item.href}`" class="public_item"> -->
    <router-link :to="`/${item.href}/${item.id}`" class="public_item">
        <div class="img">
            <img class="lazy" :src="item.src" alt="">
            <!-- <img class="lazy" :src="require(`@/assets/${item.src}`)"> -->
        </div>
        <div class="info">
            <div class="en">{{item.en}}</div>
            <div class="tit">{{item.ti}}</div>
            <div class="sale">{{item.sale}}</div>
            <div class="price">
                <span class="through">{{item.price}}</span>
                <i>/</i>
                <span>{{item.special_price}}</span>
            </div>
        </div>
    </router-link>
    <!-- </a> -->
</template>
<script>
    export default {
        name: 'FnProduct',
        props: {
            "item": {
                type: Object,
                default: {}
            },
        },
        data() {
            return {}
        },
    }
</script>

<style scoped>

</style>