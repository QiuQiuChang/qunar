<template>
    <div class="footer">
      <ul class="clearfix">
        <li><a href="#">登录</a></li>
        <li><a href="#">我的订单</a></li>
        <li><a href="#">最近浏览</a></li>
        <li><a href="#">关于我们</a></li>
      </ul>
    </div>
</template>

<script>
    export default {
      name:'HomeFooter'
    }
</script>

<style lang="stylus" scoped>
.footer
  height:0.8rem
  padding:0.55rem
  ul
    padding-left:0.3rem
   li
     float:left
     margin-right:0.5rem
     height:0.5rem
     line-height:0.5rem
     text-align:center
   li:last-child
     margin-right:0
     a
       font-size:0.3rem
</style>
