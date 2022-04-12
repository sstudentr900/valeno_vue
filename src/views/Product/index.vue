<template>
    <div class="product">
      <div class="left">
        <navs></navs>
      </div>
      <div class="right">
        <slide></slide>
        <products></products>
      </div>
    </div>
</template>
<script>
import navs from './nav'
import slide from './slide'
import products from './products'

export default {
    name:'product',
    components:{
        slide,
        navs,
        products,
    },
}
</script>

<style scoped>
.product{
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}
.product>.left{
  width: 19%;
}
.product>.right{
  width: 80%;
}
</style>
