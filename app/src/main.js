// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// const Vue = require ("vue");
import Vue from 'vue'
// const App = require ("./App.vue");
import App from './App'
// import iview from 'iview';
// import 'iview/dist/styles/iview.css';
// import Button from "./uis/Button.vue";
import Uis from "./uis";
Vue.use(Uis,{xx:1});
// Vue.use(iview);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  components: { 
      App
   },
  template: `
    <App />
  `
      
})

// const router = require ("./router");
// import router from './router'

// import * as all from "./test";
// import hehe, {haha, b} from "./test";
// test.hehe();
// console.log(b);
// haha();
// hehe.hehe();

// console.log(all.default.hehe());
// console.log(all.haha());
// console.log(all.a);