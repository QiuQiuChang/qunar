<template>
    <div class="favourite">
      <div class="title">
        <img src="https://imgs.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="">
        <span>猜你喜欢</span>
      </div>
      <ul>
        <router-link :to="{name:'DetailLink',params:{id:item.id}}" class="item border-bottom" v-for="(item,index) in recommendList" :key="item.id">
          <img class='item-img' :src="item.imgUrl" alt="">
          <div class="item-info">
            <h4>{{item.title}}</h4>
            <div class='item-fav-info clearfix'>
              <p class='item-fav-text'>
                <i v-for='i in 5' class='iconfont icon-star'></i>
                <span class='item-fav-star' :style="item.score | star">
                    <i v-for='i in 5' class='iconfont icon-star'></i>
                </span>
              </p>
              <p class='item-text-right'>
                <span>{{item.comment}}条评论</span>
              </p>
            </div>
            <p class='item-price'>
              <i>￥</i>
              <span>{{item.price}}</span>
              <em>起</em>
            </p>
          </div>
        </router-link>
      </ul>
      <div class="footer">
         <a href="#">查看所有产品</a>
      </div>
    </div>
</template>

<script>
    export default {
        name:'HomeFavourite',
        props:['recommendList'],
        data(){
          return{

          }
        },
      filters:{
          star(score){
            return {
              width:score*100/5 + '%'
            }

          }


      }

    }
</script>

<style lang="stylus" scoped>
.favourite
  margin-top: .2rem
  background-color:#fff
  .border-bottom:before
    border-color:#777
  .title
    padding: .24rem 0 .26rem
    font-size: .32rem
    img
      width: 0.3rem
      height:0.3rem
      margin-left:0.2rem
      vertical-align :top
    span
      margin-left: .08rem;
      height: .44rem;
      color: #212121;
      font-size: .32rem;
      line-height: .44rem;
  .item
    display:flex
    height: 2.2rem
    padding:.2rem
    .item-img
      width:2rem
      height:2rem
    .item-info
      flex:1
      padding: .1rem
      margin-left:.1rem
      min-width: 0rem;
      h4
        line-height:.6rem
        font-size:.3rem
      .item-price
        color:#ff8300
        font-size:0
        line-height:.4rem
        i
          font-size: .24rem
        span
          font-size: .4rem
        em
          font-size: .24rem;
          color:#616161
      .item-fav-info
        line-height:.6rem
        .item-fav-text
          position:relative
          display:inline-block
          float:left
          color:#ccc
          margin-right:.5rem
          .item-fav-star
            overflow:hidden
            position:absolute
            left:0
            top:0
            color:#ffb436
        .item-text-right
          float:left
  .footer
    padding: .2rem 0
    color: #00afc7
    font-size: .28rem
    line-height: .4rem
    text-align: center
</style>
