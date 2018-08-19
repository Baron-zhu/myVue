<template>
    <Screen>
        <NavBar :center="title" right="菜单" />
        <Home v-if="tabIndex == 0" />
        <Club v-if="tabIndex == 1" />
        <Message v-if="tabIndex == 2" />
        <Mine v-if="tabIndex == 3" />
        <TabBar :data="tabs" @select="select" />
    </Screen>
</template>

<script>
    import Home from "./Home.vue";
    import Club from "./Club.vue";
    import Message from "./Message.vue";
    import Mine from "./Mine.vue";
    export default {
        name: "TabHome",
        components: {
            Home,
            Club,
            Message,
            Mine
        },
        methods: {
            select(item,index) {
                this.tabIndex = index;
                this.title = item.label;                
            }
        },
        data() {
            return {
                tabIndex: 0,
                title: "首页",
                tabs: [
                    {
                        icon: [
                            require("../assets/icons/home_default@3x.png"),
                            require("../assets/icons/home_onclick@3x.png")
                        ],
                        label: "首页",
                        // handler:(item,index)=>{
                        //     this.tabIndex = index;
                        // }
                    },
                    {
                        icon: [
                            require("../assets/icons/club_default@3x.png"),
                            require("../assets/icons/club_onclick@3x.png")
                        ],
                        label: "车汇",
                        // handler:(item,index)=>{
                        //     this.tabIndex = index;
                        // }
                    },
                    {
                        icon: [
                            require("../assets/icons/news_default@3x.png"),
                            require("../assets/icons/news_onclick@3x.png")
                        ],
                        label: "消息",
                        // handler:(item,index)=>{
                        //     this.tabIndex = index;
                        // }
                    },
                    {
                        icon: [
                            require("../assets/icons/mine_default@3x.png"),
                            require("../assets/icons/mine_onclick@3x.png")
                        ],
                        label: "我的",
                        // handler:(item,index)=>{
                        //     this.tabIndex = index;
                        // }
                    }
                ]
            }
        },
    }
</script>

<style scoped>

</style>