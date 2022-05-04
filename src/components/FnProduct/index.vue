<template>
    <a :href="item.href" class="public_item">
        <div class="img">
            <img class="lazy" :src="item.src" alt="">
        </div>
        <div class="info">
            <div class="en">{{item.text_en}}</div>
            <div class="tit">{{item.text_ti}}</div>
            <div class="sale">{{item.text_sale}}</div>
            <div class="price">
                <span class="through">{{item.price}}</span>
                <i>/</i>
                <span>{{item.special_price}}</span>
            </div>
        </div>
    </a>
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
            return {
            }
        },
    }
</script>

<style scoped>
</style>