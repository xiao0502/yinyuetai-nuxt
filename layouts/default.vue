<template>
    <div class="container">
        <normal-header></normal-header>
        <nuxt/>
    </div>
</template>

<script type="es6">
	import NormalHeader from '~/components/normal-header.vue'

	export default {
		components: {
			NormalHeader
		}
	}
</script>

<style lang="less" rel="stylesheet/less">
</style>
