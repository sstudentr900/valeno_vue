<template>
    <div class="recommend">
        <h3 class="title">#RECOMMEND</h3>
        <div class="public_flex">
            <FnProduct v-for="item in items" :key="item.id" :item="item"></FnProduct>
        </div>
    </div>
</template>
<script>
    import FnProduct from '@/components/FnProduct'
    export default {
        name: 'recommend',
        props: {
            "items": {
                type: Array,
                required: true,
                default: []
            }
        },
        components: {
            FnProduct,
        },
    }
</script>

<style scoped>
    .recommend {
        background: #f8f8f8;
        margin-left: -60px;
        margin-right: -60px;
        margin-bottom: -60px;
        padding: 60px;
    }
    
    .recommend .title {
        color: #000;
        font-size: 28px;
        margin: 30px 0 40px;
        text-align: center;
        font-weight: bold;
    }
    
    .recommend .public_flex {
        justify-content: space-between;
    }
    
    .recommend .public_flex>a {
        background: #fff;
    }
</style>