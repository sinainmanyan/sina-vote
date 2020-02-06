import Vue from 'vue'
import VueRouter from 'vue-router'
//一级路由
import Home from "../components/Home"
import Devotelist from "../components/Devotelist"
import CeeateDevote from "../components/CeeateDevote"
import Login from "../components/Login"
import Registery from "../components/Registery"
import Unforget from "../components/Unforget"
import Unlogin from "../components/Unlogin"
//二级路由 home下的子路由
import Index from "../components/homechild/index.vue"
import My from "../components/homechild/my.vue"
import Devide from "../components/homechild/devide.vue"
import Vote from "../components/homechild/vote.vue"
//找不到页面404
import Notfound from "../components/error/404.vue"
Vue.use(VueRouter)

const routes = [
  //主页
  {
    path: "/home",
    component: Home,
    children: [
      {
        //首页
        path: "/home/index",
        component: Index
      },
      {
        //分类页面
        path: "/home/devide",
        component: Devide
      },
      {
        //投票页面
        path: "/home/vote",
        component: Vote
      },
      {
        //我的页面
        path: "/home/my",
        component: My
      },
      {
        path: "/home",
        redirect: "/home/index"
      }
    ]
  },
  //创建投票列表
  {
    path: "/devotelist",
    component: Devotelist
  },
  //创建投票
  {
    path: "/ceeateDevote",
    component: CeeateDevote
  },
  //登录
  {
    path: "/login",
    component: Login
  },
  //注册
  {
    path: "/registery",
    component: Registery
  },
  {
    //忘记密码
    path: "/unforget",
    component: Unforget
  },
  {
    //未登录页面
    path: "/unlogin",
    component: Unlogin
  },
  {
    //重定向
    path: "/",
    redirect: "/home"
  },
  {
    //找不到页面
    path: "*",
    component: Notfound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
