<template>
    <Screen>
        <NavBar center="新闻详情">
            <template slot="left">
                <Button @click="$router.back()" />
            </template>
        </NavBar>
        <Content>
            <News :data="data" />
        </Content>
    </Screen>
</template>

<script>
    import Button from '@/components/Button';
    export default {
        name: "NewsDetail",
        data() {
            return {
                data: []
            }
        },
        created(){
            // console.log(this.$route);
            this.data = [this.$route.params.item]
        },
        // watch: {
        //     $route(to, from) {
        //         console.log(to);
                
        //     }
        // },
        components: {
            Button
        }
    }
</script>

<style scoped>

</style>