<template>
  <div class="swiper" ref="mySwiper">
    <div class="swiper-wrapper">
      <div v-for="(item,index) in items" :key="index" class="swiper-slide">
          <img :src="require(`@/assets/${item.image}`)">
      </div>
    </div>
    <!-- <div class="swiper-pagination"></div> -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>
<script>
import Swiper, { Navigation, Pagination } from 'swiper';
export default {
  name:'slide',
  props:['items'],
  data(){
      return {
      }
  },
  //組件掛載完畢
  mounted(){
    new Swiper(
      // ".mySwiper", 同下
      this.$refs.mySwiper,
      {
        modules: [Navigation, Pagination],
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true  //pagination click
        },

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        autoplay: {
            delay: 1000,
        },
        loop: true 
      }
    )
  },
}
</script>

<style scoped>
.swiper-button-prev,
.swiper-button-next{
  color: #fff;
}
</style>
