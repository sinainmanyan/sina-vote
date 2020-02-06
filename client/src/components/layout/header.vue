<template>
  <div class="header">
    <van-nav-bar :title="title" />
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: {
      type: String,
      default: "我是标题"
    }
  },
  methods: {
    onClickLeft() {}
  }
};
</script>

<style>
</style>