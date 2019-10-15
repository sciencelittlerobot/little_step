<template>
	<div id="others">
		<cmp-header :headerActive="headerId"></cmp-header>
	</div>
</template>

<script>
	import Header from '../components/header.vue';

	export default {
		name: 'Others',
		components: {
			cmpHeader: Header
		},
		data() {
			return {
				msg: '',
				headerId: 3
			};
		}
	};
</script>

<style lang="scss" scoped>


</style>
