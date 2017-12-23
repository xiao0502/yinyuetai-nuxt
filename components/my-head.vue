<template>
    <header class="component-header">
        <div class="container">
            <div class="logo-menu clearfix">
                <img class="logo fl" src="../assets/img/yinyuetai-logo.png" alt="">
                <ul class="menu">
                    <li v-for="(menu,index) in menuList">
                        <nuxt-link :to="menu.linkUrl">
                            {{menu.txt}}
                            <Icon type="arrow-down-b" v-if="menu.hasPullDown"></Icon>
                        </nuxt-link>
                    </li>
                </ul>
                <div class="user-about fr clearfix">
                    <div class="search fl" :class="isFocus?'focus':''">
                        <input :class="isFocus?'focus':''" @focus="handleFocus" @blur="handleBlur" :placeholder="searchTips" type="text">
                        <Icon class="extends" type="ios-search-strong"></Icon>
                    </div>
                    <!--<div class="vip icon icon-vip fl">-->
                        <!--<a href="http://vip.yinyuetai.com"></a>-->
                    <!--</div>-->
                    <div class="client">

                    </div>
                    <div class="up">

                    </div>
                    <div class="like">

                    </div>
                    <div class="login-register">

                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<script type="es6">
	export default {
		data() {
			return {
				menuList: [
					{txt: '首页', linkUrl: '/',hasPullDown: false},
					{txt: 'MV', linkUrl: '/mv',hasPullDown: false},
					{txt: '频道', linkUrl: '/channel',hasPullDown: true},
					{txt: 'V榜', linkUrl: '/vBang',hasPullDown: false},
					{txt: '娱乐', linkUrl: '/play',hasPullDown: false},
					{txt: '商城', linkUrl: '/mall',hasPullDown: false},
					{txt: '众筹', linkUrl: '/raise',hasPullDown: false},
					{txt: '民俗文化', linkUrl: '/folk',hasPullDown: false},
				],
                searchTips: '小太阳首场转机发售~',
                isFocus: false,
			}
		},
        methods: {
			handleFocus() {
				this.isFocus = true;
			},
            handleBlur() {
				this.isFocus = false;
            }
        }
	}
</script>
<style lang="less" rel="stylesheet/less">
    @import "../assets/css/defined";

    header {
        width: 100%;
        height: 50px;
        background-color: #000;
        .container {
            padding: 0 20px;
            .logo-menu {
                img {
                    display: block;
                    margin-left: -51px;
                }
                .menu {
                    float: left;
                    line-height: 50px;
                    li {
                        float: left;
                        &:hover {
                            background-color: rgba(255, 255, 255, .16);
                        }
                        a {
                            display: block;
                            height: 50px;
                            font-size: 14px;
                            padding: 0 12px 0 13px;
                            cursor: pointer;
                            color: #ccc;
                        }
                        a.nuxt-link-exact-active {
                            color: @main-color;
                        }
                    }
                }
                .user-about {
                    height: 50px;
                    .search {
                        width: 210px;
                        padding: 0 12px;
                        height: 30px;
                        display: table-cell;
                        vertical-align: middle;
                        position: relative;
                        top: 10px;
                        border-radius: 2px;
                        background-color: #dcdbdb;
                        transition: all .3s;
                        &.focus {
                            background-color: #fff;
                        }
                        input {
                            outline-style: none;
                            line-height: normal;
                            border: none;
                            width: 160px;
                            background-color: #dcdbdb;
                            transition: all .3s;
                            &.focus {
                                background-color: #fff;
                            }
                        }
                        i {
                            margin-left: 8px;
                            font-size: 22px;
                            color: #a4a4a4;
                            cursor: pointer;
                            position: relative;
                            top: 4px;
                        }
                    }
                    .vip {
                        position: relative;
                        top: 5px;
                        margin: 0 30px;
                    }
                }
            }
        }
    }
</style>
