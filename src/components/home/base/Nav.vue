<template>
  <div class="wrap">
  <swiper :options="swiperOption" class="swiper">
    <!-- slides -->
    <swiper-slide v-for="(imgs,index) in filterImgs" :key="index">
      <div class="nav">
        <div class="item" v-for="(item,index) in imgs" :key="item.id" @click="fn">
          <img :src="item.imgUrl" alt="">
          <span>{{item.desc}}</span>
        </div>
      </div>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
    <ul class="border-top">
      <li class="border-right">
        <i class="iconfont icon-04"></i>
        <span>定位失败</span>
      </li>
      <li>
        <i class="iconfont icon-icon35"></i>
        <span>必游榜单</span>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name:'HomeNav',
        props:['iconList'],
        data(){
          return{
            swiperOption:{
              pagination:{
                el:'.swiper-pagination'
              }
            }
          }
        },
        computed:{
          filterImgs(){
            let imgs = []
            this.iconList.forEach((item,index)=>{
                let page = ~~(index/8)
              if(!imgs[page]){
                imgs[page] = []
              }
              imgs[page].push(item)
            })
            return imgs
          }

        },
      methods:{
          fn(){
            this.$router.push('/public')
          }
      }
    }
</script>

<style lang="stylus" scoped>
.wrap
  border-bottom: 0.2rem solid #f5f5f5
.nav
  display:flex
  flex-wrap:wrap
  height:3.7rem
  align-content:start
  padding-top:0.2rem
  
  .item
    display:flex
    flex-direction:column
    width:25%
    height:45%
    align-items:center
    img
      width:1.1rem
      margin-bottom:0.1rem
.swiper >>> .swiper-pagination-bullet
    width:6px
    height:6px
.border-top
  display:flex
  li
    width: 50%
    height:0.98rem
    color:#333
    text-align:center
    line-height:0.98rem
    .iconfont
      font-size:0.4rem


</style>
