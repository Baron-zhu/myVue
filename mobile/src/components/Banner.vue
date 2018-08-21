<template>
    <v-touch @swipeleft="left" @swiperight="right">
        <div class="car-banner">
            <transition-group
                :enter-active-class="enter"
                :leave-active-class="leave"
            >
                <div class="car-banner-item" v-if="bannerIndex == index" v-for="(item,index) in data" :key="index">
                    <img :src="item.url" />
                </div>
            </transition-group>
            <div class="car-listbars">
                <div class="bar-list" :class="{active: bannerIndex == index}" v-for="(item,index) in data" :key="index"></div>
            </div>
        </div>
    </v-touch>
</template>

<script>
    export default {
        name: "Banner",
        props: {
            data: {
                type: Array,
                default: []
            }
        },
        data() {
            return {
                bannerIndex: 0,
                enter: "banner-swiper slideInRight",
                leave: "banner-swiper slideOutLeft"
            }
        },
        methods: {
            left () {
                this.enter = "banner-swiper slideInRight";
                this.leave = "banner-swiper slideOutLeft";
                this.bannerIndex ++;
                if (this.bannerIndex >= this.data.length) {
                    this.bannerIndex = 0;
                }
            },
            right () {
                this.enter = "banner-swiper slideInLeft";
                this.leave = "banner-swiper slideOutRight";
                this.bannerIndex --;
                if (this.bannerIndex < 0) {
                    this.bannerIndex = this.data.length - 1;
                }
            }
        },
    }
</script>

<style lang="less" scoped>
    @import "../assets/less/var.less";
    .banner-swiper {
        -webkit-animation-duration: .5s;
        animation-duration: .5s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
    }
    .car-banner {
        width: 10rem;
        height: 112px;
        overflow: hidden;
        position: relative;
        .car-banner-item {
            width: 100%;
            position: absolute;
            img {
                width: 100%;
                height: 100%;
                display: block;
            }
        }
        .car-listbars {
            width: 10rem;
            height: 10px;
            position: absolute;
            bottom: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            .bar-list {
                width: 10px;
                height: 10px;
                border-radius: 10px;
                background: #ffffff;
                margin: 0 5px;
                &.active {
                    background: red;
                }
            }
        }
    }
</style>