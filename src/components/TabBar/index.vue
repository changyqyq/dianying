<template>
  <div class="tabs">
    <nav>
      <a href="javascript:;"
      v-for="(item,index) in tabs" :key="index"
      :class="{
        active: activeIndex === index
        }"
        @click="change(index)"
      >
  {{item.text}}
      </a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'tab-bar',
  props: {
    tabs: Array
  },
  data () {
    return {
      activeIndex: 0
    }
  },
  methods: {
    change (index) {
      this.activeIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
.tabs{
  width: 100%;
  height: auto;
  position: relative;
  white-space: nowrap;
  overflow: scroll;
  background-color: #fff;
  border-top: 1px solid #e6e6e6;
  nav{
    display: flex;
    a{
      padding: 0 15px;
      line-height: 40px;
      font-size: 15px;
      text-decoration: none;
      color: #333;
      &.active{
        font-size: 18px;
      }
    }
  }
}
</style>
