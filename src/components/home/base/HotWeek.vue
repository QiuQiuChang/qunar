<template>
    <div class="hotweek">
      <div class="hotweek-title">
        <p class="left">
          <img src="https://imgs.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" alt="">
          <span>本周热门榜单</span>
        </p>
        <p class="right">
          <span>全部榜单</span>
          <i class="iconfont icon-jiantouyou"></i>
        </p>
      </div>
      <ul class="hot-place">
        <li v-for="(item,index) in 10" :key="index" @click="fn">
          <p class="top"><img src="https://imgs.qunarzz.com/piao/fusion/1710/ab/159673b63e6ca702.png" alt=""></p>
          <img src="https://imgs.qunarzz.com/sight/p0/1905/29/296e5659470d69bea3.img.jpg_250x250_ff466605.jpg" alt="">
          <p class="des">长沙世界之窗</p>
          <p class="price"><span>￥95</span>起</p>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name:'HotWeek',
      methods:{
          fn(){
            this.$router.push('/public')
          }
      }

    }
</script>

<style lang="stylus" scoped>
.hotweek
  margin-top:0.2rem
  border-bottom: 0.2rem solid #f5f5f5;
  font-size:0
  .hotweek-title
    display:flex
    padding: .24rem 0
    justify-content:space-between
    .left
      font-size:0.32rem
      span
        height:0.44rem
        line-height:0.44rem
      img
        width:0.3rem
        height: 0.3rem
        margin-left: .2rem;
        vertical-align :top
    .right
      margin-right:0.3rem
      margin-top:0.1rem
      font-size:0.24rem
      color:#616161

.hot-place
  padding: 0 .24rem;
  overflow-x: scroll
  white-space: nowrap
  li
    position:relative
    display:inline-block
    margin-right:0.12rem
    width:2rem
    padding: .06rem 0 .2rem
  li:last-child
      margin-right:0
    .top
      position: absolute;
      top:2px
      left:0
      width: .84rem;
      height: .4rem;
      img
        width:100%
    img
      width:100%
    .des
      margin-top: .12rem
      color: #212121
      font-size: .24rem
      line-height: .32rem
      text-align: center
    .price
      color: #616161
      font-size: .26rem
      line-height: .36rem
      text-align: center
      span
        color:#ff8300
</style>
