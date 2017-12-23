<template>
    <div class="component-content">
        <div class="center">
            <div class="title clearfix">
                <h3 class="fl">首播</h3>
                <ul class="fr">
                    <li><a href="">全部</a><i class="icon icon-border-line"></i></li>
                </ul>
            </div>
            <div class="line"></div>
            <Carousel class="wrapper-content" :height="440" v-model="currentIndex" dots="none" loop>
                <CarouselItem>
                    <div class="sm-swiper fl">
                        <a :href="contentData.bigPics[0].url">
                            <img :src="contentData.bigPics[0].image" alt="">
                            <div>{{contentData.bigPics[0].title}}</div>
                            <p>{{contentData.bigPics[0].content}}</p>
                        </a>
                    </div>
                    <ul class="list clearfix fr">
                        <li v-for="(item,index) in firstContent">
                            <div class="mv_one">
                                <a :href="`http://v.yinyuetai.com/video/${item.videoId}`">
                                    <img :src="item.image" alt="">
                                    <h5>{{item.title}}</h5>
                                    <p>{{item.artists[0].artistName}}</p>
                                </a>
                            </div>
                        </li>
                    </ul>
                </CarouselItem>
                <CarouselItem>
                    <ul class="list clearfix normal">
                        <li v-for="(item,index) in sedContent">
                            <div class="mv_one">
                                <a :href="`http://v.yinyuetai.com/video/${item.videoId}`">
                                    <img :src="item.image" alt="">
                                    <h5>{{item.title}}</h5>
                                    <p>{{item.artists[0].artistName}}</p>
                                </a>
                            </div>
                        </li>
                    </ul>
                </CarouselItem>
                <CarouselItem>
                    <ul class="list clearfix normal">
                        <li v-for="(item,index) in thrContent">
                            <div class="mv_one">
                                <a :href="`http://v.yinyuetai.com/video/${item.videoId}`">
                                    <img :src="item.image" alt="">
                                    <h5>{{item.title}}</h5>
                                    <p>{{item.artists[0].artistName}}</p>
                                </a>
                            </div>
                        </li>
                    </ul>
                </CarouselItem>
            </Carousel>
        </div>
    </div>
</template>
<script type="es6">
	export default {
		props: {
			contentData: {
				type: Object,
				default: {}
			}
		},
		data() {
			return {
				currentIndex: 0,
				smCurrentIndex: 0,
				firstContent: [],
				sedContent: [],
				thrContent: [],
			}
		},
		created() {
			console.log(this.contentData);
			this.firstContent = this.contentData.videos.slice(0, 8)
			this.sedContent = this.contentData.videos.slice(8, 20)
			this.thrContent = this.contentData.videos.slice(20, 32)
		}
	}
</script>
<style lang="less" rel="stylesheet/less">
    @import "../assets/css/defined";

    .component-content {
        background-color: #fff;
        border-bottom: 4px solid #f3f5f7;
        .center {
            width: 1470px;
            margin: 0 auto;
            .title {
                padding: 34px 0 16px;
                h3 {
                    font-size: 20px;
                    line-height: 20px;
                    font-weight: bold;
                    color: #000;
                }
                ul {
                    li {
                        float: left;
                        a {
                            font-size: 14px;
                            padding: 0 19px;
                            &:hover {
                                color: @main-color;
                            }
                        }
                        &:last-child {
                            a {
                                padding-right: 0;
                            }
                            i {
                                display: none;
                            }
                        }
                    }
                }
            }
            .line {
                height: 2px;
                background-color: #f4f4f4;
                margin-top: -2px;
            }
            .wrapper-content {
                padding-top: 17px;
            }
            .sm-swiper {
                width: 470px;
                &:hover {
                    div {
                        color: @main-color;
                    }
                    p {
                        color: @main-color;
                    }
                }
                img {
                    width: 470px;
                    height: 323px;
                    display: block;
                }
                div {
                    font-size: 16px;
                    line-height: 16px;
                    margin: 12px 12px 12px;
                    width: 445px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    transition: all .3s;
                }
                p {
                    font-size: 14px;
                    line-height: 14px;
                    margin: 0 12px;
                    width: 445px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    transition: all .3s;
                }
            }
            .list {
                width: 1000px;
                li {
                    float: left;
                    margin-left: 30px;
                    width: 220px;
                    h5 {
                        font-size: 14px;
                        line-height: 16px;
                        margin: 12px 12px 10px;
                        width: 196px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        transition: all .3s;
                    }
                    p {
                        font-size: 12px;
                        line-height: 16px;
                        margin: 0 12px 21px;
                        color: #a4a4a4;
                        width: 196px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        transition: all .3s;
                    }
                    &:hover {
                        p {
                            color: @main-color;
                        }
                        h5 {
                            color: @main-color;
                        }
                    }
                }
            }
            .normal {
                width: 100%;
                li:nth-child(6n+1) {
                    margin-left: 0;
                }
            }
        }
    }
</style>
