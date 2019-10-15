<template>
	<div id="ueditor_box" type="text/plain"></div>
</template>

<script>
	import '../../../static/libs/ueditor/ueditor.config.js';
	import '../../../static/libs/ueditor/ueditor.all.min.js';
	import '../../../static/libs/ueditor/lang/zh-cn/zh-cn.js';
	import '../../../static/libs/ueditor/ueditor.parse.min.js';
	import '../../../static/libs/ueditor/themes/default/css/ueditor.min.css';

	export default {
		name: 'Ueditor',
		data() {
			return {
				ue: null
			};
		},
		mounted: function() {

			// let _this = this;

			// _this.ue = UE.getEditor('ueditor_box', {
			//     initialFrameHeight: 400,
			//     toolbars: [['undo', 'redo', '|',
	        //     'bold', 'italic', 'underline', 'strikethrough', 'removeformat', 'autotypeset', '|', 'forecolor', 'backcolor', 'fontfamily', 'fontsize', 'indent', 'rowspacingtop', 'rowspacingbottom', 'lineheight', 'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify'],
	        //      ['link', 'unlink', 'imagenone', 'imageleft', 'imageright', 'imagecenter', '|', 'simpleupload', 'insertimage', 'emotion', 'scrawl', 'insertcode', '|', 'snapscreen', 'cleardoc']]
			// });
		}
	};
</script>

<style lang="scss" scoped>
	#ueditor_box{
		margin-bottom: 20px;
	}
</style>
