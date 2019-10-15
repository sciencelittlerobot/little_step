<template>
	<div class="textarea-box">
		<textarea class="form-textarea" :placeholder="title"></textarea>
	</div>
</template>

<script>
	export default {
		name: 'Textarea',
		props: ['title'],
		data() {
			return {
				msg: '1111'
			};
		}
	};
</script>

<style lang="scss" scoped>
	.textarea-box{
		width: 100%;
		overflow: hidden;
		margin-bottom: 20px;
		text-align: left;

		.form-textarea{
			width: 100%;
			min-height: 500px;
			padding: 10px;
			border-radius: 5px;
			font-size: 17px;
			line-height: 30px;
			border: 1px solid #dddddd;
		}

	}
</style>
