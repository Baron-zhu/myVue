<template>
    <div class="car-screen">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Screen"
    }
</script>

<style lang="less" scoped>
    .car-screen {
        position: fixed;
        width: 100%;
        height: 100%;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }

</style>