<template>
<<<<<<< HEAD
  <m-navbar :theme="theme.theme.headerTheme">
    <m-navbar-brand class="flex">
      <i class="side-switch iconfont icon-jilu" @click="handleSwitchSide"></i>
      <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb  v-for="list in currentPath">
        
      </el-breadcrumb>
      <!-- <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
    </el-breadcrumb>
    </m-navbar-brand>
    
  </m-navbar>
=======
  <div :theme="theme.theme.headerTheme">
    <div>
      <i class="side-switch iconfont icon-jilu" @click="handleSwitchSide"></i>
    </div>
  </div>
>>>>>>> ecda92b4d6e1471713fe53cf94d61a907ca45f12
</template>
<script type="text/javascript">
import { mapActions, mapState } from 'vuex'
import { requestFullScreen, exitFullscreen } from '@/utils'

import themes from './theme'
export default {
  name: 'app-header',
  props:['currentPath'],
  data () {
    return {
      mini: false,
      isFullScreen: false,
      themes,
      themeType: '',
      showAside: true,
      theme: { theme: { headerTheme: 'info' } }
    }
  },
  computed: {
    ...mapState({
      user: ({ user }) => user.user
    })
  },
  watch: {
    // themeType (val) {
    //   this.theme = this.themes.find(e => e.name === val) || {}
    //   this.$emit('set-theme', this.theme)
    //   localStorage.setItem('theme', val)
    // }
  },
  methods: {
    ...mapActions(['getLoginUser', 'logout']),
    handleSwitchSide () {
      this.mini = !this.mini
      this.$emit('switch', this.mini)
    },
    // handleSwitchScreen () {
    //   if (this.isFullScreen) {
    //     exitFullscreen()
    //     this.isFullScreen = false
    //   } else {
    //     requestFullScreen()
    //     this.isFullScreen = true
    //   }
    // },
    // handleSwitchHideSide () {
    //   console.log('change')
    //   this.$emit('hide-side')
    // }
  },
  created () {
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
}
.side-switch:hover {
  color: #fff;
}
.flex{
  display: flex!important;
  display: -webkit-flex!important;
  align-items: center;
}
.el-breadcrumb .el-breadcrumb__inner{
  font-size: 12px;
  color: #ffffff!important;
}
</style>
