<template>
    <div class="car-avatar" :style="{width: aSize, height: aSize}">
        <img :src="src" />
    </div>
</template>

<script>
    export default {
        name: "Avatar",
        props: {
            src: String,
            size: {
                type: Number,
                default: 1
            }
        },
        computed: {
            aSize() {
                return this.size + "rem" 
            }
        },
    }
</script>

<style lang="less">
    .car-avatar {
        background: red;
        border-radius: 100%;
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
        }
    }
</style>