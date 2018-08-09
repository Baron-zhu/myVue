console.log("位置：main.js");


import App from "./App";
import Vue from "vue";

new Vue({
    el: "#app",
    template: `
        <App />
    `,
    components: {
        App
    },
    data: {
        val: ""
    }
})