<template>
    <div ref="scroll" class="page-index">
        <div :data="data.songList" class="scroll-content">
            <swiper loop auto :list="bannerList"></swiper>
            <div class="diantai">
                <h2>电台</h2>
                <ul>
                    <li v-for="(item,index) in diantaiList">
                        <a href="https://i.y.qq.com/v8/playsong.html?ADTAG=myqq&from=myqq&channel=10007100&songid=203862041,201879994,102349482,202976231,201626642,201974790,104960133,202314397,204429544,204672190,202188468,203052805,104914831,102418437,103086826,104489883,201571419,5002687,203769959,108103654">
                            <img :src="item.picUrl" alt="">
                            <h3>{{item.Ftitle}}</h3>
                            <span></span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="hot">
                <h2>热门歌单</h2>
                <ul>
                    <li v-for="(item,index) in hotList">
                        <a :href="`https://y.qq.com/w/taoge.html?ADTAG=myqq&from=myqq&channel=10007100&id=${item.id}`">
                            <img :src="item.picUrl" alt="">
                            <div class="info">
                                <h3>{{item.songListDesc}}</h3>
                                <p>{{item.songListAuthor}}</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script type="es6">
	import BScroll from '~/plugins/bscroll'
	import Swiper from 'vux/src/components/swiper/swiper.vue'

	export default {
		async asyncData({app}) {
			let {data} = await app.$axios.$get('musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?' +
				'g_tk=5381&uin=0&format=json&inCharset=' +
				'utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1514268522004');
			return {data}
		},
		created() {
			this.data.slider.forEach((item, index) => {
				this.bannerList.push({
					url: item.linkUrl,
					img: item.picUrl,
				})
			})
			this.diantaiList = this.data.radioList;
			this.hotList = this.data.songList;
		},
		data() {
			return {
				bannerList: [],
				diantaiList: [],
				hotList: []
			}
		},
		mounted() {
			new BScroll(this.$refs.scroll, {
				click: true
			})
		},
		components: {
			Swiper
		}

	}
</script>

<style lang="less" rel="stylesheet/less">
    @import "../assets/css/defined";

    .page-index {
        width: 100%;
        position: absolute;
        left: 0;
        top: 84px;
        bottom: 0;
        .diantai {
            width: 100%;
            padding: 10px;
            h2 {
                font-size: 16px;
                color: #000;
                margin-bottom: 11px;
                font-weight: normal;
            }
            ul {
                display: flex;
                li {
                    width: 50%;
                    &:nth-child(2n+1) {
                        padding-right: 10px;
                    }
                    a {
                        display: block;
                        position: relative;
                        background-color: #fff;
                        img {
                            width: 100%;
                        }
                        span {
                            background-image: url("https://y.gtimg.cn/mediastyle/mobile/yqq_v5/img/list_sprite.png?max_age=19830212&d=20151105145423");
                            position: absolute;
                            height: 24px;
                            bottom: 44px;
                            right: 5px;
                            width: 24px;
                            background-position: 0 0;
                            background-size: 24px;
                        }
                        h3 {
                            font-size: 14px;
                            height: 36px;
                            line-height: 18px;
                            white-space: normal;
                            word-wrap: break-word;
                            font-weight: normal;
                            margin-left: 4px;
                        }
                    }

                }
            }
        }
        .hot {
            padding: 10px 0 10px 10px;
            h2 {
                font-size: 16px;
                color: #000;
                margin-bottom: 11px;
                font-weight: normal;
            }
            ul {
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                li {
                    width: 50%;
                    padding-right: 10px;
                    a {
                        display: block;
                        background-color: #fff;
                        margin-bottom: 10px;
                    }
                    .info {
                        padding: 5px;
                    }
                    img {
                        width: 100%;
                        display: block;
                    }
                    h3 {
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        font-weight: normal;
                        font-size: 14px;
                    }
                    p {
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        font-weight: normal;
                        font-size: 12px;
                    }
                }
            }
        }
    }
</style>
