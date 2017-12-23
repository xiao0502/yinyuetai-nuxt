const SpritesmithPlugin = require('webpack-spritesmith');
const path = require('path')
module.exports = {
	/*
	** Headers of the page
	*/
	head: {
		title: 'nuxt for 音悦Tai',
		meta: [
			{charset: 'utf-8'},
			{name: 'viewport', content: 'width=1002'},
			{hid: 'keywords', name: 'keywords', content: 'MV,MTV,高清MV,MV下载,高清MTV下载,MV免费下载,高清MV免费下载,MV视频,音乐MV,在线观看,MV手机免费下载,视频,在线视频MTV,口袋·FAN'},
			{hid: 'description', name: 'description', content: '音悦Tai-是以高清MV为主的娱乐视频网站，提供高品质音乐视频在线观看服务。同时也是偶像和粉丝的聚集地，既可以购买明星专辑和周边，也可以参与各式各样的线下活动。'}
		],
		link: [
			{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
		]
	},
	/*
	** Global CSS
	*/
	css: [
		'~/assets/css/sprite.css',
		'iview/dist/styles/iview.css',
		{src: '~/assets/css/index.less', lang: 'less'},
	],
	plugins: [
		'~/plugins/iview'
	],
	/*
	** Add axios globally
	*/
	build: {
		vendor: ['axios'],
		/*
		** Run ESLINT on save
		*/
		extend(config, ctx) {
			config.plugins.push(
				new SpritesmithPlugin({
					// 目标小图标
					src: {
						cwd: path.resolve(__dirname, './assets/img/icons'),
						glob: '*.png'
					},
					// 输出雪碧图文件及样式文件
					target: {
						image: path.resolve(__dirname, './assets/img/sprite.png'),
						css: path.resolve(__dirname, './assets/css/sprite.css')
					},
					// 样式文件中调用雪碧图地址写法
					apiOptions: {
						cssImageRef: '../img/sprite.png'
					},
					spritesmithOptions: {
						algorithm: 'top-down'
					}
				})
			)
			// if (ctx.isClient) {
			// 	config.module.rules.push({
			// 		enforce: 'pre',
			// 		test: /\.(js|vue)$/,
			// 		loader: 'eslint-loader',
			// 		exclude: /(node_modules)/
			// 	})
			// }
		}
	}
}
