<template>
	<div id="list">
		<ul>
			<li v-for="essay in essays" :key="essay.id">
				<img class="theme-pic" :src="essay.theme_pic" @click="fnPreview(essay.theme_pic)"/>
				<p class="text" v-html="essay.text"></p>
			</li>
		</ul>
		<img class="loading" src="../assets/loading.gif" v-show="status === 1" />
		<img class="empty-tip" src="../assets/empty-tip3.png" v-show="status === 4" style="display: none;" />
		<p class="loaded-tip" v-show="status > 1">{{status == 2 ? '查看更多...' : '没有更多了...'}}</p>
		<cmp-preview :images="previewImages" :status="previewStatus" @fnClosePreview="fnClosePreview"></cmp-preview>
	</div>
</template>

<script>
	import Preview from './preview.vue';
	import {throttle, scrollToBottom} from '../libs/global.js';

	export default {
		name: 'List',
		props: ['essays', 'loadingStatus'],
		components: {
			cmpPreview: Preview
		},
		data() {
			return {
				previewImages: [],
				previewStatus: 'none',
				status: this.loadingStatus
			};
		},
		watch: {
			loadingStatus: function(val) {
				this.status = val;
			}
		},
		mounted: function() {
			let _this = this;

			window.onscroll = throttle(function() { _this.fnScroll(); }, 500);
		},
		methods: {
			fnPreview: function(img) {
				let _this = this;

				_this.previewStatus = 'table';
				_this.previewImages = [];
				_this.previewImages.push(img);
			},

			fnClosePreview: function(status) {
				this.previewStatus = status;
			},

			fnScroll: function() {
				let _this = this;

				scrollToBottom(function() {
					if (_this.status !== 3) {
						_this.status = 1;
						setTimeout(function() {
							_this.$emit('fnGetMoreEssays');
						}, 500);
					}
				});
			}
		}
	};
</script>

<style lang="scss" scoped>
	#list{
		width: calc(700px - 6px);
		float: left;
		margin-left: 20px;

		ul li{
			border: 1px solid #dddddd;
			padding: 20px;
			text-align: left;
			margin-top: 15px;

			&:first-child{
				margin-top:0;
			}

			&:hover{
				box-shadow: 0px 3px 10px #d8d8d8;
			}

			.theme-pic{
				height: 150px;
				margin-bottom: 20px;
				cursor: pointer;
			}

			.text{
				color: #525252;
			}
		}

		.loading{
			width: 60px;
			margin: 10px auto 30px;
		}

		.loaded-tip{
			height: 40px;
			line-height: 40px;
			color: #888888;
		}

		.empty-tip{
			width: 50%;
			margin-bottom: 30px;
		}
	}
</style>