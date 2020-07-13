<template>
	<div class="textgit">
		<div class="git-header">
			<div class="git-header-left">
				<router-link to="/shop/lx" tag="div" class="git-header-left">
					<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAwCAYAAAAGlsrkAAADgUlEQVRYR8XY+6ulUxzH8dcYYsglGteI/OASpsYPrkXKdRq5TogIM5Mf5D8RPx23URTygzCuTcYouSU1Ipo0buMSEWJCGPpMa9eeZ9az97P3efbxrdM5nf3s9V7ftb6Xz/dZ5H+yRQvEPQCnIb8/wdaFAAe2GidjL/yMuVmC98BRuAtHNk723VmB98T5uAIHV65z8yzA8fQ6XIAlaDL+nMVRH4JbcHpL0G7H09jQp8cnFU+PR7xu2md4Bu9hRx/grJH7vAYHVY72X7yPx/D1YDfzBe+NFViJ/N20vwr0Afw2/OF8wEfgSpxR8rMJ/REv4hVkA7vYtOATcROOrRxtACkS9+ND/FMLtEnBixHoHS35Gcg23IPvR5XjScAH4kJchn1a7vNVrMdP43pAV/C+uL3kZ+pt0/7G43gNf4yD5vNx4Hx+GO7EcZUFkyo/4OESvV2YO58ZBc59noOrcGjLigmeJ/EpsonO1gbO/5MqlyLH3HwuQbSxlL9fOtOGHqyBU31uxNktC/6O58vPbvnZdRNNcOrs9TgBOeqmfVXq7Ttt+TkN+CzcUPKzuaHc38d4FF92XXxcHqdpX4yrW/IzqfIR7isVqQ/uzqBJUYintSKfQrABLyMNvDcL+F4srayYbpKushnxulcL+G4cXlk10ZvCkECaCfhc3Iz9KvBIlU14Dr/26XI8TtpEmK1qgcfbLXhwXMeZZGPDaROlv7ZFvmTNrXiopNNE5bG2oWa+RoBHmi5D0qxpaQhpe6/PN8prJTN9N40haVaztL2kWBRjpxbYxePhZy4pRaXWJPLcG6WSTRV0o9pitPFyXIujW7xPO3yilNMd0wZX24lECNyKUyoPJMiiJgN/q0/wYK2U09tGSNls4Cm80DXoxkmfYSdy15kYLi8DdtPB5PvbZQPfjfN+EnDWSrFJr47wq5XZKJP07Gjqz0fBJwUP1orwy5R/TMuAllI7VwRgL4J+2IkM3Dn281paarRYxpeMMWk4u9i0Hg8H3UVl8s8Q3rRosg+wriny5wsegCKb0uH2bxlTI5vSYr8ZfKEvcNbLABclkwG9JhS/xbN4M/29T3DgeRWRJpNBoGYJukjjl/oGD2ARjhnYU3hqw8C6WYFz1GeWJlPL922zAsfzwQu2NcigMGxfzBI8AEXLBR6FkxE3Of3IQoCzgcBPLcGX105bFgq8W4T/B/tloBIPNqWNAAAAAElFTkSuQmCC" />
				</router-link>
			</div>
			<p>题库选择</p>
		</div>
		<div class="git-secher">
			<input type="text" name="" id="" value="请输入题库名称关键词" /> 
      
		</div>
		<div class="git-concent">
			<div class="con-left">
				<div class="left-list">
					<router-link tag="div" to="/kd/qd" class="left-list">
						求导题库
					</router-link>
				</div>
				<div class="left-list">
					<router-link tag="div" to="/kd/jx" class="left-list">
						极限题库
					</router-link>
				</div>
				<div class="left-list">
					<router-link tag="div" to="/kd/sw" class="left-list">
						生物
					</router-link>
				</div>
				<div class="left-list">
					<router-link tag="div" to="/kd/hx" class="left-list">
						化学
					</router-link>
				</div>
				<div class="left-list">
					<router-link tag="div" to="/kd/sx" class="left-list">
						数学
					</router-link>
				</div>
				<div class="left-list">
					<router-link tag="div" to="/kd/wl" class="left-list">
						物理
					</router-link>
				</div>
				<div class="left-list">
					<router-link tag="div" to="/kd/english" class="left-list">
						英语
					</router-link>
				</div>
			</div>
			<div class="con-right">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "TextGit"
	}
</script>

<style scoped>
.textgit{
  background-color: white;
}
	.git-header {
		align-items: center;
		width: 100%;
		height: 11.73333vw;
		position: fixed;
		z-index: 999;
		width: 100%;
		background: #fff;
		position: relative;
	}
	
	.git-header>p {
		font-size: 4.8vw;
		color: #595959;
		position: absolute;
		left: 42%;
		top: 32%;
		line-height: 6.7333vw;
		text-overflow: ellipsis;
		max-width: 66.66667vw;
	}
	
	.git-header-left {
		float: left;
		width: 10.66667vw;
		height: 11.73333vw;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.git-header-left>img {
		height: 4.26667vw;
		align-items: center;
	}
	
	.git-secher {
		width: 92%;
		background: rgb(255, 255, 255);
		margin-bottom: 4vw;
		padding: 0 4vw;
	}
	
	.git-secher>input {
		width: 100%;
		height: 12.54vw;
		background: #f0f2f5;
		font-size: 3.2vw;
		text-align: left;
		border: none;
		border-radius: 50px 50px 50px 50px;
		text-align: left;
		color: #b7b7b7;
		border: 0;
		padding-left: 30px;
	}
	
	.git-concent {
		min-height: 100%;
		border-top: 1px solid #eaeaea;
		display: flex;
		flex-grow: 1;
	}
	
	.con-left {
		background: #fafafa;
		margin-right: 5.33333vw;
		width: 28vw;
	}
	
	.left-list {
		text-align: center;
		width: 25vw;
		font-size: 4vw;
		color: #595959;
		box-sizing: border-box;
		padding: 3.8vw 2.13333vw;
	}
</style>