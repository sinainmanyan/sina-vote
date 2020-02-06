<template>
  <div class="wrapper">
    <van-nav-bar title="创建单选投票" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="content">
      <div class="form">
        <van-cell-group>
          <van-field v-model="title" size="large" placeholder="投票标题" />
          <van-field v-model="info" placeholder="补充描述(选填)" />
          <van-field
            v-for="(item,index) in options"
            :key="index"
            v-model="item.value"
            left-icon="clear"
            placeholder="选项"
          />
          <van-field left-icon="add" label="添加选项" @click="addOptions" />
        </van-cell-group>
      </div>
      <div class="bot">
        <van-cell center @click="showPopup" title="截止日期">
          <span>{{endtime}}</span>
        </van-cell>
        <van-cell center title="匿名投票">
          <van-switch v-model="checked" slot="right-icon" size="24" />
        </van-cell>
      </div>
      <div class="mt30 pl10 pr10">
        <van-button type="info" size="large" @click="addVote">完成</van-button>
      </div>
      <van-popup
        v-model="show"
        position="bottom"
        :style="{ height: '50%' }"
      >
          <van-datetime-picker
            v-model="currentDate"
            type="datetime"
            :min-date="minDate"
            :max-date="maxDate"
            @cancel='onCancel'
            @confirm='onConfirm'
          />
      </van-popup>
    </div>
  </div>
</template>

<script>
import '@/utils/index.js'
import {createVote} from '@/api/vote.js'
import Vue from 'vue'
import { Toast } from 'vant';
Vue.use(Toast);
export default {
  data() {
    return {
      title: '随手扔硬币',
      info: '无聊ing',
      select: null,
      endtime: null,
      checked:false,
      show:false,
      options: [
        {
          name: "opt1",
          value: null
        }
      ],
      minDate: new Date(2020, 1, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date()
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    addOptions() {
      this.options.push({ name: "opt" + this.options.length + 1, value: null });
    },
    showPopup() {
      this.show = true;
    },
    onCancel(){
      this.show = false
    },
    onConfirm(value){
      this.endtime = this.timerFormate(value);
      this.show = false;
    },
    timerFormate(datatime) {
      return datatime.format("yyyy-MM-dd hh:mm:ss");
    },
    addVote(){
      const options = this.options.map(item=>{
        return item.value;
      })
      const params = {
        title:this.title,
        select:JSON.stringify(options),
        endtime:this.endtime,
        info:this.info
      }
      if(params.title && params.select && params.endtime){
        createVote(params).then(res=>{
          if(res.status == 200 && res.data.code == 1){
            Toast('创建成功');
            this.$router.replace('/home')
          }
        })
      }else{
        Toast('请填写完整参数');
        return;
      }
    }
  }
};
</script>

<style>
.content {
  background: rgb(245, 243, 243);
}
.form {
  width: 100%;
  background: #fff;
}
.bot{
  margin-top: 25px;
  background: #fff;
  width: 100%;
  height: 100px;
}
</style>