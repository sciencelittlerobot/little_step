<template>
	<div id="side_bar">
		<button class="btn btn-primary" @click="goAhead('createNew')">去写一个...</button>
		<div class="title">{{title}}</div>
		<ul class="table-list">
		<li
			v-for="(date, index) in sideContent.dates"
			:key="date.id"
			v-text="dateFormat(date.time, 'YYYY年MM日dd日')"
			@click="fnGetDate(index)"
			:class="{'active' : dateActive == index}">
		</li>
		<li id="get_more" @click="fnGetMore">{{loadedtext}}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'SideBar',
		props: ['sideContent'],
		data: function() {
			return {
				title: '日历',
				dateActive: 0,
				loadedtext: '查看更多...'
			};
		},
		watch: {
			dates: function(val, oldVal) {
				console.log(this.sideContent.pageSize);
				if(val.length === oldVal.length || val.length < this.sideContent.pageSize) {
					document.getElementById('get_more').setAttribute('class', 'disabled');
					this.loadedtext = '没有更多了...';
				}
			}
		},
		methods: {
			fnGetDate: function(index) {
				this.dateActive = index;
				this.$emit('fnSelectDate', index);
			},

			fnGetMore: function() {
				this.$emit('fnGetMoreDates');
			}
		}
	};
</script>

<style lang="scss" scoped>
	#side_bar{
		width: 240px;
		float: left;
		display: inline-block;
		text-align: center;

		.btn{
			width: 240px;
			height: 50px;
			line-height: 50px;
			text-align: center;
			background: none;
			border: 1px solid #dddddd;
			font-size: 20px;
			color: #8a8888;
			margin-bottom: 50px;
			background-color: #f1f1f1;
			border-radius: 5px;
		}

		.title{
			height: 50px;
			line-height: 50px;
			background-color: #d8efff;
			font-size: 16px;
			color: #8a8888;
			font-weight: bold;
			letter-spacing: 10px;
			border: 1px solid #dddddd;
			border-bottom: none;
		}

		.table-list{
			width: 100%;
			display: block;
			border: 1px solid #dddddd;

			li{
				height: 50px;
				line-height: 50px;
				border-top: 1px solid #dddddd;
				color: #666666;
				letter-spacing: 1px;
				cursor: pointer;

				&.active{
					background-color: #ebf7ff;
				}

				&.disabled {
				    pointer-events: none;
				    cursor: default;
				    opacity: 0.6;
				}
			}
		}
	}
</style>