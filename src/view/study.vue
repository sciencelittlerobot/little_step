<template>
	<div id="study">
		<cmp-header :headerActive="headerId"></cmp-header>
	</div>
</template>

<script>
	import Header from '../components/header.vue';

	export default {
		name: 'Study',
		components: {
			cmpHeader: Header
		},
		data() {
			return {
				msg: '',
				headerId: 2
			};
		}
	};
</script>

<style lang="scss" scoped>


</style>
