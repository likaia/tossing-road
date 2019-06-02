<template>
    <div id="main-parent">
        <!---banner区域-->
        <transition name="el-fade-in-linear">
            <div class="main-banner" v-show="bannerStats">
                <!--关闭图标-->
                <div class="close-panel" @click="closeBanner">
                    <i class="el-icon-error"></i>
                </div>
                <div class="banner-content">
                    <div class="text-panel">
                        <h1 class="title">{{pageData.bannerData.bannerTitle}}</h1>
                        <p class="desc">{{pageData.bannerData.bannerContent}}</p>
                    </div>
                    <div class="btn-panel">
                        <div class="img-panel">
                            <div class="occlusion">

                            </div>
                            <img src="../assets/banner-img.png" alt="">
                        </div>
                        <div class="maxBtn TrRSFRegister">
                            <span>免费注册</span>
                        </div>
                        <div class="maxBtn TRLogin">
                            <span>立即登录</span>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
        <!--侧边栏-->
        <div class="main-content">
            <div class="side-menu">
                <!--为你推荐-->
                <div class="recommended-to-you">
                    <ul>
                        <router-link :to="{name:'mainContent','query':{links:'recommend'}}">
                            <li :class="[this.$route.query.links==='recommend'?'selected':'']">
                                <div class="ico-panel">
                                    <i class="iconfont icon-jinrituijian"></i>
                                </div>
                                <span>为你推荐</span>
                            </li>
                        </router-link>
                        <router-link :to="{name:'mainContent','query':{links:'popular'}}">
                            <li :class="[this.$route.query.links==='popular'?'selected':'']">
                                <div class="ico-panel">
                                    <i class="iconfont icon-remen"></i>
                                </div>
                                <span>近期热门</span>
                            </li>
                        </router-link>
                        <router-link :to="{name:'mainContent','query':{links:'newest'}}">
                            <li :class="[this.$route.query.links==='newest'?'selected':'']">
                                <div class="ico-panel">
                                    <i class="iconfont icon-zuixin"></i>
                                </div>
                                <span>最新内容</span>
                            </li>
                        </router-link>
                    </ul>
                </div>
                <!--技术频道-->
                <div class="technology-channel">
                    <div class="title">
                        <h5>技术频道</h5>
                    </div>
                    <ul>
                        <router-link :to="{name:'mainContent','query':{links:'frontEnd'}}">
                            <li :class="[this.$route.query.links==='frontEnd'?'selected':'']">
                                <div class="ico-panel">
                                    <i class="iconfont icon-java-script"></i>
                                </div>
                                <span>前端</span>
                            </li>
                        </router-link>
                        <router-link :to="{name:'mainContent','query':{links:'rearEnd'}}">
                            <li :class="[this.$route.query.links==='rearEnd'?'selected':'']">
                                <div class="ico-panel">
                                    <i class="iconfont icon-suyaniconchanpinleibufenzuodaohangbufen84"></i>
                                </div>
                                <span>后端</span>
                            </li>
                        </router-link>
                        <router-link :to="{name:'mainContent','query':{links:'applets'}}">
                            <li :class="[this.$route.query.links==='applets'?'selected':'']">
                                <div class="ico-panel">
                                    <i class="iconfont icon-xiaochengxu"></i>
                                </div>
                                <span>小程序</span>
                            </li>
                        </router-link>
                        <router-link :to="{name:'mainContent','query':{links:'AI'}}">
                            <li :class="[this.$route.query.links==='AI'?'selected':'']">
                                <div class="ico-panel">
                                    <i class="iconfont icon-rengongzhineng"></i>
                                </div>
                                <span>人工智能</span>
                            </li>
                        </router-link>
                        <router-link :to="{name:'mainContent','query':{links:'blockchain'}}">
                            <li :class="[this.$route.query.links==='blockchain'?'selected':'']">
                                <div class="ico-panel">
                                    <i class="iconfont icon-qukuailian"></i>
                                </div>
                                <span>区块链</span>
                            </li>
                        </router-link>
                        <router-link :to="{name:'mainContent','query':{links:'security'}}">
                            <li :class="[this.$route.query.links==='security'?'selected':'']">
                                <div class="ico-panel">
                                    <i class="iconfont icon-anquan"></i>
                                </div>
                                <span>安全</span>
                            </li>
                        </router-link>
                        <router-link :to="{name:'mainContent','query':{links:'android'}}">
                            <li :class="[this.$route.query.links==='android'?'selected':'']">
                                <div class="ico-panel">
                                    <i class="iconfont icon-android"></i>
                                </div>
                                <span>Android</span>
                            </li>
                        </router-link>
                        <router-link :to="{name:'mainContent','query':{links:'ios'}}">
                            <li :class="[this.$route.query.links==='ios'?'selected':'']">
                                <div class="ico-panel">
                                    <i class="iconfont icon-ios"></i>
                                </div>
                                <span>ios</span>
                            </li>
                        </router-link>
                        <router-link :to="{name:'mainContent','query':{links:'tool'}}">
                            <li :class="[this.$route.query.links==='tool'?'selected':'']">
                                <div class="ico-panel">
                                    <i class="iconfont icon-gongju"></i>
                                </div>
                                <span>工具</span>
                            </li>
                        </router-link>
                        <router-link :to="{name:'mainContent','query':{links:'programmer'}}">
                            <li :class="[this.$route.query.links==='programmer'?'selected':'']">
                                <div class="ico-panel">
                                    <i class="iconfont icon-it"></i>
                                </div>
                                <span>程序员</span>
                            </li>
                        </router-link>
                        <router-link :to="{name:'mainContent','query':{links:'industry'}}">
                            <li :class="[this.$route.query.links==='industry'?'selected':'']">
                                <div class="ico-panel">
                                    <i class="iconfont icon-xingye"></i>
                                </div>
                                <span>行业</span>
                            </li>
                        </router-link>
                        <router-link :to="{name:'mainContent','query':{links:'TROfficial'}}">
                            <li :class="[this.$route.query.links==='TROfficial'?'selected':'']">
                                <div class="ico-panel">
                                    <i class="iconfont icon-guanfang2"></i>
                                </div>
                                <span>TR官方</span>
                            </li>
                        </router-link>
                        <router-link :to="{name:'mainContent','query':{links:'otherTags'}}">
                            <li :class="[this.$route.query.links==='otherTags'?'selected':'']">
                                <div class="ico-panel">
                                    <i class="iconfont icon-biaoqian"></i>
                                </div>
                                <span>更多标签</span>
                            </li>
                        </router-link>
                    </ul>
                </div>
            </div>
            <!--路由出口-->
            <transition name="slide">
                <div class="main-content-view">
                    <router-view name="mainArea"/>
                </div>
            </transition>
            <!--右侧菜单-->
            <div class="side-menu-right">
                <div class="notices">
                    <span>欢迎大家号召公司的同学一起来tr写文章</span>
                </div>
                <div class="ad-area">
                    <div class="img-panel">

                    </div>
                    <div class="info-panel">
                        <span>想在上方展示你的广告？</span>
                    </div>
                </div>
                <!--直播推荐区域-->
                <div class="live-recommend-area">
                    <div class="live-recommend-header">
                        <h4>课程推荐</h4>
                        <div class="live-recommend-switch" @mouseover="liveMouseOR" @mouseleave="liveMouseLV">
                            <div class="i-panel" @click.stop="previousLive(true)">
                                <i class="el-icon-caret-left"></i>
                            </div>
                            <div class="i-panel" @click.stop="nextLive(true)">
                                <i class="el-icon-caret-right"></i>
                            </div>
                        </div>
                    </div>
                    <div class="live-recommend-wrapper">
                        <div class="live-recommend-detail" :style="{left:livePlaySpeed+'px'}">
                            <div class="live-recommend-detail-item" v-for="item in liveData" :key="item.id">
                                <div class="live-recommend-detail-item-banner">
                                    <img :src="item.src" alt="">
                                </div>
                                <h5 class="live-recommend-detail-item-title">{{item.title}}</h5>
                                <div class="star-panel">
                                    <i class="el-icon-star-on" v-for="starItem in item.starNum" :key="starItem"></i>
                                    <span>( {{item.joinNum}} 人参与)</span>
                                </div>
                                <div class="price-panel">
                                    <span class="cur-price">¥{{item.curPrice}}</span>
                                    <del class="origin-price">¥{{item.originPrice}}</del>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <!--活动推荐-->
                <div class="activityRecommend-area">
                    <div class="activity-title">
                        <span>活动推荐</span>
                        <router-link to="/">更多</router-link>
                    </div>
                    <div class="activity-content">
                        <div class="activity-content-item" v-for="item in activitiesData" :key="item.id">
                            <div class="activity-date">
                                <div class="activity-date-up">
                                    <span>{{item.date}}</span>
                                </div>
                                <div class="activity-date-down">
                                    <span>{{item.dateTime}}</span>
                                </div>
                            </div>
                            <div class="activity-detail">
                                <div class="activity-detail-title">
                                    <span>{{item.title}}</span>
                                </div>
                                <div class="activity-detail-down">
                                    <span class="activity-detail-base">{{item.address}}</span>
                                    <span class="dot">·</span>
                                    <span class="mouth">{{item.month}}</span>
                                    <span class="dot">·</span>
                                    <span class="activity-state" v-if="item.state === 0">报名中</span>
                                    <span class="stop-state" v-else-if="item.state === 1">停止报名</span>
                                    <span class="end-state" v-else>活动已结束</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                pageData: {
                    bannerData: {
                        bannerTitle: "在TossingRoad,学习知识，分享踩坑经验",
                        bannerContent: "欢迎各位开发者在tr中分享自己所学知识和踩坑经验，帮助晚辈开发者遇到相同问题少走弯路。在tr中发布自己未能解决的bug，与tr中的开发者共同交流，互帮互助。"
                    }
                },
                bannerStats: true,
                starValue: 5,
                liveData: [
                    {
                        id: 1,
                        title: "Java 微服务实践 - Spring Boot / Spring Cloud",
                        starNum: 5,
                        joinNum: 20,
                        curPrice: 99.87,
                        src: "https://live-static.segmentfault.com/173/038/1730382543-5cb0460092915_render",
                        originPrice: 189.09
                    },
                    {
                        id: 2,
                        title: "TypeScript完全解读(26课时)",
                        starNum: 3,
                        joinNum: 210,
                        curPrice: 169.87,
                        src: "https://live-static.segmentfault.com/390/819/3908194827-5cb03f8041b45_render",
                        originPrice: 409.11
                    },
                    {
                        id: 3,
                        title: "iView 实战系列教程(21课时)",
                        starNum: 3,
                        joinNum: 90,
                        curPrice: 129.95,
                        src: "https://live-static.segmentfault.com/337/772/3377727865-5ca1d37aa726c_render",
                        originPrice: 289.19
                    }
                ],
                livePlaySpeed: 0,
                liveTimer: null,
                activitiesData: [
                    {
                        id: 1,
                        date: 'AUG',
                        dateTime: '17',
                        title: '腾讯LIVE开发者大会',
                        address: '深圳',
                        month: '08-17  周六',
                        state: 0
                    },
                    {
                        id: 2,
                        date: 'JUN',
                        dateTime: '08',
                        title: 'Unique Hackday',
                        address: '武汉',
                        month: '06-08  周六',
                        state: 0
                    },
                    {
                        id: 3,
                        date: 'MAY',
                        dateTime: '25',
                        title: 'CodeWuxi Hackathon 2019 编码城市新生活',
                        address: '无锡',
                        month: '05-25  周六',
                        state: 0
                    },
                    {
                        id: 4,
                        date: 'MAY',
                        dateTime: '26',
                        title: '从高并发架构到企业级区块链，探索新零售时代的数字化创新',
                        address: '上海',
                        month: "05-26  周日",
                        state: 0
                    },
                    {
                        id: 5,
                        date: 'MAY',
                        dateTime: '26',
                        title: 'SOFA Meetup#2 上海站-使用 SOFAStack 快速构建微服务',
                        address: '上海',
                        month: "05-26  周日",
                        state: 0
                    }
                ],
                liveOut: null
            }
        },
        mounted: function () {
            let that = this;
            that.liveOut = setInterval(that.nextLive, 2500);
            //赋值默认路由参数
            if (!this.$route.query.links) {
                this.$router.push({name: 'mainContent', 'query': {links: 'recommend'}})
            }
            /*调用接口获取所对应的数据*/
            this.$axios.get("https://easy-mock.com/mock/5ccd2aa2fcfb700f5afce877/example/example/getMainContentData").then((data) => {
                this.mainContentData = data.data.payload.content
            });
            /**测试Promise*
             *1. all方法所有方法执行成功才会执行resolve,否则执行reject
             *2. catch方法和.then方法第二个参数的区别：catch方法在执行resolve的回调时，如果抛出异常了（代码出错了），那么并不会报错卡死js，而是会进到这个catch方法中
             */
            /* Promise.all([this.getUserById(9), this.getMsgCount()]).then(function (results) {
               console.log(results);
           }).catch(function (reason) {
               //catch方法在执行resolve的回调时，如果抛出异常了（代码出错了），那么并不会报错卡死js，而是会进到这个catch方法中
               console.log(reason);
           });
            Promise.all([this.getUserById(6), this.getMsgCount()]).then(function (data) {
               console.log(data);
           }, function (data) {
               //如果resolve回调时，如果抛出异常会卡死js
               console.log(data);
           });*/
            // await方法：给每个promise对象添加catch方法，如果一个方法报错，不会影响整个方法的执行
            // this.init();
            //测试Promise输出顺序
            // this.outputOrder();
            //测试this指向问题
            // this.bar();
            //测试箭头函数this指向:undefind  statsh
            // this.arrowFunction();
        },
        methods: {
            //关闭banner
            closeBanner: function () {
                this.bannerStats = false
            },
            //直播切换:上一个
            previousLive: function (clickStatus) {
                if (clickStatus) {
                    clearInterval(this.liveOut);
                }
                clearInterval(this.liveTimer);
                let that = this;
                let nowVal = that.livePlaySpeed;
                //计算元素所占总宽度：当前数据长度*（每个元素所占宽度+外边距）
                let totalWidth = (that.liveData.length - 1) * (-190 + (-20));
                if (that.livePlaySpeed >= 0) {
                    //切换到最后一个
                    that.livePlaySpeed = totalWidth;
                    return;
                }
                /*匀速增加*/
                that.liveTimer = setInterval(function () {
                    that.livePlaySpeed += 5;
                    if (that.livePlaySpeed === (nowVal + 210)) {
                        clearInterval(that.liveTimer);
                    }
                }, 0.3);
            },
            //直播切换:下一个
            nextLive: function (clickStatus) {
                if (clickStatus) {
                    clearInterval(this.liveOut);
                }
                clearInterval(this.liveTimer);
                let that = this;
                let nowVal = that.livePlaySpeed;
                /*判断当前轮播所占总宽度*/
                let totalWidth = (that.liveData.length - 1) * (-190);
                if (nowVal != 0 && nowVal <= totalWidth) {
                    that.livePlaySpeed = 0;
                    nowVal = 0;
                    clearInterval(that.liveTimer);
                    return;
                }
                /*匀速增加*/
                this.liveTimer = setInterval(function () {
                    that.livePlaySpeed -= 5;
                    if (that.livePlaySpeed === (nowVal - 210)) {
                        clearInterval(that.liveTimer);
                    }
                }, 0.3);
            },
            //直播切换:鼠标移入
            liveMouseOR: function () {
                let that = this;
                clearInterval(that.liveOut);
            },
            //鼠标移入:鼠标移出
            liveMouseLV: function () {
                let that = this;
                that.liveOut = setInterval(that.nextLive, 2500);
            },
            /*测试Promise*/
            //获取用户信息
            getUserById: function (id) {
                return new Promise(function (resolve, reject) {
                    setTimeout(function () {
                        let num = id; //用户输入的数
                        if (num <= 5) {
                            resolve(num);
                        } else {
                            reject('数字太大了');
                        }
                    }, 2000)
                })
            },
            //获取消息数量
            getMsgCount: function () {
                return new Promise(function (resolve, reject) {
                    resolve("消息数量为" + 100);
                })
            },
            async init() {
                /**
                 * 1、await必须在async里面
                 2、async作用于函数
                 3、async返回一个promise对象
                 4、await后最好跟一个promise函数，当然也可以是同步的，但是这个就没有意义了
                 */
                await this.getUserById(8).then(function (results) {
                    console.log(results);
                }).catch(function (reason) {
                    console.log(reason)
                });
                await this.getMsgCount().then(function (results) {
                    console.log(results);
                });
            },
            //Promise输出顺序
            outputOrder: () => {
                new Promise((fulfil, reject) => {
                    console.log(1);
                    setTimeout(() => {
                        console.log(4);
                    }, 0);
                    fulfil(3);
                }).then((x) => {
                    console.log(x);
                });
                console.log(2);
            },
            //this指向问题
            foo(){
                console.log("oo");
            },
            bar(){
                setTimeout(function () {
                    this.foo();
                },0);
                /**
                 * setTimeout(()=>{
                 *     this.foo  //this指向vue示例
                 * },0)
                 * */
            },
            arrowFunction:(_this)=>{
                console.log(this); //undefind
            }
        }
    }
</script>

<style scoped src="../assets/scss/index.scss" lang="scss"></style>
