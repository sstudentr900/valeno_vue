<template>
    <div class="slide">
        <div id="banner" class="slider">
            <img v-for="(item,index) in items" :key="item.id" :src="require(`@/assets/${item.src}`)" alt="">
        </div>
    </div>
</template>
<script>
    export default {
        name: 'slide',
        props: {
            'items': {
                type: Array,
                default: []
            }
        }
    }
</script>

<style scoped>

</style>