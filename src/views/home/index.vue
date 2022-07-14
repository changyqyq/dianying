<template>
  <div class="home-page">
    <HeaderWarp />
    <div class="content">
      <router-view></router-view>
    </div>
    </div>
</template>

<script>
import HeaderWarp from './components/HeaderWarp'
export default {
  name: 'home',
  components: {
    HeaderWarp
  }
}
</script>

<style lang="scss" scoped>
.home-page {
  width: 100%;
  .content {
    background: #f2f2f2;
    width: 100vw;
    min-height: calc(100vh - 120px);
  }
}
</style>
