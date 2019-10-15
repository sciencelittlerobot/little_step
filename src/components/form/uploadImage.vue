<template>
	<div id="upload-image">
		<div class="upload-btn" v-show="localPath === ''">
			<span class="upload-tip">选择图片</span>
			<input type="file" accept="image/*" name="cover" id="image" @change="getImages($event)" />
		</div>
		<div class="local-preview" v-show="localPath !== ''">
			<img :src="localPath" />
			<button class="del-btn" @click="delImages">删除</button>
		</div>
	</div>
</template>

<script>
	import Layer from './layer.vue';

	export default {
		name: 'UploadImage',
		components: {
			'cmpLayer': Layer
		},
		data() {
			return {
				localPath: ''
			};
		},
		mounted: function() {

		},
		methods: {
			getImages: function(e) {
				let _this = this;

				let files = e.target.files[0];

				if(!/image\/\w+/.test(files.type)) {
			        alert('看清楚，这个需要图片！');
			        return false;
			    }

				if (!e || !window.FileReader) return;

		        let reader = new FileReader();

		        reader.readAsDataURL(files);
		        reader.onloadend = function() {
		          _this.localPath = this.result;
		        };
			},

			delImages: function() {
				let _this = this;

				_this.localPath = '';

                let file = document.getElementById('image');

                _this.clearInputFile(file);
			},

			/**
			 * [clearInputFile description]	清空作用域
			 * @AuthorHTL
			 * @DateTime  2018-06-05T13:59:41+0800
			 * @param     {[type]}                 f [description]
			 * @return    {[type]}                   [description]
			 */
			clearInputFile: function(f) {
				if(f.value) {
					try {
						f.value = '';
					} catch(err) {
						console.log(err);
					}
					if(f.value) {
						let form = document.createElement('form'), ref = f.nextSibling, p = f.parentNode;

						form.appendChild(f);
						form.reset();
						p.insertBefore(f, ref);
					}
				}
			}
		}
	};
</script>

<style lang="scss" scoped>
	$height: 200px;

	#upload-image{
		width: 100%;
		height: $height;
		margin-bottom: 20px;
		position: relative;
		text-align: left;

		.upload-btn{
			width: $height;
			height: $height;
			position: relative;

			.upload-tip{
				width: $height;
				height: $height;
				line-height: $height;
				text-align: center;
				vertical-align: middle;
				display: block;
				color: #9a9a9a;
				font-weight: bold;
				font-size: 25px;
				border: 2px solid #bbbbbb;
				border-radius: 5px;
			}

			input[type=file]{
				width: 100%;
				height: 100%;
				position: absolute;
				top: 0;
				left: 0;
				z-index: 2;
				opacity: 0;
			}
		}

		.local-preview{
			position: absolute;
			top: 0;
			left: 0;
			height: $height;
			cursor: pointer;
			z-index: 2;
			border: 2px solid #bbbbbb;
			border-radius: 5px;

			img{
				height: $height;
				border-radius: 4px;
			}

			.del-btn{
				width: 65px;
				height: 25px;
				line-height: 23px;
				color: #a0a0a0;
				background-color: #f3f3f3;
				border: 1px solid #dddddd;
				position: absolute;
				top: 0;
				right: 0;
				border-radius: 3px;

				&:before{
					content: "\2716";
					margin-right: 5px;
				}
			}
		}
	}
</style>
