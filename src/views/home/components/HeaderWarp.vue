<template>
<div class="header-warp">
    <header>
        <a href="javascript:;">中牟</a>
        <search-bar :placeholder="hotWord" to="/search" />
    </header>
    <tab-bar :tabs="tabs" />
</div>
</template>

<script>
export default {
  name: 'header-warp',
  data () {
    return {
      hotWord: [
        '精忠报国',
        '速度与激情',
        '无名之辈'
      ],
      tabs: [
        {
          text: '推荐'
        },
        {
          text: '热片解读'
        },
        {
          text: '预告片'
        },
        {
          text: '说电影'
        },
        {
          text: '佳片'
        },
        {
          text: '剧综'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.header-warp{
 header{
     padding: 5px 10px;
     display: flex;
     justify-content: space-between;
     align-items: center;
     a{
         font-size: 12px;
         text-decoration: none;
         flex-shrink: 0;
         color: #666;
         margin-right: 20px;
     }
 }
}
</style>
