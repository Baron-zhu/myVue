<template>
    <button class="btn" @click="$emit('click')">返回</button>
</template>

<script>
    export default {
        name: "Button"
    }
</script>

<style lang="less" scoped>
    .btn {
        border-radius: 4px;
        border: 1px solid orange;
        padding: 2px 4px;
        outline: none;
    }

</style>