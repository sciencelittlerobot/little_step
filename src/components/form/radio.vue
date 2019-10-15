<template>
	<div class="radio-box clearfix">
		<div class="form-radio">
			<input type="radio" value="1" name="type" checked="true" />
			<label>生活</label>
		</div>
		<div class="form-radio">
			<input type="radio" value="2" name="type" />
			<label>工作</label>
		</div>
		<div class="form-radio">
			<input type="radio" value="3" name="type" />
			<label>学习</label>
		</div>
		<div class="form-radio">
			<input type="radio" value="4" name="type" />
			<label>其它</label>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Radio',
		data() {
			return {
				msg: '1111'
			};
		}
	};
</script>

<style lang="scss" scoped>
	.radio-box{
		width: 100%;
		margin-bottom: 20px;

		.form-radio{
			height: 26px;
			line-height: 26px;
			margin-right: 20px;
			float: left;
			font-size: 16px;
			color: #7b7b7b;
			font-weight: bold;
			position: relative;

			input{
				width: 68px;
				height: 26px;
				position: absolute;
				z-index: 2;
				top: 2px;
				left: 5px;
				opacity: 0;
			}

			label{
				margin-left:5px;
				vertical-align: middle;
				height: 26px;
				line-height: 26px;
				display: inline-block;
			}

			input:checked + label::before{
				border: 1px solid #59a6ff;
				float: left;
				margin-right: 10px;
			}

			input:checked + label::after{
				display: block;
			}

			input + label{
				position: relative;
				cursor: pointer;
				vertical-align: middle;
			}

			input + label::before{
				border-radius: 50%;
				position: relative;
				top: 0;
				left: 0;
				display: inline-block;
				width: 26px;
				height: 26px;
				content: '';
				border: 1px solid #c0c0c0;
				float: left;
				margin-right: 10px;
			}

			input + label::before{
				border-radius: 50%;
				position: relative;
				top: 0;
				left: 0;
				display: inline-block;
				width: 26px;
				height: 26px;
				content: '';
				border: 1px solid #c0c0c0;
			}

			input + label::after{
				content: "";
				display: none;
				position: absolute;
				top: 7px;
				left: 7px;
				width: 12px;
				height: 12px;
				border-radius: 50%;
				background: #59a6ff;
			}
		}
	}
</style>
