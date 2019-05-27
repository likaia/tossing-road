<template>
    <div id="parentContainer">
        <div class="context">
            <div class="nav-left">
                <!--logo区域-->
                <div class="ts-header_logo">
                    <router-link to="/">
                        <div class="logo-panel"></div>
                    </router-link>
                </div>
                <!--菜单区域-->
                <div class="menu-area">
                    <ul>
                        <li v-for="item in navMenuData" :key="item.id" @mouseover="foundMSrFun(item,navMenuData)" @mouseleave="foundMSlFun(item,navMenuData)">
                            <router-link :class="item.id===1?'nav-active':''" :to="item.path">{{item.title}}
                            </router-link>
                            <!--el 淡入淡出动画-->
                            <transition name="el-fade-in">
                                <div class="found-elastic-layer" v-if="navMenuData.length===item.id"
                                     v-show="foundElasticLayerState">
                                    <ul class="left-content">
                                        <li v-for="items in foundData" :key="items.id">
                                            <router-link :to="items.path">{{items.title}}</router-link>
                                        </li>
                                    </ul>
                                    <div class="right-content">
                                        <div class="item-content" v-for="items in activityData" :key="items.id">
                                            <router-link to="/">
                                                <p class="item-title">{{items.title}}</p>
                                            </router-link>
                                            <div class="item-info">
                                                <span>{{items.address}}</span>
                                                <span> · </span>
                                                <span>{{items.time}}</span>
                                                <span> · </span>
                                                <span class="item-info-state" v-if="items.state===0"> 报名中 </span>
                                                <span class="item-info-state stop"
                                                      v-else-if="items.state===1"> 停止报名 </span>
                                                <span class="item-info-state finish" v-else> 活动已结束 </span>
                                            </div>
                                        </div>
                                        <div class="item-showmore">
                                            <router-link to="/">查看更多活动</router-link>
                                        </div>
                                    </div>
                                </div>
                            </transition>
                        </li>
                    </ul>
                </div>
                <!--搜索区域-->
                <div class="search-area">
                    <el-input
                            placeholder="请输入内容"
                            suffix-icon="el-icon-search"
                            clearable
                            :class="searchStatus"
                            @focus="getSearchFocus($event)"
                            @blur="searchBlur($event)"
                            v-model="searchVal">
                    </el-input>
                </div>
            </div>
            <div class="nav-right">
                <div class="btn-panel btn-signin">
                    <span>立即登录</span>
                </div>
                <div class="btn-panel btn-signup">
                    <span>立即注册</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'top-menu',
        data() {
            return {
                navMenuData: [
                    {
                        'id': 1,
                        'title': '首页',
                        'path': {name:'mainContent','query':{links:'recommend'}}
                    },
                    {
                        'id': 2,
                        'title': '问答',
                        'path': '/'
                    },
                    {
                        'id': 3,
                        'title': '专栏',
                        'path': '/'
                    },
                    {
                        'id': 4,
                        'title': '讲堂',
                        'path': '/'
                    },
                    {
                        'id': 5,
                        'title': '圈子',
                        'path': '/'
                    },
                    {
                        'id': 6,
                        'title': '发现',
                        'path': '/'
                    }
                ],
                searchVal: "",
                searchStatus: 'default',
                foundElasticLayerState: false,
                foundData: [
                    {
                        'id': 1,
                        'title': '活动',
                        'path': '/'
                    },
                    {
                        'id': 2,
                        'title': '标签',
                        'path': '/'
                    },
                    {
                        'id': 3,
                        'title': '酷工作',
                        'path': '/'
                    },
                    {
                        'id': 4,
                        'title': '排行榜',
                        'path': '/'
                    },
                    {
                        'id': 5,
                        'title': '徽章',
                        'path': '/'
                    }, {
                        'id': 6,
                        'title': '笔记',
                        'path': '/'
                    },
                    {
                        'id': 7,
                        'title': '开发手册',
                        'path': '/'
                    },
                    {
                        'id': 8,
                        'title': '广告投放',
                        'path': '/'
                    }
                ],
                activityData: [
                    {
                        'id': 1,
                        'title': 'SOFA Meetup#2 上海站-使用 SOFAStack 快速构建微服务',
                        'address': '北京',
                        'time': '2019-6-22 周六',
                        'state': 0
                    },
                    {
                        'id': 2,
                        'title': '腾讯LIVE开发者大会',
                        'address': '深圳',
                        'time': '2019-10-18 周一',
                        'state': 0
                    },
                    {
                        'id': 3,
                        'title': 'Unique Hackday',
                        'address': '武汉',
                        'time': '2019-6-17 周三',
                        'state': 0
                    },
                    {
                        'id': 4,
                        'title': 'CodeWuxi Hackathon 2019 编码城市新生活',
                        'address': '无锡',
                        'time': '2019-9-10 周五',
                        'state': 1
                    }
                ]
            }
        },
        methods: {
            // 搜索框获取焦点
            getSearchFocus: function (event) {
                // console.log(event.target.style);
                this.searchStatus = 'open'
            },
            //搜索框失去焦点
            searchBlur: function () {
                this.searchStatus = 'closed'
            },
            //菜单栏鼠标移入事件
            foundMSrFun: function (item, data) {
                if (item.id === data.length) {
                    this.foundElasticLayerState = true
                }
            },
            //菜单鼠标栏出除事件
            foundMSlFun:function (item,data) {
                if (item.id === data.length) {
                    this.foundElasticLayerState = false
                }
            }
        }
    }
</script>

<style lang="scss" scoped src="../assets/scss/top-menu.scss"></style>
