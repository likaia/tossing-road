<template>
    <div id="main-content">
        <!--轮播区域-->
        <div class="carousel-Area">
            <el-carousel trigger="click" height="150px" arrow="never">
                <el-carousel-item v-for="item in carouselData" :key="item.id">
                    <img :src="item.src" alt="">
                    <div class="title-panel">
                        <h3 v-if="item.info">{{item.info}}</h3>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
        <!--父组件标题-->
        <div class="feed-option">
            <p>{{linksTitle}}</p>
        </div>
        <!--main列表-->
        <div class="main-list">
            <div class="item-info" v-for="item in mainContentData" :key="item.id">
                <div class="item-left">
                    <div class="item-title">
                        <h4>{{item.title}}</h4>
                    </div>
                    <div class="item-summary">
                        <p>
                            {{item.summary}}
                        </p>
                    </div>
                    <div class="item-meta">
                        <div class="like-area">
                            <div class="ico-panel">
                                <i class="iconfont icon-dianzan"></i>
                            </div>
                            <div class="votes-num">
                                <span>{{item.num}}</span>
                            </div>
                            <div class="dot">
                                <span>·</span>
                            </div>
                            <div class="votes-word">
                                <span>赞</span>
                            </div>
                        </div>
                        <div class="author-info">
                            <span class="author">{{item.author}}</span>
                            <span class="dot">·</span>
                            <span>{{item.time}}</span>
                        </div>
                    </div>
                </div>
                <div class="item-right">
                    <div class="img-panel">
                        <img src="" alt="">
                    </div>
                </div>
            </div>
            <div class="noData" v-if="mainContentData.length===0">
                <p>暂无数据</p>
            </div>
        </div>
    </div>
</template>

<script>
    let linksData = require('../assets/data/links.json');  //本地json文件数据
    export default {
        name: "main-content",
        /*页面创建完毕*/
        created: function () {
            this.linksTitle = linksData[this.$route.query.links];
            if (this.$route.query.links === "recommend") {
                this.$axios.get("https://easy-mock.com/mock/5ccd2aa2fcfb700f5afce877/example/example/getMainContentData").then((data) => {
                    this.mainContentData = data.data.payload.content
                });
            }
        },
        mounted: function () {
            /*默认路由参数(调用接口获取所对应的数据)*/
            if (!this.$route.query.links) {
                this.$axios.get("https://easy-mock.com/mock/5ccd2aa2fcfb700f5afce877/example/example/getMainContentData").then((data) => {
                    this.mainContentData = data.data.payload.content
                });
            }
        },
        data() {
            return {
                carouselData: [
                    {
                        id: 1,
                        src: 'https://image-static.segmentfault.com/536/197/536197400-5c85cd29add00',
                        info: ''
                    },
                    {
                        id: 2,
                        src: 'https://image-static.segmentfault.com/642/650/642650982-5c86366425d04',
                        info: ''
                    },
                    {
                        id: 3,
                        src: 'https://image-static.segmentfault.com/299/387/2993876284-5cceb4963c3e1',
                        info: '超过千人学习过的微服务课程'
                    },
                    {
                        id: 4,
                        src: 'https://image-static.segmentfault.com/131/301/1313011719-5bc6a63ef190f',
                        info: 'iView 实战系列教程'
                    }
                ],
                mainContentData: [],
                links: null,
                linksTitle: null
            }
        },
        /*导航守卫:在当前路由改变，但是该组件被复用时调用,可以访问this*/
        beforeRouteUpdate(to, from, next) {
            this.links = to.query.links;
            if (this.links === 'recommend') {
                this.$axios.get("https://easy-mock.com/mock/5ccd2aa2fcfb700f5afce877/example/example/getMainContentData").then((data) => {
                    this.mainContentData = data.data.payload.content
                });
            } else {
                this.mainContentData = [];
                this.$message.closeAll();
                this.$message('暂无数据');
            }
            //查询links文件，查找与其对应的标题
            this.linksTitle = linksData[this.links];
            //一定要调用该方法来 resolve 这个钩子
            next();
        }
    }
</script>

<style scoped lang="scss" src="../assets/scss/main-content.scss"></style>
