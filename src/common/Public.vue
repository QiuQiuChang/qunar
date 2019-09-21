<template>
    <div class="public">
      <public-header></public-header>
      <public-content></public-content>
    </div>
</template>

<script>
import PublicHeader from './base/Header'
import PublicContent from './base/Content'
    export default {
      name:'public',
      components:{
        PublicHeader,
        PublicContent
      }
    }
</script>

<style lang="stylus" scoped>
  .public
    position:absolute
    top:0
    left:0
    right:0
    bottom:0
    background-color: #fff
    text-align:center
</style>
