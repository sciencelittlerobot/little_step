<template>
	<div id="home">
		<img class="logo" src="../assets/logo.png" @click="goAhead('login')" />
		<h1 class="animated infinite tada" @click="goAhead('login')">{{msg}}</h1>
	</div>
</template>

<script>
	import '../../static/css/animate.css';

	export default {
		name: 'Home',
		data() {
			return {
				msg: 'My First Step!'
			};
		},
		methods: {

		}
	};
</script>

<style lang="scss" scoped>
	#home{
		width: 100%;
		height: 600px;
		text-align: center;
		display: block;

		.logo{
			margin-top: 15%;
			height: 42%;
			cursor: pointer;
		}

		h1{
			width: 70%;
			margin: 35px auto;
			padding-left: 35px;
			font-style: italic;
			color: #636363;
			cursor: pointer;
		}
	}
</style>
