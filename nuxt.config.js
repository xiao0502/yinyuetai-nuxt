const vuxLoader = require('vux-loader');
module.exports = {
	/*
	** Headers of the page
	*/
	head: {
		title: 'QQ音乐',
		meta: [
			{charset: 'utf-8'},
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no'
			},
			{
				hid: 'keywords',
				name: 'keywords',
				content: 'nuxt.js+node.js+mongoDB 搭建博客'
			},
			{
				hid: 'description',
				name: 'description',
				content: 'nuxt.js+node.js+mongoDB 搭建博客'
			}
		],
		link: [
			{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
		]
	},
	loading: {color: 'teal'},
	/*
	** Global CSS
	*/
	css: [
		'swiper/dist/css/swiper.css',
		{src: '~/assets/css/index.less', lang: 'less'},

	],
	plugins: [
		'~/plugins/axios',
		{src: '~/plugins/swiper.js', ssr: false},
		// '~/plugins/document.js'
	],
	/*
	** Add axios globally
	*/
	build: {
		vendor: ['better-scroll', 'vue-awesome-swiper'],
		/*
		** Run ESLINT on save
		*/
		extend(webpackConfig, {isDev, isClient, isServer}) {
			vuxLoader.merge(webpackConfig, {
				plugins: ['vux-ui']
			})
			// 处理 Swiper4 下的 dom7 模块的语法问题
			webpackConfig.resolve.alias['swiper$'] = 'swiper/dist/js/swiper.js'
			webpackConfig.resolve.alias['dom7$'] = 'dom7/dist/dom7.js'
		},
		babel: {
			// "presets": ["es2015"]
		}
	},
	modules: [
		'@nuxtjs/axios',
		'@nuxtjs/proxy'
	],
	proxy: [
		[
			'/api',
			{
				target: 'https://c.y.qq.com/', // api主机
				pathRewrite: {'^/api': '/'}
			}
		]
	]
}
