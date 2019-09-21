<template>
    <div class="header">
        <i class="iconfont icon-fanhui header-back"></i>
        <router-link tag="div" :to="{path:'/city'}" class="header-input">
          <i class="iconfont icon-sousuo"></i>
          <input type="text" placeholder="输入城市/景点/游玩主题">
        </router-link>
      <router-link tag="div" :to="{path:'/city'}" class="header-right">
        <span>{{this.$store.state.city}}</span><i class="iconfont icon-jiantou"></i>
      </router-link>
    </div>
</template>

<script>
    export default {
        name:'HomeHeader'

    }
</script>

<style lang="stylus" scoped>
.header
  display:flex
  height:0.88rem
  background-color: #00bcd4
  line-height:0.88rem
  color:#fff
  .header-back
    width:0.88rem
    text-align: center
  .header-input
    flex:1
    height:0.6rem
    line-height:0.6rem
    margin-top:0.14rem
    background-color: #fff
    color:#eee
    text-indent:0.2rem
    border-radius:0.1rem
    .icon-sousuo
      vertical-align:middle
    input
      width:80%
      vertical-align:middle
  .header-right
      padding:0 0.2rem
    .icon-jiantou
      font-size:0.26rem
</style>
