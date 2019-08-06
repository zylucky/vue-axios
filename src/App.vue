<template>
  <div id="app">
    <!-- 路由视口 -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  
}
</script>

<style>
@import url(../static/base.css);
@font-face {
  font-family: 'pingfang';
  src: url('./assets/font/PingFang.otf');
  font-weight: normal;
  font-style: normal;
}
html{
  font-family: 'pingfang' !important;
}
</style>
