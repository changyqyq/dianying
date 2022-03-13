<template>
  <div class="tabs">
    <nav>
      <a href="javascript:;"
      v-for="(item,index) in tabs" :key="index"
      :class="{
        active: activeIndex === index
        }"
        @click="change(item,index)"
        ref="navs"
      >
     {{item.text}}
      </a>
    </nav>
    <span class="line" ref="line"></span>
  </div>
</template>

<script>
export default {
  name: 'tab-bar',
  props: {
    tabs: Array,
    router: Boolean
  },
  data () {
    return {
      activeIndex: 0
    }
  },
  mounted () {
    this.setLineLeft()
  },
  methods: {
    change (item, index) {
      if (this.router && this.$route.fullPath !== item.key) {
        this.$router.push(item.key)
      }
      this.activeIndex = index
      this.$nextTick(() => {
        this.setLineLeft()
      })
    },
    setLineLeft () {
      const activeNav = this.$refs.navs[this.activeIndex]
      const windth = activeNav.clientWidth
      const left = activeNav.offsetLeft + windth / 2 - 6
      this.$refs.line.style.left = left + 'px'
    }
  }
}
</script>

<style lang="scss" scoped>
.tabs{
  width: 100%;
  height: auto;
  position: relative;
  overflow: scroll;
  border-top: 1px solid #e6e6e6;
  nav{
    display: flex;
    a{
      padding: 0 15px;
      line-height: 40px;
      font-size: 15px;
      text-decoration: none;
      color: #333;
      flex-shrink: 0;
      &.active{
        font-size: 18px;
      }
    }
  }
  .line {
      position: absolute;
      bottom: 5px;
      width: 12px;
      height: 2px;
      background: red;
      transition: all 0.5s ease;
    }
}
</style>
