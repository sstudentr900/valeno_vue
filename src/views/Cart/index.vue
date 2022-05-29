<template>
    <div class="cart">
        <FnCartSteps :selected="1"></FnCartSteps>
        <FnCarList :isCoupon=true></FnCarList>
        <paymentDiv></paymentDiv>
    </div>
</template>
<script>
    import FnCartSteps from '@/components/FnCartSteps'
    import FnCarList from '@/components/FnCarList'
    import paymentDiv from './paymentDiv'
    export default {
        name: 'cart',
        components: {
            FnCartSteps,
            FnCarList,
            paymentDiv,
        },
    }
</script>

<style scoped>

</style>