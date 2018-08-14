<template>
    <div id="app">
      <Banner />
      <input type="text" v-focus="true" />
      <!-- <div style="text-align: center;">
        <Button type="disabled" long />
        <Button disabled type="info" />
        <Button type="info" />
        <Button type="success" long />
        <Button type="primary" />
        <Button type="warning" long />
        <Button type="error" />
        <Button type="dashed" />

        <Icon name="quanping" />
        <Icon name="shimingrenzheng" :size="50" />
        <div class="box"> -->
        <!--<transition name="fade">
              <h1 v-show="sw">哈哈哈哈啊</h1>
            </transition>
          </div> -->
          <!-- <transition name="slide">
          <div class="box" v-show="sw">
              <h1>哈哈哈哈啊</h1>
          </div>
          </transition> -->
          <!-- <transition enter-active-class="rotateIn" leave-active-class="rotateOut">
            <div class="box" v-show="sw">
                <h1>哈哈哈哈啊</h1>
            </div>
          </transition>
        <div>
          <iSwitch size="large" v-model="sw">
            <span slot="open">开启</span>
            <span slot="close">关闭</span>
          </iSwitch>
          <iSwitch size="large">
            <span slot="open">ON</span>
            <span slot="close">OFF</span>
          </iSwitch>
          <iSwitch size="default" disabled>
            <span slot="open">开</span>
            <span slot="close">关</span>
          </iSwitch>
          <iSwitch size="small" />
        </div>
      </div> -->

    </div>
</template>

<script>
import Banner from "@/pages/Banner"
// import Button from "./uis/Button";
// import Icon from "./uis/Icon";
// import iSwitch from "./uis/Switch";
// import Header from "./pages/Header";
export default {
  name: "App",
  components: {
    Banner
    // Button,
    // Icon,
    // iSwitch
  },
  data() {
    return {
      sw: true
    }
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
@keyframes rotateIn {
    from {
      transform: rotate(0deg);
      opacity: 0;
    }
    to {
      transform: rotate(360deg);
      opacity: 1;
    }
}
@keyframes rotateIn {
    from {
      transform: rotate(0deg);
      opacity: 1;
    }
    to {
      transform: rotate(360deg);
      opacity: 0;
    }
}
.rotateIn {
  animation: rotateIn 1s linear;
}
.rotateOut {
  animation: rotateOut 1s linear;
}
  .box {
    width: 300px;
    height: 100px;
    background: orange;
  }
  .slide-enter {
    transform: translateX(-300px);
  }
  .slide-enter-active {
    transition: transform 10s;
  }
  .slide-enter-to {
    transform: translateX(0);
  }
  .slide-leave {
    transform: translateX(300px );
  }
  .slide-leave-active {
    transition: transform 10s;
  }
  .slide-leave-to {
    transform: translateX(-300px);
  }
</style>
