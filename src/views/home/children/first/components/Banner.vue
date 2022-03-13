/* eslint-disable no-new */
/* eslint-disable no-undef */
<!--
 * @ Descripttion:
 * @version: 1.0
 * @Author: 常嘉琪
 * @Date: 2022-03-11 16:29:53
 * @LastEditors: 常嘉琪
 * @LastEditTime: 2022-03-13 14:32:01
-->
<template>
<div class="box">
<swiper class="swiper-wrap" ref="mySwiper" :options="swiperOptions">
    <swiper-slide
      v-for="(item, index) in images"
      :key="index"
    >
      <img :src="item.image" />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</div>
</template>

<script>

export default {
  name: 'banner',
  props: {
    images: Array
  },
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: {
          delay: 1000,
          // 用户操作swiper之后，是否禁止autoplay
          disableOnInteraction: false
        }
        // Some Swiper option/callback...
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper-wrap {
  width: 100%;
  overflow: hidden;
  .swiper-slide {
    padding: 10px;
    box-sizing: border-box;
    width: 100%;
  }
  img {
    display: block;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
  }
}
</style>
