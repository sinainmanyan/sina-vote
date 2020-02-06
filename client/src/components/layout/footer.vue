<template>
	<div class="footer">
		<van-tabbar v-model="active">
			<van-tabbar-item name="home" to="/home/index" icon="home-o">主页</van-tabbar-item>
			<van-tabbar-item name="devide" to="/home/devide" icon="home-o">分类</van-tabbar-item>
			<van-tabbar-item name="vote" to="/home/vote" icon="home-o">投票</van-tabbar-item>
			<van-tabbar-item name="setting" to="/home/my" icon="setting-o">我的</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
export default {
	name: 'Footer',
	data() {
		return {
			active: 'home',
		};
	},
};
</script>

<style></style>
