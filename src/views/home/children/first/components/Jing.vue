<template>
<div class="das">
  <div class="firt">
      <router-link
      v-for="(item, index) in arr"
      :key="index"
      :to="arrs[index].path"
      >
      <img :src="item.materialItems[2].value" />
      <span >{{item.materialItems[0].value}}</span>
      </router-link>
  </div>
  <div class="secon">
      <div class="iniet">
          <a
          href="javascript:;"
          v-for="(item, index) in sarr"
          :key="index"
          >
            <img :src="item.materialItems[0].value"  class="img1"/>
            <span >{{item.materialItems[1].value}}</span>
            <img :src="item.materialItems[4].value" class="img2"/>
          </a>
      </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Jing',
  props: {
    arr: Array,
    sarr: Array
  },
  data () {
    return {
      arrs: [
        {
          path: '/seetv'
        },
        {
          path: '/showed'
        },
        {
          path: '/yanchu'
        },
        {
          path: '/splay'
        }
      ]
    }
  },
  mounted () {
  }
}
</script>
<style lang="scss">
.das{
  width: 96%;
  background: #fff;
  margin:  0 auto;
   border-radius: 10px;
  .firt{
    width: 100%;
    display: flex;
    padding: 10px 0;
    a{
      display: flex;
      flex-direction: column;
      flex: 1;
      text-align: center;
      text-decoration: none;
      color: #222;
      img{
        width: 80%;
        margin: 0 auto;
      }
    }
  }
  .secon{
    width: 100%;
    overflow: auto;
    padding-bottom: 10px;
    .iniet{
      width: 130%;
      display: flex;
      a{
        display: block;
        text-decoration: none;
        // padding: 10px;
        margin: 6px;
        width: 120px;
        box-shadow: 0 0 1px 1px rgba(207, 204, 204, 0.3);
        border-radius: 10px;
        overflow: hidden;
        .img1 {
          width: 75%;
          margin-top: 10px;
          margin-left: 10px;
        }
        span {
          color: #666;
          font-size: 12px;
          margin-top: 3px;
          display: block;
          margin-left: 10px;
        }
        .img2 {
          width: 40%;
          margin-left: 56px;
          margin-top: -10px;
        }
      }
    }
  }
}

</style>
