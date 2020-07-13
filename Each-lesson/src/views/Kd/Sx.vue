<template>
	<div class="rig-con">
		<p>初中数学</p>
		<div class="tong">
			<div class="gz">
			二次根式
		</div>
		<div class="gz">
			数学一模测试
		</div>
		</div>
		
		<p>小学数学</p>
		<div class="gz">
			小学升初数学
		</div>
		<p>高中数学</p>
	</div>
</template>

<script>
	export default {
		name: "Mathematics"
	}
</script>

<style scoped>
	.rig-con>p {
		font-size: 3.2vw;
		color: #595959;
		margin-bottom: 4vw;
		margin-top: 8vw;
		font-weight: 400;
	}
	
	.gz {
		align-items: center;
		justify-content: center;
		font-size: 3.46667vw;
		margin-bottom: 2.66667vw;
		border-radius: .53333vw;
		padding: 2.13333vw 3.2vw;
		width: 30.93333vw;
		margin-right: 2vw;
		text-align: center;
		box-sizing: border-box;
		background: #f5f5f5;
	}
	.tong{
		display: flex;
		justify-content: space-around;
	}
</style>