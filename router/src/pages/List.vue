<template>
    <div>
        <h1>新闻资讯</h1>
        <ul>
            <li v-for="item in newsList" :key="item.id">
                <router-link :to="'/news/'+item.id">{{item.title}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "List",
        data() {
            return {
                newsList: [
                    {
                        id: "01",
                        title: "习近平：改革只有进行时、没有完成时"
                    },
                    {
                        id: "02",
                        title: "盐碱滩上接续创业（壮阔东方潮·奋进新时代）"
                    },
                    {
                        id: "03",
                        title: "7月份成绩单出炉 这些关系国计民生的问题有答案了"
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>