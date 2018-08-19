<template>
    <Screen>
        <NavBar center="新闻详情">
            <template slot="left">
                <Button @click="$router.back()" />
            </template>
        </NavBar>
        <Content>
            NewsDetail
        </Content>
    </Screen>
</template>

<script>
    import Button from '@/components/Button';
    export default {
        name: "NewsDetail",
        components: {
            Button
        }
    }
</script>

<style scoped>

</style>