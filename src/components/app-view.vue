<template>

  <el-container class="app-container" :class="{
    'mini-side': isCollapse,
    'hide-side': hideSide
  }">
    <el-aside class="app-side" :width="hideSide ? '0' : sideWidth + 'px'" style="background: #338ace;">
      <div class="app-header-logo-box" :style="{height: headerHeight + 'px', color: theme.theme.activeTextColor}">
        <span class="header-logo-text">后台管理系统</span>
      </div>
      
      <div class="app-header-logo-box1">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568007741567&di=55831571741eec609a87b187247faa49&imgtype=0&src=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_jpg%2FTndVpgCBYY9GowUXJJAHwsflqACetrsDMBAynj0Bu2tRtzWP2uica3BFaicFCI7CevJCiaMYUDNeSeBicjt3ZdArOA%2F0%3Fwx_fmt%3Djpeg" class="logo-box" alt="logi">
        <el-dropdown>
        <span class="el-dropdown-link">
          13735643810<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>修改密码</el-dropdown-item>
          <el-dropdown-item @click.native="ExitBtn">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      </div>
      <app-side :collapse="isCollapse" :theme="theme.theme" class="aside-bg"></app-side>
    </el-aside>
    <el-container class='mainBox' style="overflow-x: auto">
      <el-header class="app-header" :height="headerHeight + 'px'">
        <app-header @switch="handleSideSwitch" @set-theme="handleSetTheme" @hide-side="handleSwitchHideSide"></app-header>
      </el-header>
      <el-main class="app-body">
        <el-container style="" id="appBody">
          <el-main class="app-page-body">
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-main>
    </el-container>
    <m-back-top body-id="appBody"></m-back-top>
  </el-container>

</template>
<script type="text/javascript">
import AppHeader from '@/components/app-header'
import AppSide from '@/components/app-side'
import axios from 'axios'
export default {
  name: 'app-view',
  data () {
    return {
      isCollapse: false,
      hideSide: false,
      sideWidth: 210,
      headerHeight: 50,
      theme: { theme: {} }
    }
  },
  components: {
    AppHeader,
    AppSide
  },
  methods: {
    handleSideSwitch (val) {
      this.isCollapse = val
      this.sideWidth = val ? 60 : 210
    },
    ExitBtn: function () {
      console.log(1111111111)
      axios.get('hxy/user/quit.do').then(res => {
        console.log(res)
        this.$router.push({name: 'login'})
      }).catch(function (err) {

      })
    },
    handleSwitchHideSide () {
      this.hideSide = !this.hideSide
    },
    handleSetTheme (theme) {
      this.theme = theme
    }
  }
}
</script>
<style type="text/css">
.app-container {
  margin: 0 auto;
  position: absolute;
  width: 100%;
  height: 100%;
}
.app-container .app-header {
  padding: 0;
  background: linear-gradient(to right, #18add9, #6c42b7);
  overflow: visible;
  z-index: 100;
}
.m-navbar.info{
  background-color: transparent!important;
}
.app-container .app-side {
  width: 200px;
  transition: all 0.5s ease;
}
.app-container .app-footer {
  background: #fff;
  border-top: solid 1px rgba(48, 54, 62, 0.14);
}
.app-container .app-page-body {
  overflow: auto;
  padding: 0px;
  width:100%;
}
.app-header-logo-box {
  padding: 15px;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  background-color: #15afd9;
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
}
/*logo*/
.app-header-logo-box1 {
  background-color: #338ace;
  color: #fff;
  padding: 15px;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #fff;
  text-align: center;
  font-size: 12px;
  border-bottom: 1px solid #fff;
}
.logo-box{
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  vertical-align: middle;
}
.header-logo-text1{
  margin-bottom: 10px!important;
}
.aside-bg{
  background-color: #338ace;
  color: #fff !important;
}
.el-menu{
  background-color: transparent;
}
.el-menu-item-group>ul{
  background-color: #163376;
}
.el-submenu:hover{
  background-color: #286ea5!important;
}
.el-submenu:hover .el-submenu__title{
  background-color: #286ea5!important;
}
element.style {
  color: #fff!important;
}
.el-menu-item:hover{
  background-color: #5c8dff;
}
.app-side *{
  color: #ffffff!important;
}
#appBody{
  width: 100%;
  height: 100%;
}
.el-dropdown{
  margin: 0 15px;
}
/* mini-side
.app-container.mini-side .app-side {
  overflow: visible;
}
.app-container.mini-side .app-side .el-menu--collapse {
  width: 60px;
}
.app-container.mini-side .header-logo {
  margin-left: -10px;
}
.app-container.mini-side .header-logo-text {
  opacity: 0;
}
hide-side
.app-container.hide-side .app-side {
  display: none;
} */
</style>
