<template>
    <div class="car-tabbar">
        <!-- <div class="car-tabbar-item" @click="tabIndex = index;item.handler(item,index)" v-for="(item,index) in data" :key="item.label">
            <div class="car-tabbar-item-icon">
                <img :src="item.icon[0]" v-if="index != tabIndex" />
                <img :src="item.icon[1]" v-else />
            </div>
            <div class="car-tabbar-item-label" :class="{active: index == tabIndex}">{{item.label}}</div>
        </div> -->
        <div class="car-tabbar-item" @click="click(item,index)" v-for="(item,index) in data" :key="item.label">
            <div class="car-tabbar-item-icon">
                <img :src="item.icon[0]" v-if="index != tabIndex" />
                <img :src="item.icon[1]" v-else />
            </div>
            <div class="car-tabbar-item-label" :class="{active: index == tabIndex}">{{item.label}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabBar",
        props: ["data"],
        data() {
            return {
                tabIndex: 0
            }
        },
        methods: {
            click(item,index) {
                if(typeof item.handler == "function") item.handler(item,index);
                this.tabIndex = index;
                this.$emit("select",item, index);
            }
        },
    }
</script>

<style lang="less" scoped>
    @import "../assets/less/var.less";
    .car-tabbar {
        .height(110rem);
        border-top: 1px solid @tabbar-border-color;
        display: flex;
        box-sizing: border-box;
        justify-content: space-around;
        align-items: center;
        .car-tabbar-item {
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            .car-tabbar-item-icon {
                .width(50rem);
                img {
                    max-width: 100%;
                }
            }
            .car-tabbar-item-label {
                &.active {
                    color: @primary;
                }
                .font-size(12em);
            }
        }
    }

</style>