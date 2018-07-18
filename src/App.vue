<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <!--将router页面内容缓存至内存中，在页面跳转时，避免每次请求数据-->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import MHeader from 'components/m-header/m-header'
import Tab from 'components/tab/tab'
export default {
  components: {
    MHeader,
    Tab
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
