<template>
  <div id="app">
    <transition enter-active-class="animated slideInLeft" leave-active-class="animated slideOutRight">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less" scoped>
@import './assets/less/var.less';
  body {
    margin: 0;
    padding: 0;
  }
  
  .header {
    .height(103rem);
    background: #ff88bb;
  }
</style>
