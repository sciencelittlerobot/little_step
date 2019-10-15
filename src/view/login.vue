<template>
	<div id="login">
		<cmp-input setLabel="账 号" title="账号在这里输入..." addClass="input-h-small" :value="nickname" @callback="syncNickname"></cmp-input>
		<cmp-input setLabel="密 码" title="密码在这里输入..." addClass="input-h-small" :value="password" @callback="syncPassword"></cmp-input>
		<div class="form-button">
			<button class="btn" @click="ajaxLogin">登&nbsp;&nbsp;录</button>
			<button class="btn">注&nbsp;&nbsp;册</button>
		</div>
		<p class="tip"><a @click="goAhead('index')">忘记密码？</a></p>
		<cmp-layer :setting="layerSetting" @callback="fnLayer"></cmp-layer>
	</div>
</template>

<script>
	import Input from '../components/form/input.vue';
	import Layer from '../components/form/layer.vue';

	export default {
		name: 'Login',
		components: {
			cmpInput: Input,
			cmpLayer: Layer
		},
		data() {
			return {
				ajaxUrl: 'http://192.168.1.31:10088/',
				nickname: '',
				password: '',
				layerSetting: {
					'icon': '',
					'timer': 2000,
					'closeBtn': false,
					'content': '',
					'status': false
				}
			};
		},
		methods: {
			ajaxLogin: function() {
				let _this = this;

				let url = _this.ajaxUrl + 'index.php/api/user/login/nickname/' + _this.nickname + '/password/' + _this.password;

				_this.$http.get(url).then(function(result) {
					let res = result.body;

                    if(res.code === 200) {
                    	_this.fnLayer({'icon': 'success', 'content': res.msg, 'status': true});
                    } else {
                    	_this.fnLayer({'icon': 'error', 'content': res.msg, 'status': true});
                    }
                }, function(response) {
                	console.info(response);
                });
			},

			syncNickname: function(nickname) {
				this.nickname = nickname;
			},

			syncPassword: function(password) {
				this.password = password;
			},

			fnLayer: function(param) {
				this.layerSetting = this.mergeJsonObject(this.layerSetting, param);
			}
		}
	};
</script>

<style lang="scss" scoped>
	#login{
		width: 400px;
		margin: 200px auto 0;
	    border: 1px solid #dddddd;
	    padding: 50px 20px 10px;
	    border-radius: 5px;
	    color: #777777;

	    .form-button{
	    	margin-bottom: 20px;
	    }

		.btn{
			padding: 5px 35px;
			background-color: #ffffff;
			border: 1px solid #dddddd;
			margin-right: 15px;
			border-radius: 4px;
			font-size: 15px;
		}

		.tip{
			text-align: right;

			a{
				cursor: pointer;

				&:hover{
					text-decoration: underline;
				}
			}
		}
	}
</style>
