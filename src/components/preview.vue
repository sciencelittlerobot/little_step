<template>
	<div id="preview" @click.self="fnClose()" :style="{'display': status}">
		<div class="box" @click.self="fnClose()">
			<img :src="images[firstPicIndex]" />
		</div>
		<div class="toobar clearfix">
			<span class="arrow arrow-l" @click="fnShowPic('prev')"></span>
			<span class="arrow arrow-r" @click="fnShowPic('next')"></span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Preview',
		props: ['images', 'status'],
		data() {
			return {
				firstPicIndex: 0
			};
		},
		methods: {
			/**
			 *	关闭预览
			 */
			fnClose: function() {
				document.getElementById('preview').style.display = 'none';
				this.$emit('fnClosePreview', 'none');
			},

			/**
			 * 	查看上一张图片和查看下一张图片
			 */
			fnShowPic: function(type) {
				let _this = this;

				let imgLength = _this.images.length;

				if (type === 'prev') {
					if(_this.firstPicIndex === 0) {
						_this.firstPicIndex = imgLength - 1;
					} else {
						_this.firstPicIndex = _this.firstPicIndex - 1;
					}
				} else {
					if(_this.firstPicIndex === imgLength - 1) {
						_this.firstPicIndex = 0;
					} else {
						_this.firstPicIndex = _this.firstPicIndex + 1;
					}
				}
			}
		}
	};
</script>

<style lang="scss" scoped>
	#preview{
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background: rgba(76, 76, 76, 0.3);
		-moz-user-select:none;/*火狐*/
        -webkit-user-select:none;/*webkit浏览器*/
        -ms-user-select:none;/*IE10*/
	    user-select:none;
	    display: none;

		.box{
			height: 70%;
			text-align: center;
			display: table-cell;
        	vertical-align: middle;
		}

		.toobar{
			width: 400px;
			display: block;
			position: fixed;
			bottom: 50px;
			left: calc(50% - 200px);

			.arrow{
				width: 60px;
				height: 60px;
				display: inline-block;
				position: relative;
				background: rgba(0, 0, 0, 0.4);
				position: relative;
				border-radius: 30px;
				cursor: pointer;

				&:hover{
					background: rgba(255, 255, 255, 0.6);
				}

				&:active{
					background: rgba(255, 255, 255, 0.6);
				}

				&.arrow-l{
					float: left;

					&:after{
						content: '';
					    display: inline-block;
					    width: 35px;
					    height: 35px;
					    border-top: 5px solid #cccccc;
					    border-right: 5px solid #cccccc;
					    transform: rotate(-135deg);
					    -webkit-transform: rotate(-135deg);
					    position: absolute;
					    top: 12px;
					    right: 8px;
					}
				}

				&.arrow-r{
					float: right;

					&:after{
						content: '';
					    display: inline-block;
					    width: 35px;
					    height: 35px;
					    border-top: 5px solid #cccccc;
					    border-right: 5px solid #cccccc;
					    transform: rotate(45deg);
					    -webkit-transform: rotate(45deg);
					    position: absolute;
					    top: 12px;
					    left: 8px;
					}
				}
			}
		}
	}
</style>