<template>
  <div class="search-bar">
      <div class="placeholder-warp">
        <div :style="style">
           <span v-for="(item,index) in placeholder" :key="index">{{item}}</span>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'search-bar',
  props: {
    placeholder: Array
  },
  data () {
    return {
      activeIndex: 0
    }
  },
  computed: {
    style () {
      return {
        marginTop: -this.activeIndex * 30 + 'px'
      }
    }
  },
  created () {
    setInterval(() => {
      this.activeIndex += 1
      if (this.activeIndex >= this.placeholder.length) {
        this.activeIndex = 0
      }
    }, 2000)
  }
}
</script>

<style lang="scss" scoped>
.search-bar{
    width: 100%;
    height: 30px;
    background: rgb(224, 223, 223);
    border-radius: 30px;
    overflow: hidden;
    .placeholder-warp{
        color: rgb(161, 159, 159);
        line-height: 30px;
        padding-left: 20px;
        font-size: 12px;
        div{
          transition: all 0.5s ease-in;
        }
        span{
          display: block;
        }
    }
}
</style>
