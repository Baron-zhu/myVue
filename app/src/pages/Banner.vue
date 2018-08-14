<template>
    <div class="banner">
        <transition-group :enter-active-class="enter" :leave-active-class="leave">
            <div class="img" v-show="index == bannerIndex" v-for="(img,index) in bannerImgs" :key="index">
                <img :src="img" />
            </div>
        </transition-group>
        <div class="toggle">
            <Button type="success" @click="prev">上一张</Button>
            <Button type="error" @click="next">下一张</Button>
        </div>
        <div class="togglebtns">
            <div class="btn" :class="{active: index == bannerIndex}" @click="bannerIndex = index" v-for="(item,index) in bannerImgs" :key="index"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Banner",
        data() {
            return {
                bannerImgs: [
                    require("../assets/img/1.jpg"),
                    require("../assets/img/3.jpg"),
                    require("../assets/img/4.jpg"),
                    require("../assets/img/5.jpg"),
                ],
                bannerIndex: 0,
                enter: "animated fadeInLeft",
                leave: "animated fadeOutRight",
                playState: false
            }
        },
        mounted(){ // 挂载好了
            // 挂载好之后才可以访问dom
            setInterval(()=>{
                this.bannerIndex++;
                if(this.bannerIndex > this.bannerImgs.length-1){
                    this.bannerIndex = 0
                }
            },2000)
        },
        methods: {
            prev() {
                this.bannerIndex --;
                this.enter = "animated slideInRight";
                this.leave = "animated slideOutLeft";
                if (this.bannerIndex < 0) {
                    this.bannerIndex = 0;
                }
            },
            next() {
                this.bannerIndex ++;
                this.enter = "animated slideInLeft";
                this.leave = "animated slideOutRight";
                if (this.bannerIndex >= this.bannerImgs.length) {
                    this.bannerIndex = this.bannerImgs.length - 1;
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .banner {
        // width: 1366px;
        /* height: 400px; */
        position: relative;
        background: #dddddd;
        text-align: center;
        // margin-bottom: 30px; 
            height: 400px;
            overflow: hidden;
        .img {
            img {
                display: block;
                max-width: 100%;
            }
        }
        .toggle {
            position: absolute;
            width: 100%;
            bottom: 0;
            z-index: 9999;
            text-align: center;
        }
        .togglebtns {
            width: 100%;
            position: absolute;
            bottom: 50px;
            // background: red;
            display: flex;
            justify-content: center;
            .btn {
                width: 10px;
                height: 10px;
                border-radius: 10px;
                background: #ffffff;
                margin: 0 5px;
                cursor: pointer;
                &.active {
                    background: orange;
                }
            }
        }
    }
</style>