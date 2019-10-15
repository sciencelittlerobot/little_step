<template>
	<div id="index">
		<cmp-header :headerActive="headerId"></cmp-header>
		<div class="content clearfix">
			<cmp-sidebar :sideContent="{'dates': sideContents, 'pageSize': sidePageSize}" @fnSelectDate="fnSelectDate" @fnGetMoreDates="fnGetMoreDates"></cmp-sidebar>
			<cmp-list :essays="essays" @ajaxGetList="ajaxGetList" @fnGetMoreEssays="fnGetMoreEssays" :loadingStatus="essaysLoading"></cmp-list>
		</div>
	</div>
</template>

<script>
	import Header 	from '../components/header.vue';
	import SideBar 	from '../components/sideBar.vue';
	import List 	from '../components/list.vue';

	export default {
		name: 'Index',
		components: {
			cmpHeader: Header,
			cmpSidebar: SideBar,
			cmpList: List
		},
		data() {
			return {
				msg: '',
				headerId: 0,
				sideContents: [],
				sideOffset: 0,
				sidePageSize: 5,
				essays: [],
				essaysOffset: 0,
				essaysPageSize: 5,
				essaysLoading: 0,
				ajaxUrl: 'http://192.168.1.31:10039/',
				dateSelected: 0
			};
		},
		mounted: function() {
			let _this = this;

			_this.ajaxGetDates();
			setTimeout(function() {
				_this.ajaxGetList(function(result) {
					if (result.length <= 0) {
						_this.essaysLoading = 4;
					}
				});
			}, 300);
		},
		methods: {
			ajaxGetDates: function() {
				let _this = this;

				let url = _this.ajaxUrl + 'json1.php?pageSize=' + _this.sidePageSize + '&offset=' + _this.sideOffset;

				_this.$http.get(url).then(function(result) {
						_this.sideContents = _this.sideContents.concat(result.body.data);
				}, function(response) {
					console.info(response);
				});
			},

			fnGetMoreDates: function() {
				let _this = this;

				_this.sideOffset += 1;
				_this.ajaxGetDates();
			},

			fnSelectDate: function(index) {
				let _this = this;

				_this.dateSelected = index;
				_this.essays = [];
				_this.essaysLoading = 1;
				_this.essaysOffset = 0;
				_this.ajaxGetList(function(result) {
					if (result.length <= 0) {
						_this.essaysLoading = 4;
					}
				});
			},

			ajaxGetList: function() {
				let _this = this;

				let callback = '';

				if(arguments[arguments.length - 1] instanceof Function) {
					callback = arguments[arguments.length - 1];
				}

				let url = _this.ajaxUrl + 'json2.php?pageSize=' + _this.essaysPageSize + '&offset=' + _this.essaysOffset + '&date=' + _this.sideContents[_this.dateSelected].time;

				_this.$http.get(url).then(function(result) {
					if (result.body.data.length > 0) {
						_this.essays = _this.essays.concat(result.body.data);
					}
					if(callback instanceof Function) setTimeout(function() {callback(result.body.data);}, 100);
				}, function(response) {
					console.info(response);
				});
			},

			fnGetMoreEssays: function() {
				let _this = this;

				_this.essaysOffset += 1;
				_this.ajaxGetList(function(result) {
					if (result.length <= 0) {
						_this.essaysLoading = 3;
					} else {
						_this.essaysLoading = 2;
					}
				});
			}
		}
	};
</script>

<style lang="scss" scoped>
	.content{
		width: 960px;
		margin: 70px auto;
	}
</style>
