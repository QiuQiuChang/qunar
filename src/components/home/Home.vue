<template>
    <div class="home">
      <home-header></home-header>
      <home-swiper :swiperList = 'swiperList'></home-swiper>
      <home-nav :iconList = 'iconList'></home-nav>
      <hot-week></hot-week>
      <home-favourite :recommendList="recommendList"></home-favourite>
      <home-week :weekendList = 'weekendList'></home-week>
      <home-footer></home-footer>
    </div>
</template>

<script>
  import {getHome} from '@/api'
  import HomeHeader from './base/Header'
  import HomeSwiper from './base/Swiper'
  import HomeNav from './base/Nav'
  import HotWeek from './base/HotWeek'
  import HomeFavourite from './base/Favourite'
  import HomeWeek from './base/Weekend'
  import HomeFooter from './base/Footer'

    export default {
        name:'Home',
        components:{
            HomeHeader,
            HomeSwiper,
            HomeNav,
            HotWeek,
            HomeFavourite,
            HomeWeek,
            HomeFooter
        },
      data(){
          return{
            swiperList:[],
            iconList:[],
            recommendList:[],
            weekendList:[]
          }
       },
      created(){

      },
      methods:{
          async getData(){
            let {swiperList,iconList,recommendList,weekendList} = await getHome()
              this.swiperList = swiperList
              this.iconList = iconList
              this.recommendList = recommendList
              this.weekendList = weekendList
           }

      },

      activated(){
        this.getData()
      }
    }
</script>

<style lang="stylus" scoped>


</style>
