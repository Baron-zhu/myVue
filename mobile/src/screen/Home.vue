<template>
    <Content scrollY scrollX>
        <div class="cont">
            <Banner :data="imgs" />
            <News :data="news" @select="select"/>
        </div>
    </Content>
</template>

<script>
    // import Content from "@/components/Content";
    import Banner from "@/components/Banner";
    export default {
        name: "Home",
        data() {
            return {
                news: [
                    {
                        id: "1",
                        userpic: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534859962473&di=2126de827a9819d77f76027211cba225&imgtype=0&src=http%3A%2F%2Fimages.liqucn.com%2Fimg%2Fh1%2Fh971%2Fimg201709211633300_info300X300.jpg",
                        username: "今天出去浪",
                        pubtime: "今天 20:07",
                        content: "今天出去浪,开心一屌糟",
                        photos: [
                            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534859962469&di=e6cf08c730a4a0bb9fa3eabe72b096f0&imgtype=0&src=http%3A%2F%2Fimages.liqucn.com%2Fimg%2Fh1%2Fh971%2Fimg201709211701380_info300X300.jpg",
                            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534859962469&di=93299e74a4dc01cfef7b184d53353fe1&imgtype=0&src=http%3A%2F%2Fimages.liqucn.com%2Fimg%2Fh1%2Fh971%2Fimg201709211542260_info300X300.jpg",
                            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534859962469&di=fa155ad6bbc8137c5758d365e630f58d&imgtype=0&src=http%3A%2F%2Fwww.qqzhi.com%2Fuploadpic%2F2015-01-17%2F080804121.jpg",
                            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534859962468&di=e9ef0e017d6c2eea7c43f7818f5b4448&imgtype=0&src=http%3A%2F%2Fwww.qqzhi.com%2Fuploadpic%2F2015-02-03%2F015740150.jpg",
                            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534859962465&di=15fd88a02c918e7753b02a35d93e8dd2&imgtype=0&src=http%3A%2F%2Fwww.qqzhi.com%2Fuploadpic%2F2014-10-03%2F050247475.jpg",
                            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534859962463&di=b8bfc6ce2779cb156bc927befa3bcd64&imgtype=0&src=http%3A%2F%2Fimages.liqucn.com%2Fimg%2Fh1%2Fh964%2Fimg201709151736430_info300X300.jpg"
                        ],
                        like: 3,
                        comment: 8
                    },
                    {
                        id: "2",
                        userpic: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534859962473&di=2126de827a9819d77f76027211cba225&imgtype=0&src=http%3A%2F%2Fimages.liqucn.com%2Fimg%2Fh1%2Fh971%2Fimg201709211633300_info300X300.jpg",
                        username: "今天出去浪",
                        pubtime: "今天 10:01",
                        content: "今天出去浪,开心一屌糟",
                        photos: [
                            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534859962469&di=e6cf08c730a4a0bb9fa3eabe72b096f0&imgtype=0&src=http%3A%2F%2Fimages.liqucn.com%2Fimg%2Fh1%2Fh971%2Fimg201709211701380_info300X300.jpg",
                            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534859962469&di=93299e74a4dc01cfef7b184d53353fe1&imgtype=0&src=http%3A%2F%2Fimages.liqucn.com%2Fimg%2Fh1%2Fh971%2Fimg201709211542260_info300X300.jpg",
                            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534859962469&di=fa155ad6bbc8137c5758d365e630f58d&imgtype=0&src=http%3A%2F%2Fwww.qqzhi.com%2Fuploadpic%2F2015-01-17%2F080804121.jpg",
                            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534859962468&di=e9ef0e017d6c2eea7c43f7818f5b4448&imgtype=0&src=http%3A%2F%2Fwww.qqzhi.com%2Fuploadpic%2F2015-02-03%2F015740150.jpg",
                            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534859962465&di=15fd88a02c918e7753b02a35d93e8dd2&imgtype=0&src=http%3A%2F%2Fwww.qqzhi.com%2Fuploadpic%2F2014-10-03%2F050247475.jpg",
                            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534859962463&di=b8bfc6ce2779cb156bc927befa3bcd64&imgtype=0&src=http%3A%2F%2Fimages.liqucn.com%2Fimg%2Fh1%2Fh964%2Fimg201709151736430_info300X300.jpg"
                        ],
                        like: 232,
                        comment: 4312
                    }
                ],
                imgs: [
                    {
                        path: "/screen/Club",
                        url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534759427990&di=75c9f069d8275ba90ffa83c0b2465baa&imgtype=0&src=http%3A%2F%2Fimg.leadong-web.com%2Fhtml-cn%2Fimage%2F18-hiAKUpHMsldD-1-1.jpg"
                    },
                    {
                        path: "/screen/Message",
                        url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534760463101&di=3941c1c8546b38cbbb8fc57c27139e53&imgtype=0&src=http%3A%2F%2Fsiyuantuliao.com%2Ftemplate%2Fimages%2Fbanner1.jpg"
                    },
                    {
                        path: "/screen/Mine",
                        url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534760480575&di=1bd049206204c0492f88d0c7c57a0e9d&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F17%2F11%2F20%2F74I58PICnqa_1024.jpg"
                    },
                    {
                        path: "/screen/NewsDetail",
                        url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534760496233&di=444fbee28318a379517c8e154b1b8a06&imgtype=0&src=http%3A%2F%2Flyjswj.com%2Fimages%2Fbanner.jpg"
                    }
                ]
            }
        },
        methods: {
            select(item) {
                // console.log(item);
                this.$router.push({name: "NewsDetail",params: {item}});
            }
        },
        components: {
            // Content,
            Banner
        }
    }
</script>

<style lang="less" scoped>
    

</style>