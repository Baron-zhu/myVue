<template>
    <i class="iconfont" :class="['icon-'+name]" :style="{fontSize:size+'px',color}"></i>
</template>

<script>
    import './fonts/iconfont.css'
    export default {
        name:"Icon",
        props:{
            name: {
                type: String,
                default: 'like'
            },
            size: Number,
            color: String
        }
    }
</script>

<style lang="less">

</style>