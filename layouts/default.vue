<template>
    <div class="layouts-defalut">
        <my-head></my-head>
        <nuxt/>
    </div>
</template>

<script type="es6">
	import MyHead from '~/components/my-head.vue'

	export default {
		components: {
			MyHead
		}
	}
</script>

<style lang="less" rel="stylesheet/less">
</style>
