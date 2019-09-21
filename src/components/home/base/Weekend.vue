<template>
    <div class="weekend">
        <h2>周末去哪儿</h2>
      <ul class="place">
        <router-link :to="{name:'WeekLink',params:{id:item.id}}"
           v-for="(item,index) in weekendList"
           :key="item.id" tag="li">
          <img :src="item.imgUrl" alt="">
          <div class="info">
            <p class="title">{{item.title}}</p>
            <p class="desc">{{item.desc}}</p>
          </div>
        </router-link>
      </ul>
    </div>
</template>

<script>
    export default {
      name:'HomeWeek',
      props:['weekendList'],

    }
</script>

<style lang="stylus" scoped>
  h2
    height: .8rem
    padding-left:.26rem
    line-height: .8rem
    color:#212121
    background-color: #f5f5f5
  li
    background-color: #fff
    img
      width:100%
    .info
      padding: .14rem .2rem .2rem .2rem
      .title
        overflow: hidden;
        padding-right: 1.4rem
        color: #212121;
        font-size: .28rem
        line-height: .48rem
        white-space: nowrap
        text-overflow: ellipsis
      .desc
        overflow: hidden;
        padding-right: 1.4rem
        color: #616161
        font-size: .24rem
        line-height: .42rem
        white-space: nowrap
        text-overflow: ellipsis

</style>
