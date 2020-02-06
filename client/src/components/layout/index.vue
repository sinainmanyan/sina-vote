<!--
 * @Author: your name
 * @Date: 2020-02-06 12:42:54
 * @LastEditTime : 2020-02-06 18:32:40
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit.
 * @FilePath: \sina\sina-project\src\components\layout\index.vue
 -->
<template>
	<div class="wraper">
		<Header v-if="visible" :title="title"></Header>
		<div class="content bg-light-gray">
			<slot></slot>
		</div>
		<Footer v-if="visible"></Footer>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import Footer from './footer';
import Header from './header';
export default {
	name: 'Layout',
	//写法一：
	// computed: {
	//   visible() {
	//     return this.$store.state.app.visible;
	//   }
	// },
	//写法二：
	// computed: {
	//   ...mapState({
	//     visible: state => state.app.visible
	//   })
	// },
	//写法三：
	computed: mapState({
		visible: state => state.app.visible,
		title: state => state.app.title,
	}),
	components: {
		Footer,
		Header,
	},
};
</script>

<style></style>
