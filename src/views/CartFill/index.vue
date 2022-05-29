<template>
    <div class="cart">
        <FnCartSteps :selected="2"></FnCartSteps>
        <FnCarList :isCoupon=false></FnCarList>
        <buyInfo></buyInfo>
    </div>
</template>
<script>
    import FnCartSteps from '@/components/FnCartSteps'
    import FnCarList from '@/components/FnCarList'
    import buyInfo from './buyInfo'
    export default {
        name: 'cartFill',
        components: {
            FnCartSteps,
            FnCarList,
            buyInfo,
        },
    }
</script>

<style scoped>

</style>