<template>
  <m-navbar :theme="theme.theme.headerTheme">
    <div>
      <i class="side-switch iconfont icon-jilu" @click="handleSwitchSide"></i>
      <el-breadcrumb separator-class="el-icon-arrow-right" class="nav">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-for="item in routerList" :key='item.name' :to='item.path'>
          {{item.name}}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>

  </m-navbar>
</template>
<script type="text/javascript">
import { mapActions, mapState } from 'vuex'
import { requestFullScreen, exitFullscreen } from '@/utils'

import themes from './theme'
export default {
  name: 'app-header',
  props: ['currentPath'],
  data() {
    return {
      mini: false,
      isFullScreen: false,
      themes,
      themeType: '',
      showAside: true,
      theme: { theme: { headerTheme: 'info' } },
	    routerList:[]
    }
  },
  //监听路由
  watch:{
	$route(){
		this.getBreadcrumb()
	}
  },
  computed: {
    ...mapState({
      user: ({ user }) => user.user
    })
  },
  methods: {
    ...mapActions(['getLoginUser', 'logout']),
    handleSwitchSide() {
      this.mini = !this.mini
      this.$emit('switch', this.mini)
    },
	//获取路由
	getBreadcrumb:function(){
		let matched = this.$route.matched.filter(item => item.name)
		const first = matched[1];
		if(first){
			matched = [{path:'/',meta: { title: 'home'}}].concat(matched)
		}
		this.routerList = matched
    console.log(this.routerList)
	}
  },
  created() {
    this.getLoginUser()
    var theme = localStorage.getItem('theme') || 'default'
    this.themeType = theme
  }
}
</script>
<style type="text/css">
.side-switch {
  display: inline-block;
  font-size: 20px;
  cursor: pointer;
  color: white;
  height: 50px;
  line-height: 50px;
  margin-left: 10px;
}
.side-switch:hover {
  color: #fff;
}
.flex {
  display: flex !important;
  display: -webkit-flex !important;
  align-items: center;
}
.el-breadcrumb .el-breadcrumb__inner {
  font-size: 12px;
  color: #ffffff !important;
}
.nav{
  display: inline-block;

}
</style>
