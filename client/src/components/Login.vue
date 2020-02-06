<template>
	<div class="login">
		<h1 class="text-center mt25">新浪投票登陆</h1>
		<van-image round width="1rem" height="1rem" src="http://localhost:8080/img/1.jpg" />
		<van-cell-group>
			<van-field v-model="phone" placeholder="邮箱/手机号" />
			<div v-if="flag">
				<van-field
					v-model="password"
					type="password"
					placeholder="密码"
					right-icon="closed-eye"
					@click="flagFn"
				/>
			</div>
			<div v-else>
				<van-field v-model="password" placeholder="密码" right-icon="eye-o" @click="flagFn" />
			</div>
		</van-cell-group>
		<div class="mt25">
			<div class="pl15 pr15 mt15">
				<van-button class="pl10 pr10" type="primary" color="#3366ff" block @click="loginForm">登录</van-button>
			</div>
			<div class="pl15 pr15 mt15">
				<span class="float-right">
					<router-link to="/registery">注册账号</router-link>
				</span>
				<span class="float-left">
					<router-link to="/unforget">忘记密码</router-link>
				</span>
			</div>
		</div>
	</div>
</template>

<script>
import { login } from '../api/index.js';
export default {
	data() {
		return {
			phone: '18701553442',
			password: '1233abc',
			flag: true,
		};
	},
	methods: {
		flagFn() {
			console.log(1111);
			this.flag = !this.flag;
		},
		async loginForm() {
			const result = await login({
				phone: this.phone,
				password: this.password,
			});
			const that = this;
			console.log(result);
			if (result.status == 200) {
				this.$notify({ type: 'success', message: result.data.msg });
				localStorage.setItem('phone', this.phone);
				localStorage.setItem('password', this.password);
				this.$router.push('/home');
			}
			// if (result.data.code == 1) {
			// 	this.$toast({
			// 		forbidClick: true,
			// 		message: '登陆成功',
			// 		onClose() {
			// 			console.log(that.$router);
			// 			that.$router.replace('/home');
			// 		},
			// 	});
			// } else {
			// 	this.$toast({
			// 		forbidClick: true,
			// 		message: '登陆失败！',
			// 		onClose() {
			// 			console.log('');
			// 		},
			// 	});
			// }
		},
	},
};
</script>

<style lang="scss" scoped>
.login {
	text-align: center;
}
.van-image__img {
	margin: 0 auto;
	width: 2rem;
	height: 2rem;
}
</style>
