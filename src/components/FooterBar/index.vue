<template>
  <div class="footer-nav">
      <router-link
      v-for="(item,index) in tabs"
      :key="index"
      :to="item.path"
      active-class="active"
      >
      <i :class="['defalut','iconfont' , item.icon]"></i>
      <i :class="['select','iconfont' , item.selectIcon]"></i>
      <span>{{item.text}}</span>
      </router-link>
  </div>
</template>

<script>
export default {
  name: 'footer-bar',
  data () {
    return {
      tabs: [
        {
          path: '/home',
          icon: 'icon-shouye',
          selectIcon: 'icon-shouye1',
          text: '首页'
        },
        {
          path: '/seetv',
          icon: 'icon-dianying',
          selectIcon: 'icon-dianying1',
          text: '电影/影院'
        },
        {
          path: '/showed',
          icon: 'icon-yanchu',
          selectIcon: 'icon-yanchu1',
          text: '演出'
        },
        {
          path: '/splay',
          icon: 'icon-yingyuan',
          selectIcon: 'icon-yingyuan1',
          text: '体育/赛事'
        },
        {
          path: '/swe',
          icon: 'icon-wode',
          selectIcon: 'icon-wode1',
          text: '我的'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.footer-nav{
    display: flex;
    width: 100vw;
    height: auto;
    justify-content: center;
    align-content: center;
    position: fixed;
    bottom: 0;
    background: #fff;
    border-top: 1px solid #ccc;
    a{
        flex: 1;
        text-decoration: none;
        color: #666;
        text-align: center;
        padding: 5px 0;
        display: flex;
        flex-direction: column;
        i{
          font-variant-east-asian: 25px;
          margin-bottom: 2px;
        }
        .defalut {
              display: block;
            }
            .select {
              display: none;
            }
        span{
            font-size: 12px;
        }
        &.active{
            color: red;
            .defalut {
              display: none  !important;
            }
            .select {
              display: block  !important;
            }
        }
    }
}
</style>
