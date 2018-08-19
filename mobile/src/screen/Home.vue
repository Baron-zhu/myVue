<template>
    <Content scrollY scrollX>
        <h1>Home</h1>
        <button @click="$router.push('./NewsDetail')">跳转</button>
    </Content>
</template>

<script>
    import Content from "@/components/Content";
    export default {
        name: "Home",
        components: {
            Content
        }
    }
</script>

<style scoped>

</style>