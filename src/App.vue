<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}

remChange()
window.addEventListener('resize',remChange);
function remChange(){
  let html = document.querySelector("html");
  let width = html.getBoundingClientRect().width;
  html.style.fontSize = width / 7.5 + "px"
}

</script>

<style>

</style>
