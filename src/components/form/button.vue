<template>
	<button class="form-button" :class="newClass">{{title}}</button>
</template>

<script>
	export default {
		name: 'Button',
		props: ['title', 'newClass'],
		data() {
			return {
				msg: '测试按钮'
			};
		}
	};
</script>

<style lang="scss" scoped>
	.form-button{
		width: 200px;
		height: 50px;
		line-height: 50px;
		text-align: center;
		background: none;
		border: 1px solid #dddddd;
		font-size: 20px;
		color: #8a8888;
		background-color: #f5f5f5;
		border-radius: 5px;
		letter-spacing: 12px;
		margin:0 20px;

		&:hover{
			background:rgba(255, 255, 255, 0.8);
		}

		&.btn-m{
			width: 120px;
			height: 40px;
			line-height: 40px;
		}

		&.btn-primary{
			background-color: #93c1f7;
			color: #ffffff;

			&:hover{
				background-color: #add3ff;
			}
		}
	}
</style>
