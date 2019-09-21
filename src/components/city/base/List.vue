<template>
    <div class="list"  ref = 'wraper'>
      <div>
        <div class="list-current">
          <h3 class='list-title border-topbottom'>当前城市</h3>
          <div class="city">
            <span>{{this.$store.state.city}}</span>
          </div>
        </div>
        <div class="list-hot">
          <h3 class='list-title border-topbottom'>热门城市</h3>
          <div class="city">
            <span v-for='(item,index) in hotCities'
                  @click='handleClick(item.name)'>{{item.name}}</span>
          </div>
        </div>
        <div class="list-item" v-for='(city,key) in cities'>
          <h3 class='list-title border-topbottom' :ref="key">{{key}}</h3>
          <ul>
            <li class='city-item border-bottom'
                v-for='item in city' @click='handleClick(item.name)'>{{item.name}}</li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
    export default {
      name:'CityList',
      props:['hotCities','cities'],
      mounted() {
        this.scroll = new BScroll(this.$refs.wraper,{
          click:true
        })

      },
      methods:{
        handleClick(city){
            this.$store.commit('changeCity',city)
            this.$router.push('/')
        }
      },
      computed:{
        letter(){
          return this.$store.state.letter
        }
      },
      watch:{
        letter(value){
          //console.log(arguments)
          //跳到指定dom节点
          this.scroll.scrollToElement(this.$refs[value][0])
        }
      }
    }
</script>

<style lang="stylus" scoped>
  .list
    position:fixed
    overflow: hidden
    top: 1.78rem
    left: 0
    right: 0
    bottom: 0
  .list-title
    line-height: 0.54rem
    background: #eee
    padding-left: 0.2rem
    color: #666
    font-size: 0.26rem
  .city
    padding-left:.15rem
    span
      display:inline-block
      width:28%
      padding:.15rem .2rem
      margin:.1rem
      border:.02rem solid #ccc
      text-align:center
      box-sizing:border-box
      border-radius:.05rem
  .city-item
    line-height:.8rem
    padding-left:.2rem
</style>
