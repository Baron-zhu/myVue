<template>
    <div class="car-navbar">
        <div class="navbar-left">
            {{left}}
            <slot v-if="!left" name="left"></slot>
        </div>
        <div class="navbar-center">
            {{center}}
            <slot v-if="!center" name="center"></slot>
        </div>
        <div class="navbar-right">
            {{right}}
            <slot v-if="!right" name="right"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NavBar",
        props: ["left", "center", "right"]
    }
</script>

<style lang="less" scoped>
    @import '../assets/less/var.less';
    .car-navbar {
        .height(103rem);
        background: @primary;
        color: @navbar-color;
        display: flex;
        justify-content: space-between;
        // font-size: 18px;
        .navbar-left,
        .navbar-right {
            width: 1.5rem;
            text-align: center;
        }
        .navbar-left,
        .navbar-center,
        .navbar-right {
            .font-size(18em);
        }
        align-items: center;
    }
</style>