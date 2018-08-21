<template>
  <div id="app">
    <transition 
      :enter-active-class="enter"
      :leave-active-class="leave"
    >
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
    name: 'App',
    data() {
      return {
        enter: 'animated slideInLeft',
        leave: 'animated slideOutRight'
      }
    },
    watch: {
        $route (to,from) {
            const toArr = to.path.split('/');
            const fromArr = from.path.split('/');
            const toLength = toArr.filter(value => {
                if (value.length == 0) return false;
                return true;
            });
            const fromLength = fromArr.filter(value => {
                if (value.length == 0)return false;
                return true;
            });
            if (toLength > fromLength) {
                this.enter = "page-swiper slideInRight";
                this.leave = "page-swiper slideOutLeft";
            }else if (toLength < fromLength) {
                this.enter = "page-swiper slideInLeft";
                this.leave = "page-swiper slideOutRight";
            }
        }
    }
}
</script>

<style lang="less" scoped>
@import './assets/less/var.less';
  .page-swiper {
      -webkit-animation-duration: .5s;
      animation-duration: .5s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
  }
  body {
    margin: 0;
    padding: 0;
  }
  
  .header {
    .height(103rem);
    background: #ff88bb;
  }
</style>
