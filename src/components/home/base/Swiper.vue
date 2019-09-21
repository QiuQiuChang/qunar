<template>
    <div class="wrap" v-if="reRender">
      <swiper :options="swiperOption" ref="mySwiper"
              v-if="swiperList.length">
        <!-- slides -->
        <swiper-slide v-for="(item,index) in swiperList" :key="item.id" >
          <img :src="item.imgUrl" alt="" @click = 'fn'>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
</template>

<script>

    export default {
      name:'HomeSwiper',
      props:['swiperList'],

      data() {
        return {
          swiperOption:{
            pagination: {
              el: '.swiper-pagination',
            },
            initialSlide :0,
            loop:true,
            autoplay :{
              delay: 3000,
              disableOnInteraction: false,
            },
            observeParents:true,
            observer:true
           },
          reRender: true
        }
      },
      activated(){
        this.reRender = true;

      },

      deactivated() {
        this.reRender = false;
        this.swiperOption.initialSlide = 2
      },
      methods:{
        fn(){
          this.$router.push('/public')
        }
      }
    }
</script>

<style lang="stylus" scoped>
.swiper-container
  height:2rem
img
  height:100%
.swiper-pagination>>>.swiper-pagination-bullet-active
      background-color: #fff
</style>
