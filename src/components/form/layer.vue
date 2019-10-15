<template>
	<div id="layer" v-show="setting.status === true">
		<div class="layer-alert" :class="'alert-'+iconName">
			<div class="layer-tip-icon"><i class="icon iconfont" :class="'icon-'+iconName"></i></div>
			<div class="layer-content">{{setting.content !== '' ? setting.content : '1111111111111111111'}}</div>
			<div class="layer-close-btn" @click="fnCloseLayer" v-show="setting.closeBtn === true"><i class="icon iconfont icon-close"></i></div>
		</div>
	</div>
</template>

<script>
	import '../../../static/font/iconfont.css';
	import '../../../static/css/animate.css';

	export default {
		name: 'Layer',
		props: ['setting'],
		data() {
			return {
				msg: true,
				layerTimer: null
			};
		},
		watch: {
			setting: function(val) {
				let _this = this;

				if (val.status === true) {

					// 某个时长后自动关闭弹窗
					let timer = val.timer;

					if (timer !== undefined) {
						if (_this.layerTimer !== null) {
							clearTimeout(_this.layerTimer);
						}
						_this.layerTimer = setTimeout(function() {
							_this.fnCloseLayer();
							_this.layerTimer = null;
						}, timer === '' ? 2000 : timer);
					}
				}
			}
		},
		computed: {
			iconName: function() {
				let _this = this;

				let iconName = '';

				if (_this.setting.icon === '' || _this.setting.icon === undefined) {
					iconName = 'information';
				} else {
					iconName = _this.setting.icon === 'success' ? 'smile' : 'cry';
				}
				return iconName;
			}
		},
		mounted: function() {
		},
		methods: {
			fnCloseLayer: function() {
				this.setting.status = false;
				this.$emit('callback', {'status': false});
			}
		}
	};
</script>

<style lang="scss" scoped>
	#layer{
		max-width: 90%;
		display: block;
		position: fixed;
		top: 100px;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 999;

		.layer-alert{
			background: #ffffff;
			border: 1px solid #dddddd;
			border-radius: 5px;
			padding: 10px;
			font-size: 18px;
			color: #717171;
			float: left;

			div{
				display: inline-block;
				float: left;
			}

			.layer-tip-icon{
				width: 33px;
				height: 32px;
				margin-right: 10px;

				.icon{
					margin-top: 1px;
					font-size: 32px;
				}
			}

			.layer-content{
				width: auto;
				min-width: 120px;
				padding: 5px 3px;
				line-height: 22px;
				word-break: break-all;
			}

			.layer-close-btn{
				width: 33px;
				height: 32px;
				float: right;
				margin-left: 100px;
				cursor: pointer;

				.icon{
					font-size: 30px;
				}
			}

			&.alert-smile{
				border-color: #00e5ff;
			}

			.icon-smile{
				color: #00e5ff;
			}

			&.alert-cry{
				border-color: #ffa700;
			}

			.icon-cry{
				color: #ffa700;
			}

			&.alert-information{
				border-color: #1cadf5;
			}

			.icon-information{
				color: #1cadf5;
			}
		}
	}

</style>
