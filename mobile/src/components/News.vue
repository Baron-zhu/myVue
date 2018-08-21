<template>
    <div class="car-news">
        <v-touch v-for="item in data" :key="item.id" @tap="$emit('select',item)">
            <div class="car-news-item" >
                <header class="car-news-item-header">
                    <Avatar :size="1.5" :src="item.userpic" />
                    <div class="car-news-item-header-info">
                        <h3>{{item.username}}</h3>
                        <small>{{item.pubtime}}</small>
                    </div>
                    <Icon name="arrowright" :size="40" color="orange" />
                </header>
                <p>
                    {{item.content}}
                </p>
                <div class="car-news-imgs">
                    <div class="image" v-for="(img,index) in item.photos" :key="index">
                        <img :src="img" />
                    </div>
                </div>
                <footer class="car-news-item-footer">
                    <div class="left">
                        {{item.like}}赞 {{item.comment}}评论
                    </div>
                    <div class="icons">
                        <Icon name="like" :size="30" />
                        <Icon name="comment" :size="30" />
                        <Icon name="share" :size="30" />
                    </div>
                </footer>
            </div>
        </v-touch>
    </div>
</template>

<script>
    export default {
        name: "News",
        props: {
            data: {
                type: Array,
                default: []
            }
        },
        data() {
            return {
                images: []
            }
        },
    }
</script>

<style lang="less">
    .car-news{
        display: flex;
        flex-direction: column;
        font-size: 16px;
        .car-news-item{
            width: 100%;
            display: flex;
            flex-direction: column;
            .car-news-item-header{
                width: 100%;
                display: flex;
                flex-direction: row;

                .car-news-item-header-info{
                    flex: 1;
                    display:flex;
                    flex-direction: column;
                    justify-content: center;
                    h3 {
                        margin: 0;

                    }
                }
            }
            .car-news-imgs {
                display: flex;
                align-items: center;
                justify-content: space-around;
                flex-wrap: wrap;
                .image {
                    width: 3.1rem;
                    height: 3.1rem;
                    margin: 5px 0;
                    background: #eeeeee;
                    img {
                        display: block;
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            .car-news-item-footer {
                display: flex;
                justify-content: space-between;
                color: #999999;
                .icons {
                }
            }
        }
    }
</style>