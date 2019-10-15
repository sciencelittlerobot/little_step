<template>
	<div id="create-new" class="clearfix">
		<div class="main">
			<cmp-input title="别忘记标题哦..." addClass="input-large"></cmp-input>
			<cmp-radio></cmp-radio>
			<cmp-uploadimage></cmp-uploadimage>
			<cmp-textarea title="正文内容在这边写哦..."></cmp-textarea>
			<div class="wrap-footer">
				<cmp-button title="取消"></cmp-button>
				<cmp-button title="发布" newClass="btn-primary"></cmp-button>
			</div>
		</div>
	</div>
</template>

<script>
	import Input from '../components/form/input.vue';
	import Radio from '../components/form/radio.vue';
	import UploadImage from '../components/form/uploadImage.vue';
	import Textarea from '../components/form/textarea.vue';
	import Button from '../components/form/button.vue';

	export default {
		name: 'CreateNew',
		components: {
			'cmpInput': Input,
			'cmpRadio': Radio,
			'cmpUploadimage': UploadImage,
			'cmpTextarea': Textarea,
			'cmpButton': Button
		},
		data() {
			return {
				msg: '1111'
			};
		}
	};
</script>

<style lang="scss" scoped>
	#create-new{
		width: 100%;
		/*height: 2880px;*/
		display: block;
		overflow: hidden;
		/*background: url(../assets/create_bg.jpg) no-repeat center center;*/

		.main{
			width: 960px;
			height: 100%;
			display: block;
			margin: 25px auto;

			.wrap-footer{
				width: 100%;
				height: 45px;
				text-align: right;
			}
		}
	}
</style>
