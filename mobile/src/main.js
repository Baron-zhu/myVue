// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'amfe-flexible/index'
import './assets/styles/normalize.css'
import './assets/styles/animate.css'
import Cpts from '@/components/index'

Vue.config.productionTip = false

Vue.use(Cpts)
let width = window.innerWidth / 10;
document.documentElement.style.fontSize = width + 'px';
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
