<template>
  <div id="app">
    <div class="header">
      <!-- <a href="/">首页</a>
      <a href="/about">关于我们</a> -->
      <router-link to="/">首页</router-link>
      <!-- <router-link to="/news">新闻</router-link>
      <router-link to="/about">关于</router-link> -->
      <router-link to="/goods">商品</router-link>
      <router-link to="/order">订单</router-link>
      <router-link to="/car">购物车</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
