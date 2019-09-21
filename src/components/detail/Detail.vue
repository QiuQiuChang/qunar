<template>
  <div class="detail">
      <detail-banner :imgList = "gallaryImgs"
      :sightName="sightName" :bannerImg = 'bannerImg'></detail-banner>
      <detail-header></detail-header>
      <detail-card :cardInfo = 'cardInfo'></detail-card>
      <detail-recommend :recommendInfo = 'recommendInfo'>
        <h3 class="border-bottom">去哪儿推荐</h3>
      </detail-recommend>
      <detail-calendar :calendarInfo = 'calendarInfo'></detail-calendar>
      <detail-comment :commentInfo = 'commentInfo'></detail-comment>
  </div>
</template>

<script>
import {getDetails} from '@/api'
import DetailBanner from './base/Banner'
import DetailHeader from './base/Header'
import DetailCard from './base/Card'
import DetailRecommend from './base/Recommend'
import DetailCalendar from './base/Calendar'
import DetailComment from './base/Comment'
    export default {
      name: "Detail",
      components: {
        DetailBanner,
        DetailHeader,
        DetailCard,
        DetailRecommend,
        DetailCalendar,
        DetailComment
      },
      data(){
        return{
          gallaryImgs:[],
          sightName:"",
          bannerImg:"",
          cardInfo:{},
          recommendInfo:[],
          calendarInfo:[],
          commentInfo:[]
        }
      },
      activated() {
        this.getData()
        document.documentElement.scrollTop = 0
      },
      deactivated(){
        document.documentElement.scrollTop = 0
      },
      methods: {
        async getData() {
          //console.log(await getDetails(this.$route.params.id))
          let  {gallaryImgs,bannerImg,sightName,cardInfo,recommendInfo,calendarInfo,commentInfo} = await getDetails(this.$route.params.id)
                this.sightName = sightName
                this.gallaryImgs = gallaryImgs
                this.bannerImg = bannerImg
                this.cardInfo = cardInfo
                this.recommendInfo = recommendInfo
                this.calendarInfo = calendarInfo
                this.commentInfo = commentInfo
        }
      }
    }
</script>

<style lang="stylus" scoped>


</style>
