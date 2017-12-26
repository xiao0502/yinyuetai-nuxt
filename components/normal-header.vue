<template>
    <div class="normal-header">
        <div class="down">
            <img src="https://y.gtimg.cn/mediastyle/mobile/yqq_v5/img/logo.png?max_age=19830212&d=20151105145423"
                 alt="">
            <a href="javascript:void(0)">下载APP</a>
        </div>
        <ul class="nav">
            <li>
                <nuxt-link to="/">推荐</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/rankList">排行榜</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/search">搜索</nuxt-link>
            </li>
        </ul>
    </div>
</template>
<script type="es6">
	export default {}
</script>
<style lang="less" rel="stylesheet/less">
    .normal-header {
        position: relative;
        z-index: 10;
        .down {
            width: 100%;
            height: 44px;
            background-color: #31c27c;
            display: flex;
            justify-content: space-between;
            img {
                height: 25px;
                display: block;
                margin: 9px 0 0 10px;
            }
            a {
                display: block;
                margin: 8px 10px 0 0;
                font-size: 14px;
                height: 28px;
                line-height: 28px;
                color: #fff;
                background-color: #149c5a;
                border-radius: 99px;
                padding: 0 12px;
            }
        }
        .nav {
            display: flex;
            height: 40px;
            line-height: 40px;
            background-color: #fff;
            li {
                flex: 1;
                text-align: center;
                a {
                    font-size: 16px;
                    display: block;
                    width: 100%;
                    transition: all .3s;
                    &.nuxt-link-exact-active {
                        color: #31c27c;
                        position: relative;
                        &:after {
                            content: '';
                            width: 100%;
                            height: 2px;
                            background-color: #31c27c;
                            display: block;
                            position: absolute;
                            left: 0;
                            bottom: 0;
                            transition: all .3s;
                        }
                    }
                }
            }
        }
    }
</style>
