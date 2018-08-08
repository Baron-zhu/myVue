// 引入 vue 文件
import Vue from "vue"

// 引入 style.css 文件
import "./assets/style.css";
import "@/assets/app.less"
// 引入 App.vue 文件
import App from "./App"
console.log(App);


new Vue({
    el: "#app",
    template: `
        <App />
    `,
    components: {
        App
    },
    data: {
        title: "标题"
    }
})