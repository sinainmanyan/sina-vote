<template>
	<div class="home">
		<div class="second">
			<router-view></router-view>
		</div>
		<Footer class="foot"></Footer>
	</div>
</template>

<script>
import Footer from './layout/footer';
export default {
	components: {
		Footer,
	},
};
</script>

<style>
.home {
	width: 100%;
	height: 100%;
	flex-direction: column;
	display: flex;
}
.second {
	flex: 1;
}
.foot {
	width: 100%;
	/* height: 2rem; */
}
</style>
