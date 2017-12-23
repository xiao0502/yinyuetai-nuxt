<template>
    <div class="page-index">
        <div class="container">
            <Carousel v-model="currentPic" trigger="hover" loop autoplay :autoplay-speed="4000" :height="480" arrow="never" :radius-dot="true">
                <CarouselItem v-for="(banner,index) in bannerList" :key="index">
                    <a :href="banner.url">
                        <img :src="banner.image" alt="">
                    </a>
                </CarouselItem>
            </Carousel>
        </div>
    </div>
</template>

<script type="es6">
    import axios from 'axios'
	export default {
		async asyncData() {
			let {data} = await axios.get('http://www.yinyuetai.com/mv/get-bigpic');
			return {bannerList: data.bigPics}
        },
        data() {
        	return {
				currentPic: 0
            }
        }
	}
</script>

<style lang="less" rel="stylesheet/less">
    @import "../assets/css/defined";
    .page-index {
        .ivu-carousel-dots-inside {
            bottom: 16px;
            li button.radius {
                width: 10px;
                height: 10px;
                margin: 0 4px;
            }
            .ivu-carousel-active {
                button {
                    background-color: @main-color;
                }
            }
        }
    }
</style>
