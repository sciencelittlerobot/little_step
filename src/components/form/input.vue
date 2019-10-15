<template>
	<div class="input-box">
		<label v-show="setLabel !== '' && setLabel !== undefined">{{setLabel}}：</label>
		<input class="form-input" :class="addClass" type="text" :placeholder="title" autocomplete="off" :value="value" @input="fnCallback($event)" />
	</div>
</template>

<script>
	export default {
		name: 'Input',
		props: ['title', 'addClass', 'setLabel', 'value', 'callback'],
		data() {
			return {
				msg: '1111'
			};
		},
		methods: {
			fnCallback: function(e) {
				let _this = this;

				_this.$emit('callback', e.target.value);
			}
		}
	};
</script>

<style lang="scss" scoped>
	.input-box{
		width: 100%;
		margin-bottom: 20px;

		label{
			font-size: 16px;
		}

		.form-input{
			width: 66.66%;
			height: 42px;
			line-height: 42px;
			padding-left: 5px;
			border: 1px solid #dddddd;
			border-radius: 5px;
			font-size: 16px;

			&::-webkit-input-placeholder{
			    color: #c3c3c3;
			}

			&:-moz-placeholder{
			    color: #c3c3c3;
			}

			&:-ms-input-placeholder{
			    color: #c3c3c3;
			}

			&.input-small{
				width: 33.33%;
			}

			&.input-large{
				width: 100%;
			}

			&.input-h-small{
				height: 32px;
				line-height: 32px;
			}

			&.input-blue{
				border: 1px solid #63c0ff;
			}

			&.input-red{
				border: 1px solid #da8383;
			}

			&:focus{
				border: 1px solid #89bee2;
			}
		}
	}
</style>
