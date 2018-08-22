<template>
    <Menu 
        mode="horizontal"
        theme="dark"
        active-name="1"
        @on-select="select"
    >
        <MenuItem name="/">
            首页
        </MenuItem>
        <MenuItem name="/login">
            登录
        </MenuItem>
        <MenuItem name="/register">
            注册
        </MenuItem>

    </Menu>
</template>

<script>
    export default {
        name: "Header",
        methods: {
            select(name) {
                this.$router.push(name)
                
            }
        },
    }
</script>

<style scoped>

</style>