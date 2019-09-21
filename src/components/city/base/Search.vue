<template>
    <div class="search">
      <input type="text"
         class="header-input"
         placeholder='请输入城市名和拼音'
          v-model="keywords">
      <div class="search-content" v-show="keywords" ref = 'wrap'>
        <ul>
          <li class="search-item border-bottom"
              v-for="(item,index) in filterCities"
              :key="item.id" @click='handleClick(item.name)'>{{item.name}}</li>
          <li v-if="!filterCities.length" class='search-item border-bottom'>未匹配到数据</li>
        </ul>
      </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
    export default {
      name:'CitySearch',
      props:['cities'],
      data(){
        return{
          keywords:''
        }
      },
      computed:{
        filterCities(){
          let result = []
          for(let key in this.cities){
            this.cities[key].forEach((city,index)=>{
              if(city.name.includes(this.keywords)||city.spell.includes(this.keywords)){
                result.push(city)
              }
            })
          }
          return result
        }
      },
      methods:{
        handleClick(city){
          this.$store.commit('changeCity',city)
          this.$router.push('/')
        }
      },
      mounted(){
        this.scroll = new BScroll(this.$refs.wrap,{
          click:true
        })
      }
    }
</script>

<style lang="stylus" scoped>
.search
  position:relative
  height:.72rem
  padding:0.1rem
  background-color:#00bcd4
  .header-input
    width:100%
    height:100%
    border-radius:.1rem
    text-align:center
  .search-content
    position:fixed
    z-index:20
    overflow:hidden
    top:1.78rem
    left:0
    right:0
    bottom:0
    background-color:#eee
    .search-item
      line-height:.8rem
      padding-left:.2rem
      background-color:#fff
</style>
