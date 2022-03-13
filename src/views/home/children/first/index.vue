<template>
  <div>
    <banner :images="bannerList" />
    <!-- <quick-navigation /> -->
    <jing :arr="jingArr"  :sarr="abc"/>
  </div>
</template>

<script>
import Banner from './components/Banner'
import Jing from './components/Jing'
export default {
  name: 'first',
  data () {
    return {
      bannerList: [],
      jingArr: [],
      abc: []
    }
  },
  components: {
    Banner,
    Jing
  },
  created () {
    this.initHomeData()
    this.initHomeJin()
    this.initHomeSarr()
  },
  methods: {
    initHomeData () {
      this.$api.home.banner().then((res) => {
        this.bannerList = res.data.data[0].config
      })
    },
    initHomeJin () {
      this.$api.home.jing().then((res) => {
        this.jingArr = res.data.data[0].config
      })
    },
    initHomeSarr () {
      this.$api.home.lists().then((res) => {
        this.abc = res.data.data[0].config
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
