<template>
	<div class="wrapper">
		<div class="content">
			<div class="user" @click="toLogin">
				<el-avatar :size="50" :src="circleUrl"></el-avatar>
				<div class="right">
					<span class="span1">登录/注册</span>
					<span class="span2">未登录状态</span>
					<span class="span3">&gt;</span>
				</div>
			</div>
			<div class="main">
				<div class="join">
					<van-cell center title="我参与的投票" icon="star-o"></van-cell>
				</div>
				<div class="create">
					<van-cell center title="我创建投票" icon="thumb-circle-o"></van-cell>
				</div>
				<div class="createvote">
					<router-link to="/addvote"><van-icon class="icon" name="plus"/></router-link>
					<div class="text">创建投票</div>
				</div>
			</div>
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
import Footer from '../layout/footer';
import { getSession } from '../../utils/index.js';
export default {
	data() {
		return {
			circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
			isLogin: false,
		};
	},
	mounted() {
		const token = getSession('authorization');
		console.log(token);
	},
	components: {
		Footer,
	},
	methods: {
		toLogin() {
			this.$router.push('/login');
		},
	},
};
</script>

<style lang="scss">
.content {
	background: rgb(245, 243, 243);
}
.user {
	width: 100%;
	height: 0.5rem;
	background: #fff;
	margin-top: 20px;
	padding: 20px;
	.right {
		display: inline-block;
		width: 75%;
		height: 100%;
		position: relative;
		top: -20px;
		padding: 10px;
		position: relative;
		.span1 {
			font-size: 20px;
			font-weight: bold;
		}
		.span2 {
			margin-left: 10px;
		}
		.span3 {
			position: absolute;
			right: 0;
		}
	}
}
.main {
	width: 100%;
	// height: 4.87rem;
	margin-top: 20px;
	background: #fff;
}
.join {
	border-bottom: 1px solid rgb(226, 225, 225);
}
.join,
.create {
	width: 100%;
	height: 50px;
}
.createvote {
	width: 100%;
	height: 250px;
	text-align: center;
	color: #1989fa;
	a {
		color: #1989fa;
	}
	.icon {
		margin-top: 50px;
		font-size: 100px;
	}
	.text {
		width: initial;
	}
}
</style>
