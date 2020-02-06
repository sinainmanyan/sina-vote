<template>
	<div class="wrapper">
		<van-nav-bar title="注册" left-text="返回" left-arrow @click-left="onClickLeft" />
		<div class="registry">
			<van-cell-group>
				<van-field v-model="phone" placeholder="手机号/邮箱" />
				<van-field v-model="username" placeholder="用户名" />
				<van-field v-model="password" type="password" placeholder="密码" />
			</van-cell-group>
			<van-button class="btn" type="info" block @click="registrybtn">注册</van-button>
		</div>
	</div>
</template>

<script>
import request from '../utils/request.js';
import { registry } from '../api/index.js';
export default {
	data() {
		return {
			phone: '',
			username: '',
			password: '',
		};
	},
	methods: {
		onClickLeft() {
			this.$router.go(-1);
		},
		async registrybtn() {
			if (this.phone && this.username && this.password) {
				console.log(1111);
				console.log(this.username, this.password, this.phone);

				request
					.post('/user/registry', { username: this.username, password: this.password, phone: this.phone })
					.then(({ data }) => {
						console.log(data);
						this.$notify({ type: 'success', message: '注册成功' });
						/*
            data: {code: 1, msg: "注册成功", statusMsg: "服务器成功返回请求的数据。", status: 200}
            status: 200
            statusText: "OK"
            */
						this.phone = '';
						this.username = '';
						this.password = '';
						this.$router.push({
							path: '/login',
							query: {
								username:this.username,
								password:this.password,
							},
						});
						console.log(data);
					})
					.catch(err => {
						console.log(err);
						this.$notify({ type: 'warning', message: err.msg });
						this.phone = null;
						this.username = null;
						this.password = null;
					});
			} else {
				this.$notify({ type: 'warning', message: '缺少参数' });
			}
			// this.$router.push('/login');
		},
	},
};
</script>

<style lang="scss">
.registry {
	width: 95%;
	margin-left: 10px;
	margin-top: 0.4rem;
}
</style>
