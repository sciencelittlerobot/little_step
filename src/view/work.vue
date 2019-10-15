<template>
	<div id="index">
		<cmp-header :headerActive="headerId"></cmp-header>
	</div>
</template>

<script>
	import Header from '../components/header.vue';

	export default {
		name: 'Work',
		components: {
			cmpHeader: Header
		},
		data() {
			return {
				msg: '',
				headerId: 1
			};
		}
	};
</script>

<style lang="scss" scoped>


</style>
