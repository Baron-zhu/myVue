<template>
    <i class="iconfont" :class="['icon-'+name]" :style="{fontSize: size + 'px',color}"></i>
</template>

<script>
    import "./fonts/iconfont.css"
    export default {
        name: "Icon",
        props: {
            name: {
                type: String,
                required: true
            },
            size: {
                type: Number,
                default: 14
            },
            color: {
                type: String,
                default: "orange"
            }
        }
    }
</script>

<style lang="less" scoped>
    
</style>