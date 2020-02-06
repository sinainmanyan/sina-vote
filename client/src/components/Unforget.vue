<template>
  <div>
    <van-tabs v-model="active">
      <van-tab title="手机找回">
        <van-cell-group>
          <van-field v-model="phone" placeholder="请输入手机号" />
          <van-field v-model="verifyCode" center clearable placeholder="请输入短信验证码">
            <van-button slot="button" size="small" type="info" @click="sendVeifyCode">发送验证码</van-button>
          </van-field>
          <van-field v-model="password" type="password" placeholder="请输入新密码" />
        </van-cell-group>
        <div class="pl15 pr15 mt15">
          <van-button type="info" block @click="modifyByCellphone">确定</van-button>
        </div>
      </van-tab>
      <van-tab title="邮箱找回"></van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { getVerifyCode, modifyPassword } from "../api/user.js";

export default {
  name: "Forget",
  data() {
    return {
      phone: "13031061118",
      verifyCode: null,
      password: null,
      active: 0
    };
  },
  methods: {
    async sendVeifyCode() {
      if (this.phone == null || this.phone == "") return;
      const result = await getVerifyCode({ phone: this.phone });
      this.verifyCode = result.data.msg;
    },
    async modifyByCellphone() {
      if (this.phone == "" || this.verifyCode == null) return;
      const result = await modifyPassword({
        phone: this.phone,
        password: this.password,
        vCode: this.verifyCode
      });
      const that = this;
      if (result.status == 200 && result.data.code == 1) {
        this.$toast({
          message: "修改成功！",
          onClose() {
            that.$router.replace("/user/login");
          }
        });
      }
    }
  }
};
</script>

<style>
</style>
