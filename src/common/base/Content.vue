<template>
    <div class="content">
        <div class="info" ref="info">
          <img :src="imgUrl" alt="">
          <p>数据加载中...</p>
        </div>
    </div>
</template>

<script>
  import picture from '@/assets/imgs/jz.gif'

    export default {
      name:'PublicContent',
      data(){
        return{
          imgUrl: picture
        }
      }

    }
</script>

<style lang="stylus" scoped>
  .content
    position:absolute
    top:0.86rem
    left:0
    right:0
    bottom:0
    .info
      position:absolute
      left:0
      right:0
      bottom:0
      top:0
      margin:auto
      width:2rem
      height:2rem
      text-align:center
      p
        margin-top:0.2rem
        text-align:right
</style>
