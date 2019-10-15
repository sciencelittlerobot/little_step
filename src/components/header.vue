<template>
	<div id="header">
		<ul class="menu">
			<li
				v-for="(menu, index) in menus"
				:key="index"
				:class="{'active' : index == activeIndex}"
				@click="fnActive(index, menu.page)">
				{{menu.name}}
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'Header',
		props: ['headerActive'],
		data() {
			return {
				menus: [
					{name: '生活', page: 'index'},
					{name: '工作', page: 'work'},
					{name: '学习', page: 'study'},
					{name: '其它', page: 'others'}
				],

				activeIndex: this.headerActive
			};
		},

		methods: {
			//	点击图标时候的状态和跳转
			fnActive: function(index, pageName) {
				let _this = this;

				_this.activeIndex = index;
				_this.goAhead(pageName);
			}
		}
	};
</script>

<style lang="scss" scoped>
	#header{
		width: 100%;
		height: 50px;
		background: #f3f3f3;
		display: block;
		position: fixed;
		top: 0;
		left: 0;

		&.scrolling{
			opacity: 0.75;
		}

		.menu{
			width: 960px;
			height: 50px;
			margin: 0 auto;
			display: block;

			li{
				width: 240px;
				height: 50px;
				line-height: 50px;
				text-align: center;
				float: left;
				cursor: pointer;
				font-size: 16px;

				&.active{
					background: #ffffff;
				}
			}
		}
	}
</style>